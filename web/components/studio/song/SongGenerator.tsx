"use client";

import { useState } from "react";

import {
  Music4,
  Wand2,
  Sparkles,
  Mic2,
  Globe,
  Clock3,
  Cpu,
  Settings2,
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

  return (
    <div className="space-y-8">

      <div>

        <h1 className="text-5xl font-black">
          AI Song Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Create complete songs using artificial intelligence.
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
                  Song Prompt
                </h2>

                <p className="text-muted-foreground">
                  Describe the music you want.
                </p>

              </div>

            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: Create an emotional Telugu melody about friendship with piano and violin..."
              className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 text-lg outline-none"
            />

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

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold">

                  <Music4 className="h-4 w-4" />

                  Genre

                </label>

                <select
                  value={genre}
                  onChange={(e) => setGenre(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {genres.map((item) => (
                    <option key={item}>{item}</option>
                  ))}
                </select>

              </div>

              <div>

                <label className="mb-3 flex items-center gap-2 font-semibold">

                  <Sparkles className="h-4 w-4" />

                  Mood

                </label>

                <select
                  value={mood}
                  onChange={(e) => setMood(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {moods.map((item) => (
                    <option key={item}>{item}</option>
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
                    <option key={item}>{item}</option>
                  ))}
                </select>

              </div>
                            <div>

                <label className="mb-3 flex items-center gap-2 font-semibold">

                  <Cpu className="h-4 w-4" />

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
                  onChange={(e) =>
                    setDuration(Number(e.target.value))
                  }
                  className="w-full"
                />

              </div>

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
                    onChange={(e) =>
                      setInstrumental(e.target.checked)
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
                    onChange={(e) =>
                      setExplicitLyrics(e.target.checked)
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
                      Better audio quality (uses more credits)
                    </p>

                  </div>

                  <input
                    type="checkbox"
                    checked={highQuality}
                    onChange={(e) =>
                      setHighQuality(e.target.checked)
                    }
                    className="h-5 w-5"
                  />

                </label>

              </div>

              <button className="mt-4 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-5 text-lg font-bold text-white transition hover:scale-[1.02]">

                <Wand2 className="h-6 w-6" />

                Generate AI Song

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
              Fine tune your AI generation.
            </p>

          </div>

          <div className="space-y-6">

            <div>

              <label className="mb-3 block font-semibold">

                Tempo (BPM)

              </label>

              <input
                type="number"
                defaultValue={120}
                className="w-full rounded-xl border border-white/10 bg-background p-4"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold">

                Musical Key

              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">

                <option>C Major</option>
                <option>D Major</option>
                <option>E Major</option>
                <option>F Major</option>
                <option>G Major</option>
                <option>A Major</option>
                <option>B Major</option>

                <option>C Minor</option>
                <option>D Minor</option>
                <option>E Minor</option>
                <option>F Minor</option>
                <option>G Minor</option>
                <option>A Minor</option>
                <option>B Minor</option>

              </select>

            </div>

            <div>

              <label className="mb-3 block font-semibold">

                Singer

              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">

                <option>Male</option>
                <option>Female</option>
                <option>Duet</option>
                <option>Choir</option>
                <option>Child</option>

              </select>

            </div>

            <div>

              <label className="mb-3 block font-semibold">

                Creativity

              </label>

              <input
                type="range"
                min={1}
                max={100}
                defaultValue={70}
                className="w-full"
              />

            </div>

            <div>

              <label className="mb-3 block font-semibold">

                Similarity

              </label>

              <input
                type="range"
                min={1}
                max={100}
                defaultValue={80}
                className="w-full"
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
              Tell AI what should be avoided.
            </p>

          </div>

          <textarea
            placeholder="Example: No distortion, no heavy drums, avoid rap vocals, avoid background noise..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
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

          <div className="rounded-full bg-violet-500/10 px-4 py-2 font-semibold text-violet-400">

            Ready

          </div>

        </div>

        <div className="space-y-8">

          <div>

            <div className="mb-3 flex justify-between">

              <span>Preparing Prompt</span>

              <span>100%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-full rounded-full bg-green-500" />

            </div>

          </div>

          <div>

            <div className="mb-3 flex justify-between">

              <span>Generating Lyrics</span>

              <span>100%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-full rounded-full bg-green-500" />

            </div>

          </div>

          <div>

            <div className="mb-3 flex justify-between">

              <span>Composing Music</span>

              <span>82%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-[82%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />

            </div>

          </div>

          <div>

            <div className="mb-3 flex justify-between">

              <span>Mixing & Mastering</span>

              <span>45%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-[45%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />

            </div>

          </div>

          <div>

            <div className="mb-3 flex justify-between">

              <span>Final Export</span>

              <span>0%</span>

            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">

              <div className="h-full w-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />

            </div>

          </div>

        </div>

      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-xl font-black">
            Estimated Time
          </h3>

          <p className="mt-6 text-5xl font-black text-violet-400">
            02:18
          </p>

          <p className="mt-3 text-muted-foreground">
            Remaining
          </p>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h3 className="text-xl font-black">
            Credits Required
          </h3>

          <p className="mt-6 text-5xl font-black text-cyan-400">
            25
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
            HQ
          </p>

          <p className="mt-3 text-muted-foreground">
            Studio Master
          </p>

        </div>

      </div>
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
                  Untitled AI Song
                </h3>

                <p className="mt-2 text-muted-foreground">
                  03:18 • Stereo • WAV
                </p>

              </div>

            </div>

            <div className="mt-8">

              <audio
                controls
                className="w-full"
              />

            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">

              <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

                Download WAV

              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5">

                Download MP3

              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5">

                Download MIDI

              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5">

                Share

              </button>

            </div>

          </div>

        </div>

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

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>Genre</span>

              <span className="font-semibold">
                {genre}
              </span>

            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>Mood</span>

              <span className="font-semibold">
                {mood}
              </span>

            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>Language</span>

              <span className="font-semibold">
                {language}
              </span>

            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>AI Model</span>

              <span className="font-semibold">
                {model}
              </span>

            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>Duration</span>

              <span className="font-semibold">
                {duration} sec
              </span>

            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-5">

              <span>Quality</span>

              <span className="font-semibold text-green-500">
                Studio HQ
              </span>

            </div>

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
              AI generated lyrics preview.
            </p>

          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-6">

            <pre className="whitespace-pre-wrap font-sans leading-8 text-muted-foreground">
{`Verse 1

When the morning sun begins to shine
Every dream becomes a sign
Walking through this endless road
Carrying hope inside my soul

Chorus

We will rise together
Nothing lasts forever
Hearts will sing tonight
Everything feels right

Verse 2

Every step becomes a melody
Every beat becomes a memory
Dreams are written in the sky
Together we can fly...`}
            </pre>

          </div>

          <div className="mt-6 flex flex-wrap gap-4">

            <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white">

              Copy Lyrics

            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5">

              Download TXT

            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 font-semibold hover:bg-white/5">

              Download PDF

            </button>

          </div>

        </div>

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

            {[
              "Summer Nights",
              "Telugu Love Song",
              "LoFi Chill Beat",
              "Motivation Anthem",
              "Epic Trailer Music",
            ].map((song) => (

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

                <button className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5">

                  Open

                </button>

              </div>

            ))}

          </div>

        </div>

      </div>
            <div className="grid gap-8 xl:grid-cols-3">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            AI Suggestions
          </h2>

          <p className="mt-2 text-muted-foreground">
            Improve your prompt with one click.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "Add cinematic orchestra",
              "Make vocals emotional",
              "Increase bass intensity",
              "Add guitar solo",
              "Include choir in chorus",
              "Create radio-quality mix",
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

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            Export Options
          </h2>

          <p className="mt-2 text-muted-foreground">
            Download in professional formats.
          </p>

          <div className="mt-8 space-y-4">

            {[
              "MP3 320kbps",
              "WAV Studio",
              "FLAC Lossless",
              "MIDI",
              "Lyrics (.txt)",
              "Project (.zip)",
            ].map((format) => (

              <button
                key={format}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >

                <span>{format}</span>

                <span className="text-violet-400">
                  Export
                </span>

              </button>

            ))}

          </div>

        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            AI Insights
          </h2>

          <p className="mt-2 text-muted-foreground">
            Automatic analysis.
          </p>

          <div className="mt-8 space-y-5">

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="flex justify-between">

                <span>Commercial Score</span>

                <span className="font-bold text-green-500">
                  96%
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="flex justify-between">

                <span>Originality</span>

                <span className="font-bold text-cyan-400">
                  98%
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="flex justify-between">

                <span>Production Quality</span>

                <span className="font-bold text-violet-400">
                  Studio
                </span>

              </div>

            </div>

            <div className="rounded-2xl border border-white/10 p-5">

              <div className="flex justify-between">

                <span>Streaming Ready</span>

                <span className="font-bold text-green-500">
                  Yes
                </span>

              </div>

            </div>

          </div>

        </div>

      </div>
            <div className="grid gap-8 xl:grid-cols-2">

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

          <h2 className="text-2xl font-black">
            AI Queue
          </h2>

          <p className="mt-2 text-muted-foreground">
            Current generation tasks.
          </p>

          <div className="mt-8 space-y-4">

            {[
              {
                title: "Romantic Telugu Song",
                progress: 82,
              },
              {
                title: "EDM Remix",
                progress: 46,
              },
              {
                title: "LoFi Beat",
                progress: 19,
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
