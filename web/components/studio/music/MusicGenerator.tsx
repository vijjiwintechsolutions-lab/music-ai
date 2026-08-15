"use client";

import { useMemo, useState } from "react";
import {
  Check,
  Copy,
  Download,
  Loader2,
  Music4,
  Pause,
  Play,
  RefreshCw,
  Sparkles,
  Square,
  Upload,
  Volume2,
  Wand2,
} from "lucide-react";

const genres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "EDM",
  "Classical",
  "Jazz",
  "Folk",
  "Lo-Fi",
  "Telugu Melody",
  "Devotional",
];

const languages = [
  "English",
  "Telugu",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Spanish",
  "Japanese",
];

const moods = [
  "Happy",
  "Sad",
  "Romantic",
  "Energetic",
  "Relaxing",
  "Epic",
  "Emotional",
  "Motivational",
];

const lengths = [
  ["30 Seconds", 30],
  ["1 Minute", 60],
  ["2 Minutes", 120],
  ["3 Minutes", 180],
  ["5 Minutes", 300],
  ["10 Minutes", 600],
] as const;

function extractText(value: unknown): string {
  if (typeof value === "string") return value.trim();
  return "";
}

function extractJson(text: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(text) as unknown;
    if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
      return parsed as Record<string, unknown>;
    }
  } catch {}

  const match = text.match(/```(?:json)?\s*([\s\S]*?)\s*```/i);
  if (match?.[1]) {
    try {
      const parsed = JSON.parse(match[1]) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {}
  }

  const start = text.indexOf("{");
  const end = text.lastIndexOf("}");
  if (start >= 0 && end > start) {
    try {
      const parsed = JSON.parse(text.slice(start, end + 1)) as unknown;
      if (parsed && typeof parsed === "object" && !Array.isArray(parsed)) {
        return parsed as Record<string, unknown>;
      }
    } catch {}
  }

  return null;
}

async function generatePackage(prompt: string) {
  const response = await fetch("/api/ai/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      prompt,
      temperature: 0.75,
      maxTokens: 8192,
    }),
  });

  const data = (await response.json()) as {
    success?: boolean;
    data?: unknown;
    error?: unknown;
  };

  if (!response.ok || data.success === false) {
    throw new Error(extractText(data.error) || "AI generation failed.");
  }

  const text = extractText(data.data);
  if (!text) throw new Error("AI returned an empty response.");
  return text;
}

export default function MusicGenerator() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState(genres[0]);
  const [language, setLanguage] = useState(languages[0]);
  const [mood, setMood] = useState(moods[0]);
  const [length, setLength] = useState(180);
  const [lyricsPrompt, setLyricsPrompt] = useState("");
  const [lyrics, setLyrics] = useState("");
  const [title, setTitle] = useState("Untitled Song");
  const [description, setDescription] = useState("");
  const [outline, setOutline] = useState<string[]>([]);
  const [arrangement, setArrangement] = useState("");
  const [chords, setChords] = useState("");
  const [tags, setTags] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [copied, setCopied] = useState(false);
  const [speaking, setSpeaking] = useState(false);
  const [paused, setPaused] = useState(false);

  const fullText = useMemo(
    () => [
      title,
      description,
      lyrics,
      outline.length ? `Structure:\n${outline.join("\n")}` : "",
      arrangement ? `Arrangement:\n${arrangement}` : "",
      chords ? `Chords:\n${chords}` : "",
      tags.length ? `Tags: ${tags.join(", ")}` : "",
    ]
      .filter(Boolean)
      .join("\n\n"),
    [title, description, lyrics, outline, arrangement, chords, tags],
  );

  async function generateMusicPackage() {
    setLoading(true);
    setError("");

    try {
      const request = prompt.trim() || "Create an original song based on the selected settings.";
      const text = await generatePackage(`
Create an original song package.

Request: ${request}
Genre: ${genre}
Language: ${language}
Mood: ${mood}
Length: ${length} seconds

Return ONLY valid JSON:
{
  "title": "string",
  "description": "string",
  "lyrics": "complete original lyrics using [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Final Chorus], [Outro]",
  "outline": ["Intro", "Verse 1", "Pre-Chorus", "Chorus", "Verse 2", "Bridge", "Final Chorus", "Outro"],
  "arrangement": "detailed instruments and production plan",
  "chords": "section-by-section chord progression",
  "tags": ["string"]
}

Do not imitate a living artist or reproduce existing copyrighted lyrics.
      `.trim());

      const parsed = extractJson(text);
      if (!parsed) throw new Error("AI returned an invalid song package.");

      setTitle(extractText(parsed.title) || "Untitled Song");
      setDescription(extractText(parsed.description));
      setLyrics(extractText(parsed.lyrics));
      setArrangement(extractText(parsed.arrangement));
      setChords(extractText(parsed.chords));
      setOutline(Array.isArray(parsed.outline) ? parsed.outline.filter((item): item is string => typeof item === "string") : []);
      setTags(Array.isArray(parsed.tags) ? parsed.tags.filter((item): item is string => typeof item === "string") : []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Music generation failed.");
    } finally {
      setLoading(false);
    }
  }

  async function generateLyrics() {
    setLoading(true);
    setError("");
    try {
      const text = await generatePackage(`Write complete original ${language} lyrics for a ${genre} song with a ${mood} mood. User idea: ${lyricsPrompt || prompt || "Create a memorable song."}. Use clear [Verse 1], [Pre-Chorus], [Chorus], [Verse 2], [Bridge], [Final Chorus], and [Outro] labels. Do not imitate a living artist or reproduce copyrighted lyrics.`);
      const parsed = extractJson(text);
      setLyrics(parsed ? extractText(parsed.lyrics) || text : text);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Lyrics generation failed.");
    } finally {
      setLoading(false);
    }
  }

  async function refreshChords() {
    setError("");
    try {
      const key = "C";
      const response = await fetch(`/api/music-tools/chords?key=${key}&mood=${encodeURIComponent(mood)}`, { cache: "no-store" });
      const data = (await response.json()) as { success?: boolean; formatted?: unknown; error?: unknown };
      if (!response.ok || data.success === false) throw new Error(extractText(data.error) || "Chord generation failed.");
      setChords(extractText(data.formatted));
    } catch (err) {
      setError(err instanceof Error ? err.message : "Chord generation failed.");
    }
  }

  async function copyAll() {
    if (!fullText) return;
    try {
      await navigator.clipboard.writeText(fullText);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setError("Unable to copy to clipboard.");
    }
  }

  function downloadProject() {
    const blob = new Blob([JSON.stringify({ title, description, lyrics, outline, arrangement, chords, tags, genre, language, mood, length }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `${title.replace(/[^\w-]+/g, "_") || "song"}.json`;
    anchor.click();
    URL.revokeObjectURL(url);
  }

  function speak() {
    if (!("speechSynthesis" in window)) {
      setError("Browser text-to-speech is not supported.");
      return;
    }
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(lyrics || description || title);
    utterance.lang = language === "Telugu" ? "te-IN" : language === "Hindi" ? "hi-IN" : "en-US";
    utterance.rate = 1;
    utterance.onstart = () => { setSpeaking(true); setPaused(false); };
    utterance.onend = () => { setSpeaking(false); setPaused(false); };
    utterance.onerror = () => { setSpeaking(false); setPaused(false); };
    window.speechSynthesis.speak(utterance);
  }

  function pause() {
    window.speechSynthesis.pause();
    setPaused(true);
  }

  function resume() {
    window.speechSynthesis.resume();
    setPaused(false);
  }

  function stop() {
    window.speechSynthesis.cancel();
    setSpeaking(false);
    setPaused(false);
  }

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">AI Music Studio</h1>
        <p className="mt-3 text-lg text-muted-foreground">Generate a complete song package using the existing AI and music-theory APIs.</p>
      </div>

      {error && <div className="rounded-2xl border border-red-500/20 bg-red-500/10 p-4 text-red-300">{error}</div>}

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">Music Generator</h2>
          <textarea value={prompt} onChange={(e) => setPrompt(e.target.value)} placeholder="Describe your song..." className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none" />
          <div className="mt-6 flex flex-wrap gap-4">
            <button onClick={() => void generateMusicPackage()} disabled={loading} className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white disabled:opacity-50">
              {loading ? <Loader2 className="mr-2 inline h-5 w-5 animate-spin" /> : <Wand2 className="mr-2 inline h-5 w-5" />}
              {loading ? "Generating..." : "Generate Music Package"}
            </button>
            <button onClick={downloadProject} disabled={!fullText} className="rounded-2xl border border-white/10 px-8 py-4 disabled:opacity-40"><Download className="mr-2 inline h-5 w-5" />Export</button>
            <button onClick={() => setPrompt("")} className="rounded-2xl border border-white/10 px-8 py-4">Clear</button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">Settings</h2>
          <div className="space-y-5">
            <Select label="Genre" value={genre} onChange={setGenre} options={genres} />
            <Select label="Language" value={language} onChange={setLanguage} options={languages} />
            <Select label="Mood" value={mood} onChange={setMood} options={moods} />
            <div><label className="mb-2 block font-semibold">Song Length</label><select value={length} onChange={(e) => setLength(Number(e.target.value))} className="w-full rounded-xl border border-white/10 bg-background p-4">{lengths.map(([label, value]) => <option key={value} value={value}>{label}</option>)}</select></div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <Panel title="AI Lyrics Generator" icon={<Sparkles className="h-6 w-6 text-pink-400" />}>
          <textarea value={lyricsPrompt} onChange={(e) => setLyricsPrompt(e.target.value)} placeholder="Describe the lyrics..." className="min-h-[160px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none" />
          <div className="mt-5 flex flex-wrap gap-3"><button onClick={() => void generateLyrics()} disabled={loading} className="rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-3 font-semibold disabled:opacity-40">Generate Lyrics</button><button onClick={() => void copyAll()} disabled={!lyrics} className="rounded-xl border border-white/10 px-5 py-3"><Copy className="mr-2 inline h-4 w-4" />{copied ? "Copied" : "Copy"}</button></div>
        </Panel>

        <Panel title="Song Structure" icon={<Music4 className="h-6 w-6 text-purple-400" />}>
          {outline.length ? <div className="space-y-3">{outline.map((section, index) => <div key={`${section}-${index}`} className="rounded-xl border border-white/10 p-4 font-semibold">{section}</div>)}</div> : <p className="text-muted-foreground">Generate a package to create the structure.</p>}
        </Panel>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <Panel title="Lyrics" icon={<Music4 className="h-6 w-6 text-pink-400" />}><pre className="max-h-[520px] overflow-auto whitespace-pre-wrap font-sans leading-7 text-muted-foreground">{lyrics || "No lyrics generated yet."}</pre></Panel>
        <Panel title="Arrangement" icon={<Wand2 className="h-6 w-6 text-purple-400" />}><pre className="whitespace-pre-wrap font-sans leading-7 text-muted-foreground">{arrangement || "No arrangement generated yet."}</pre></Panel>
        <Panel title="Chords" icon={<RefreshCw className="h-6 w-6 text-cyan-400" />}><pre className="whitespace-pre-wrap font-sans leading-7 text-muted-foreground">{chords || "No chords generated yet."}</pre><button onClick={() => void refreshChords()} className="mt-5 rounded-xl border border-white/10 px-5 py-3"><RefreshCw className="mr-2 inline h-4 w-4" />Refresh Chords</button></Panel>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <Panel title={title} icon={<Music4 className="h-6 w-6 text-pink-400" />}>
          <p className="leading-7 text-muted-foreground">{description || "Generate a song to see its description."}</p>
          {tags.length > 0 && <div className="mt-5 flex flex-wrap gap-2">{tags.map((tag) => <span key={tag} className="rounded-full bg-pink-500/10 px-3 py-1 text-xs text-pink-300">{tag}</span>)}</div>}
        </Panel>

        <Panel title="TTS Preview" icon={<Volume2 className="h-6 w-6 text-cyan-400" />}>
          <p className="text-sm text-muted-foreground">Browser text-to-speech preview for the generated lyrics. This does not claim to generate a studio vocal audio file.</p>
          <div className="mt-5 flex flex-wrap gap-3">
            {!speaking && <button onClick={speak} disabled={!lyrics} className="rounded-xl bg-gradient-to-r from-pink-600 to-purple-600 px-5 py-3 disabled:opacity-40"><Play className="mr-2 inline h-4 w-4" />Speak</button>}
            {speaking && !paused && <button onClick={pause} className="rounded-xl border border-white/10 px-5 py-3"><Pause className="mr-2 inline h-4 w-4" />Pause</button>}
            {speaking && paused && <button onClick={resume} className="rounded-xl border border-white/10 px-5 py-3"><Play className="mr-2 inline h-4 w-4" />Resume</button>}
            {speaking && <button onClick={stop} className="rounded-xl border border-red-500/20 px-5 py-3 text-red-300"><Square className="mr-2 inline h-4 w-4" />Stop</button>}
          </div>
        </Panel>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex flex-wrap gap-4">
          <button onClick={() => void copyAll()} disabled={!fullText} className="rounded-xl border border-white/10 px-5 py-3 disabled:opacity-40"><Copy className="mr-2 inline h-4 w-4" />{copied ? "Copied" : "Copy Complete Package"}</button>
          <button onClick={downloadProject} disabled={!fullText} className="rounded-xl border border-white/10 px-5 py-3 disabled:opacity-40"><Download className="mr-2 inline h-4 w-4" />Download Project JSON</button>
          <label className="cursor-pointer rounded-xl border border-white/10 px-5 py-3"><Upload className="mr-2 inline h-4 w-4" />Upload Audio<input type="file" accept="audio/*" className="hidden" /></label>
          {title !== "Untitled Song" && <span className="flex items-center gap-2 rounded-xl bg-green-500/10 px-5 py-3 text-green-300"><Check className="h-4 w-4" />Package ready</span>}
        </div>
      </div>
    </div>
  );
}

function Select({ label, value, onChange, options }: { label: string; value: string; onChange: (value: string) => void; options: string[] }) {
  return <div><label className="mb-2 block font-semibold">{label}</label><select value={value} onChange={(e) => onChange(e.target.value)} className="w-full rounded-xl border border-white/10 bg-background p-4">{options.map((option) => <option key={option}>{option}</option>)}</select></div>;
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return <div className="rounded-3xl border border-white/10 bg-white/5 p-8"><div className="mb-6 flex items-center gap-3">{icon}<h2 className="text-2xl font-black">{title}</h2></div>{children}</div>;
}
