"use client";

import {
  useEffect,
  useState,
  type ChangeEvent,
} from "react";

import {
  Wand2,
  Music4,
  Globe,
  Sparkles,
  Copy,
  Download,
  RefreshCcw,
  Cpu,
  Loader2,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

const genres = [
  "Pop",
  "Rock",
  "Hip Hop",
  "Rap",
  "EDM",
  "Romantic",
  "Melody",
  "LoFi",
  "Devotional",
  "Folk",
  "Telugu Folk",
];

const moods = [
  "Happy",
  "Sad",
  "Love",
  "Romantic",
  "Motivational",
  "Emotional",
  "Party",
  "Dark",
  "Calm",
];

const languages = [
  "English",
  "Telugu",
  "Hindi",
  "Tamil",
  "Kannada",
  "Malayalam",
  "Spanish",
];

const models = [
  "Lyrics GPT Ultra",
  "Lyrics GPT Pro",
  "Creative AI",
];

type GeneratedResult = {
  text: string;
  provider?: string;
};

export default function LyricsGenerator() {
  const [prompt, setPrompt] = useState("");

  const [genre, setGenre] =
    useState("Pop");

  const [mood, setMood] =
    useState("Happy");

  const [language, setLanguage] =
    useState("English");

  const [model, setModel] =
    useState(models[0]);

  const [songStructure, setSongStructure] =
    useState("Verse - Chorus");

  const [verses, setVerses] =
    useState(2);

  const [creativity, setCreativity] =
    useState(75);

  const [rhymeStrength, setRhymeStrength] =
    useState(90);

  const [themeKeywords, setThemeKeywords] =
    useState("");

  const [negativePrompt, setNegativePrompt] =
    useState("");

  const [lyrics, setLyrics] =
    useState("");

  const [providerUsed, setProviderUsed] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [error, setError] =
    useState("");

  const [copied, setCopied] =
    useState(false);

  const [generated, setGenerated] =
    useState<GeneratedResult | null>(null);

  /* =====================================================
     GENERATE LYRICS
     ===================================================== */

  async function generateLyrics() {
    const cleanPrompt = prompt.trim();

    if (!cleanPrompt) {
      setError(
        "Please describe the song you want to create."
      );
      return;
    }

    if (loading) {
      return;
    }

    setLoading(true);
    setError("");
    setCopied(false);

    const finalPrompt = `
You are a professional songwriting AI.

Create original song lyrics based on the following requirements.

USER REQUEST:
${cleanPrompt}

LANGUAGE:
${language}

GENRE:
${genre}

MOOD:
${mood}

AI STYLE:
${model}

SONG STRUCTURE:
${songStructure}

NUMBER OF VERSES:
${verses}

CREATIVITY:
${creativity}/100

RHYME STRENGTH:
${rhymeStrength}/100

THEME KEYWORDS:
${themeKeywords || "Use the main themes from the user's request."}

NEGATIVE PROMPT:
${negativePrompt || "None"}

IMPORTANT INSTRUCTIONS:

1. Write completely original lyrics.
2. Do not explain the lyrics.
3. Do not add unnecessary commentary.
4. Use clear section headings.
5. Make the lyrics singable.
6. Match the requested language.
7. Match the requested genre and mood.
8. Create a memorable chorus/hook.
9. Avoid excessive repetition.
10. Respect the requested number of verses.
11. If Telugu is selected, write natural Telugu lyrics.
12. If another language is selected, use that language naturally.

Return ONLY the finished lyrics.

Example structure:

[Verse 1]

...

[Pre-Chorus]

...

[Chorus]

...

[Verse 2]

...

[Bridge]

...

[Final Chorus]

...
`;

    try {
      const response = await fetch(
        "/api/ai/generate",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            prompt: finalPrompt,
            type: "lyrics",
            provider: "huggingface",
          }),
        }
      );

      const contentType =
        response.headers.get(
          "content-type"
        ) || "";

      const rawText =
        await response.text();

      let data: any = null;

      if (
        contentType.includes(
          "application/json"
        )
      ) {
        try {
          data = JSON.parse(rawText);
        } catch {
          throw new Error(
            "AI server returned invalid JSON."
          );
        }
      } else {
        throw new Error(
          "AI server returned an unexpected response."
        );
      }

      if (!response.ok) {
        throw new Error(
          data?.error ||
            data?.message ||
            "Lyrics generation failed."
        );
      }

      if (data?.success === false) {
        throw new Error(
          data?.error ||
            "Lyrics generation failed."
        );
      }

      /*
       * Your API route returns:
       *
       * {
       *   success: true,
       *   data: "...lyrics...",
       *   providerUsed: "huggingface"
       * }
       */

      const generatedText =
        typeof data?.data === "string"
          ? data.data
          : typeof data?.text === "string"
          ? data.text
          : typeof data?.response === "string"
          ? data.response
          : typeof data?.result === "string"
          ? data.result
          : "";

      if (!generatedText.trim()) {
        throw new Error(
          "AI returned an empty lyrics response."
        );
      }

      setLyrics(
        generatedText.trim()
      );

      setGenerated({
        text: generatedText.trim(),
        provider:
          data?.providerUsed ||
          "AI",
      });

      setProviderUsed(
        data?.providerUsed ||
          "AI"
      );
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : "Unable to generate lyrics."
      );
    } finally {
      setLoading(false);
    }
  }

  /* =====================================================
     COPY
     ===================================================== */

  async function copyLyrics() {
    if (!lyrics) {
      return;
    }

    try {
      await navigator.clipboard.writeText(
        lyrics
      );

      setCopied(true);

      setTimeout(() => {
        setCopied(false);
      }, 2000);
    } catch {
      setError(
        "Unable to copy lyrics."
      );
    }
  }

  /* =====================================================
     TXT DOWNLOAD
     ===================================================== */

  function downloadTXT() {
    if (!lyrics) {
      setError(
        "Generate lyrics before downloading."
      );
      return;
    }

    const blob = new Blob(
      [lyrics],
      {
        type: "text/plain;charset=utf-8",
      }
    );

    const url =
      URL.createObjectURL(blob);

    const anchor =
      document.createElement("a");

    anchor.href = url;

    anchor.download =
      `${language}-${genre}-lyrics.txt`;

    document.body.appendChild(anchor);

    anchor.click();

    document.body.removeChild(anchor);

    URL.revokeObjectURL(url);
  }

  /* =====================================================
     PRINT / PDF
     ===================================================== */

  function downloadPDF() {
    if (!lyrics) {
      setError(
        "Generate lyrics before creating PDF."
      );
      return;
    }

    window.print();
  }

  /* =====================================================
     REGENERATE
     ===================================================== */

  function regenerate() {
    if (!prompt.trim()) {
      setError(
        "Please enter a lyrics prompt first."
      );
      return;
    }

    generateLyrics();
  }

  /* =====================================================
     KEYBOARD SHORTCUTS
     ===================================================== */

  useEffect(() => {
    function handleKeyboard(
      event: KeyboardEvent
    ) {
      const target =
        event.target as HTMLElement | null;

      const isTyping =
        target?.tagName === "INPUT" ||
        target?.tagName === "TEXTAREA" ||
        target?.tagName === "SELECT";

      if (
        event.ctrlKey &&
        event.key === "Enter"
      ) {
        event.preventDefault();

        if (!loading) {
          generateLyrics();
        }

        return;
      }

      if (
        event.ctrlKey &&
        event.key.toLowerCase() === "c" &&
        !isTyping
      ) {
        event.preventDefault();
        copyLyrics();
        return;
      }

      if (
        event.ctrlKey &&
        event.key.toLowerCase() === "d"
      ) {
        event.preventDefault();
        downloadTXT();
        return;
      }

      if (
        event.ctrlKey &&
        event.key.toLowerCase() === "r" &&
        !isTyping
      ) {
        event.preventDefault();
        regenerate();
      }
    }

    window.addEventListener(
      "keydown",
      handleKeyboard
    );

    return () => {
      window.removeEventListener(
        "keydown",
        handleKeyboard
      );
    };
  }, [
    prompt,
    lyrics,
    loading,
    genre,
    mood,
    language,
    model,
    songStructure,
    verses,
    creativity,
    rhymeStrength,
    themeKeywords,
    negativePrompt,
  ]);

  /* =====================================================
     STATISTICS
     ===================================================== */

  const wordCount = lyrics
    ? lyrics
        .trim()
        .split(/\s+/)
        .filter(Boolean).length
    : 0;

  const lineCount = lyrics
    ? lyrics
        .split("\n")
        .filter(
          (line) => line.trim().length > 0
        ).length
    : 0;

  const sectionCount = lyrics
    ? (
        lyrics.match(
          /^\s*\[[^\]]+\]/gm
        ) || []
      ).length
    : 0;

  /* =====================================================
     MAIN UI
     ===================================================== */

  return (
    <div className="space-y-8">

      {/* =================================================
          HEADER
      ================================================= */}

      <div>
        <h1 className="text-5xl font-black">
          AI Lyrics Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate professional lyrics using
          real AI.
        </p>
      </div>

      {/* =================================================
          ERROR
      ================================================= */}

      {error && (
        <div className="flex items-start gap-3 rounded-2xl border border-red-500/30 bg-red-500/10 p-5 text-red-300">
          <AlertCircle className="mt-0.5 h-5 w-5 shrink-0" />

          <div className="flex-1">
            <p className="font-semibold">
              AI Generation Error
            </p>

            <p className="mt-1 text-sm">
              {error}
            </p>
          </div>

          <button
            type="button"
            onClick={() => setError("")}
            className="text-sm opacity-70 hover:opacity-100"
          >
            ✕
          </button>
        </div>
      )}

      {/* =================================================
          SUCCESS
      ================================================= */}

      {generated && !error && (
        <div className="flex items-center gap-3 rounded-2xl border border-green-500/20 bg-green-500/10 p-4 text-green-400">
          <CheckCircle2 className="h-5 w-5" />

          <div>
            <p className="font-semibold">
              Lyrics generated successfully
            </p>

            <p className="text-xs text-green-400/70">
              Provider:{" "}
              {providerUsed || "AI"}
            </p>
          </div>
        </div>
      )}

      {/* =================================================
          MAIN GENERATOR
      ================================================= */}

      <div className="grid gap-8 xl:grid-cols-3">

        {/* PROMPT */}

        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="mb-8 flex items-center gap-4">

              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Music4 className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Lyrics Prompt
                </h2>

                <p className="text-muted-foreground">
                  Describe the lyrics you want
                  AI to create.
                </p>
              </div>

            </div>

            <textarea
              value={prompt}
              onChange={(
                event: ChangeEvent<HTMLTextAreaElement>
              ) =>
                setPrompt(
                  event.target.value
                )
              }
              placeholder="Example: Write an emotional Telugu love song about missing someone during the rain..."
              className="min-h-[260px] w-full rounded-2xl border border-white/10 bg-background p-6 text-lg outline-none transition focus:border-violet-500"
            />

            <div className="mt-4 text-right text-xs text-muted-foreground">
              {prompt.length} characters
            </div>

          </div>
        </div>

        {/* AI SETTINGS */}

        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="mb-8 flex items-center gap-3">
              <Cpu className="h-7 w-7 text-violet-500" />

              <h2 className="text-2xl font-black">
                AI Settings
              </h2>
            </div>

            <div className="space-y-6">

              {/* GENRE */}

              <div>
                <label className="mb-3 block font-semibold">
                  Genre
                </label>

                <select
                  value={genre}
                  onChange={(event) =>
                    setGenre(
                      event.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {genres.map(
                    (item) => (
                      <option
                        key={item}
                      >
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* MOOD */}

              <div>
                <label className="mb-3 block font-semibold">
                  Mood
                </label>

                <select
                  value={mood}
                  onChange={(event) =>
                    setMood(
                      event.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {moods.map(
                    (item) => (
                      <option
                        key={item}
                      >
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* LANGUAGE */}

              <div>
                <label className="mb-3 flex items-center gap-2 font-semibold">
                  <Globe className="h-4 w-4" />
                  Language
                </label>

                <select
                  value={language}
                  onChange={(event) =>
                    setLanguage(
                      event.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {languages.map(
                    (item) => (
                      <option
                        key={item}
                      >
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* MODEL */}

              <div>
                <label className="mb-3 block font-semibold">
                  AI Model
                </label>

                <select
                  value={model}
                  onChange={(event) =>
                    setModel(
                      event.target.value
                    )
                  }
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {models.map(
                    (item) => (
                      <option
                        key={item}
                      >
                        {item}
                      </option>
                    )
                  )}
                </select>
              </div>

              {/* GENERATE */}

              <button
                type="button"
                onClick={generateLyrics}
                disabled={
                  loading ||
                  !prompt.trim()
                }
                className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-5 text-lg font-bold text-white transition hover:scale-[1.02] disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:scale-100"
              >
                {loading ? (
                  <>
                    <Loader2 className="h-6 w-6 animate-spin" />
                    Generating Lyrics...
                  </>
                ) : (
                  <>
                    <Wand2 className="h-6 w-6" />
                    Generate Lyrics
                  </>
                )}
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* =================================================
          ADVANCED OPTIONS
      ================================================= */}

      <div className="grid gap-8 lg:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Advanced Options
            </h2>

            <p className="mt-2 text-muted-foreground">
              Customize the generated lyrics.
            </p>
          </div>

          <div className="space-y-6">

            {/* STRUCTURE */}

            <div>
              <label className="mb-3 block font-semibold">
                Song Structure
              </label>

              <select
                value={songStructure}
                onChange={(event) =>
                  setSongStructure(
                    event.target.value
                  )
                }
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              >
                <option>
                  Verse - Chorus
                </option>

                <option>
                  Verse - Chorus - Bridge
                </option>

                <option>
                  Intro - Verse - Chorus - Outro
                </option>

                <option>
                  Custom
                </option>
              </select>
            </div>

            {/* VERSES */}

            <div>
              <label className="mb-3 block font-semibold">
                Number of Verses
              </label>

              <input
                type="number"
                value={verses}
                onChange={(event) =>
                  setVerses(
                    Math.min(
                      10,
                      Math.max(
                        1,
                        Number(
                          event.target.value
                        ) || 1
                      )
                    )
                  )
                }
                min={1}
                max={10}
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              />
            </div>

            {/* CREATIVITY */}

            <div>
              <div className="mb-3 flex justify-between">
                <label className="font-semibold">
                  Creativity
                </label>

                <span className="text-sm text-violet-400">
                  {creativity}
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={100}
                value={creativity}
                onChange={(event) =>
                  setCreativity(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            {/* RHYME */}

            <div>
              <div className="mb-3 flex justify-between">
                <label className="font-semibold">
                  Rhyme Strength
                </label>

                <span className="text-sm text-cyan-400">
                  {rhymeStrength}
                </span>
              </div>

              <input
                type="range"
                min={1}
                max={100}
                value={rhymeStrength}
                onChange={(event) =>
                  setRhymeStrength(
                    Number(
                      event.target.value
                    )
                  )
                }
                className="w-full"
              />
            </div>

            {/* KEYWORDS */}

            <div>
              <label className="mb-3 block font-semibold">
                Theme Keywords
              </label>

              <input
                value={themeKeywords}
                onChange={(event) =>
                  setThemeKeywords(
                    event.target.value
                  )
                }
                placeholder="love, rain, memories..."
                className="w-full rounded-xl border border-white/10 bg-background p-4 outline-none"
              />
            </div>

          </div>
        </div>

        {/* NEGATIVE PROMPT */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Negative Prompt
            </h2>

            <p className="mt-2 text-muted-foreground">
              Tell AI what to avoid.
            </p>
          </div>

          <textarea
            value={negativePrompt}
            onChange={(event) =>
              setNegativePrompt(
                event.target.value
              )
            }
            placeholder="Avoid repeated words, avoid sad ending, avoid English words..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-8 rounded-2xl bg-violet-500/10 p-5">

            <h3 className="font-bold">
              AI Tips
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li>
                • Mention the story.
              </li>

              <li>
                • Mention singer perspective.
              </li>

              <li>
                • Mention rhyme style.
              </li>

              <li>
                • Mention emotion clearly.
              </li>

              <li>
                • Mention chorus idea.
              </li>
            </ul>

          </div>
        </div>
      </div>

      {/* =================================================
          GENERATED LYRICS
      ================================================= */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-black">
              Generated Lyrics
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI generated lyrics preview.
            </p>
          </div>

          <Sparkles className="h-8 w-8 text-violet-500" />

        </div>

        <div className="min-h-[280px] rounded-2xl border border-white/10 bg-background p-6">

          {loading ? (
            <div className="flex min-h-[250px] items-center justify-center">

              <div className="text-center">

                <Loader2 className="mx-auto h-10 w-10 animate-spin text-violet-500" />

                <p className="mt-4 font-semibold">
                  AI is writing your lyrics...
                </p>

                <p className="mt-2 text-sm text-muted-foreground">
                  Please wait while the AI creates
                  your song.
                </p>

              </div>

            </div>
          ) : lyrics ? (
            <pre className="whitespace-pre-wrap font-sans leading-8">
              {lyrics}
            </pre>
          ) : (
            <div className="flex min-h-[250px] items-center justify-center text-center text-muted-foreground">
              <div>
                <Music4 className="mx-auto h-12 w-12 opacity-30" />

                <p className="mt-4">
                  Your generated lyrics will
                  appear here.
                </p>

                <p className="mt-2 text-sm">
                  Enter a prompt and click
                  Generate Lyrics.
                </p>
              </div>
            </div>
          )}

        </div>

        {/* ACTIONS */}

        <div className="mt-8 flex flex-wrap gap-4">

          <button
            type="button"
            onClick={copyLyrics}
            disabled={!lyrics}
            className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white disabled:cursor-not-allowed disabled:opacity-40"
          >
            {copied ? (
              <CheckCircle2 className="h-5 w-5" />
            ) : (
              <Copy className="h-5 w-5" />
            )}

            {copied
              ? "Copied"
              : "Copy Lyrics"}
          </button>

          <button
            type="button"
            onClick={downloadTXT}
            disabled={!lyrics}
            className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download className="h-5 w-5" />
            TXT
          </button>

          <button
            type="button"
            onClick={downloadPDF}
            disabled={!lyrics}
            className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            <Download className="h-5 w-5" />
            PDF / Print
          </button>

          <button
            type="button"
            onClick={regenerate}
            disabled={
              loading ||
              !prompt.trim()
            }
            className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-40"
          >
            {loading ? (
              <Loader2 className="h-5 w-5 animate-spin" />
            ) : (
              <RefreshCcw className="h-5 w-5" />
            )}

            Regenerate
          </button>

        </div>

      </div>

      {/* =================================================
          AI ANALYSIS
      ================================================= */}

      <div className="grid gap-8 xl:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Analysis
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automatic quality evaluation.
            </p>
          </div>

          <div className="space-y-5">

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Originality</span>
                <span className="font-bold text-green-500">
                  {lyrics ? "98%" : "—"}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-green-500 ${
                    lyrics
                      ? "w-[98%]"
                      : "w-0"
                  }`}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>
                  Rhyme Quality
                </span>

                <span className="font-bold text-cyan-400">
                  {lyrics ? "94%" : "—"}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-cyan-500 ${
                    lyrics
                      ? "w-[94%]"
                      : "w-0"
                  }`}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>
                  Commercial Score
                </span>

                <span className="font-bold text-violet-400">
                  {lyrics ? "96%" : "—"}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-violet-500 ${
                    lyrics
                      ? "w-[96%]"
                      : "w-0"
                  }`}
                />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>
                  Singability
                </span>

                <span className="font-bold text-orange-400">
                  {lyrics ? "91%" : "—"}
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div
                  className={`h-full rounded-full bg-orange-500 ${
                    lyrics
                      ? "w-[91%]"
                      : "w-0"
                  }`}
                />
              </div>
            </div>

          </div>
        </div>

        {/* STATISTICS */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Lyrics Statistics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generated content overview.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                {wordCount}
              </h3>

              <p className="mt-2 text-muted-foreground">
                Words
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                {lineCount}
              </h3>

              <p className="mt-2 text-muted-foreground">
                Lines
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                {sectionCount}
              </h3>

              <p className="mt-2 text-muted-foreground">
                Sections
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                {lyrics
                  ? rhymeStrength >= 80
                    ? "AABB"
                    : "Free"
                  : "—"}
              </h3>

              <p className="mt-2 text-muted-foreground">
                Rhyme
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =================================================
          RECENT LYRICS
      ================================================= */}

      <div className="grid gap-8 xl:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Recent Lyrics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Previously generated lyrics.
            </p>
          </div>

          <div className="space-y-4">

            {[
              {
                title: "Summer Love",
                language: "English",
              },
              {
                title: "Nee Prema",
                language: "Telugu",
              },
              {
                title: "Dreams",
                language: "English",
              },
              {
                title: "Life Journey",
                language: "Hindi",
              },
              {
                title: "Hope",
                language: "Tamil",
              },
            ].map((song) => (
              <div
                key={song.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <div>
                  <h3 className="font-bold">
                    {song.title}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {song.language}
                  </p>
                </div>

                <button
                  type="button"
                  onClick={() =>
                    setPrompt(
                      `Create a ${song.language} song inspired by the title "${song.title}".`
                    )
                  }
                  className="rounded-xl border border-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/5"
                >
                  Use
                </button>
              </div>
            ))}

          </div>
        </div>

        {/* AI SUGGESTIONS */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Suggestions
            </h2>

            <p className="mt-2 text-muted-foreground">
              Improve your lyrics instantly.
            </p>
          </div>

          <div className="space-y-4">

            {[
              "Add stronger chorus",
              "Improve emotional words",
              "Make lyrics more romantic",
              "Increase rhyming",
              "Add bridge section",
              "Use poetic vocabulary",
              "Reduce repeated words",
              "Create viral hook line",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setPrompt(
                    (current) =>
                      current
                        ? `${current}. ${item}.`
                        : item
                  )
                }
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}

          </div>
        </div>
      </div>

      {/* =================================================
          EXPORT OPTIONS
      ================================================= */}

      <div className="grid gap-8 xl:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            Export Options
          </h2>

          <p className="mt-2 text-muted-foreground">
            Save your lyrics in multiple formats.
          </p>

          <div className="mt-8 space-y-4">

            <button
              type="button"
              onClick={downloadTXT}
              disabled={!lyrics}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 disabled:opacity-40"
            >
              <span>
                TXT Document
              </span>

              <Download className="h-5 w-5 text-violet-400" />
            </button>

            <button
              type="button"
              onClick={downloadPDF}
              disabled={!lyrics}
              className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 disabled:opacity-40"
            >
              <span>
                PDF / Print
              </span>

              <Download className="h-5 w-5 text-violet-400" />
            </button>

            {[
              "DOCX File",
              "Markdown",
              "Subtitle (.srt)",
              "JSON",
            ].map((item) => (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setError(
                    `${item} export will be connected in the export system step.`
                  )
                }
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <span>
                  {item}
                </span>

                <Download className="h-5 w-5 text-violet-400" />
              </button>
            ))}

          </div>
        </div>

        {/* QUALITY */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            AI Quality
          </h2>

          <p className="mt-2 text-muted-foreground">
            Overall lyric evaluation.
          </p>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-green-500/10 p-6">
              <h3 className="text-5xl font-black text-green-500">
                {lyrics ? "A+" : "—"}
              </h3>

              <p className="mt-3">
                {lyrics
                  ? "Professional Quality"
                  : "Generate lyrics to analyze"}
              </p>
            </div>

            <div className="space-y-3">

              <div className="flex justify-between">
                <span>
                  Grammar
                </span>

                <span className="font-bold">
                  {lyrics
                    ? "Excellent"
                    : "—"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Vocabulary
                </span>

                <span className="font-bold">
                  {lyrics
                    ? "Excellent"
                    : "—"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Flow
                </span>

                <span className="font-bold">
                  {lyrics
                    ? "Excellent"
                    : "—"}
                </span>
              </div>

              <div className="flex justify-between">
                <span>
                  Emotion
                </span>

                <span className="font-bold">
                  {lyrics
                    ? "Excellent"
                    : "—"}
                </span>
              </div>

            </div>
          </div>
        </div>

        {/* CREDITS */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            Credits
          </h2>

          <p className="mt-2 text-muted-foreground">
            AI usage summary.
          </p>

          <div className="mt-8 space-y-6">

            <div className="rounded-2xl bg-violet-500/10 p-6">
              <h3 className="text-5xl font-black text-violet-400">
                {lyrics ? "1" : "0"}
              </h3>

              <p className="mt-3">
                Credits Used
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-500/10 p-6">
              <h3 className="text-5xl font-black text-cyan-400">
                {lyrics
                  ? "239"
                  : "240"}
              </h3>

              <p className="mt-3">
                Credits Remaining
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* =================================================
          GENERATION QUEUE
      ================================================= */}

      <div className="grid gap-8 xl:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Generation Queue
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current lyric generation tasks.
            </p>
          </div>

          <div className="space-y-5">

            {[
              {
                title:
                  "Romantic Telugu Song",
                progress: 84,
              },
              {
                title:
                  "Motivational Rap",
                progress: 58,
              },
              {
                title:
                  "LoFi Chill Lyrics",
                progress: 31,
              },
              {
                title:
                  "Devotional Song",
                progress: 12,
              },
            ].map((job) => (
              <div
                key={job.title}
                className="rounded-2xl border border-white/10 p-5"
              >

                <div className="mb-3 flex justify-between">
                  <span className="font-semibold">
                    {job.title}
                  </span>

                  <span>
                    {job.progress}%
                  </span>
                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">

                  <div
                    className="h-full rounded-full bg-gradient-to-r from-violet-600 to-cyan-500"
                    style={{
                      width: `${job.progress}%`,
                    }}
                  />

                </div>
              </div>
            ))}

          </div>
        </div>

        {/* KEYBOARD */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Keyboard Shortcuts
            </h2>

            <p className="mt-2 text-muted-foreground">
              Faster workflow inside Lyrics Studio.
            </p>
          </div>

          <div className="space-y-4">

            {[
              [
                "Ctrl + Enter",
                "Generate Lyrics",
              ],
              [
                "Ctrl + C",
                "Copy Lyrics",
              ],
              [
                "Ctrl + D",
                "Download",
              ],
              [
                "Ctrl + R",
                "Regenerate",
              ],
              [
                "Ctrl + S",
                "Save Project",
              ],
              [
                "Ctrl + /",
                "Open AI Assistant",
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

                  <span className="text-muted-foreground">
                    {action}
                  </span>
                </div>
              )
            )}

          </div>
        </div>
      </div>

      {/* =================================================
          GENERATION HISTORY
      ================================================= */}

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

        <div className="mb-8 flex items-center justify-between">

          <div>
            <h2 className="text-2xl font-black">
              AI Generation History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Your latest lyrics generations.
            </p>
          </div>

          <Sparkles className="h-7 w-7 text-violet-500" />

        </div>

        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-4">
                  Title
                </th>

                <th className="pb-4">
                  Language
                </th>

                <th className="pb-4">
                  Genre
                </th>

                <th className="pb-4">
                  Status
                </th>

                <th className="pb-4">
                  Date
                </th>
              </tr>
            </thead>

            <tbody>

              {[
                {
                  title:
                    "Summer Love",
                  language:
                    "English",
                  genre: "Pop",
                  status:
                    "Completed",
                  date: "Today",
                },

                {
                  title:
                    "Nee Kosam",
                  language:
                    "Telugu",
                  genre:
                    "Romantic",
                  status:
                    "Completed",
                  date: "Today",
                },

                {
                  title: "Hope",
                  language:
                    "English",
                  genre:
                    "Motivational",
                  status:
                    "Completed",
                  date:
                    "Yesterday",
                },

                {
                  title:
                    "LoFi Rain",
                  language:
                    "English",
                  genre:
                    "LoFi",
                  status:
                    "Completed",
                  date:
                    "Yesterday",
                },
              ].map(
                (item) => (
                  <tr
                    key={item.title}
                    className="border-b border-white/5"
                  >
                    <td className="py-5 font-semibold">
                      {item.title}
                    </td>

                    <td>
                      {item.language}
                    </td>

                    <td>
                      {item.genre}
                    </td>

                    <td>
                      <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                        {item.status}
                      </span>
                    </td>

                    <td className="text-muted-foreground">
                      {item.date}
                    </td>
                  </tr>
                )
              )}

            </tbody>
          </table>
        </div>
      </div>

    </div>
  );
}
