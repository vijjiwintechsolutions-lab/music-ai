"use client";

import { useState } from "react";

import {
  Music4,
  Play,
  Upload,
  Download,
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
];

export default function MusicGenerator() {
  const [prompt, setPrompt] = useState("");
  const [genre, setGenre] = useState(genres[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Music Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Create studio-quality AI music, vocals, beats and albums.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Music Generator
            </h2>
          </div>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your song..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              <Wand2 className="mr-2 inline h-5 w-5" />
              Generate Music
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              <Upload className="mr-2 inline h-5 w-5" />
              Upload Audio
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Genre
          </h2>

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

          <div className="mt-8 rounded-2xl border border-white/10 p-6 text-center">
            <Music4 className="mx-auto mb-4 h-16 w-16 text-pink-500" />

            <p className="font-semibold">
              Ready to compose
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Lyrics Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate complete songs with verses, chorus and bridge.
            </p>
          </div>

          <textarea
            placeholder="Describe your song lyrics..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Lyrics
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Improve Lyrics
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Song Structure
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Intro",
              "Verse 1",
              "Pre-Chorus",
              "Chorus",
              "Verse 2",
              "Bridge",
              "Final Chorus",
              "Outro",
            ].map((section) => (
              <button
                key={section}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {section}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Language
          </h2>

          <select className="w-full rounded-xl border border-white/10 bg-background p-4">
            <option>English</option>
            <option>తెలుగు</option>
            <option>Hindi</option>
            <option>Tamil</option>
            <option>Kannada</option>
            <option>Malayalam</option>
            <option>Spanish</option>
            <option>Japanese</option>
          </select>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Mood
          </h2>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Happy",
              "Sad",
              "Romantic",
              "Energetic",
              "Relaxing",
              "Epic",
            ].map((mood) => (
              <button
                key={mood}
                className="rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Song Length
          </h2>

          <div className="space-y-4">
            {[
              "30 Seconds",
              "1 Minute",
              "2 Minutes",
              "3 Minutes",
              "5 Minutes",
              "10 Minutes",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Beat Maker
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build professional drum patterns and rhythms.
            </p>
          </div>

          <div className="grid grid-cols-8 gap-2">
            {Array.from({ length: 64 }).map((_, index) => (
              <button
                key={index}
                className="aspect-square rounded-lg border border-white/10 bg-white/5 transition hover:bg-pink-500"
              />
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Beat
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Random Pattern
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Clear
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Tempo
          </h2>

          <input
            type="range"
            min="60"
            max="200"
            defaultValue="120"
            className="w-full"
          />

          <div className="mt-4 text-center">
            <span className="text-4xl font-black text-pink-500">
              120 BPM
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Slow",
              "Medium",
              "Fast",
              "Double Time",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Instruments
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Piano",
              "Guitar",
              "Bass",
              "Drums",
              "Strings",
              "Synth",
              "Flute",
              "Violin",
              "Saxophone",
              "Trumpet",
              "Choir",
              "808 Bass",
            ].map((instrument) => (
              <button
                key={instrument}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {instrument}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Key & Chords
          </h2>

          <div className="space-y-4">
            {[
              "C Major",
              "G Major",
              "D Major",
              "A Minor",
              "E Minor",
              "F Major",
              "Chord Progression",
              "Auto Harmony",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Vocal Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate realistic AI singing voices with harmonies.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Male Vocal",
              "Female Vocal",
              "Child Voice",
              "Opera",
              "Rap",
              "Rock",
              "Soul",
              "Choir",
            ].map((voice) => (
              <button
                key={voice}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {voice}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Vocals
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Clone Voice
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Add Harmony
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Vocal Settings
          </h2>

          <div className="space-y-4">
            {[
              "Natural",
              "Studio",
              "Live",
              "Emotional",
              "Soft",
              "Powerful",
              "Auto Tune",
              "Harmony",
            ].map((setting) => (
              <button
                key={setting}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {setting}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Harmony Generator
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Unison",
              "2-Part Harmony",
              "3-Part Harmony",
              "Choir",
              "Backing Vocals",
              "Duet",
              "Call & Response",
              "Gospel",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice Effects
          </h2>

          <div className="space-y-4">
            {[
              "Reverb",
              "Echo",
              "Delay",
              "Compressor",
              "EQ",
              "Stereo Width",
              "Pitch Shift",
              "De-Esser",
            ].map((effect) => (
              <button
                key={effect}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Mixing Console
            </h2>

            <p className="mt-2 text-muted-foreground">
              Mix every instrument professionally.
            </p>
          </div>

          <div className="grid grid-cols-8 gap-4">
            {[
              "Kick",
              "Snare",
              "HiHat",
              "Bass",
              "Piano",
              "Lead",
              "Vocal",
              "FX",
            ].map((track) => (
              <div
                key={track}
                className="rounded-2xl border border-white/10 p-4 text-center"
              >
                <p className="mb-4 font-bold">
                  {track}
                </p>

                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="75"
                  className="h-40 rotate-180"
                  style={{ writingMode: "vertical-lr" }}
                />

                <p className="mt-4 text-sm text-muted-foreground">
                  Volume
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Master Volume
          </h2>

          <input
            type="range"
            min="0"
            max="100"
            defaultValue="90"
            className="w-full"
          />

          <div className="mt-4 text-center">
            <span className="text-4xl font-black text-pink-500">
              90%
            </span>
          </div>

          <div className="mt-8 space-y-4">
            {[
              "Mute All",
              "Solo",
              "Normalize",
              "Reset Mix",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audio Effects
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Equalizer",
              "Compressor",
              "Limiter",
              "Reverb",
              "Delay",
              "Chorus",
              "Flanger",
              "Stereo Widener",
              "Distortion",
              "Noise Gate",
              "Exciter",
              "De-Esser",
            ].map((effect) => (
              <button
                key={effect}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Stereo Controls
          </h2>

          <div className="space-y-5">
            {[
              "Pan Left / Right",
              "Stereo Width",
              "Bass Boost",
              "Treble Boost",
              "Mid Control",
              "Loudness",
              "Master Compressor",
              "Final Limiter",
            ].map((control) => (
              <div
                key={control}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-3 flex justify-between">
                  <span>
                    {control}
                  </span>

                  <span className="text-pink-500 font-bold">
                    75%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="75"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Mastering Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Master your tracks for streaming platforms automatically.
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-black p-8">
            <div className="grid grid-cols-64 gap-1">
              {Array.from({ length: 256 }).map((_, i) => (
                <div
                  key={i}
                  className="rounded-full bg-gradient-to-t from-pink-600 to-purple-500"
                  style={{
                    height: `${20 + Math.random() * 80}px`,
                  }}
                />
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              AI Master
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Compare
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Mastering Presets
          </h2>

          <div className="space-y-4">
            {[
              "Spotify",
              "Apple Music",
              "YouTube Music",
              "Amazon Music",
              "Tidal",
              "SoundCloud",
              "Radio",
              "Podcast",
            ].map((preset) => (
              <button
                key={preset}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold hover:border-pink-500 hover:bg-white/5"
              >
                {preset}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Loudness Meter
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "LUFS",
                value: "-14",
              },
              {
                title: "True Peak",
                value: "-1 dB",
              },
              {
                title: "Dynamic Range",
                value: "11 dB",
              },
              {
                title: "Stereo Width",
                value: "95%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>
                    {item.title}
                  </span>

                  <span className="font-bold text-pink-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600"
                    style={{
                      width: "82%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Optimization
          </h2>

          <div className="space-y-4">
            {[
              "Streaming Optimization",
              "Loudness Normalization",
              "Bass Enhancement",
              "Vocal Enhancement",
              "Stereo Expansion",
              "Noise Cleanup",
              "Phase Correction",
              "Final Quality Check",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Stem Separation
            </h2>

            <p className="mt-2 text-muted-foreground">
              Separate vocals and instruments into individual stems.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Upload className="mx-auto mb-6 h-16 w-16 text-pink-500" />

            <h3 className="text-xl font-bold">
              Upload Music File
            </h3>

            <p className="mt-3 text-muted-foreground">
              MP3, WAV, FLAC, AAC supported.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Browse Audio
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Separate Stems
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Remix
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Karaoke Mode
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Export Stems
          </h2>

          <div className="space-y-4">
            {[
              "Vocals",
              "Drums",
              "Bass",
              "Piano",
              "Guitar",
              "Strings",
              "Synth",
              "Other",
            ].map((stem) => (
              <button
                key={stem}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {stem}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Remix Studio
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Dance Remix",
              "Lo-Fi Remix",
              "EDM Remix",
              "Acoustic",
              "Rock Version",
              "Piano Version",
              "Orchestra",
              "Instrumental",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Karaoke Creator
          </h2>

          <div className="space-y-4">
            {[
              "Remove Vocals",
              "Show Lyrics",
              "Pitch Shift",
              "Tempo Change",
              "Key Change",
              "Echo Reduction",
              "Export Karaoke",
              "HD Video Lyrics",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Album Cover Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create stunning album artwork using AI.
            </p>
          </div>

          <textarea
            placeholder="Describe your album cover..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Cover
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Variations
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Enhance Quality
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Art Styles
          </h2>

          <div className="space-y-4">
            {[
              "Photorealistic",
              "Anime",
              "Cyberpunk",
              "Neon",
              "Minimal",
              "Abstract",
              "Vintage",
              "Fantasy",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Music Branding
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Artist Logo",
              "Album Logo",
              "YouTube Thumbnail",
              "Spotify Canvas",
              "Instagram Cover",
              "Facebook Banner",
              "Website Header",
              "Merch Design",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Export Artwork
          </h2>

          <div className="space-y-4">
            {[
              "1024 × 1024",
              "2048 × 2048",
              "4K Ultra HD",
              "PNG",
              "JPG",
              "WEBP",
              "Print Ready",
              "Transparent Background",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Music Video Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate cinematic music videos from your songs.
            </p>
          </div>

          <textarea
            placeholder="Describe your music video..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Storyboard
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Video Style
          </h2>

          <div className="space-y-4">
            {[
              "Cinematic",
              "Anime",
              "3D Animation",
              "Live Action",
              "Neon",
              "Fantasy",
              "Minimal",
              "Retro",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Visualizer
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Waveform",
              "Spectrum",
              "Particles",
              "Neon Bars",
              "Circular Visualizer",
              "3D Tunnel",
              "Galaxy",
              "Liquid Motion",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Video Features
          </h2>

          <div className="space-y-4">
            {[
              "Lyrics Video",
              "Animated Cover",
              "Short Clips",
              "Instagram Reel",
              "YouTube Shorts",
              "TikTok Format",
              "4K Export",
              "60 FPS",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Music Library
              </h2>

              <p className="mt-2 text-muted-foreground">
                Manage your AI-generated songs and albums.
              </p>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-6 py-3 font-bold text-white">
              New Project
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Summer Nights",
                genre: "Pop",
                duration: "3:24",
              },
              {
                title: "Epic Battle",
                genre: "Orchestra",
                duration: "4:56",
              },
              {
                title: "Dreamscape",
                genre: "Lo-Fi",
                duration: "2:58",
              },
              {
                title: "Future Bass",
                genre: "EDM",
                duration: "3:41",
              },
              {
                title: "Love Story",
                genre: "Acoustic",
                duration: "4:11",
              },
            ].map((song) => (
              <div
                key={song.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <div>
                  <h3 className="font-bold">
                    {song.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {song.genre} • {song.duration}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
                    <Play className="h-5 w-5" />
                  </button>

                  <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
                    <Download className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Playlists
          </h2>

          <div className="space-y-4">
            {[
              "Favorites",
              "Workout",
              "Relax",
              "Travel",
              "Romantic",
              "Focus",
              "Gaming",
              "Sleep",
            ].map((playlist) => (
              <button
                key={playlist}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {playlist}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Recently Played
          </h2>

          <div className="space-y-4">
            {[
              "Morning Vibes",
              "Night Drive",
              "Epic Intro",
              "Festival Beat",
              "Soft Piano",
              "AI Orchestra",
              "Motivation",
              "Coffee Time",
            ].map((item) => (
              <button
                key={item}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 transition hover:border-pink-500 hover:bg-white/5"
              >
                <span className="font-semibold">
                  {item}
                </span>

                <Play className="h-5 w-5" />
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Recommendations
          </h2>

          <div className="space-y-4">
            {[
              "Trending Pop Style",
              "Cinematic Orchestra",
              "Relaxing Lo-Fi",
              "Electronic Dance",
              "Acoustic Ballad",
              "Indian Fusion",
              "Jazz Piano",
              "Synthwave",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Music Distribution
            </h2>

            <p className="mt-2 text-muted-foreground">
              Publish your music worldwide with one click.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Spotify",
              "Apple Music",
              "YouTube Music",
              "Amazon Music",
              "Deezer",
              "Tidal",
              "SoundCloud",
              "Pandora",
              "JioSaavn",
              "Gaana",
              "Wynk Music",
              "Instagram",
            ].map((platform) => (
              <button
                key={platform}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Publish Worldwide
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Release
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Draft
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Release Settings
          </h2>

          <div className="space-y-4">
            {[
              "Single",
              "EP",
              "Album",
              "Compilation",
              "Pre-Save",
              "Release Date",
              "Visibility",
              "Explicit Content",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Commercial License
          </h2>

          <div className="space-y-4">
            {[
              "Personal Use",
              "Commercial Use",
              "Broadcast License",
              "Streaming License",
              "YouTube Monetization",
              "TV & Film",
              "Game License",
              "Unlimited License",
            ].map((license) => (
              <button
                key={license}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {license}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Royalty Dashboard
          </h2>

          <div className="space-y-5">
            {[
              ["Estimated Earnings", "₹1,28,450"],
              ["Streams", "482K"],
              ["Downloads", "18,240"],
              ["Active Licenses", "124"],
              ["Publishing", "Enabled"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-pink-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Music Analytics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Monitor streaming performance and audience growth.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Streams", "1.8M"],
              ["Listeners", "286K"],
              ["Followers", "42K"],
              ["Revenue", "₹3.8L"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-white/10 p-6 text-center"
              >
                <h3 className="text-3xl font-black text-pink-500">
                  {item[1]}
                </h3>

                <p className="mt-2 text-muted-foreground">
                  {item[0]}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 space-y-5">
            {[
              {
                title: "Monthly Growth",
                value: "92%",
              },
              {
                title: "Engagement",
                value: "87%",
              },
              {
                title: "Completion Rate",
                value: "81%",
              },
              {
                title: "Audience Retention",
                value: "95%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>{item.title}</span>

                  <span className="font-bold text-pink-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600"
                    style={{
                      width: item.value,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Top Platforms
          </h2>

          <div className="space-y-4">
            {[
              "Spotify",
              "Apple Music",
              "YouTube Music",
              "Amazon Music",
              "SoundCloud",
              "Instagram",
              "TikTok",
              "Facebook",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audience Insights
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Age Distribution",
              "Gender",
              "Top Cities",
              "Top Countries",
              "Listening Time",
              "Devices",
              "Languages",
              "Returning Listeners",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Performance Dashboard
          </h2>

          <div className="space-y-4">
            {[
              "Top Songs",
              "Trending Albums",
              "Top Countries",
              "Top Devices",
              "Playlist Adds",
              "Followers Growth",
              "Revenue Trend",
              "Export Report",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Collaboration
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with your band, producers and team in real time.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Album Production",
                members: "8 Members",
              },
              {
                title: "EDM Remix",
                members: "5 Members",
              },
              {
                title: "Movie Background Score",
                members: "12 Members",
              },
              {
                title: "Podcast Music",
                members: "4 Members",
              },
            ].map((project) => (
              <div
                key={project.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <div>
                  <h3 className="font-bold">
                    {project.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.members}
                  </p>
                </div>

                <button className="rounded-xl border border-white/10 px-5 py-2 hover:bg-white/5">
                  Open
                </button>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Create Team Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Invite Members
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Members
          </h2>

          <div className="space-y-4">
            {[
              "Producer",
              "Singer",
              "Composer",
              "Lyricist",
              "Mix Engineer",
              "Master Engineer",
              "Video Editor",
              "Manager",
            ].map((role) => (
              <button
                key={role}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {role}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Comments & Reviews
          </h2>

          <div className="space-y-4">
            {[
              "Lead vocal sounds great.",
              "Increase bass by 2 dB.",
              "Try a slower tempo.",
              "Bridge needs harmony.",
              "Export final version.",
              "Ready for mastering.",
            ].map((comment, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 p-5"
              >
                {comment}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Version History
          </h2>

          <div className="space-y-4">
            {[
              "Version 1.0",
              "Version 1.1",
              "Version 2.0",
              "Final Mix",
              "Mastered",
              "Released",
              "Live Version",
              "Acoustic Version",
            ].map((version) => (
              <button
                key={version}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {version}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Podcast Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Record, edit, clean and publish podcasts with AI.
            </p>
          </div>

          <textarea
            placeholder="Podcast topic or script..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Podcast
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Import Audio
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Record Voice
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Podcast Tools
          </h2>

          <div className="space-y-4">
            {[
              "Episode Manager",
              "Chapters",
              "Intro",
              "Outro",
              "Ads",
              "Guests",
              "RSS Feed",
              "Publishing",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Audio Enhancement
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Noise Removal",
              "Echo Removal",
              "Speech Cleanup",
              "Normalize Audio",
              "Background Music",
              "Silence Detection",
              "Breath Removal",
              "AI Enhancement",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice Processing
          </h2>

          <div className="space-y-4">
            {[
              "Voice Changer",
              "Voice Clone",
              "Transcription",
              "Translate Speech",
              "Speaker Detection",
              "Emotion Analysis",
              "Auto Chapters",
              "Subtitle Export",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Radio Station
            </h2>

            <p className="mt-2 text-muted-foreground">
              Launch your own AI-powered radio station with automated playlists.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "24/7 Live Radio",
              "Auto DJ",
              "News Breaks",
              "Music Rotation",
              "Podcast Integration",
              "Audience Requests",
              "Commercial Breaks",
              "Live Broadcast",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Start Broadcast
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Pause Stream
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              End Broadcast
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Live Status
          </h2>

          <div className="space-y-5">
            {[
              ["Status", "LIVE"],
              ["Listeners", "12,842"],
              ["Current Track", "Dreamscape"],
              ["Bitrate", "320 kbps"],
              ["Broadcast Time", "02:14:35"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
              >
                <span>{item[0]}</span>

                <span className="font-bold text-pink-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Queue Manager
          </h2>

          <div className="space-y-4">
            {[
              "Now Playing",
              "Next Song",
              "Upcoming Playlist",
              "Priority Track",
              "Sponsored Track",
              "Random Shuffle",
              "Repeat Queue",
              "Clear Queue",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Broadcast Scheduler
          </h2>

          <div className="space-y-4">
            {[
              "Morning Show",
              "Afternoon Mix",
              "Evening Drive",
              "Night Chill",
              "Weekend Special",
              "Live Event",
              "Holiday Schedule",
              "Recurring Broadcast",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Sound Effects Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate cinematic sound effects, ambient audio and game sounds.
            </p>
          </div>

          <textarea
            placeholder="Describe the sound effect you want..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Generate Sound FX
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Random FX
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Categories
          </h2>

          <div className="space-y-4">
            {[
              "Nature",
              "Animals",
              "City",
              "Sci-Fi",
              "Fantasy",
              "Horror",
              "Action",
              "Comedy",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Foley Studio
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Footsteps",
              "Door",
              "Glass",
              "Rain",
              "Thunder",
              "Wind",
              "Fire",
              "Explosion",
              "Car Engine",
              "Helicopter",
              "Sword Clash",
              "Gun Reload",
            ].map((sound) => (
              <button
                key={sound}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {sound}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Ambient & Game Audio
          </h2>

          <div className="space-y-4">
            {[
              "Forest",
              "Ocean Waves",
              "Coffee Shop",
              "Space",
              "Dungeon",
              "Battlefield",
              "Magic Spell",
              "UI Clicks",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI DJ Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Mix tracks automatically with intelligent transitions.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Track A",
              "Crossfade",
              "Track B",
              "Beat Match",
              "Transition",
              "Output",
            ].map((step, index) => (
              <div
                key={step}
                className="flex items-center gap-5 rounded-2xl border border-white/10 p-5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-pink-600 to-purple-600 font-bold text-white">
                  {index + 1}
                </div>

                <div>
                  <h3 className="font-bold">
                    {step}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    AI Mixing Stage
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Auto Mix
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Sync BPM
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Mix
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            DJ Effects
          </h2>

          <div className="space-y-4">
            {[
              "Echo",
              "Reverb",
              "Filter",
              "Flanger",
              "Delay",
              "Reverse",
              "Loop",
              "Scratch",
            ].map((effect) => (
              <button
                key={effect}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            BPM Matching
          </h2>

          <div className="space-y-5">
            {[
              {
                title: "Track A",
                value: "128 BPM",
              },
              {
                title: "Track B",
                value: "126 BPM",
              },
              {
                title: "Matched BPM",
                value: "127 BPM",
              },
              {
                title: "Sync Accuracy",
                value: "99%",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-2 flex justify-between">
                  <span>
                    {item.title}
                  </span>

                  <span className="font-bold text-pink-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-pink-600 to-purple-600"
                    style={{
                      width: "90%",
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Live Performance
          </h2>

          <div className="space-y-4">
            {[
              "Playlist Automation",
              "Crossfade",
              "Auto Transition",
              "Crowd FX",
              "Live Loop",
              "Hot Cues",
              "Sampler",
              "Broadcast Output",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Composer
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate melodies, harmonies and complete MIDI compositions.
            </p>
          </div>

          <textarea
            placeholder="Describe your melody..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Compose Melody
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Improvisation
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate MIDI
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Composition Style
          </h2>

          <div className="space-y-4">
            {[
              "Classical",
              "Jazz",
              "Pop",
              "EDM",
              "Rock",
              "Indian",
              "Cinematic",
              "Ambient",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {style}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Chord Suggestions
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "I - V - vi - IV",
              "ii - V - I",
              "vi - IV - I - V",
              "I - IV - V",
              "I - vi - IV - V",
              "Minor Ballad",
              "Jazz Progression",
              "Epic Progression",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Piano Roll Editor
          </h2>

          <div className="rounded-2xl border border-white/10 bg-background p-6">
            <div className="grid grid-cols-16 gap-1">
              {Array.from({ length: 128 }).map((_, index) => (
                <button
                  key={index}
                  className="aspect-square rounded border border-white/5 bg-white/5 hover:bg-pink-500"
                />
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/5">
              Quantize
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/5">
              Humanize
            </button>

            <button className="rounded-xl border border-white/10 px-6 py-3 hover:bg-white/5">
              Export MIDI
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Discover premium sounds, presets and community creations.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Sample Packs",
              "Loop Library",
              "MIDI Packs",
              "Vocal Packs",
              "Preset Collection",
              "Drum Kits",
              "Synth Presets",
              "FX Packs",
              "Templates",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Browse Marketplace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Upload Pack
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              My Purchases
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Plugin Store
          </h2>

          <div className="space-y-4">
            {[
              "EQ Plugins",
              "Compressors",
              "Synths",
              "Reverbs",
              "Delay FX",
              "Mastering Suite",
              "Virtual Instruments",
              "AI Plugins",
            ].map((plugin) => (
              <button
                key={plugin}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {plugin}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Community Sharing
          </h2>

          <div className="space-y-4">
            {[
              "Publish Track",
              "Share Project",
              "Collaboration Hub",
              "Trending Songs",
              "Featured Artists",
              "Top Producers",
              "Community Challenges",
              "Live Sessions",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-pink-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Featured Content
          </h2>

          <div className="space-y-5">
            {[
              ["Free Sample Packs", "1,250+"],
              ["Premium Presets", "860+"],
              ["Community Uploads", "42K+"],
              ["Plugin Downloads", "120K+"],
              ["Loop Collections", "18K+"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-pink-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-pink-600/10 via-purple-600/10 to-indigo-600/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Complete AI Music Platform
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Create songs, lyrics, vocals, beats, albums, podcasts, sound
              effects, AI radio, music videos and professional mastering from
              one powerful studio.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-8 py-4 font-bold text-white">
              Create New Song
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Browse Library
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "AI Models",
            value: "100+",
          },
          {
            title: "Music Genres",
            value: "500+",
          },
          {
            title: "Voice Styles",
            value: "1,000+",
          },
          {
            title: "Export Formats",
            value: "25+",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-pink-500">
              {item.value}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {item.title}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black">
            Export & Distribution
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Download or publish your music anywhere.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "MP3",
            "WAV",
            "FLAC",
            "AAC",
            "OGG",
            "MIDI",
            "STEMS",
            "PROJECT",
            "Spotify",
            "Apple Music",
            "YouTube Music",
            "Amazon Music",
            "SoundCloud",
            "TikTok",
            "Instagram",
            "Commercial License",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-fuchsia-600/10 via-pink-600/10 to-purple-600/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Market AI Music Studio
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          A complete all-in-one AI-powered music ecosystem featuring songwriting, vocals,
          beat production, mastering, podcast creation, sound effects,
          collaboration, analytics, publishing and worldwide distribution.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-pink-600 to-purple-600 px-10 py-5 text-lg font-bold text-white">
            Launch Music Studio
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
