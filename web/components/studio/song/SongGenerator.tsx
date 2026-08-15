"use client";

import { useEffect, useMemo, useState } from "react";
import {
  AlertCircle,
  Check,
  Clock3,
  Copy,
  Cpu,
  FileText,
  Globe,
  Guitar,
  ListMusic,
  Loader2,
  Music4,
  Pause,
  Play,
  RefreshCw,
  Settings2,
  Sparkles,
  Square,
  Tags,
  Volume2,
  VolumeX,
  Wand2,
} from "lucide-react";

type GenerationStatus =
  | "idle"
  | "preparing"
  | "generating"
  | "completed"
  | "error";

type SongOutline = {
  concept: string;
  intro: string;
  verse1: string;
  preChorus: string;
  chorus: string;
  verse2: string;
  bridge: string;
  finalChorus: string;
  outro: string;
};

type Arrangement = {
  intro: string;
  verse: string;
  preChorus: string;
  chorus: string;
  bridge: string;
  finalChorus: string;
  outro: string;
  instruments: string[];
  vocalStyle: string;
  productionStyle: string;
  dynamics: string;
};

type SongMetadata = {
  title: string;
  description: string;
  genre: string;
  mood: string;
  language: string;
  tempo: number;
  key: string;
  timeSignature: string;
  durationSeconds: number;
  singer: string;
  vocalType: string;
  energy: string;
  theme: string;
  tags: string[];
};

type ChordProgression = {
  romanNumeral?: string;
  chords?: string[];
  section?: string;
  notes?: string;
  [key: string]: unknown;
};

type SongPackage = {
  title: string;
  description: string;
  lyrics: string;
  outline: SongOutline;
  arrangement: Arrangement;
  metadata: SongMetadata;
};

type ChordResult = {
  progression: ChordProgression[];
  formatted: string;
};

const genres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "EDM",
  "LoFi",
  "Classical",
  "Jazz",
  "Folk",
  "Country",
  "Trap",
  "House",
  "Metal",
  "Telugu Folk",
  "Devotional",
  "Romantic",
  "Melody",
];

const moods = [
  "Happy",
  "Sad",
  "Romantic",
  "Energetic",
  "Epic",
  "Calm",
  "Dark",
  "Motivational",
  "Love",
  "Emotional",
  "Party",
  "Relaxing",
];

const languages = [
  "English",
  "Telugu",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Spanish",
  "French",
  "German",
  "Japanese",
];

const models = [
  "Music GPT Ultra",
  "Music GPT Pro",
  "Studio Diffusion",
  "Composer X",
];

const musicalKeys = [
  "C Major",
  "D Major",
  "E Major",
  "F Major",
  "G Major",
  "A Major",
  "B Major",
  "C Minor",
  "D Minor",
  "E Minor",
  "F Minor",
  "G Minor",
  "A Minor",
  "B Minor",
];

const singers = [
  "Male",
  "Female",
  "Duet",
  "Choir",
  "Child",
];

const suggestions = [
  "Add cinematic orchestra",
  "Make vocals emotional",
  "Increase bass intensity",
  "Add guitar solo",
  "Include choir in chorus",
  "Create radio-quality mix",
];

const exportFormats = [
  "Lyrics (.txt)",
  "Outline (.txt)",
  "Arrangement (.txt)",
  "Project (.json)",
];

const EMPTY_OUTLINE: SongOutline = {
  concept: "",
  intro: "",
  verse1: "",
  preChorus: "",
  chorus: "",
  verse2: "",
  bridge: "",
  finalChorus: "",
  outro: "",
};

const EMPTY_ARRANGEMENT: Arrangement = {
  intro: "",
  verse: "",
  preChorus: "",
  chorus: "",
  bridge: "",
  finalChorus: "",
  outro: "",
  instruments: [],
  vocalStyle: "",
  productionStyle: "",
  dynamics: "",
};

function cleanString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

function normalizeStringArray(value: unknown): string[] {
  if (!Array.isArray(value)) {
    return [];
  }

  return value
    .filter(
      (item): item is string =>
        typeof item === "string",
    )
    .map((item) => item.trim())
    .filter(Boolean);
}

function createDefaultMetadata(
  genre: string,
  mood: string,
  language: string,
  duration: number,
  tempo: number,
  musicalKey: string,
  singer: string,
): SongMetadata {
  return {
    title: "",
    description: "",
    genre,
    mood,
    language,
    tempo,
    key: musicalKey,
    timeSignature: "4/4",
    durationSeconds: duration,
    singer,
    vocalType: singer,
    energy: mood,
    theme: "",
    tags: [genre, mood, language].filter(
      Boolean,
    ),
  };
}

function parseJsonFromAI(
  text: string,
): Record<string, unknown> | null {
  const trimmed = text.trim();

  try {
    const parsed: unknown = JSON.parse(trimmed);

    if (
      parsed &&
      typeof parsed === "object" &&
      !Array.isArray(parsed)
    ) {
      return parsed as Record<string, unknown>;
    }
  } catch {
    // Continue.
  }

  const fencedMatch = trimmed.match(
    /```(?:json)?\s*([\s\S]*?)\s*```/i,
  );

  if (fencedMatch?.[1]) {
    try {
      const parsed: unknown = JSON.parse(
        fencedMatch[1],
      );

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed)
      ) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      // Continue.
    }
  }

  const firstBrace = trimmed.indexOf("{");
  const lastBrace = trimmed.lastIndexOf("}");

  if (
    firstBrace >= 0 &&
    lastBrace > firstBrace
  ) {
    try {
      const parsed: unknown = JSON.parse(
        trimmed.slice(firstBrace, lastBrace + 1),
      );

      if (
        parsed &&
        typeof parsed === "object" &&
        !Array.isArray(parsed)
      ) {
        return parsed as Record<string, unknown>;
      }
    } catch {
      return null;
    }
  }

  return null;
}

function normalizeSongPackage(
  raw: Record<string, unknown>,
  defaults: SongMetadata,
): SongPackage {
  const rawMetadata =
    raw.metadata &&
    typeof raw.metadata === "object" &&
    !Array.isArray(raw.metadata)
      ? (raw.metadata as Record<string, unknown>)
      : {};

  const rawOutline =
    raw.outline &&
    typeof raw.outline === "object" &&
    !Array.isArray(raw.outline)
      ? (raw.outline as Record<string, unknown>)
      : {};

  const rawArrangement =
    raw.arrangement &&
    typeof raw.arrangement === "object" &&
    !Array.isArray(raw.arrangement)
      ? (raw.arrangement as Record<string, unknown>)
      : {};

  const title =
    cleanString(raw.title) ||
    cleanString(raw.songTitle) ||
    "Untitled AI Song";

  const description =
    cleanString(raw.description) ||
    cleanString(raw.songDescription);

  const lyrics =
    cleanString(raw.lyrics) ||
    cleanString(raw.generatedLyrics);

  const metadataTags =
    normalizeStringArray(rawMetadata.tags);

  const metadata: SongMetadata = {
    ...defaults,
    title,
    description,
    genre:
      cleanString(rawMetadata.genre) ||
      defaults.genre,
    mood:
      cleanString(rawMetadata.mood) ||
      defaults.mood,
    language:
      cleanString(rawMetadata.language) ||
      defaults.language,
    tempo:
      typeof rawMetadata.tempo === "number" &&
      Number.isFinite(rawMetadata.tempo)
        ? rawMetadata.tempo
        : defaults.tempo,
    key:
      cleanString(rawMetadata.key) ||
      cleanString(rawMetadata.musicalKey) ||
      defaults.key,
    timeSignature:
      cleanString(rawMetadata.timeSignature) ||
      defaults.timeSignature,
    durationSeconds:
      typeof rawMetadata.durationSeconds ===
        "number" &&
      Number.isFinite(
        rawMetadata.durationSeconds,
      )
        ? rawMetadata.durationSeconds
        : defaults.durationSeconds,
    singer:
      cleanString(rawMetadata.singer) ||
      defaults.singer,
    vocalType:
      cleanString(rawMetadata.vocalType) ||
      cleanString(rawMetadata.vocals) ||
      defaults.vocalType,
    energy:
      cleanString(rawMetadata.energy) ||
      defaults.energy,
    theme:
      cleanString(rawMetadata.theme),
    tags:
      metadataTags.length
        ? metadataTags
        : defaults.tags,
  };

  const outline: SongOutline = {
    concept: cleanString(rawOutline.concept),
    intro: cleanString(rawOutline.intro),
    verse1:
      cleanString(rawOutline.verse1) ||
      cleanString(rawOutline.verse),
    preChorus:
      cleanString(rawOutline.preChorus),
    chorus: cleanString(rawOutline.chorus),
    verse2: cleanString(rawOutline.verse2),
    bridge: cleanString(rawOutline.bridge),
    finalChorus:
      cleanString(rawOutline.finalChorus),
    outro: cleanString(rawOutline.outro),
  };

  const arrangement: Arrangement = {
    intro: cleanString(rawArrangement.intro),
    verse: cleanString(rawArrangement.verse),
    preChorus:
      cleanString(rawArrangement.preChorus),
    chorus: cleanString(rawArrangement.chorus),
    bridge: cleanString(rawArrangement.bridge),
    finalChorus:
      cleanString(rawArrangement.finalChorus),
    outro: cleanString(rawArrangement.outro),
    instruments:
      normalizeStringArray(
        rawArrangement.instruments,
      ),
    vocalStyle:
      cleanString(rawArrangement.vocalStyle),
    productionStyle:
      cleanString(
        rawArrangement.productionStyle,
      ),
    dynamics:
      cleanString(rawArrangement.dynamics),
  };

  return {
    title,
    description,
    lyrics,
    outline,
    arrangement,
    metadata,
  };
}

async function callAI(
  prompt: string,
  maxTokens = 4096,
): Promise<string> {
  /*
   * Existing route:
   * web/app/ai/generate/route.ts
   *
   * Therefore the browser URL is:
   * /ai/generate
   */
  const response = await fetch("/ai/generate", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      prompt,
      maxTokens,
      temperature: 0.75,
    }),
  });

  const contentType =
    response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    const text = await response.text();

    throw new Error(
      text
        ? `AI server returned an invalid response: ${text.slice(
            0,
            300,
          )}`
        : "AI server returned an empty response.",
    );
  }

  const data = (await response.json()) as {
    success?: boolean;
    data?: unknown;
    text?: unknown;
    response?: unknown;
    result?: unknown;
    error?: unknown;
  };

  if (!response.ok || data.success === false) {
    throw new Error(
      cleanString(data.error) ||
        "AI generation request failed.",
    );
  }

  const output =
    cleanString(data.data) ||
    cleanString(data.text) ||
    cleanString(data.response) ||
    cleanString(data.result);

  if (!output) {
    throw new Error(
      "AI returned an empty response.",
    );
  }

  return output;
}

async function fetchChords(
  musicalKey: string,
  mood: string,
): Promise<ChordResult> {
  const key = musicalKey
    .replace(
      /\s+(Major|Minor)$/i,
      "",
    )
    .trim();

  const response = await fetch(
    `/api/music-tools/chords?key=${encodeURIComponent(
      key,
    )}&mood=${encodeURIComponent(mood)}`,
    {
      method: "GET",
      cache: "no-store",
    },
  );

  const contentType =
    response.headers.get("content-type") || "";

  if (!contentType.includes("application/json")) {
    throw new Error(
      "Chord API returned an invalid response.",
    );
  }

  const data = (await response.json()) as {
    success?: boolean;
    progression?: unknown;
    formatted?: unknown;
    error?: unknown;
  };

  if (!response.ok || data.success === false) {
    throw new Error(
      cleanString(data.error) ||
        "Chord progression generation failed.",
    );
  }

  const progression = Array.isArray(
    data.progression,
  )
    ? (data.progression as ChordProgression[])
    : [];

  const formatted = cleanString(
    data.formatted,
  );

  if (
    progression.length === 0 &&
    !formatted
  ) {
    throw new Error(
      "Chord API returned an empty progression.",
    );
  }

  return {
    progression,
    formatted,
  };
}

function formatDuration(
  seconds: number,
): string {
  const safeSeconds = Math.max(
    0,
    Math.round(seconds),
  );

  return `${Math.floor(
    safeSeconds / 60,
  )
    .toString()
    .padStart(2, "0")}:${(
    safeSeconds % 60
  )
    .toString()
    .padStart(2, "0")}`;
}

function getSpeechLanguage(
  language: string,
): string {
  const map: Record<string, string> = {
    English: "en-US",
    Telugu: "te-IN",
    Hindi: "hi-IN",
    Tamil: "ta-IN",
    Kannada: "kn-IN",
    Malayalam: "ml-IN",
    Spanish: "es-ES",
    French: "fr-FR",
    German: "de-DE",
    Japanese: "ja-JP",
  };

  return map[language] || "en-US";
}

function downloadText(
  filename: string,
  content: string,
  mimeType = "text/plain;charset=utf-8",
) {
  if (!content.trim()) {
    return;
  }

  const blob = new Blob([content], {
    type: mimeType,
  });

  const url = URL.createObjectURL(blob);
  const anchor = document.createElement("a");

  anchor.href = url;
  anchor.download = filename;

  document.body.appendChild(anchor);
  anchor.click();
  anchor.remove();

  window.setTimeout(() => {
    URL.revokeObjectURL(url);
  }, 1000);
}

function buildProjectExport(
  song: SongPackage,
  chords: ChordResult,
  settings: Record<string, unknown>,
): string {
  return JSON.stringify(
    {
      exportedAt: new Date().toISOString(),
      song,
      chords,
      settings,
    },
    null,
    2,
  );
}

export default function SongGenerator() {
  const [prompt, setPrompt] = useState("");

  const [genre, setGenre] = useState("Pop");
  const [mood, setMood] = useState("Happy");
  const [language, setLanguage] =
    useState("English");
  const [model, setModel] =
    useState(models[0]);

  const [duration, setDuration] =
    useState(180);

  const [instrumental, setInstrumental] =
    useState(false);

  const [explicitLyrics, setExplicitLyrics] =
    useState(false);

  const [highQuality, setHighQuality] =
    useState(true);

  const [tempo, setTempo] =
    useState(120);

  const [musicalKey, setMusicalKey] =
    useState("C Major");

  const [singer, setSinger] =
    useState("Male");

  const [creativity, setCreativity] =
    useState(70);

  const [similarity, setSimilarity] =
    useState(80);

  const [negativePrompt, setNegativePrompt] =
    useState("");

  const [generatedLyrics, setGeneratedLyrics] =
    useState("");

  const [generatedSongTitle, setGeneratedSongTitle] =
    useState("Untitled AI Song");

  const [songDescription, setSongDescription] =
    useState("");

  const [songOutline, setSongOutline] =
    useState<SongOutline>(EMPTY_OUTLINE);

  const [arrangement, setArrangement] =
    useState<Arrangement>(
      EMPTY_ARRANGEMENT,
    );

  const [metadata, setMetadata] =
    useState<SongMetadata>(
      createDefaultMetadata(
        "Pop",
        "Happy",
        "English",
        180,
        120,
        "C Major",
        "Male",
      ),
    );

  const [chords, setChords] =
    useState<ChordResult>({
      progression: [],
      formatted: "",
    });

  const [status, setStatus] =
    useState<GenerationStatus>("idle");

  const [progress, setProgress] =
    useState(0);

  const [pipelineStep, setPipelineStep] =
    useState("");

  const [error, setError] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [speechSupported, setSpeechSupported] =
    useState(false);

  const [speechSpeaking, setSpeechSpeaking] =
    useState(false);

  const [speechPaused, setSpeechPaused] =
    useState(false);

  const [speechTarget, setSpeechTarget] =
    useState<
      "lyrics" | "outline" | "arrangement"
    >("lyrics");

  const [speechRate, setSpeechRate] =
    useState(1);

  const [speechPitch, setSpeechPitch] =
    useState(1);

  useEffect(() => {
    if (
      typeof window === "undefined" ||
      !("speechSynthesis" in window)
    ) {
      return;
    }

    setSpeechSupported(true);

    const synthesis =
      window.speechSynthesis;

    const updateState = () => {
      setSpeechSpeaking(
        synthesis.speaking,
      );

      setSpeechPaused(
        synthesis.paused,
      );
    };

    const interval = window.setInterval(
      updateState,
      250,
    );

    return () => {
      window.clearInterval(interval);
      synthesis.cancel();
    };
  }, []);

  const outlineText = useMemo(() => {
    return [
      songOutline.concept &&
        `Concept: ${songOutline.concept}`,
      songOutline.intro &&
        `Intro: ${songOutline.intro}`,
      songOutline.verse1 &&
        `Verse 1: ${songOutline.verse1}`,
      songOutline.preChorus &&
        `Pre-Chorus: ${songOutline.preChorus}`,
      songOutline.chorus &&
        `Chorus: ${songOutline.chorus}`,
      songOutline.verse2 &&
        `Verse 2: ${songOutline.verse2}`,
      songOutline.bridge &&
        `Bridge: ${songOutline.bridge}`,
      songOutline.finalChorus &&
        `Final Chorus: ${songOutline.finalChorus}`,
      songOutline.outro &&
        `Outro: ${songOutline.outro}`,
    ]
      .filter(Boolean)
      .join("\n\n");
  }, [songOutline]);

  const arrangementText =
    useMemo(() => {
      return [
        arrangement.intro &&
          `Intro: ${arrangement.intro}`,
        arrangement.verse &&
          `Verse: ${arrangement.verse}`,
        arrangement.preChorus &&
          `Pre-Chorus: ${arrangement.preChorus}`,
        arrangement.chorus &&
          `Chorus: ${arrangement.chorus}`,
        arrangement.bridge &&
          `Bridge: ${arrangement.bridge}`,
        arrangement.finalChorus &&
          `Final Chorus: ${arrangement.finalChorus}`,
        arrangement.outro &&
          `Outro: ${arrangement.outro}`,
        arrangement.instruments.length
          ? `Instruments: ${arrangement.instruments.join(
              ", ",
            )}`
          : "",
        arrangement.vocalStyle &&
          `Vocal Style: ${arrangement.vocalStyle}`,
        arrangement.productionStyle &&
          `Production Style: ${arrangement.productionStyle}`,
        arrangement.dynamics &&
          `Dynamics: ${arrangement.dynamics}`,
      ]
        .filter(Boolean)
        .join("\n\n");
    }, [arrangement]);

  const projectJson = useMemo(() => {
    return buildProjectExport(
      {
        title: generatedSongTitle,
        description: songDescription,
        lyrics: generatedLyrics,
        outline: songOutline,
        arrangement,
        metadata,
      },
      chords,
      {
        prompt,
        genre,
        mood,
        language,
        model,
        duration,
        instrumental,
        explicitLyrics,
        highQuality,
        tempo,
        musicalKey,
        singer,
        creativity,
        similarity,
        negativePrompt,
      },
    );
  }, [
    generatedSongTitle,
    songDescription,
    generatedLyrics,
    songOutline,
    arrangement,
    metadata,
    chords,
    prompt,
    genre,
    mood,
    language,
    model,
    duration,
    instrumental,
    explicitLyrics,
    highQuality,
    tempo,
    musicalKey,
    singer,
    creativity,
    similarity,
    negativePrompt,
  ]);

  function buildSongPrompt(): string {
    const finalPrompt =
      prompt.trim() ||
      "Create an original song suitable for the selected settings.";

    return `
Create a complete original song package.

USER REQUEST:
${finalPrompt}

SONG SETTINGS:
Genre: ${genre}
Mood: ${mood}
Language: ${language}
AI Model: ${model}
Duration: ${duration} seconds
Tempo: ${tempo} BPM
Musical Key: ${musicalKey}
Singer: ${singer}
Instrumental: ${instrumental ? "Yes" : "No"}
Explicit Lyrics Allowed: ${
      explicitLyrics ? "Yes" : "No"
    }
High Quality: ${highQuality ? "Yes" : "No"}
Creativity: ${creativity}%
Similarity: ${similarity}%

NEGATIVE PROMPT:
${negativePrompt.trim() || "None"}

Return ONLY valid JSON.
Do not use markdown fences.
Do not add explanations before or after the JSON.

Use exactly this structure:

{
  "title": "string",
  "description": "string",
  "lyrics": "complete original lyrics with section labels",
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
    "genre": "${genre}",
    "mood": "${mood}",
    "language": "${language}",
    "tempo": ${tempo},
    "key": "${musicalKey}",
    "timeSignature": "4/4",
    "durationSeconds": ${duration},
    "singer": "${singer}",
    "vocalType": "string",
    "energy": "string",
    "theme": "string",
    "tags": ["string"]
  }
}

LYRICS:
- Original lyrics only.
- Language: ${language}.
- Use [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Final Chorus], [Outro].
- If Instrumental is Yes, lyrics can be empty.
- Do not imitate a living artist.
- Do not reproduce existing copyrighted lyrics.

OUTLINE:
Describe the actual structure of this song.

ARRANGEMENT:
Describe instruments and production elements in each section.
`.trim();
  }

  async function generateSong() {
    if (
      status === "generating" ||
      status === "preparing"
    ) {
      return;
    }

    setError("");
    setCopied(false);
    setStatus("preparing");
    setProgress(5);
    setPipelineStep(
      "Preparing song request",
    );

    try {
      const defaults =
        createDefaultMetadata(
          genre,
          mood,
          language,
          duration,
          tempo,
          musicalKey,
          singer,
        );

      setStatus("generating");
      setProgress(15);
      setPipelineStep(
        "Generating lyrics, outline, arrangement and metadata",
      );

      const aiText = await callAI(
        buildSongPrompt(),
        8192,
      );

      setProgress(65);
      setPipelineStep(
        "Parsing AI song package",
      );

      const parsed =
        parseJsonFromAI(aiText);

      if (!parsed) {
        throw new Error(
          "AI returned text that was not valid song-package JSON. No partial result was applied.",
        );
      }

      const song =
        normalizeSongPackage(
          parsed,
          defaults,
        );

      if (
        !song.lyrics &&
        !instrumental
      ) {
        throw new Error(
          "AI returned a song package without lyrics.",
        );
      }

      setGeneratedSongTitle(
        song.title,
      );

      setSongDescription(
        song.description,
      );

      setGeneratedLyrics(
        song.lyrics,
      );

      setSongOutline(
        song.outline,
      );

      setArrangement(
        song.arrangement,
      );

      setMetadata(
        song.metadata,
      );

      setPipelineStep(
        "Generating chord progression",
      );

      setProgress(75);

      const chordResult =
        await fetchChords(
          musicalKey,
          mood,
        );

      setChords(chordResult);

      setProgress(100);
      setPipelineStep(
        "Song package completed",
      );

      setStatus("completed");
    } catch (err) {
      console.error(
        "Song generation error:",
        err,
      );

      setStatus("error");
      setProgress(0);
      setPipelineStep("");

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the song.",
      );
    }
  }

  async function copyText(text: string) {
    if (!text.trim()) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        text,
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError(
        "Unable to copy content to clipboard.",
      );
    }
  }

  function getSpeechText(): string {
    if (speechTarget === "lyrics") {
      return generatedLyrics;
    }

    if (speechTarget === "outline") {
      return outlineText;
    }

    return arrangementText;
  }

  function speakCurrentTarget() {
    if (
      !speechSupported ||
      typeof window === "undefined"
    ) {
      setError(
        "Text-to-speech is not supported by this browser.",
      );
      return;
    }

    const text = getSpeechText();

    if (!text.trim()) {
      setError(
        `No ${speechTarget} content is available for TTS.`,
      );
      return;
    }

    const synthesis =
      window.speechSynthesis;

    synthesis.cancel();

    const utterance =
      new SpeechSynthesisUtterance(
        text.trim(),
      );

    utterance.rate = Math.min(
      2,
      Math.max(0.1, speechRate),
    );

    utterance.pitch = Math.min(
      2,
      Math.max(0, speechPitch),
    );

    utterance.volume = 1;
    utterance.lang =
      getSpeechLanguage(language);

    utterance.onstart = () => {
      setSpeechSpeaking(true);
      setSpeechPaused(false);
    };

    utterance.onpause = () => {
      setSpeechSpeaking(true);
      setSpeechPaused(true);
    };

    utterance.onresume = () => {
      setSpeechSpeaking(true);
      setSpeechPaused(false);
    };

    utterance.onend = () => {
      setSpeechSpeaking(false);
      setSpeechPaused(false);
    };

    utterance.onerror = () => {
      setSpeechSpeaking(false);
      setSpeechPaused(false);
    };

    synthesis.speak(utterance);
  }

  function pauseSpeech() {
    if (
      typeof window === "undefined" ||
      !speechSupported
    ) {
      return;
    }

    window.speechSynthesis.pause();
    setSpeechPaused(true);
  }

  function resumeSpeech() {
    if (
      typeof window === "undefined" ||
      !speechSupported
    ) {
      return;
    }

    window.speechSynthesis.resume();
    setSpeechPaused(false);
  }

  function stopSpeech() {
    if (
      typeof window === "undefined" ||
      !speechSupported
    ) {
      return;
    }

    window.speechSynthesis.cancel();
    setSpeechSpeaking(false);
    setSpeechPaused(false);
  }

  function applySuggestion(
    value: string,
  ) {
    setPrompt((current) => {
      const trimmed = current.trim();

      if (!trimmed) {
        return value;
      }

      return `${trimmed}\n${value}`;
    });
  }

  function exportCurrent(
    format: string,
  ) {
    const safeTitle =
      generatedSongTitle
        .replace(
          /[^\w\-]+/g,
          "_",
        )
        .slice(0, 80) ||
      "ai-song";

    if (
      format === "Lyrics (.txt)"
    ) {
      downloadText(
        `${safeTitle}-lyrics.txt`,
        generatedLyrics,
      );
      return;
    }

    if (
      format === "Outline (.txt)"
    ) {
      downloadText(
        `${safeTitle}-outline.txt`,
        outlineText,
      );
      return;
    }

    if (
      format ===
      "Arrangement (.txt)"
    ) {
      downloadText(
        `${safeTitle}-arrangement.txt`,
        arrangementText,
      );
      return;
    }

    if (
      format === "Project (.json)"
    ) {
      downloadText(
        `${safeTitle}-project.json`,
        projectJson,
        "application/json;charset=utf-8",
      );
    }
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Song Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate lyrics, song structure,
          arrangement, chords and metadata
          from one song request.
        </p>
      </div>

      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-red-300">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-semibold">
              AI Generation Error
            </p>

            <p className="mt-1 whitespace-pre-wrap text-sm">
              {error}
            </p>
          </div>
        </div>
      )}

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Music4 className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Song Prompt
                </h2>

                <p className="text-muted-foreground">
                  Describe the song you want.
                </p>
              </div>
            </div>

            <textarea
              value={prompt}
              onChange={(event) =>
                setPrompt(
                  event.target.value,
                )
              }
              placeholder="Example: Create an emotional Telugu melody about friendship with piano, violin and a cinematic chorus..."
              className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 text-lg outline-none focus:border-violet-500/50"
            />

            <div className="mt-5 flex flex-wrap gap-3">
              {[
                "Emotional cinematic song",
                "Telugu romantic melody",
                "Energetic party anthem",
                "Peaceful LoFi music",
              ].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    setPrompt(item)
                  }
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-muted-foreground transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <Settings2 className="h-7 w-7 text-violet-500" />

              <h2 className="text-2xl font-black">
                Settings
              </h2>
            </div>

            <div className="space-y-6">
              <SelectField
                label="Genre"
                icon={
                  <Music4 className="h-4 w-4" />
                }
                value={genre}
                onChange={setGenre}
                options={genres}
              />

              <SelectField
                label="Mood"
                icon={
                  <Sparkles className="h-4 w-4" />
                }
                value={mood}
                onChange={setMood}
                options={moods}
              />

              <SelectField
                label="Language"
                icon={
                  <Globe className="h-4 w-4" />
                }
                value={language}
                onChange={setLanguage}
                options={languages}
              />

              <SelectField
                label="AI Model"
                icon={
                  <Cpu className="h-4 w-4" />
                }
                value={model}
                onChange={setModel}
                options={models}
              />

              <div>
                <label className="mb-3 flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    Duration
                  </span>

                  <span>
                    {duration}s
                  </span>
                </label>

                <input
                  type="range"
                  min={30}
                  max={600}
                  value={duration}
                  onChange={(event) =>
                    setDuration(
                      Number(
                        event.target.value,
                      ),
                    )
                  }
                  className="w-full"
                />
              </div>

              <ToggleField
                title="Instrumental"
                description="Generate music without vocals"
                checked={instrumental}
                onChange={
                  setInstrumental
                }
              />

              <ToggleField
                title="Explicit Lyrics"
                description="Allow mature content"
                checked={
                  explicitLyrics
                }
                onChange={
                  setExplicitLyrics
                }
              />

              <ToggleField
                title="High Quality"
                description="Use higher generation quality"
                checked={
                  highQuality
                }
                onChange={
                  setHighQuality
                }
              />

              <button
                type="button"
                onClick={() =>
                  void generateSong()
                }
                disabled={
                  status ===
                    "generating" ||
                  status ===
                    "preparing"
                }
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-5 text-lg font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status ===
                    "generating" ||
                status ===
                    "preparing" ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-6 w-6" />
                    Generate AI Song
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Advanced Settings
            </h2>

            <p className="mt-2 text-muted-foreground">
              Fine tune the generated
              song.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Tempo (BPM)
              </label>

              <input
                type="number"
                min={40}
                max={240}
                value={tempo}
                onChange={(event) =>
                  setTempo(
                    Math.min(
                      240,
                      Math.max(
                        40,
                        Number(
                          event.target.value,
                        ) || 40,
                      ),
                    ),
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              />
            </div>

            <SelectField
              label="Musical Key"
              value={musicalKey}
              onChange={
                setMusicalKey
              }
              options={musicalKeys}
            />

            <SelectField
              label="Singer"
              value={singer}
              onChange={setSinger}
              options={singers}
            />

            <RangeField
              label="Creativity"
              value={creativity}
              onChange={
                setCreativity
              }
            />

            <RangeField
              label="Similarity"
              value={similarity}
              onChange={
                setSimilarity
              }
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Negative Prompt
            </h2>

            <p className="mt-2 text-muted-foreground">
              Tell the AI what to avoid.
            </p>
          </div>

          <textarea
            value={negativePrompt}
            onChange={(event) =>
              setNegativePrompt(
                event.target.value,
              )
            }
            placeholder="Example: no heavy drums, avoid distortion, avoid background noise..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none focus:border-violet-500/50"
          />

          <div className="mt-8 rounded-2xl bg-violet-500/10 p-5">
            <h3 className="font-bold">
              Generation Pipeline
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                • Lyrics generation
              </li>
              <li>
                • Song outline generation
              </li>
              <li>
                • Arrangement generation
              </li>
              <li>
                • Metadata generation
              </li>
              <li>
                • Chord progression
                generation
              </li>
              <li>
                • Browser TTS preview
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Generation Progress
            </h2>

            <p className="mt-2 text-muted-foreground">
              Progress is based on completed
              pipeline stages.
            </p>
          </div>

          <div
            className={`rounded-full px-4 py-2 font-semibold ${
              status === "completed"
                ? "bg-green-500/10 text-green-400"
                : status === "error"
                ? "bg-red-500/10 text-red-400"
                : "bg-violet-500/10 text-violet-400"
            }`}
          >
            {status ===
            "completed"
              ? "Completed"
              : status === "error"
              ? "Error"
              : status ===
                "generating"
              ? "Generating"
              : status ===
                "preparing"
              ? "Preparing"
              : "Ready"}
          </div>
        </div>

        {pipelineStep && (
          <div className="mb-6 rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
            <div className="flex items-center gap-3">
              {status ===
                  "generating" ||
              status ===
                  "preparing" ? (
                <Loader2 className="h-5 w-5 animate-spin text-violet-400" />
              ) : (
                <Check className="h-5 w-5 text-green-400" />
              )}

              <span>
                {pipelineStep}
              </span>
            </div>
          </div>
        )}

        <ProgressRow
          title="AI Song Package"
          value={
            progress >= 65
              ? 100
              : progress >= 15
              ? Math.round(
                  ((progress - 15) /
                    50) *
                    100,
                )
              : 0
          }
        />

        <div className="mt-6">
          <ProgressRow
            title="Chord Progression"
            value={
              progress >= 100
                ? 100
                : progress >= 75
                ? Math.round(
                    ((progress - 75) /
                      25) *
                      100,
                  )
                : 0
            }
          />
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <StatCard
          title="Song Duration"
          value={formatDuration(
            duration,
          )}
          description="Requested duration"
          className="text-violet-400"
        />

        <StatCard
          title="Tempo"
          value={`${tempo}`}
          description="BPM"
          className="text-cyan-400"
        />

        <StatCard
          title="Output"
          value={
            status === "completed"
              ? "Ready"
              : "Pending"
          }
          description="Generation status"
          className="text-green-400"
        />
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Generated Song
              </h2>

              <p className="mt-2 text-muted-foreground">
                Current AI song package.
              </p>
            </div>

            <Music4 className="h-8 w-8 text-violet-500" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Music4 className="h-10 w-10 text-white" />
              </div>

              <div className="min-w-0">
                <h3 className="truncate text-2xl font-bold">
                  {generatedSongTitle}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {formatDuration(
                    metadata.durationSeconds ||
                      duration,
                  )}{" "}
                  •{" "}
                  {metadata.key ||
                    musicalKey}{" "}
                  •{" "}
                  {metadata.timeSignature ||
                    "4/4"}
                </p>
              </div>
            </div>

            {songDescription && (
              <div className="mt-8 rounded-2xl border border-white/10 p-5">
                <p className="text-sm leading-7 text-muted-foreground">
                  {songDescription}
                </p>
              </div>
            )}

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                onClick={() =>
                  void copyText(
                    generatedLyrics,
                  )
                }
                disabled={
                  !generatedLyrics
                }
                className="flex items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied ? (
                  <Check className="h-4 w-4" />
                ) : (
                  <Copy className="h-4 w-4" />
                )}
                Copy Lyrics
              </button>

              <button
                type="button"
                onClick={() =>
                  exportCurrent(
                    "Project (.json)",
                  )
                }
                disabled={
                  status !==
                  "completed"
                }
                className="flex items-center justify-center gap-2 rounded-2xl border border-white/10 py-4 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
              >
                Export Project
              </button>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center gap-3">
            <Volume2 className="h-7 w-7 text-cyan-400" />

            <div>
              <h2 className="text-2xl font-black">
                TTS Preview
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Browser text-to-speech preview.
              </p>
            </div>
          </div>

          {!speechSupported && (
            <div className="mb-6 rounded-2xl border border-yellow-500/20 bg-yellow-500/10 p-4 text-sm text-yellow-300">
              Text-to-speech is not
              available in this browser.
            </div>
          )}

          <div className="grid gap-3 sm:grid-cols-3">
            {(
              [
                ["lyrics", "Lyrics"],
                ["outline", "Outline"],
                [
                  "arrangement",
                  "Arrangement",
                ],
              ] as const
            ).map(
              ([value, label]) => (
                <button
                  key={value}
                  type="button"
                  onClick={() =>
                    setSpeechTarget(
                      value,
                    )
                  }
                  className={`rounded-xl border p-3 text-sm font-semibold ${
                    speechTarget ===
                    value
                      ? "border-violet-500 bg-violet-500/10 text-violet-300"
                      : "border-white/10"
                  }`}
                >
                  {label}
                </button>
              ),
            )}
          </div>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <RangeNumberField
              label="Speech Rate"
              value={speechRate}
              min={0.5}
              max={1.5}
              step={0.1}
              onChange={
                setSpeechRate
              }
            />

            <RangeNumberField
              label="Pitch"
              value={speechPitch}
              min={0}
              max={2}
              step={0.1}
              onChange={
                setSpeechPitch
              }
            />
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            {!speechSpeaking && (
              <button
                type="button"
                onClick={
                  speakCurrentTarget
                }
                disabled={
                  !speechSupported
                }
                className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 font-semibold disabled:opacity-40"
              >
                <Play className="h-4 w-4" />
                Speak
              </button>
            )}

            {speechSpeaking &&
              !speechPaused && (
                <button
                  type="button"
                  onClick={
                    pauseSpeech
                  }
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold"
                >
                  <Pause className="h-4 w-4" />
                  Pause
                </button>
              )}

            {speechSpeaking &&
              speechPaused && (
                <button
                  type="button"
                  onClick={
                    resumeSpeech
                  }
                  className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold"
                >
                  <Play className="h-4 w-4" />
                  Resume
                </button>
              )}

            {speechSpeaking && (
              <button
                type="button"
                onClick={
                  stopSpeech
                }
                className="flex items-center gap-2 rounded-xl border border-red-500/20 px-5 py-3 font-semibold text-red-300"
              >
                <Square className="h-4 w-4" />
                Stop
              </button>
            )}

            {!speechSupported && (
              <button
                type="button"
                disabled
                className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold opacity-40"
              >
                <VolumeX className="h-4 w-4" />
                TTS unavailable
              </button>
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <ContentCard
          title="Song Outline"
          description="Generated song structure and narrative flow."
          icon={
            <ListMusic className="h-7 w-7 text-violet-400" />
          }
        >
          {outlineText ? (
            <pre className="whitespace-pre-wrap font-sans leading-7 text-muted-foreground">
              {outlineText}
            </pre>
          ) : (
            <EmptyContent text="Generate a song to create the outline." />
          )}

          <ContentActions
            hasContent={Boolean(
              outlineText,
            )}
            onCopy={() =>
              void copyText(
                outlineText,
              )
            }
            onDownload={() =>
              exportCurrent(
                "Outline (.txt)",
              )
            }
          />
        </ContentCard>

        <ContentCard
          title="Arrangement"
          description="Section-by-section instrumentation and production."
          icon={
            <Guitar className="h-7 w-7 text-cyan-400" />
          }
        >
          {arrangementText ? (
            <pre className="whitespace-pre-wrap font-sans leading-7 text-muted-foreground">
              {arrangementText}
            </pre>
          ) : (
            <EmptyContent text="Generate a song to create the arrangement." />
          )}

          <ContentActions
            hasContent={Boolean(
              arrangementText,
            )}
            onCopy={() =>
              void copyText(
                arrangementText,
              )
            }
            onDownload={() =>
              exportCurrent(
                "Arrangement (.txt)",
              )
            }
          />
        </ContentCard>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Chord Progression
              </h2>

              <p className="mt-2 text-muted-foreground">
                Generated by the existing
                chord API.
              </p>
            </div>

            <Guitar className="h-8 w-8 text-violet-500" />
          </div>

          {chords.formatted ? (
            <div className="rounded-2xl border border-white/10 bg-background p-6">
              <p className="whitespace-pre-wrap text-xl font-bold leading-9">
                {chords.formatted}
              </p>
            </div>
          ) : chords.progression
              .length ? (
            <div className="space-y-4">
              {chords.progression.map(
                (
                  item,
                  index,
                ) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 p-5"
                  >
                    <div className="flex flex-wrap gap-3">
                      {normalizeStringArray(
                        item.chords,
                      ).map(
                        (
                          chord,
                          chordIndex,
                        ) => (
                          <span
                            key={`${chord}-${chordIndex}`}
                            className="rounded-xl bg-violet-500/10 px-4 py-2 font-bold text-violet-300"
                          >
                            {chord}
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                ),
              )}
            </div>
          ) : (
            <EmptyContent text="Generate a song to calculate the chord progression." />
          )}

          <button
            type="button"
            onClick={() => {
              void (async () => {
                try {
                  setError("");

                  const result =
                    await fetchChords(
                      musicalKey,
                      mood,
                    );

                  setChords(result);
                } catch (err) {
                  setError(
                    err instanceof
                      Error
                      ? err.message
                      : "Unable to refresh chords.",
                  );
                }
              })();
            }}
            className="mt-6 flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold transition hover:bg-white/5"
          >
            <RefreshCw className="h-4 w-4" />
            Refresh Chords
          </button>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center gap-3">
            <Tags className="h-7 w-7 text-green-400" />

            <div>
              <h2 className="text-2xl font-black">
                Song Metadata
              </h2>

              <p className="mt-1 text-sm text-muted-foreground">
                Metadata generated with
                the song package.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <DetailRow
              label="Title"
              value={
                metadata.title ||
                generatedSongTitle
              }
            />

            <DetailRow
              label="Genre"
              value={metadata.genre}
            />

            <DetailRow
              label="Mood"
              value={metadata.mood}
            />

            <DetailRow
              label="Language"
              value={
                metadata.language
              }
            />

            <DetailRow
              label="Tempo"
              value={`${metadata.tempo} BPM`}
            />

            <DetailRow
              label="Key"
              value={metadata.key}
            />

            <DetailRow
              label="Time Signature"
              value={
                metadata.timeSignature
              }
            />

            <DetailRow
              label="Singer"
              value={metadata.singer}
            />

            <DetailRow
              label="Vocal Type"
              value={
                metadata.vocalType
              }
            />

            <DetailRow
              label="Theme"
              value={
                metadata.theme ||
                "Not specified"
              }
            />

            <DetailRow
              label="Tags"
              value={
                metadata.tags.length
                  ? metadata.tags.join(
                      ", ",
                    )
                  : "None"
              }
            />
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Generated Lyrics
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI-generated lyrics from
              the song package.
            </p>
          </div>

          <div className="min-h-[400px] rounded-2xl border border-white/10 bg-background p-6">
            {generatedLyrics ? (
              <pre className="whitespace-pre-wrap font-sans leading-8 text-muted-foreground">
                {generatedLyrics}
              </pre>
            ) : (
              <EmptyContent text="Generate a song to see the lyrics here." />
            )}
          </div>

          <ContentActions
            hasContent={Boolean(
              generatedLyrics,
            )}
            onCopy={() =>
              void copyText(
                generatedLyrics,
              )
            }
            onDownload={() =>
              exportCurrent(
                "Lyrics (.txt)",
              )
            }
          />
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Export Options
            </h2>

            <p className="mt-2 text-muted-foreground">
              Export generated song data.
            </p>
          </div>

          <div className="space-y-4">
            {exportFormats.map(
              (format) => {
                const enabled =
                  format ===
                  "Lyrics (.txt)"
                    ? Boolean(
                        generatedLyrics,
                      )
                    : format ===
                      "Outline (.txt)"
                    ? Boolean(
                        outlineText,
                      )
                    : format ===
                      "Arrangement (.txt)"
                    ? Boolean(
                        arrangementText,
                      )
                    : status ===
                      "completed";

                return (
                  <button
                    key={format}
                    type="button"
                    disabled={!enabled}
                    onClick={() =>
                      exportCurrent(
                        format,
                      )
                    }
                    className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    <span className="flex items-center gap-3">
                      <FileText className="h-5 w-5" />
                      {format}
                    </span>

                    <span className="text-violet-400">
                      Export
                    </span>
                  </button>
                );
              },
            )}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            AI Suggestions
          </h2>

          <p className="mt-2 text-muted-foreground">
            Improve the next generation
            request.
          </p>

          <div className="mt-8 space-y-4">
            {suggestions.map(
              (item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() =>
                    applySuggestion(
                      item,
                    )
                  }
                  className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
                >
                  {item}
                </button>
              ),
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Generation State
          </h2>

          <div className="mt-8 space-y-4">
            <DetailRow
              label="Status"
              value={
                status ===
                "completed"
                  ? "Completed"
                  : status === "error"
                  ? "Error"
                  : status ===
                    "generating"
                  ? "Generating"
                  : "Ready"
              }
            />

            <DetailRow
              label="Lyrics"
              value={
                generatedLyrics
                  ? "Generated"
                  : "Pending"
              }
            />

            <DetailRow
              label="Outline"
              value={
                outlineText
                  ? "Generated"
                  : "Pending"
              }
            />

            <DetailRow
              label="Arrangement"
              value={
                arrangementText
                  ? "Generated"
                  : "Pending"
              }
            />

            <DetailRow
              label="Chords"
              value={
                chords.formatted ||
                chords.progression
                  .length
                  ? "Generated"
                  : "Pending"
              }
            />

            <DetailRow
              label="Metadata"
              value={
                metadata.title
                  ? "Generated"
                  : "Pending"
              }
            />
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Keyboard Shortcuts
          </h2>

          <div className="mt-8 space-y-4">
            {[
              [
                "Ctrl + Enter",
                "Generate Song",
              ],
              [
                "Ctrl + L",
                "Copy Lyrics",
              ],
              [
                "Ctrl + P",
                "Play / Pause TTS",
              ],
            ].map(
              ([key, action]) => (
                <div
                  key={key}
                  className="flex items-center justify-between rounded-xl border border-white/10 p-4"
                >
                  <kbd className="rounded-lg bg-black/30 px-3 py-2 text-sm font-bold">
                    {key}
                  </kbd>

                  <span className="text-right text-sm text-muted-foreground">
                    {action}
                  </span>
                </div>
              ),
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function SelectField({
  label,
  icon,
  value,
  onChange,
  options,
}: {
  label: string;
  icon?: React.ReactNode;
  value: string;
  onChange: (
    value: string,
  ) => void;
  options: string[];
}) {
  return (
    <div>
      <label className="mb-3 flex items-center gap-2 font-semibold">
        {icon}
        {label}
      </label>

      <select
        value={value}
        onChange={(event) =>
          onChange(
            event.target.value,
          )
        }
        className="w-full rounded-xl border border-white/10 bg-background p-4"
      >
        {options.map((item) => (
          <option key={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
}

function ToggleField({
  title,
  description,
  checked,
  onChange,
}: {
  title: string;
  description: string;
  checked: boolean;
  onChange: (
    value: boolean,
  ) => void;
}) {
  return (
    <label className="flex items-center justify-between rounded-xl border border-white/10 p-4">
      <div>
        <h3 className="font-semibold">
          {title}
        </h3>

        <p className="text-sm text-muted-foreground">
          {description}
        </p>
      </div>

      <input
        type="checkbox"
        checked={checked}
        onChange={(event) =>
          onChange(
            event.target.checked,
          )
        }
        className="h-5 w-5"
      />
    </label>
  );
}

function RangeField({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (
    value: number,
  ) => void;
}) {
  return (
    <div>
      <label className="mb-3 flex justify-between font-semibold">
        <span>{label}</span>

        <span>{value}%</span>
      </label>

      <input
        type="range"
        min={1}
        max={100}
        value={value}
        onChange={(event) =>
          onChange(
            Number(
              event.target.value,
            ),
          )
        }
        className="w-full"
      />
    </div>
  );
}

function RangeNumberField({
  label,
  value,
  min,
  max,
  step,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  step: number;
  onChange: (
    value: number,
  ) => void;
}) {
  return (
    <div>
      <label className="mb-3 flex justify-between font-semibold">
        <span>{label}</span>

        <span>
          {value.toFixed(1)}
        </span>
      </label>

      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(event) =>
          onChange(
            Number(
              event.target.value,
            ),
          )
        }
        className="w-full"
      />
    </div>
  );
}

function ProgressRow({
  title,
  value,
}: {
  title: string;
  value: number;
}) {
  const safeValue =
    Math.min(
      100,
      Math.max(0, value),
    );

  return (
    <div>
      <div className="mb-3 flex justify-between">
        <span>{title}</span>

        <span>
          {Math.round(
            safeValue,
          )}
          %
        </span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            safeValue >= 100
              ? "bg-green-500"
              : "bg-gradient-to-r from-violet-600 to-cyan-500"
          }`}
          style={{
            width: `${safeValue}%`,
          }}
        />
      </div>
    </div>
  );
}

function StatCard({
  title,
  value,
  description,
  className,
}: {
  title: string;
  value: string;
  description: string;
  className: string;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <h3 className="text-xl font-black">
        {title}
      </h3>

      <p
        className={`mt-6 text-5xl font-black ${className}`}
      >
        {value}
      </p>

      <p className="mt-3 text-muted-foreground">
        {description}
      </p>
    </div>
  );
}

function DetailRow({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="flex justify-between gap-4 rounded-xl border border-white/10 p-5">
      <span className="text-muted-foreground">
        {label}
      </span>

      <span className="max-w-[65%] text-right font-semibold">
        {value}
      </span>
    </div>
  );
}

function ContentCard({
  title,
  description,
  icon,
  children,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
      <div className="mb-8 flex items-center gap-4">
        {icon}

        <div>
          <h2 className="text-2xl font-black">
            {title}
          </h2>

          <p className="mt-1 text-muted-foreground">
            {description}
          </p>
        </div>
      </div>

      <div className="min-h-[280px] rounded-2xl border border-white/10 bg-background p-6">
        {children}
      </div>
    </div>
  );
}

function ContentActions({
  hasContent,
  onCopy,
  onDownload,
}: {
  hasContent: boolean;
  onCopy: () => void;
  onDownload: () => void;
}) {
  return (
    <div className="mt-6 flex flex-wrap gap-3">
      <button
        type="button"
        disabled={!hasContent}
        onClick={onCopy}
        className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
      >
        <Copy className="h-4 w-4" />
        Copy
      </button>

      <button
        type="button"
        disabled={!hasContent}
        onClick={onDownload}
        className="flex items-center gap-2 rounded-xl border border-white/10 px-5 py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-40"
      >
        <FileText className="h-4 w-4" />
        Download
      </button>
    </div>
  );
}

function EmptyContent({
  text,
}: {
  text: string;
}) {
  return (
    <div className="flex min-h-[250px] items-center justify-center text-center text-muted-foreground">
      {text}
    </div>
  );
}
