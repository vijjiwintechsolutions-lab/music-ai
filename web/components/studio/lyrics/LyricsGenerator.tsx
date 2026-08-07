"use client";

import { useState } from "react";

import {
  Wand2,
  Music4,
 Globe,
  Sparkles,
  Copy,
  Download,
  RefreshCcw,
  Cpu,
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

export default function LyricsGenerator() {

  const [prompt, setPrompt] = useState("");

  const [genre, setGenre] = useState("Pop");

  const [mood, setMood] = useState("Happy");

  const [language, setLanguage] = useState("English");

  const [model, setModel] = useState(models[0]);

  return (

    <div className="space-y-8">

      <div>

        <h1 className="text-5xl font-black">
          AI Lyrics Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate professional lyrics using AI.
        </p>

      </div>
      <div className="grid gap-8 xl:grid-cols-3">

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
                  Describe the lyrics you want AI to create.
                </p>

              </div>

            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Write an emotional Telugu love song about missing someone during the rain..."
              className="min-h-[260px] w-full rounded-2xl border border-white/10 bg-background p-6 text-lg outline-none"
            />

          </div>

        </div>

        <div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <div className="mb-8 flex items-center gap-3">

              <Cpu className="h-7 w-7 text-violet-500" />

              <h2 className="text-2xl font-black">
                AI Settings
              </h2>

            </div>

            <div className="space-y-6">

              <div>

                <label className="mb-3 block font-semibold">

                  Genre

                </label>

                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {genres.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="mb-3 block font-semibold">

                  Mood

                </label>

                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {moods.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold">

                  <Globe className="h-4 w-4" />

                  Language

                </label>

                <select
                  value={language}
                  onChange={(e) => setLanguage(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {languages.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <div>

                <label className="mb-3 block font-semibold">

                  AI Model

                </label>

                <select
                  value={model}
                  onChange={(e) => setModel(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {models.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>

              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-5 text-lg font-bold text-white transition hover:scale-[1.02]">

                <Wand2 className="h-6 w-6" />

                Generate Lyrics

              </button>

            </div>

          </div>

        </div>

      </div>
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

            <div>

              <label className="mb-3 block font-semibold">
                Song Structure
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">

                <option>Verse - Chorus</option>

                <option>Verse - Chorus - Bridge</option>

                <option>Intro - Verse - Chorus - Outro</option>

                <option>Custom</option>

              </select>

            </div>

            <div>

              <label className="mb-3 block font-semibold">
                Number of Verses
              </label>

              <input
                type="number"
                defaultValue={2}
                min={1}
                max={10}
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold">
                Creativity
              </label>

              <input
                type="range"
                min={1}
                max={100}
                defaultValue={75}
                className="w-full"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold">
                Rhyme Strength
              </label>

              <input
                type="range"
                min={1}
                max={100}
                defaultValue={90}
                className="w-full"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold">
                Theme Keywords
              </label>

              <input
                placeholder="love, rain, memories..."
                className="w-full rounded-xl border border-white/10 bg-background p-4 outline-none"
              />

            </div>

          </div>

        </div>

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
            placeholder="Avoid repeated words, avoid sad ending, avoid English words..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-8 rounded-2xl bg-violet-500/10 p-5">

            <h3 className="font-bold">
              AI Tips
            </h3>

            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">

              <li>• Mention the story.</li>

              <li>• Mention singer perspective.</li>

              <li>• Mention rhyme style.</li>

              <li>• Mention emotion clearly.</li>

              <li>• Mention chorus idea.</li>

            </ul>

          </div>

        </div>

      </div>
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

        <div className="rounded-2xl border border-white/10 bg-background p-6">

<pre className="whitespace-pre-wrap font-sans leading-8 text-muted-foreground">
{`Verse 1

When the stars begin to shine
I can hear your voice tonight
Every heartbeat tells your name
Nothing ever feels the same

Pre Chorus

Hold my hand forever
We'll stay together

Chorus

You're my light
You're my dream
You're the reason
I believe

Verse 2

Every road will lead to you
Every sky becomes so blue
Every melody I write
Brings your memory tonight.`}
</pre>

        </div>

        <div className="mt-8 flex flex-wrap gap-4">

          <button className="flex items-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-4 font-semibold text-white">

            <Copy className="h-5 w-5" />

            Copy Lyrics

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5">

            <Download className="h-5 w-5" />

            TXT

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5">

            <Download className="h-5 w-5" />

            PDF

          </button>

          <button className="flex items-center gap-2 rounded-2xl border border-white/10 px-6 py-4 font-semibold hover:bg-white/5">

            <RefreshCcw className="h-5 w-5" />

            Regenerate

          </button>

        </div>

      </div>
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
                  98%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[98%] rounded-full bg-green-500" />

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="mb-2 flex justify-between">

                <span>Rhyme Quality</span>

                <span className="font-bold text-cyan-400">
                  94%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[94%] rounded-full bg-cyan-500" />

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="mb-2 flex justify-between">

                <span>Commercial Score</span>

                <span className="font-bold text-violet-400">
                  96%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[96%] rounded-full bg-violet-500" />

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="mb-2 flex justify-between">

                <span>Singability</span>

                <span className="font-bold text-orange-400">
                  91%
                </span>

              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">

                <div className="h-full w-[91%] rounded-full bg-orange-500" />

              </div>

            </div>

          </div>

        </div>

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
                248
              </h3>

              <p className="mt-2 text-muted-foreground">
                Words
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">

              <h3 className="text-4xl font-black">
                18
              </h3>

              <p className="mt-2 text-muted-foreground">
                Lines
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">

              <h3 className="text-4xl font-black">
                4
              </h3>

              <p className="mt-2 text-muted-foreground">
                Sections
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">

              <h3 className="text-4xl font-black">
                AABB
              </h3>

              <p className="mt-2 text-muted-foreground">
                Rhyme
              </p>

            </div>

          </div>

        </div>

      </div>
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

                <button className="rounded-xl border border-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/5">

                  Open

                </button>

              </div>

            ))}

          </div>

        </div>

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
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
              >

                {item}

              </button>

            ))}

          </div>

        </div>

      </div>
            <div className="grid gap-8 xl:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            Export Options
          </h2>

          <p className="mt-2 text-muted-foreground">
            Save your lyrics in multiple formats.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "TXT Document",
              "PDF Document",
              "DOCX File",
              "Markdown",
              "Subtitle (.srt)",
              "JSON",
            ].map((item) => (

              <button
                key={item}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >

                <span>{item}</span>

                <Download className="h-5 w-5 text-violet-400" />

              </button>

            ))}

          </div>

        </div>

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
                A+
              </h3>

              <p className="mt-3">
                Professional Quality
              </p>

            </div>

            <div className="space-y-3">

              <div className="flex justify-between">

                <span>Grammar</span>

                <span className="font-bold">
                  Excellent
                </span>

              </div>

              <div className="flex justify-between">

                <span>Vocabulary</span>

                <span className="font-bold">
                  Excellent
                </span>

              </div>

              <div className="flex justify-between">

                <span>Flow</span>

                <span className="font-bold">
                  Excellent
                </span>

              </div>

              <div className="flex justify-between">

                <span>Emotion</span>

                <span className="font-bold">
                  Excellent
                </span>

              </div>

            </div>

          </div>

        </div>

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
                12
              </h3>

              <p className="mt-3">
                Credits Used
              </p>

            </div>

            <div className="rounded-2xl bg-cyan-500/10 p-6">

              <h3 className="text-5xl font-black text-cyan-400">
                238
              </h3>

              <p className="mt-3">
                Credits Remaining
              </p>

            </div>

          </div>

        </div>

      </div>
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
                title: "Romantic Telugu Song",
                progress: 84,
              },
              {
                title: "Motivational Rap",
                progress: 58,
              },
              {
                title: "LoFi Chill Lyrics",
                progress: 31,
              },
              {
                title: "Devotional Song",
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
              ["Ctrl + Enter", "Generate Lyrics"],
              ["Ctrl + C", "Copy Lyrics"],
              ["Ctrl + D", "Download"],
              ["Ctrl + R", "Regenerate"],
              ["Ctrl + S", "Save Project"],
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

                <th className="pb-4">Title</th>

                <th className="pb-4">Language</th>

                <th className="pb-4">Genre</th>

                <th className="pb-4">Status</th>

                <th className="pb-4">Date</th>

              </tr>

            </thead>

            <tbody>

              {[
                {
                  title: "Summer Love",
                  language: "English",
                  genre: "Pop",
                  status: "Completed",
                  date: "Today",
                },
                {
                  title: "Nee Kosam",
                  language: "Telugu",
                  genre: "Romantic",
                  status: "Completed",
                  date: "Today",
                },
                {
                  title: "Hope",
                  language: "English",
                  genre: "Motivational",
                  status: "Completed",
                  date: "Yesterday",
                },
                {
                  title: "LoFi Rain",
                  language: "English",
                  genre: "LoFi",
                  status: "Completed",
                  date: "Yesterday",
                },
              ].map((item) => (

                <tr
                  key={item.title}
                  className="border-b border-white/5"
                >

                  <td className="py-5 font-semibold">
                    {item.title}
                  </td>

                  <td>{item.language}</td>

                  <td>{item.genre}</td>

                  <td>

                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">

                      {item.status}

                    </span>

                  </td>

                  <td className="text-muted-foreground">
                    {item.date}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>

  );
}
    </div>

  );
}
