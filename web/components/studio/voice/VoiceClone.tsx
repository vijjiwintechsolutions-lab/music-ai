"use client";

import { useState } from "react";

import {
  Mic2,
  Upload,
  Cpu,
  Globe,
  Wand2,
  AudioLines,
} from "lucide-react";

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
  "Voice GPT Ultra",
  "Voice GPT Pro",
  "Neural Clone X",
];

export default function VoiceClone() {
  const [voiceName, setVoiceName] = useState("");
  const [language, setLanguage] = useState("English");
  const [model, setModel] = useState(models[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Voice Clone Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Train, clone and synthesize realistic AI voices.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Mic2 className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Voice Information
                </h2>

                <p className="text-muted-foreground">
                  Configure your AI voice.
                </p>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <label className="mb-3 block font-semibold">
                  Voice Name
                </label>

                <input
                  value={voiceName}
                  onChange={(e) => setVoiceName(e.target.value)}
                  placeholder="Example: My Telugu Voice"
                  className="w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
                />
              </div>

              <div>
                <label className="mb-3 block font-semibold">
                  Upload Voice Samples
                </label>

                <label className="flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-white/20 p-12 transition hover:border-violet-500">
                  <Upload className="mb-4 h-12 w-12 text-violet-400" />

                  <p className="font-semibold">
                    Click to upload audio
                  </p>

                  <p className="mt-2 text-sm text-muted-foreground">
                    WAV, MP3, FLAC (up to 500MB)
                  </p>

                  <input
                    type="file"
                    accept="audio/*"
                    className="hidden"
                  />
                </label>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
                <AudioLines className="h-5 w-5" />
                Record Voice
              </button>
            </div>
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
                Train AI Voice
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Training Settings
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure how AI learns your voice.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Voice Quality
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Standard</option>
                <option>High</option>
                <option>Studio</option>
                <option>Ultra HD</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Training Epochs
              </label>

              <input
                type="range"
                min={10}
                max={100}
                defaultValue={50}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Voice Similarity
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
                Noise Reduction
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Pitch Stability
              </label>

              <input
                type="range"
                min={1}
                max={100}
                defaultValue={85}
                className="w-full"
              />
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Speaker Profile
            </h2>

            <p className="mt-2 text-muted-foreground">
              Voice characteristics.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Gender
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Male</option>
                <option>Female</option>
                <option>Neutral</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Age Group
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Child</option>
                <option>Teen</option>
                <option>Adult</option>
                <option>Senior</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Speaking Speed
              </label>

              <input
                type="range"
                min={50}
                max={150}
                defaultValue={100}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Emotion Style
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Natural</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Energetic</option>
                <option>Calm</option>
                <option>Professional</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              AI Training Progress
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current voice model training status.
            </p>
          </div>

          <div className="rounded-full bg-violet-500/10 px-4 py-2 font-semibold text-violet-400">
            Training
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <div className="mb-3 flex justify-between">
              <span>Uploading Audio</span>
              <span>100%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-green-500" />
            </div>
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <span>Cleaning Audio</span>
              <span>100%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-full rounded-full bg-green-500" />
            </div>
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <span>Extracting Voice Features</span>
              <span>76%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[76%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <span>Neural Training</span>
              <span>48%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-[48%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>
          </div>

          <div>
            <div className="mb-3 flex justify-between">
              <span>Quality Validation</span>
              <span>0%</span>
            </div>

            <div className="h-3 overflow-hidden rounded-full bg-white/10">
              <div className="h-full w-0 rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-4">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-black">Samples</h3>
          <p className="mt-6 text-5xl font-black text-violet-400">28</p>
          <p className="mt-3 text-muted-foreground">Uploaded</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-black">Duration</h3>
          <p className="mt-6 text-5xl font-black text-cyan-400">24m</p>
          <p className="mt-3 text-muted-foreground">Voice Data</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-black">Accuracy</h3>
          <p className="mt-6 text-5xl font-black text-green-500">96%</p>
          <p className="mt-3 text-muted-foreground">Estimated</p>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center">
          <h3 className="text-xl font-black">ETA</h3>
          <p className="mt-6 text-5xl font-black text-orange-400">08m</p>
          <p className="mt-3 text-muted-foreground">Remaining</p>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Voice Synthesizer
            </h2>

            <p className="mt-2 text-muted-foreground">
              Convert text into your cloned voice.
            </p>
          </div>

          <textarea
            placeholder="Type or paste text to generate speech..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">
              Generate Speech
            </button>

            <button className="rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Clear Text
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Voice Preview
              </h2>

              <p className="mt-2 text-muted-foreground">
                Listen before downloading.
              </p>
            </div>

            <Mic2 className="h-7 w-7 text-violet-500" />
          </div>

          <div className="rounded-2xl border border-white/10 bg-background p-6">
            <div className="flex items-center gap-5">
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">
                <Mic2 className="h-10 w-10 text-white" />
              </div>

              <div>
                <h3 className="text-2xl font-bold">
                  My AI Voice
                </h3>

                <p className="mt-2 text-muted-foreground">
                  Ready for playback
                </p>
              </div>
            </div>

            <div className="mt-8">
              <audio controls className="w-full" />
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white">
                Download WAV
              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
                Download MP3
              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
                Share
              </button>

              <button className="rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
                Save Project
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Voice Library
            </h2>

            <p className="mt-2 text-muted-foreground">
              Your trained AI voices.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "My Telugu Voice",
                quality: "96%",
              },
              {
                name: "English Narrator",
                quality: "94%",
              },
              {
                name: "Podcast Voice",
                quality: "91%",
              },
              {
                name: "Studio Male",
                quality: "98%",
              },
            ].map((voice) => (
              <div
                key={voice.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <div className="flex items-center gap-4">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500">
                    <Mic2 className="h-7 w-7 text-white" />
                  </div>

                  <div>
                    <h3 className="font-bold">
                      {voice.name}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      Quality {voice.quality}
                    </p>
                  </div>
                </div>

                <button className="rounded-xl border border-white/10 px-5 py-2 text-sm font-semibold hover:bg-white/5">
                  Use
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Voice Management
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage cloned voices.
            </p>
          </div>

          <div className="space-y-5">
            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Rename Voice
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Duplicate Voice
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Export Voice Model
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Import Voice Model
            </button>

            <button className="w-full rounded-2xl border border-red-500 py-4 font-semibold text-red-500 hover:bg-red-500/10">
              Delete Voice
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Voice Analytics
          </h2>

          <p className="mt-2 text-muted-foreground">
            AI quality analysis.
          </p>

          <div className="mt-8 space-y-5">
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Similarity</span>

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
                <span>Naturalness</span>

                <span className="font-bold text-cyan-400">
                  95%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-cyan-500" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Pronunciation</span>

                <span className="font-bold text-violet-400">
                  97%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[97%] rounded-full bg-violet-500" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Emotion Accuracy</span>

                <span className="font-bold text-orange-400">
                  93%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[93%] rounded-full bg-orange-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Voice Statistics
          </h2>

          <p className="mt-2 text-muted-foreground">
            Overall model performance.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                28
              </h3>

              <p className="mt-2 text-muted-foreground">
                Samples
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                24m
              </h3>

              <p className="mt-2 text-muted-foreground">
                Duration
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                16K
              </h3>

              <p className="mt-2 text-muted-foreground">
                Sample Rate
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                WAV
              </h3>

              <p className="mt-2 text-muted-foreground">
                Format
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            AI Score
          </h2>

          <p className="mt-2 text-muted-foreground">
            Overall voice quality.
          </p>

          <div className="mt-8 rounded-2xl bg-green-500/10 p-8 text-center">
            <h3 className="text-6xl font-black text-green-500">
              A+
            </h3>

            <p className="mt-4 font-semibold">
              Professional Studio Quality
            </p>
          </div>

          <div className="mt-8 space-y-4">
            <div className="flex justify-between">
              <span>Commercial Ready</span>

              <span className="font-bold text-green-500">
                Yes
              </span>
            </div>

            <div className="flex justify-between">
              <span>Noise Free</span>

              <span className="font-bold">
                Excellent
              </span>
            </div>

            <div className="flex justify-between">
              <span>Streaming Ready</span>

              <span className="font-bold">
                Yes
              </span>
            </div>

            <div className="flex justify-between">
              <span>Voice Stability</span>

              <span className="font-bold">
                Excellent
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Voice History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recently trained AI voices.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                name: "My Telugu Voice",
                date: "Today",
                status: "Completed",
              },
              {
                name: "Podcast Voice",
                date: "Yesterday",
                status: "Completed",
              },
              {
                name: "Narrator",
                date: "2 days ago",
                status: "Completed",
              },
              {
                name: "Gaming Voice",
                date: "Last Week",
                status: "Completed",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <div>
                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {item.date}
                  </p>
                </div>

                <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                  {item.status}
                </span>
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
              Improve clone quality instantly.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Upload more clean recordings",
              "Reduce background noise",
              "Increase training epochs",
              "Use studio microphone",
              "Improve pronunciation samples",
              "Add emotional speech samples",
              "Record in quiet room",
              "Balance male/female dataset",
            ].map((tip) => (
              <button
                key={tip}
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                {tip}
              </button>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="mb-4 text-xl font-bold">
              Export Options
            </h3>

            <div className="space-y-3">
              {[
                "WAV",
                "MP3",
                "FLAC",
                "Voice Model",
                "Training Report",
              ].map((item) => (
                <button
                  key={item}
                  className="flex w-full items-center justify-between rounded-xl border border-white/10 p-4 transition hover:bg-white/5"
                >
                  <span>{item}</span>

                  <Upload className="h-5 w-5 text-violet-400" />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Voice Marketplace
          </h2>

          <p className="mt-2 text-muted-foreground">
            Premium AI voices.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Professional Narrator",
              "Podcast Host",
              "Movie Trailer",
              "Anime Voice",
              "Audiobook Reader",
              "News Anchor",
            ].map((voice) => (
              <div
                key={voice}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
              >
                <div>
                  <h3 className="font-bold">
                    {voice}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Premium Voice
                  </p>
                </div>

                <button className="rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white">
                  Try
                </button>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Trending Voices
          </h2>

          <p className="mt-2 text-muted-foreground">
            Popular community models.
          </p>

          <div className="mt-8 space-y-5">
            {[
              {
                name: "Deep Narrator",
                downloads: "12.5K",
              },
              {
                name: "Female Studio",
                downloads: "9.4K",
              },
              {
                name: "Gaming Voice",
                downloads: "8.2K",
              },
              {
                name: "Cinematic Voice",
                downloads: "7.1K",
              },
            ].map((item) => (
              <div
                key={item.name}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="flex justify-between">
                  <span className="font-semibold">
                    {item.name}
                  </span>

                  <span className="text-violet-400">
                    {item.downloads}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="text-2xl font-black">
            Favorite Voices
          </h2>

          <p className="mt-2 text-muted-foreground">
            Quick access collection.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "My Telugu Voice",
              "English Studio",
              "Narrator",
              "Podcast Host",
              "Female Soft",
            ].map((voice) => (
              <button
                key={voice}
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-violet-500 hover:bg-white/5"
              >
                {voice}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Processing Queue
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current voice generation jobs.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "My Telugu Voice",
                progress: 92,
              },
              {
                title: "Podcast Narrator",
                progress: 61,
              },
              {
                title: "Movie Trailer Voice",
                progress: 37,
              },
              {
                title: "Audiobook Reader",
                progress: 14,
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
              Faster workflow inside Voice Studio.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["Ctrl + Enter", "Train Voice"],
              ["Ctrl + U", "Upload Audio"],
              ["Ctrl + R", "Record Voice"],
              ["Ctrl + G", "Generate Speech"],
              ["Ctrl + D", "Download Audio"],
              ["Ctrl + S", "Save Voice"],
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
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Activity Timeline
          </h2>

          <p className="mt-2 text-muted-foreground">
            Recent AI voice activities.
          </p>
        </div>

        <div className="space-y-6">
          {[
            "Voice uploaded successfully",
            "Noise reduction completed",
            "Voice training started",
            "Neural model optimized",
            "Preview generated",
            "Project saved",
          ].map((activity, index) => (
            <div
              key={activity}
              className="flex items-start gap-4"
            >
              <div className="mt-1 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold">
                {index + 1}
              </div>

              <div>
                <h3 className="font-semibold">
                  {activity}
                </h3>

                <p className="text-sm text-muted-foreground">
                  Just now
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Voice Generation History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Your recently trained AI voices.
            </p>
          </div>

          <Mic2 className="h-7 w-7 text-violet-500" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-4">Voice</th>
                <th className="pb-4">Language</th>
                <th className="pb-4">Quality</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Created</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  voice: "My Telugu Voice",
                  language: "Telugu",
                  quality: "98%",
                  status: "Completed",
                  created: "Today",
                },
                {
                  voice: "Podcast Narrator",
                  language: "English",
                  quality: "96%",
                  status: "Completed",
                  created: "Yesterday",
                },
                {
                  voice: "Studio Female",
                  language: "English",
                  quality: "94%",
                  status: "Completed",
                  created: "2 Days Ago",
                },
                {
                  voice: "Movie Trailer",
                  language: "Hindi",
                  quality: "95%",
                  status: "Completed",
                  created: "Last Week",
                },
              ].map((item) => (
                <tr
                  key={item.voice}
                  className="border-b border-white/5"
                >
                  <td className="py-5 font-semibold">
                    {item.voice}
                  </td>

                  <td>
                    {item.language}
                  </td>

                  <td>
                    {item.quality}
                  </td>

                  <td>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                      {item.status}
                    </span>
                  </td>

                  <td className="text-muted-foreground">
                    {item.created}
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
