"use client";

import { useState } from "react";

import {
  Video,
  Sparkles,
  Wand2,
  Settings2,
  Film,
  ImageIcon,
} from "lucide-react";

const models = [
  "Veo 3",
  "Runway Gen-4",
  "Pika 2.2",
  "Luma Dream Machine",
];

const styles = [
  "Cinematic",
  "Realistic",
  "Anime",
  "3D",
  "Pixar",
  "Cyberpunk",
];

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState("");
  const [model, setModel] = useState(models[0]);
  const [style, setStyle] = useState(styles[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Video Generator
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate professional AI videos from text or images.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-red-600 to-orange-500">
                <Video className="h-8 w-8 text-white" />
              </div>

              <div>
                <h2 className="text-2xl font-black">
                  Video Prompt
                </h2>

                <p className="text-muted-foreground">
                  Describe the video you want AI to create.
                </p>
              </div>
            </div>

            <textarea
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Example: A cinematic drone shot flying through a futuristic city at sunset..."
              className="min-h-[260px] w-full rounded-2xl border border-white/10 bg-background p-6 text-lg outline-none"
            />
          </div>
        </div>

        <div>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
            <div className="mb-8 flex items-center gap-3">
              <Settings2 className="h-7 w-7 text-red-500" />

              <h2 className="text-2xl font-black">
                Generation Settings
              </h2>
            </div>

            <div className="space-y-6">
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

              <div>
                <label className="mb-3 block font-semibold">
                  Style
                </label>

                <select
                  value={style}
                  onChange={(e) => setStyle(e.target.value)}
                  className="w-full rounded-xl border border-white/10 bg-background p-4"
                >
                  {styles.map((item) => (
                    <option key={item}>
                      {item}
                    </option>
                  ))}
                </select>
              </div>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-5 text-lg font-bold text-white">
                <Sparkles className="h-6 w-6" />
                Generate Video
              </button>

              <button className="flex w-full items-center justify-center gap-3 rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
                <ImageIcon className="h-5 w-5" />
                Image → Video
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Advanced Prompt
            </h2>

            <p className="mt-2 text-muted-foreground">
              Improve video generation quality.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Negative Prompt
              </label>

              <textarea
                placeholder="blurry, watermark, low quality, distorted face..."
                className="min-h-[140px] w-full rounded-2xl border border-white/10 bg-background p-5 outline-none"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Prompt Strength
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
                Motion Intensity
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={70}
                className="w-full"
              />
            </div>

            <button className="flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              <Wand2 className="h-5 w-5" />
              Enhance Prompt
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Video Settings
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure output quality.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Duration
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>5 Seconds</option>
                <option>10 Seconds</option>
                <option>15 Seconds</option>
                <option>30 Seconds</option>
                <option>60 Seconds</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Resolution
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>720p</option>
                <option>1080p</option>
                <option>2K</option>
                <option>4K</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Frame Rate
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>24 FPS</option>
                <option>30 FPS</option>
                <option>60 FPS</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Camera Motion
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Static</option>
                <option>Pan</option>
                <option>Zoom In</option>
                <option>Zoom Out</option>
                <option>Orbit</option>
                <option>Drone</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Random Seed
              </label>

              <input
                type="number"
                defaultValue={123456}
                className="w-full rounded-xl border border-white/10 bg-background p-4 outline-none"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Video Preview
              </h2>

              <p className="mt-2 text-muted-foreground">
                Preview your generated AI videos.
              </p>
            </div>

            <Film className="h-8 w-8 text-red-500" />
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="overflow-hidden rounded-3xl border border-white/10 bg-background"
              >
                <div className="flex aspect-video items-center justify-center bg-gradient-to-br from-red-600/20 to-orange-500/20">
                  <Video className="h-20 w-20 text-red-400" />
                </div>

                <div className="space-y-4 p-5">
                  <div>
                    <h3 className="font-bold">
                      Video {item}
                    </h3>

                    <p className="mt-1 text-sm text-muted-foreground">
                      1920 × 1080 • 10s
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <button className="rounded-xl bg-gradient-to-r from-red-600 to-orange-500 py-3 font-semibold text-white">
                      Preview
                    </button>

                    <button className="rounded-xl border border-white/10 py-3 font-semibold hover:bg-white/5">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Render Progress
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI rendering status.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <div className="mb-3 flex justify-between">
                <span>Prompt Analysis</span>
                <span>100%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-green-500" />
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <span>Scene Planning</span>
                <span>100%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-full rounded-full bg-green-500" />
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <span>Frame Rendering</span>
                <span>74%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[74%] rounded-full bg-gradient-to-r from-red-600 to-orange-500" />
              </div>
            </div>

            <div>
              <div className="mb-3 flex justify-between">
                <span>Video Encoding</span>
                <span>38%</span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[38%] rounded-full bg-gradient-to-r from-red-600 to-orange-500" />
              </div>
            </div>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Render Again
            </button>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Export MP4
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Export WebM
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Export GIF
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Scene Builder
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create multiple scenes for your video.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Opening Scene",
              "Main Scene",
              "Action Scene",
              "Transition",
              "Ending Scene",
            ].map((scene, index) => (
              <div
                key={scene}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">
                      Scene {index + 1}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {scene}
                    </p>
                  </div>

                  <button className="rounded-xl border border-white/10 px-4 py-2 text-sm hover:bg-white/5">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Character Controls
            </h2>

            <p className="mt-2 text-muted-foreground">
              Configure AI actors and animation.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Character Count
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Emotion
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Neutral</option>
                <option>Happy</option>
                <option>Sad</option>
                <option>Angry</option>
                <option>Excited</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Walking Speed
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={55}
                className="w-full"
              />
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Apply Character Settings
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Camera Path Editor
          </h2>

          <p className="mt-2 text-muted-foreground">
            Customize cinematic camera movements.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {[
            "Static",
            "Pan Left",
            "Pan Right",
            "Tilt Up",
            "Tilt Down",
            "Orbit",
            "Crane",
            "Drone",
            "Handheld",
          ].map((item) => (
            <button
              key={item}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Animation Timeline
          </h2>

          <p className="mt-2 text-muted-foreground">
            Timeline overview for generated scenes.
          </p>
        </div>

        <div className="space-y-5">
          {[
            "0s - Intro",
            "3s - Camera Zoom",
            "6s - Character Motion",
            "9s - Final Transition",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5"
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold">
                  {item}
                </span>

                <button className="rounded-lg border border-white/10 px-3 py-2 text-sm hover:bg-white/5">
                  Edit
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Voice & Lip Sync
            </h2>

            <p className="mt-2 text-muted-foreground">
              Synchronize speech with animated characters.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Voice Model
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Male Professional</option>
                <option>Female Professional</option>
                <option>Young Male</option>
                <option>Young Female</option>
                <option>Custom Voice Clone</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Lip Sync Accuracy
              </label>

              <input
                type="range"
                min={50}
                max={100}
                defaultValue={95}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Speech Speed
              </label>

              <input
                type="range"
                min={50}
                max={150}
                defaultValue={100}
                className="w-full"
              />
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Apply Voice Sync
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Audio Mixer
            </h2>

            <p className="mt-2 text-muted-foreground">
              Mix narration, music and sound effects.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Narration Volume
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={90}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Background Music
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={45}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Sound Effects
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={60}
                className="w-full"
              />
            </div>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Upload Background Music
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Upload Voice Over
            </button>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Sound Effects Library
          </h2>

          <p className="mt-2 text-muted-foreground">
            One-click cinematic audio effects.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
          {[
            "Explosion",
            "Rain",
            "Thunder",
            "Wind",
            "Ocean",
            "Fire",
            "Footsteps",
            "Crowd",
            "Birds",
            "Drone",
            "Car Engine",
            "Magic",
          ].map((effect) => (
            <button
              key={effect}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
            >
              {effect}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Effects
            </h2>

            <p className="mt-2 text-muted-foreground">
              Enhance your videos with AI effects.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Cinematic Glow",
              "HDR",
              "Bloom",
              "Lens Flare",
              "Depth of Field",
              "Night Vision",
              "Fire",
              "Snow",
              "Rain",
              "Lightning",
            ].map((effect) => (
              <button
                key={effect}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Video Transitions
            </h2>

            <p className="mt-2 text-muted-foreground">
              Smooth transitions between scenes.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Fade",
              "Cross Dissolve",
              "Zoom",
              "Slide",
              "Swipe",
              "Blur",
              "Flash",
              "Rotate",
              "Glitch",
              "Film Burn",
            ].map((transition) => (
              <button
                key={transition}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {transition}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Color Grading
            </h2>

            <p className="mt-2 text-muted-foreground">
              Professional cinematic color presets.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Brightness
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={50}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Contrast
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={55}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Saturation
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={60}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Motion Blur
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={35}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Stabilization
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={80}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Avatar Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create consistent AI characters.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Male Avatar",
              "Female Avatar",
              "Anime Character",
              "Business Person",
              "Fantasy Hero",
              "Custom Avatar",
            ].map((avatar) => (
              <button
                key={avatar}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Character Consistency
            </h2>

            <p className="mt-2 text-muted-foreground">
              Keep appearance identical across scenes.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Consistency Level
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={96}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Face Accuracy
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={98}
                className="w-full"
              />
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Clothing Consistency
              </label>

              <input
                type="range"
                min={0}
                max={100}
                defaultValue={95}
                className="w-full"
              />
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Lock Character
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Facial Expressions
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI emotion presets.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Happy",
              "Sad",
              "Angry",
              "Fear",
              "Excited",
              "Calm",
              "Thinking",
              "Confident",
              "Surprised",
              "Serious",
            ].map((emotion) => (
              <button
                key={emotion}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Motion Presets
          </h2>

          <p className="mt-2 text-muted-foreground">
            Apply cinematic movement with one click.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
          {[
            "Walk",
            "Run",
            "Jump",
            "Dance",
            "Wave",
            "Talk",
            "Sit",
            "Stand",
            "Fight",
            "Fly",
            "Drive",
            "Slow Motion",
          ].map((motion) => (
            <button
              key={motion}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
            >
              {motion}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Assets Library
            </h2>

            <p className="mt-2 text-muted-foreground">
              Reusable AI-generated assets.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Characters",
              "Vehicles",
              "Buildings",
              "Animals",
              "Nature",
              "Weapons",
              "Furniture",
              "Logos",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Environment Presets
            </h2>

            <p className="mt-2 text-muted-foreground">
              One-click cinematic worlds.
            </p>
          </div>

          <div className="grid gap-3">
            {[
              "Cyberpunk",
              "Space",
              "Desert",
              "Forest",
              "Beach",
              "Snow",
              "City",
              "Village",
              "Mountains",
              "Studio",
            ].map((env) => (
              <button
                key={env}
                className="rounded-xl border border-white/10 py-3 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {env}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Video Templates
            </h2>

            <p className="mt-2 text-muted-foreground">
              Ready-to-use project layouts.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "YouTube Intro",
              "Instagram Reel",
              "Short Film",
              "Advertisement",
              "Product Demo",
              "Music Video",
              "Explainer",
              "Documentary",
            ].map((template) => (
              <button
                key={template}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Scene Collections
          </h2>

          <p className="mt-2 text-muted-foreground">
            Frequently used cinematic scenes.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "City Chase",
            "Romantic Sunset",
            "Battle Scene",
            "Product Showcase",
            "Space Journey",
            "Forest Adventure",
            "Ocean Waves",
            "Luxury Interior",
          ].map((scene) => (
            <button
              key={scene}
              className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
            >
              {scene}
            </button>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Render Queue
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current AI rendering jobs.
            </p>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "YouTube Intro",
                progress: 92,
              },
              {
                title: "Product Ad",
                progress: 71,
              },
              {
                title: "Music Video",
                progress: 43,
              },
              {
                title: "Short Film",
                progress: 18,
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
                    className="h-full rounded-full bg-gradient-to-r from-red-600 to-orange-500"
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
              GPU Status
            </h2>

            <p className="mt-2 text-muted-foreground">
              Rendering resources.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-5xl font-black text-green-500">
                87%
              </h3>

              <p className="mt-2 text-muted-foreground">
                GPU Usage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-5xl font-black text-cyan-400">
                24 GB
              </h3>

              <p className="mt-2 text-muted-foreground">
                VRAM Available
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-5xl font-black text-orange-400">
                Online
              </h3>

              <p className="mt-2 text-muted-foreground">
                Render Engine
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Performance
            </h2>

            <p className="mt-2 text-muted-foreground">
              Rendering analytics.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between rounded-xl border border-white/10 p-4">
              <span>Average Render Time</span>

              <span className="font-bold">
                2m 18s
              </span>
            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-4">
              <span>Completed Today</span>

              <span className="font-bold">
                42
              </span>
            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-4">
              <span>Success Rate</span>

              <span className="font-bold text-green-500">
                99.2%
              </span>
            </div>

            <div className="flex justify-between rounded-xl border border-white/10 p-4">
              <span>Queue Length</span>

              <span className="font-bold">
                4 Jobs
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Processing Timeline
          </h2>

          <p className="mt-2 text-muted-foreground">
            Latest rendering activities.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Prompt received",
            "Storyboard created",
            "Frames generated",
            "Effects applied",
            "Video encoded",
            "Export completed",
          ].map((step, index) => (
            <div
              key={step}
              className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-bold text-white">
                {index + 1}
              </div>

              <span>{step}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Analytics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Video generation quality metrics.
            </p>
          </div>

          <div className="space-y-5">
            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Scene Accuracy</span>

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
                <span>Motion Quality</span>

                <span className="font-bold text-cyan-400">
                  96%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[96%] rounded-full bg-cyan-500" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Lighting</span>

                <span className="font-bold text-orange-400">
                  95%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[95%] rounded-full bg-orange-500" />
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-5">
              <div className="mb-2 flex justify-between">
                <span>Character Consistency</span>

                <span className="font-bold text-red-500">
                  97%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-white/10">
                <div className="h-full w-[97%] rounded-full bg-red-500" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Usage Statistics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Overall rendering usage.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                318
              </h3>

              <p className="mt-2 text-muted-foreground">
                Videos
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                126h
              </h3>

              <p className="mt-2 text-muted-foreground">
                Render Time
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                3.8TB
              </h3>

              <p className="mt-2 text-muted-foreground">
                Storage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                91
              </h3>

              <p className="mt-2 text-muted-foreground">
                Projects
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Quality Score
            </h2>

            <p className="mt-2 text-muted-foreground">
              AI evaluation summary.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-green-500/10 p-6 text-center">
              <h3 className="text-6xl font-black text-green-500">
                A+
              </h3>

              <p className="mt-3">
                Professional Quality
              </p>
            </div>

            <div className="rounded-2xl bg-red-500/10 p-6 text-center">
              <h3 className="text-5xl font-black text-red-500">
                99.1%
              </h3>

              <p className="mt-3">
                Success Rate
              </p>
            </div>

            <div className="rounded-2xl bg-cyan-500/10 p-6 text-center">
              <h3 className="text-5xl font-black text-cyan-400">
                4.8★
              </h3>

              <p className="mt-3">
                User Rating
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Recent Projects
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recently exported AI videos.
            </p>
          </div>

          <Film className="h-7 w-7 text-red-500" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-4">Project</th>
                <th className="pb-4">Model</th>
                <th className="pb-4">Duration</th>
                <th className="pb-4">Status</th>
                <th className="pb-4">Created</th>
              </tr>
            </thead>

            <tbody>
              {[
                ["Product Ad", "Veo 3", "15s", "Completed", "Today"],
                ["YouTube Intro", "Runway", "10s", "Completed", "Today"],
                ["Travel Reel", "Pika", "30s", "Completed", "Yesterday"],
                ["Short Film", "Luma", "60s", "Completed", "Yesterday"],
              ].map((item) => (
                <tr
                  key={item[0]}
                  className="border-b border-white/5"
                >
                  <td className="py-5 font-semibold">{item[0]}</td>
                  <td>{item[1]}</td>
                  <td>{item[2]}</td>
                  <td>
                    <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">
                      {item[3]}
                    </span>
                  </td>
                  <td className="text-muted-foreground">
                    {item[4]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Prompt Library
            </h2>

            <p className="mt-2 text-muted-foreground">
              Professional prompts for every type of video.
            </p>
          </div>

          <div className="grid gap-4">
            {[
              "Commercial Advertisement",
              "Movie Trailer",
              "Music Video",
              "YouTube Intro",
              "Instagram Reel",
              "Travel Cinematic",
              "Product Showcase",
              "Documentary",
              "Gaming Montage",
              "Educational Video",
            ].map((promptItem) => (
              <button
                key={promptItem}
                className="rounded-2xl border border-white/10 p-5 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {promptItem}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Storyboard Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automatically create cinematic storyboards.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "Opening Scene",
              "Character Introduction",
              "Main Action",
              "Climax",
              "Final Scene",
            ].map((scene, index) => (
              <div
                key={scene}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-bold">
                      Scene {index + 1}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {scene}
                    </p>
                  </div>

                  <button className="rounded-xl border border-white/10 px-4 py-2 hover:bg-white/5">
                    View
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Shot List
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automatically generated camera shots.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Wide Establishing Shot",
              "Medium Shot",
              "Close Up",
              "Over The Shoulder",
              "Drone Shot",
              "Tracking Shot",
              "Slow Motion",
              "Final Hero Shot",
            ].map((shot) => (
              <button
                key={shot}
                className="w-full rounded-2xl border border-white/10 p-4 text-left transition hover:border-red-500 hover:bg-white/5"
              >
                {shot}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Director Mode
            </h2>

            <p className="mt-2 text-muted-foreground">
              Cinematic direction presets.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Hollywood",
              "Netflix",
              "Marvel",
              "Pixar",
              "Anime",
              "Documentary",
              "Commercial",
              "Music Video",
            ].map((mode) => (
              <button
                key={mode}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Community Templates
            </h2>

            <p className="mt-2 text-muted-foreground">
              Popular templates shared by creators.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "YouTube Intro Pack",
              "Product Launch Ad",
              "Instagram Reel",
              "Travel Vlog",
              "Movie Trailer",
              "Gaming Intro",
              "Business Presentation",
              "Promo Video",
            ].map((template) => (
              <button
                key={template}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Favorite Projects
            </h2>

            <p className="mt-2 text-muted-foreground">
              Quick access to saved projects.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Luxury Car Ad",
              "Travel Cinematic",
              "AI Short Film",
              "Fashion Promo",
              "Nature Documentary",
              "Product Demo",
            ].map((project) => (
              <button
                key={project}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {project}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Assistant
            </h2>

            <p className="mt-2 text-muted-foreground">
              Smart recommendations for better videos.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Improve camera movement",
              "Increase lighting quality",
              "Add cinematic transitions",
              "Enhance character consistency",
              "Optimize rendering settings",
              "Reduce render time",
            ].map((tip) => (
              <div
                key={tip}
                className="rounded-2xl border border-white/10 p-4"
              >
                {tip}
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
              Speed up your workflow.
            </p>
          </div>

          <div className="space-y-4">
            {[
              ["Ctrl + Enter", "Generate Video"],
              ["Ctrl + S", "Save Project"],
              ["Ctrl + E", "Export Video"],
              ["Ctrl + R", "Render Again"],
              ["Ctrl + P", "Preview"],
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
            Recent Activity
          </h2>

          <p className="mt-2 text-muted-foreground">
            Latest actions performed in Video Studio.
          </p>
        </div>

        <div className="space-y-4">
          {[
            "Video prompt created",
            "Storyboard generated",
            "Render completed",
            "Audio synchronized",
            "Video exported",
            "Project saved",
          ].map((activity, index) => (
            <div
              key={activity}
              className="flex items-center gap-4 rounded-2xl border border-white/10 p-4"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-red-600 to-orange-500 font-bold text-white">
                {index + 1}
              </div>

              <span>{activity}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Export Manager
            </h2>

            <p className="mt-2 text-muted-foreground">
              Export videos in multiple formats.
            </p>
          </div>

          <div className="space-y-5">
            {[
              "MP4 (H.264)",
              "MP4 (H.265)",
              "MOV",
              "WebM",
              "GIF",
              "AVI",
              "MKV",
              "Image Sequence",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Cloud Rendering
            </h2>

            <p className="mt-2 text-muted-foreground">
              Distributed AI rendering status.
            </p>
          </div>

          <div className="space-y-6">
            <div>
              <label className="mb-3 block font-semibold">
                Render Nodes
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Auto</option>
                <option>2 GPUs</option>
                <option>4 GPUs</option>
                <option>8 GPUs</option>
              </select>
            </div>

            <div>
              <label className="mb-3 block font-semibold">
                Priority
              </label>

              <select className="w-full rounded-xl border border-white/10 bg-background p-4">
                <option>Normal</option>
                <option>High</option>
                <option>Ultra</option>
              </select>
            </div>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Start Cloud Render
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Version History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Saved project versions.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Version 1.0",
              "Version 1.1",
              "Version 2.0",
              "Version 2.1",
              "Latest Draft",
            ].map((version) => (
              <button
                key={version}
                className="flex w-full items-center justify-between rounded-2xl border border-white/10 p-4 transition hover:border-red-500 hover:bg-white/5"
              >
                <span>{version}</span>

                <span className="text-sm text-muted-foreground">
                  Restore
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Collaboration
            </h2>

            <p className="mt-2 text-muted-foreground">
              Share projects with your team.
            </p>
          </div>

          <div className="space-y-5">
            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Invite Members
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Share Link
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Export Project
            </button>

            <button className="w-full rounded-2xl border border-white/10 py-4 font-semibold hover:bg-white/5">
              Import Project
            </button>

            <button className="w-full rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 py-4 font-bold text-white">
              Enable Auto Save
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Templates Marketplace
            </h2>

            <p className="mt-2 text-muted-foreground">
              Premium ready-made templates.
            </p>
          </div>

          <div className="space-y-4">
            {[
              "Commercial Ads",
              "YouTube Packs",
              "TikTok Bundle",
              "Instagram Stories",
              "Movie Trailer",
              "Corporate Videos",
              "Wedding Templates",
              "Sports Highlights",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Favorite Assets
            </h2>

            <p className="mt-2 text-muted-foreground">
              Frequently used resources.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              "Intro",
              "Outro",
              "Logo",
              "Music",
              "Voice",
              "Transitions",
              "Effects",
              "Fonts",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Rendering Credits
            </h2>

            <p className="mt-2 text-muted-foreground">
              Current account resources.
            </p>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl bg-red-500/10 p-6 text-center">
              <h3 className="text-5xl font-black text-red-500">
                640
              </h3>

              <p className="mt-2">
                Credits Remaining
              </p>
            </div>

            <div className="rounded-2xl bg-orange-500/10 p-6 text-center">
              <h3 className="text-5xl font-black text-orange-400">
                94
              </h3>

              <p className="mt-2">
                Used Today
              </p>
            </div>

            <div className="rounded-2xl bg-green-500/10 p-6 text-center">
              <h3 className="text-5xl font-black text-green-500">
                Premium
              </h3>

              <p className="mt-2">
                Account Status
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Usage Dashboard
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-5">
            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                428
              </h3>

              <p className="mt-2 text-muted-foreground">
                Videos Created
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                52TB
              </h3>

              <p className="mt-2 text-muted-foreground">
                Cloud Storage
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                2.4K
              </h3>

              <p className="mt-2 text-muted-foreground">
                Exports
              </p>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 text-center">
              <h3 className="text-4xl font-black">
                188
              </h3>

              <p className="mt-2 text-muted-foreground">
                Favorites
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Notifications
            </h2>
          </div>

          <div className="space-y-4">
            {[
              "Cloud render completed",
              "Project successfully exported",
              "New AI model available",
              "Credits recharged",
              "Version auto-saved",
              "Template marketplace updated",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/10 p-4"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-black">
              Video History
            </h2>

            <p className="mt-2 text-muted-foreground">
              Recently generated AI videos.
            </p>
          </div>

          <Film className="h-7 w-7 text-red-500" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-white/10 text-left">
                <th className="pb-4">Project</th>
                <th className="pb-4">Model</th>
                <th className="pb-4">Resolution</th>
                <th className="pb-4">Duration</th>
                <th className="pb-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {[
                {
                  project: "Luxury Car Commercial",
                  model: "Veo 3",
                  resolution: "4K",
                  duration: "30s",
                  status: "Completed",
                },
                {
                  project: "Travel Cinematic",
                  model: "Runway Gen-4",
                  resolution: "1080p",
                  duration: "15s",
                  status: "Completed",
                },
                {
                  project: "AI Music Video",
                  model: "Pika 2.2",
                  resolution: "2K",
                  duration: "60s",
                  status: "Rendering",
                },
                {
                  project: "Product Showcase",
                  model: "Luma Dream Machine",
                  resolution: "1080p",
                  duration: "20s",
                  status: "Completed",
                },
                {
                  project: "Gaming Intro",
                  model: "Veo 3",
                  resolution: "4K",
                  duration: "10s",
                  status: "Completed",
                },
              ].map((item) => (
                <tr
                  key={item.project}
                  className="border-b border-white/5"
                >
                  <td className="py-5 font-semibold">
                    {item.project}
                  </td>

                  <td>
                    {item.model}
                  </td>

                  <td>
                    {item.resolution}
                  </td>

                  <td>
                    {item.duration}
                  </td>

                  <td>
                    <span
                      className={`rounded-full px-3 py-1 text-sm font-semibold ${
                        item.status === "Completed"
                          ? "bg-green-500/10 text-green-500"
                          : "bg-orange-500/10 text-orange-400"
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-600/10 to-orange-500/10 p-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-3xl font-black">
              AI Video Studio Complete
            </h2>

            <p className="mt-3 text-lg text-muted-foreground">
              Create cinematic AI videos with professional production tools,
              cloud rendering, character consistency, storyboard generation,
              voice sync, analytics, and one-click exports.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              New Project
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Export All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
