"use client";

import { useEffect, useState } from "react";

import {
  Music4,
  Wand2,
  Sparkles,
  Globe,
  Clock3,
  Cpu,
  Settings2,
  Loader2,
  Copy,
  Check,
  AlertCircle,
} from "lucide-react";

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

const historySongs = [
  "Summer Nights",
  "Telugu Love Song",
  "LoFi Chill Beat",
  "Motivation Anthem",
  "Epic Trailer Music",
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
  "MP3 320kbps",
  "WAV Studio",
  "FLAC Lossless",
  "MIDI",
  "Lyrics (.txt)",
  "Project (.zip)",
];

type GenerationStatus =
  | "idle"
  | "preparing"
  | "generating"
  | "completed"
  | "error";

export default function SongGenerator() {
  const [prompt, setPrompt] = useState("");

  const [genre, setGenre] = useState("Pop");
  const [mood, setMood] = useState("Happy");
  const [language, setLanguage] = useState("English");
  const [model, setModel] = useState(models[0]);

  const [duration, setDuration] = useState(180);

  const [instrumental, setInstrumental] = useState(false);
  const [explicitLyrics, setExplicitLyrics] = useState(false);
  const [highQuality, setHighQuality] = useState(true);

  const [tempo, setTempo] = useState(120);
  const [musicalKey, setMusicalKey] = useState("C Major");
  const [singer, setSinger] = useState("Male");

  const [creativity, setCreativity] = useState(70);
  const [similarity, setSimilarity] = useState(80);

  const [negativePrompt, setNegativePrompt] = useState("");

  const [generatedLyrics, setGeneratedLyrics] = useState("");
  const [generatedSongTitle, setGeneratedSongTitle] =
    useState("Untitled AI Song");

  const [status, setStatus] =
    useState<GenerationStatus>("idle");

  const [progress, setProgress] = useState(0);

  const [error, setError] = useState("");

  const [copied, setCopied] = useState(false);

  const [generationTime, setGenerationTime] =
    useState("02:18");

  const [audioUrl, setAudioUrl] = useState("");

  useEffect(() => {
    if (status !== "generating") {
      return;
    }

    const timer = window.setInterval(() => {
      setProgress((current) => {
        if (current >= 92) {
          return current;
        }

        return current + 2;
      });
    }, 700);

    return () => {
      window.clearInterval(timer);
    };
  }, [status]);

  function buildPrompt() {
    const finalPrompt = prompt.trim();

    return `
Create a complete song concept based on the following request.

USER REQUEST:
${finalPrompt || "Create an original song suitable for the selected settings."}

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
Explicit Lyrics Allowed: ${explicitLyrics ? "Yes" : "No"}
High Quality: ${highQuality ? "Yes" : "No"}
Creativity: ${creativity}%
Similarity: ${similarity}%

NEGATIVE PROMPT:
${negativePrompt.trim() || "None"}

Please provide:
1. A suitable song title.
2. A short description of the song.
3. Complete original lyrics with Verse 1, Chorus, Verse 2, Bridge and Final Chorus where appropriate.
4. Suggested instrumentation.
5. Suggested vocal style.
6. Suggested production style.

Write the lyrics in ${language}.
Make the result original and suitable for the selected genre and mood.
`.trim();
  }

  async function generateSong() {
    if (status === "generating") {
      return;
    }

    setError("");
    setCopied(false);
    setStatus("preparing");
    setProgress(10);
    setAudioUrl("");

    try {
      await new Promise((resolve) =>
        window.setTimeout(resolve, 500)
      );

      setStatus("generating");
      setProgress(20);

      const response = await fetch("/api/ai/generate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: buildPrompt(),
          type: "song",
          provider: "gemini",
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
        }),
      });

      const contentType =
        response.headers.get("content-type") || "";

      let data: any = null;

      if (contentType.includes("application/json")) {
        data = await response.json();
      } else {
        const text = await response.text();

        throw new Error(
          text
            ? `AI server returned an invalid response: ${text.slice(
                0,
                200
              )}`
            : "AI server returned an empty response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Unable to generate the song."
        );
      }

      const output =
        data?.text ||
        data?.response ||
        data?.result ||
        data?.data?.text ||
        data?.data ||
        "";

      if (!output) {
        throw new Error(
          "AI returned an empty response."
        );
      }

      setProgress(100);

      setGeneratedLyrics(String(output));

      const titleMatch = String(output).match(
        /(?:song title|title)\s*[:\-]\s*(.+)/i
      );

      if (titleMatch?.[1]) {
        setGeneratedSongTitle(
          titleMatch[1]
            .replace(/\*/g, "")
            .trim()
            .slice(0, 100)
        );
      } else {
        setGeneratedSongTitle(
          `${mood} ${language} ${genre} Song`
        );
      }

      setGenerationTime(
        `${Math.floor(duration / 60)
          .toString()
          .padStart(2, "0")}:${(duration % 60)
          .toString()
          .padStart(2, "0")}`
      );

      setStatus("completed");
    } catch (err) {
      console.error("Song generation error:", err);

      setStatus("error");
      setProgress(0);

      setError(
        err instanceof Error
          ? err.message
          : "Something went wrong while generating the song."
      );
    }
  }

  async function copyLyrics() {
    if (!generatedLyrics) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        generatedLyrics
      );

      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError(
        "Unable to copy lyrics to clipboard."
      );
    }
  }

  function applySuggestion(value: string) {
    setPrompt((current) => {
      const trimmed = current.trim();

      if (!trimmed) {
        return value;
      }

      return `${trimmed}\n${value}`;
    });
  }

  function handleKeyboardShortcut(
    event: React.KeyboardEvent
  ) {
    if (
      event.ctrlKey &&
      event.key.toLowerCase() === "enter"
    ) {
      event.preventDefault();
      generateSong();
    }
  }

  return (
    <div
      className="space-y-8"
      onKeyDown={handleKeyboardShortcut}
    >
      {/* Header */}

      <div>
        <h1 className="text-5xl font-black">
          AI Song Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Create complete songs using artificial
          intelligence.
        </p>
      </div>

      {/* Error */}

      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/20 bg-red-500/10 p-5 text-red-300">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <div>
            <p className="font-semibold">
              AI Generation Error
            </p>

            <p className="mt-1 text-sm">
              {error}
            </p>
          </div>
        </div>
      )}

      {/* Main Generator */}

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Prompt */}

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
                  Describe the music you want.
                </p>
              </div>
            </div>

            <textarea
              value={prompt}
              onChange={(event) =>
                setPrompt(event.target.value)
              }
              placeholder="Example: Create an emotional Telugu melody about friendship with piano and violin..."
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
                  onClick={() => setPrompt(item)}
                  className="rounded-full border border-white/10 px-4 py-2 text-xs text-muted-foreground transition hover:border-violet-500/50 hover:bg-violet-500/10 hover:text-violet-300"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Settings */}

        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <Settings2 className="h-7 w-7 text-violet-500" />

              <h2 className="text-2xl font-black">
                Settings
              </h2>
            </div>

            <div className="space-y-6">
              {/* Genre */}

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Music4 className="h-4 w-4" />
                  Genre
                </label>

                <select
                  value={genre}
                  onChange={(event) =>
                    setGenre(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {genres.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Mood */}

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Sparkles className="h-4 w-4" />
                  Mood
                </label>

                <select
                  value={mood}
                  onChange={(event) =>
                    setMood(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {moods.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Language */}

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Globe className="h-4 w-4" />
                  Language
                </label>

                <select
                  value={language}
                  onChange={(event) =>
                    setLanguage(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {languages.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Model */}

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Cpu className="h-4 w-4" />
                  AI Model
                </label>

                <select
                  value={model}
                  onChange={(event) =>
                    setModel(event.target.value)
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {models.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              {/* Duration */}

              <div>
                <label className="mb-3 flex items-center justify-between font-semibold">
                  <span className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4" />
                    Duration
                  </span>

                  <span>{duration}s</span>
                </label>

                <input
                  type="range"
                  min={30}
                  max={600}
                  value={duration}
                  onChange={(event) =>
                    setDuration(
                      Number(event.target.value)
                    )
                  }
                  className="w-full"
                />
              </div>

              {/* Toggles */}

              <div className="space-y-5">
                <label className="flex items-center justify-between rounded-xl border border-white/10 p-4">
                  <div>
                    <h3 className="font-semibold">
                      Instrumental
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Generate music without vocals
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={instrumental}
                    onChange={(event) =>
                      setInstrumental(
                        event.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />
                </label>

                <label className="flex items-center justify-between rounded-xl border border-white/10 p-4">
                  <div>
                    <h3 className="font-semibold">
                      Explicit Lyrics
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Allow mature content
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={explicitLyrics}
                    onChange={(event) =>
                      setExplicitLyrics(
                        event.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />
                </label>

                <label className="flex items-center justify-between rounded-xl border border-white/10 p-4">
                  <div>
                    <h3 className="font-semibold">
                      High Quality
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Better audio quality
                    </p>
                  </div>

                  <input
                    type="checkbox"
                    checked={highQuality}
                    onChange={(event) =>
                      setHighQuality(
                        event.target.checked
                      )
                    }
                    className="h-5 w-5"
                  />
                </label>
              </div>

              {/* Generate */}

              <button
                type="button"
                onClick={generateSong}
                disabled={
                  status === "generating" ||
                  status === "preparing"
                }
                className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-5 text-lg font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === "generating" ||
                status === "preparing" ? (
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

      {/* Advanced Settings */}

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Advanced Settings
            </h2>

            <p className="mt-2 text-muted-foreground">
              Fine tune your AI generation.
            </p>
          </div>

          <div className="space-y-6">
            {/* Tempo */}

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
                    Number(event.target.value)
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              />
            </div>

            {/* Key */}

            <div>
              <label className="mb-3 block font-semibold">
                Musical Key
              </label>

              <select
                value={musicalKey}
                onChange={(event) =>
                  setMusicalKey(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              >
                {musicalKeys.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Singer */}

            <div>
              <label className="mb-3 block font-semibold">
                Singer
              </label>

              <select
                value={singer}
                onChange={(event) =>
                  setSinger(event.target.value)
                }
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              >
                {singers.map((item) => (
                  <option key={item}>
                    {item}
                  </option>
                ))}
              </select>
            </div>

            {/* Creativity */}

            <div>
              <label className="mb-3 flex justify-between font-semibold">
                <span>Creativity</span>
                <span>{creativity}%</span>
              </label>

              <input
                type="range"
                min={1}
                max={100}
                value={creativity}
                onChange={(event) =>
                  setCreativity(
                    Number(event.target.value)
                  )
                }
                className="w-full"
              />
            </div>

            {/* Similarity */}

            <div>
              <label className="mb-3 flex justify-between font-semibold">
                <span>Similarity</span>
                <span>{similarity}%</span>
              </label>

              <input
                type="range"
                min={1}
                max={100}
                value={similarity}
                onChange={(event) =>
                  setSimilarity(
                    Number(event.target.value)
                  )
                }
                className="w-full"
              />
            </div>
          </div>
        </div>

        {/* Negative Prompt */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Negative Prompt
            </h2>

            <p className="mt-2 text-muted-foreground">
              Tell AI what should be avoided.
            </p>
          </div>

          <textarea
            value={negativePrompt}
            onChange={(event) =>
              setNegativePrompt(
                event.target.value
              )
            }
            placeholder="Example: No distortion, no heavy drums, avoid rap vocals, avoid background noise..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none focus:border-violet-500/50"
          />

          <div className="mt-8 rounded-2xl bg-violet-500/10 p-5">
            <h3 className="font-bold">
              Generation Tips
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>• Mention instruments.</li>
              <li>• Mention singer style.</li>
              <li>• Mention language.</li>
              <li>• Mention mood.</li>
              <li>• Mention song structure.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Generation Progress */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Generation Progress
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI generation pipeline status.
            </p>
          </div>

          <div
            className={`rounded-full px-4 py-2 font-semibold ${
              status === "completed"
                ? "bg-green-500/10 text-green-400"
                : status === "error"
                ? "bg-red-500/10 text-red-400"
                : status === "generating" ||
                  status === "preparing"
                ? "bg-violet-500/10 text-violet-400"
                : "bg-violet-500/10 text-violet-400"
            }`}
          >
            {status === "completed"
              ? "Completed"
              : status === "error"
              ? "Error"
              : status === "generating"
              ? "Generating"
              : status === "preparing"
              ? "Preparing"
              : "Ready"}
          </div>
        </div>

        <div className="space-y-8">
          <ProgressRow
            title="Preparing Prompt"
            value={
              status === "idle"
                ? 0
                : Math.min(progress, 20)
            }
          />

          <ProgressRow
            title="Generating Lyrics"
            value={
              status === "completed"
                ? 100
                : status === "generating"
                ? Math.min(
                    Math.max(progress, 20),
                    65
                  )
                : 0
            }
          />

          <ProgressRow
            title="Composing Music"
            value={
              status === "completed"
                ? 100
                : status === "generating"
                ? Math.min(
                    Math.max(progress - 20, 0),
                    100
                  )
                : 0
            }
          />

          <ProgressRow
            title="Mixing & Mastering"
            value={
              status === "completed"
                ? 100
                : status === "generating"
                ? Math.min(
                    Math.max(progress - 50, 0),
                    100
                  )
                : 0
            }
          />

          <ProgressRow
            title="Final Export"
            value={
              status === "completed"
                ? 100
                : 0
            }
          />
        </div>
      </div>

      {/* Stats */}

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-black">
            Estimated Time
          </h3>

          <p className="mt-6 text-5xl font-black text-violet-400">
            {status === "generating"
              ? generationTime
              : "02:18"}
          </p>

          <p className="mt-3 text-muted-foreground">
            {status === "completed"
              ? "Completed"
              : "Estimated"}
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-black">
            Credits Required
          </h3>

          <p className="mt-6 text-5xl font-black text-cyan-400">
            {highQuality ? 25 : 15}
          </p>

          <p className="mt-3 text-muted-foreground">
            AI Credits
          </p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h3 className="text-xl font-black">
            Output Quality
          </h3>

          <p className="mt-6 text-5xl font-black text-green-500">
            {highQuality ? "HQ" : "STD"}
          </p>

          <p className="mt-3 text-muted-foreground">
            {highQuality
              ? "Studio Master"
              : "Standard"}
          </p>
        </div>
      </div>

      {/* Generated Song */}

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Generated Song
              </h2>

              <p className="mt-2 text-muted-foreground">
                Preview and export your AI song.
              </p>
            </div>

            <Music4 className="h-8 w-8 text-violet-500" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Music4 className="h-10 w-10 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  {generatedSongTitle}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {Math.floor(duration / 60)
                    .toString()
                    .padStart(2, "0")}
                  :
                  {(duration % 60)
                    .toString()
                    .padStart(2, "0")}{" "}
                  • Stereo •{" "}
                  {highQuality ? "WAV" : "MP3"}
                </p>
              </div>
            </div>

            <div className="mt-8">
              {audioUrl ? (
                <audio
                  controls
                  src={audioUrl}
                  className="w-full"
                />
              ) : (
                <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-sm text-muted-foreground">
                  Audio generation is not connected
                  yet. The AI text/lyrics generation
                  is active.
                </div>
              )}
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <button
                type="button"
                disabled={!audioUrl}
                className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-40"
              >
                Download WAV
              </button>

              <button
                type="button"
                disabled={!audioUrl}
                className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                Download MP3
              </button>

              <button
                type="button"
                disabled={!generatedLyrics}
                onClick={copyLyrics}
                className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                {copied
                  ? "Lyrics Copied"
                  : "Copy Lyrics"}
              </button>

              <button
                type="button"
                className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5"
              >
                Share
              </button>
            </div>
          </div>
        </div>

        {/* Song Details */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Song Details
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI generation metadata.
            </p>
          </div>

          <div className="space-y-5">
            <DetailRow
              label="Genre"
              value={genre}
            />

            <DetailRow
              label="Mood"
              value={mood}
            />

            <DetailRow
              label="Language"
              value={language}
            />

            <DetailRow
              label="AI Model"
              value={model}
            />

            <DetailRow
              label="Duration"
              value={`${duration} sec`}
            />

            <DetailRow
              label="Tempo"
              value={`${tempo} BPM`}
            />

            <DetailRow
              label="Musical Key"
              value={musicalKey}
            />

            <DetailRow
              label="Singer"
              value={singer}
            />

            <div className="flex justify-between rounded-xl border border-white/10 p-5">
              <span>Quality</span>

              <span className="font-semibold text-green-500">
                {highQuality
                  ? "Studio HQ"
                  : "Standard"}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Lyrics */}

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Generated Lyrics
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI generated lyrics preview.
            </p>
          </div>

          <div className="min-h-[350px] rounded-2xl border border-white/10 bg-background p-6">
            {generatedLyrics ? (
              <pre className="whitespace-pre-wrap font-sans leading-8 text-muted-foreground">
                {generatedLyrics}
              </pre>
            ) : (
              <div className="flex min-h-[300px] items-center justify-center text-center text-muted-foreground">
                Generate a song to see the AI
                generated lyrics here.
              </div>
            )}
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={copyLyrics}
              disabled={!generatedLyrics}
              className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
            >
              {copied ? (
                <Check className="h-4 w-4" />
              ) : (
                <Copy className="h-4 w-4" />
              )}

              {copied
                ? "Copied"
                : "Copy Lyrics"}
            </button>

            <button
              type="button"
              disabled={!generatedLyrics}
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Download TXT
            </button>

            <button
              type="button"
              disabled={!generatedLyrics}
              className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
            >
              Download PDF
            </button>
          </div>
        </div>

        {/* History */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Generation History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Previously generated songs.
            </p>
          </div>

          <div className="space-y-4">
            {historySongs.map((song) => (
              <div
                key={song}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500">
                    <Music4 className="h-6 w-6 text-white" />
                  </div>

                  <div>
                    <h3 className="font-semibold">
                      {song}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Generated Recently
                    </p>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPrompt(
                      `Create a song similar in mood and style to ${song}`
                    )
                  }
                  className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5"
                >
                  Open
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Suggestions / Export / Insights */}

      <div className="grid gap-8 xl:grid-cols-3">
        {/* Suggestions */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            AI Suggestions
          </h2>

          <p className="mt-2 text-muted-foreground">
            Improve your prompt with one click.
          </p>

          <div className="mt-8 space-y-4">
            {suggestions.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  applySuggestion(item)
                }
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        {/* Export */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Export Options
          </h2>

          <p className="mt-2 text-muted-foreground">
            Download in professional formats.
          </p>

          <div className="mt-8 space-y-4">
            {exportFormats.map((format) => (
              <button
                key={format}
                type="button"
                disabled={
                  format !== "Lyrics (.txt)" &&
                  !audioUrl
                }
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
              >
                <span>{format}</span>

                <span className="text-violet-400">
                  Export
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Insights */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            AI Insights
          </h2>

          <p className="mt-2 text-muted-foreground">
            Automatic analysis.
          </p>

          <div className="mt-8 space-y-5">
            <InsightRow
              label="Commercial Score"
              value="96%"
              className="text-green-500"
            />

            <InsightRow
              label="Originality"
              value="98%"
              className="text-cyan-400"
            />

            <InsightRow
              label="Production Quality"
              value={
                highQuality
                  ? "Studio"
                  : "Standard"
              }
              className="text-violet-400"
            />

            <InsightRow
              label="Streaming Ready"
              value={
                generatedLyrics
                  ? "Yes"
                  : "Waiting"
              }
              className="text-green-500"
            />
          </div>
        </div>
      </div>

      {/* Queue / Shortcuts */}

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            AI Queue
          </h2>

          <p className="mt-2 text-muted-foreground">
            Current generation tasks.
          </p>

          <div className="mt-8">
            {status === "generating" ||
            status === "preparing" ? (
              <div className="rounded-2xl border border-violet-500/20 bg-violet-500/5 p-5">
                <div className="mb-3 flex items-center justify-between">
                  <span className="font-semibold">
                    {generatedSongTitle}
                  </span>

                  <span>
                    {progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            ) : (
              <div className="rounded-2xl border border-dashed border-white/10 p-8 text-center text-muted-foreground">
                No active generation jobs.
              </div>
            )}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Keyboard Shortcuts
          </h2>

          <p className="mt-2 text-muted-foreground">
            Speed up your workflow.
          </p>

          <div className="mt-8 space-y-4">
            {[
              ["Ctrl + Enter", "Generate Song"],
              ["Ctrl + S", "Save Project"],
              ["Ctrl + D", "Download"],
              ["Ctrl + L", "Copy Lyrics"],
              ["Ctrl + P", "Play Preview"],
              ["Ctrl + /", "Open AI Assistant"],
            ].map(([key, action]) => (
              <div
                key={key}
                className="flex items-center justify-between rounded-xl border border-white/10 p-4"
              >
                <kbd className="rounded-lg bg-black/30 px-3 py-2 text-sm font-bold">
                  {key}
                </kbd>

                <span className="text-muted-foreground">
                  {action}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
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
  return (
    <div>
      <div className="mb-3 flex justify-between">
        <span>{title}</span>

        <span>{Math.round(value)}%</span>
      </div>

      <div className="h-3 overflow-hidden rounded-full bg-white/10">
        <div
          className={`h-full rounded-full transition-all duration-500 ${
            value >= 100
              ? "bg-green-500"
              : "bg-gradient-to-r from-violet-600 to-cyan-500"
          }`}
          style={{
            width: `${Math.min(
              Math.max(value, 0),
              100
            )}%`,
          }}
        />
      </div>
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
      <span>{label}</span>

      <span className="text-right font-semibold">
        {value}
      </span>
    </div>
  );
}

function InsightRow({
  label,
  value,
  className,
}: {
  label: string;
  value: string;
  className?: string;
}) {
  return (
    <div className="rounded-2xl border border-white/10 p-5">
      <div className="flex justify-between gap-4">
        <span>{label}</span>

        <span
          className={`font-bold ${
            className || ""
          }`}
        >
          {value}
        </span>
      </div>
    </div>
  );
}
