import { NextRequest, NextResponse } from "next/server";

import { routeAIGeneration } from "@/lib/aiRouter";
import {
  formatChordProgression,
  suggestChordProgression,
} from "@/lib/musicTheory";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

interface SongPackageBody {
  prompt?: unknown;
  genre?: unknown;
  language?: unknown;
  mood?: unknown;
  duration?: unknown;
  key?: unknown;
  tempo?: unknown;
  singer?: unknown;
  instrumental?: unknown;
  provider?: unknown;
  temperature?: unknown;
  maxTokens?: unknown;
}

function text(value: unknown, fallback = ""): string {
  return typeof value === "string" && value.trim()
    ? value.trim()
    : fallback;
}

function number(value: unknown, fallback: number): number {
  return typeof value === "number" && Number.isFinite(value)
    ? value
    : fallback;
}

function boolean(value: unknown, fallback: boolean): boolean {
  return typeof value === "boolean" ? value : fallback;
}

function parseJson(value: string): Record<string, unknown> | null {
  const candidates = [value.trim()];
  const fenced = value.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (fenced?.[1]) candidates.push(fenced[1].trim());

  const start = value.indexOf("{");
  const end = value.lastIndexOf("}");
  if (start >= 0 && end > start) {
    candidates.push(value.slice(start, end + 1));
  }

  for (const candidate of candidates) {
    try {
      const parsed: unknown = JSON.parse(candidate);
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      // Try the next JSON representation.
    }
  }

  return null;
}

function stringArray(value: unknown): string[] {
  return Array.isArray(value)
    ? value.filter((item): item is string => typeof item === "string" && item.trim())
    : [];
}

function isProvider(value: string): value is "openai" | "anthropic" | "gemini" | "huggingface" {
  return value === "openai" || value === "anthropic" || value === "gemini" || value === "huggingface";
}

export async function POST(request: NextRequest) {
  try {
    let body: SongPackageBody;

    try {
      body = (await request.json()) as SongPackageBody;
    } catch {
      return NextResponse.json(
        { success: false, error: "Invalid JSON request body." },
        { status: 400 },
      );
    }

    const prompt = text(body.prompt);
    if (!prompt) {
      return NextResponse.json(
        { success: false, error: "Song prompt is required." },
        { status: 400 },
      );
    }

    if (prompt.length > 12000) {
      return NextResponse.json(
        { success: false, error: "Song prompt must be 12,000 characters or less." },
        { status: 413 },
      );
    }

    const genre = text(body.genre, "Pop");
    const language = text(body.language, "English");
    const mood = text(body.mood, "Happy");
    const duration = Math.min(600, Math.max(30, Math.round(number(body.duration, 180))));
    const key = text(body.key, "C");
    const tempo = Math.min(240, Math.max(40, Math.round(number(body.tempo, 120))));
    const singer = text(body.singer, "Male");
    const instrumental = boolean(body.instrumental, false);
    const providerValue = text(body.provider);
    const provider = isProvider(providerValue) ? providerValue : undefined;
    const temperature = Math.min(2, Math.max(0, number(body.temperature, 0.75)));
    const maxTokens = Math.min(8192, Math.max(1024, Math.round(number(body.maxTokens, 8192))));

    const generationPrompt = `
Create a complete original song package.

USER REQUEST:
${prompt}

SETTINGS:
Genre: ${genre}
Language: ${language}
Mood: ${mood}
Duration: ${duration} seconds
Key: ${key}
Tempo: ${tempo} BPM
Singer: ${singer}
Instrumental: ${instrumental ? "Yes" : "No"}

Return ONLY valid JSON with this exact top-level structure:
{
  "title": "string",
  "description": "string",
  "lyrics": "string",
  "outline": {
    "concept": "string",
    "intro": "string",
    "verse1": "string",
    "preChorus": "string",
    "chorus": "string",
    "verse2": "string",
    "bridge": "string",
    "finalChorus": "string",
    "outro": "string"
  },
  "arrangement": {
    "intro": "string",
    "verse": "string",
    "preChorus": "string",
    "chorus": "string",
    "bridge": "string",
    "finalChorus": "string",
    "outro": "string",
    "instruments": ["string"],
    "vocalStyle": "string",
    "productionStyle": "string",
    "dynamics": "string"
  },
  "metadata": {
    "title": "string",
    "description": "string",
    "genre": "string",
    "mood": "string",
    "language": "string",
    "tempo": ${tempo},
    "key": "${key}",
    "timeSignature": "4/4",
    "durationSeconds": ${duration},
    "singer": "${singer}",
    "vocalType": "string",
    "energy": "string",
    "theme": "string",
    "tags": ["string"]
  }
}

Lyrics must be original. Use clear section labels. If Instrumental is Yes, lyrics may be empty. Do not imitate living artists or reproduce copyrighted lyrics.
`.trim();

    const result = await routeAIGeneration({
      prompt: generationPrompt,
      ...(provider ? { provider } : {}),
      temperature,
      maxTokens,
    });

    if (!result.success) {
      return NextResponse.json(
        {
          success: false,
          error: result.error || "AI song-package generation failed.",
          providerUsed: result.providerUsed,
        },
        { status: 502 },
      );
    }

    const parsed = parseJson(result.data);
    if (!parsed) {
      return NextResponse.json(
        {
          success: false,
          error: "AI returned a non-JSON song package.",
          providerUsed: result.providerUsed,
        },
        { status: 502 },
      );
    }

    const progression = suggestChordProgression(key, mood);

    const outline = parsed.outline && typeof parsed.outline === "object" && !Array.isArray(parsed.outline)
      ? parsed.outline
      : {};
    const arrangement = parsed.arrangement && typeof parsed.arrangement === "object" && !Array.isArray(parsed.arrangement)
      ? parsed.arrangement
      : {};
    const metadata = parsed.metadata && typeof parsed.metadata === "object" && !Array.isArray(parsed.metadata)
      ? parsed.metadata
      : {};

    return NextResponse.json({
      success: true,
      providerUsed: result.providerUsed,
      song: {
        title: text(parsed.title, "Untitled Song"),
        description: text(parsed.description),
        lyrics: text(parsed.lyrics),
        outline: {
          concept: text(outline.concept),
          intro: text(outline.intro),
          verse1: text(outline.verse1),
          preChorus: text(outline.preChorus),
          chorus: text(outline.chorus),
          verse2: text(outline.verse2),
          bridge: text(outline.bridge),
          finalChorus: text(outline.finalChorus),
          outro: text(outline.outro),
        },
        arrangement: {
          intro: text(arrangement.intro),
          verse: text(arrangement.verse),
          preChorus: text(arrangement.preChorus),
          chorus: text(arrangement.chorus),
          bridge: text(arrangement.bridge),
          finalChorus: text(arrangement.finalChorus),
          outro: text(arrangement.outro),
          instruments: stringArray(arrangement.instruments),
          vocalStyle: text(arrangement.vocalStyle),
          productionStyle: text(arrangement.productionStyle),
          dynamics: text(arrangement.dynamics),
        },
        metadata: {
          title: text(metadata.title, text(parsed.title, "Untitled Song")),
          description: text(metadata.description, text(parsed.description)),
          genre: text(metadata.genre, genre),
          mood: text(metadata.mood, mood),
          language: text(metadata.language, language),
          tempo: Math.min(240, Math.max(40, Math.round(number(metadata.tempo, tempo)))),
          key: text(metadata.key, key),
          timeSignature: text(metadata.timeSignature, "4/4"),
          durationSeconds: Math.min(600, Math.max(30, Math.round(number(metadata.durationSeconds, duration)))),
          singer: text(metadata.singer, singer),
          vocalType: text(metadata.vocalType, singer),
          energy: text(metadata.energy, mood),
          theme: text(metadata.theme),
          tags: stringArray(metadata.tags),
        },
      },
      chords: {
        progression,
        formatted: formatChordProgression(progression),
      },
    });
  } catch (error) {
    console.error("Song package route error:", error);

    return NextResponse.json(
      {
        success: false,
        error: error instanceof Error ? error.message : "Song-package generation failed.",
      },
      { status: 500 },
    );
  }
}
