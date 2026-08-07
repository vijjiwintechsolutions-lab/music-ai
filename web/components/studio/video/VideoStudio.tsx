"use client";

import { useState } from "react";

import {
  Video,
  Wand2,
  Mic,
  Camera,
  Play,
  Film,
  Sparkles,
  Upload,
} from "lucide-react";

const templates = [
  "YouTube Video",
  "Shorts",
  "Instagram Reel",
  "Advertisement",
  "Tutorial",
  "Product Demo",
  "Presentation",
  "Documentary",
];

export default function VideoStudio() {
  const [prompt, setPrompt] = useState("");
  const [template, setTemplate] = useState(templates[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Video Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Create professional AI videos, avatars and animations in minutes.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Describe Your Video
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe the video you want to generate..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              <Wand2 className="mr-2 inline h-5 w-5" />
              Generate Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Storyboard
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Project
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Video Template
          </h2>

          <select
            value={template}
            onChange={(e) => setTemplate(e.target.value)}
            className="w-full rounded-xl border border-white/10 bg-background p-4"
          >
            {templates.map((item) => (
              <option key={item}>
                {item}
              </option>
            ))}
          </select>

          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <Video className="mx-auto mb-4 h-16 w-16 text-rose-500" />

            <p className="font-semibold">
              AI Video Ready
            </p>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        {[
          {
            icon: <Camera className="mx-auto h-8 w-8" />,
            title: "Resolution",
            value: "4K",
          },
          {
            icon: <Mic className="mx-auto h-8 w-8" />,
            title: "Voice",
            value: "AI",
          },
          {
            icon: <Film className="mx-auto h-8 w-8" />,
            title: "Frames",
            value: "60 FPS",
          },
          {
            icon: <Play className="mx-auto h-8 w-8" />,
            title: "Export",
            value: "MP4",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <div className="text-rose-500">
              {card.icon}
            </div>

            <h3 className="mt-5 text-3xl font-black">
              {card.value}
            </h3>

            <p className="mt-2 text-muted-foreground">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Video Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Avatar",
              "Voice Clone",
              "Script Writer",
              "Storyboard",
              "Auto Captions",
              "Translation",
              "Background Music",
              "Visual Effects",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-5 w-5" />
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Studio Tools
          </h2>

          <div className="space-y-4">
            {[
              "Upload Media",
              "Timeline",
              "Scene Editor",
              "Audio Mixer",
              "Transitions",
              "Effects",
              "Rendering",
              "Cloud Storage",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                <Upload className="mr-2 inline h-5 w-5" />
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
              AI Avatar Generator
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create realistic AI presenters with synchronized voice, expressions and gestures.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Business Presenter",
              "Teacher",
              "News Anchor",
              "YouTuber",
              "Virtual Assistant",
              "Sales Representative",
              "Healthcare Expert",
              "Custom Avatar",
            ].map((avatar) => (
              <button
                key={avatar}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Camera className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {avatar}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Avatar
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Clone Face
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Animation
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Avatar Styles
          </h2>

          <div className="space-y-4">
            {[
              "Realistic",
              "Cartoon",
              "Anime",
              "Corporate",
              "3D Character",
              "Minimal",
              "Sci-Fi",
              "Fantasy",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Avatar Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Lip Sync",
              "Eye Contact",
              "Facial Expressions",
              "Hand Gestures",
              "Body Movement",
              "Background Removal",
              "Green Screen",
              "Emotion Control",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice & Language
          </h2>

          <div className="space-y-4">
            {[
              "Voice Clone",
              "AI Narrator",
              "Multi-language",
              "Voice Emotion",
              "Noise Removal",
              "Auto Translation",
              "Subtitle Generator",
              "Voice Enhancer",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Avatar Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Avatars",
            "Voice Models",
            "Languages",
            "Animations",
            "Expressions",
            "Lip Sync",
            "Scenes",
            "Characters",
            "Presentations",
            "Exports",
            "Templates",
            "Avatar Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Camera className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Editor
            </h2>

            <p className="mt-2 text-muted-foreground">
              Edit videos using AI-powered timeline editing, transitions, effects and smart automation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Timeline Editor",
              "Scene Manager",
              "Transitions",
              "Visual Effects",
              "Auto Captions",
              "Background Removal",
              "Green Screen",
              "AI Auto Edit",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Film className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Open Editor
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Smart Edit
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Timeline
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Editing Tools
          </h2>

          <div className="space-y-4">
            {[
              "Trim",
              "Split",
              "Merge",
              "Crop",
              "Rotate",
              "Speed Control",
              "Reverse",
              "Frame Export",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Visual Effects
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Color Grading",
              "Blur",
              "Glow",
              "Motion Blur",
              "Lens Flare",
              "Particles",
              "3D Effects",
              "Animated Text",
            ].map((effect) => (
              <button
                key={effect}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audio Studio
          </h2>

          <div className="space-y-4">
            {[
              "Voice Cleanup",
              "Background Music",
              "Sound Effects",
              "Noise Removal",
              "Audio Mixer",
              "Volume Automation",
              "Equalizer",
              "AI Mastering",
            ].map((audio) => (
              <button
                key={audio}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {audio}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Video Editor Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Projects",
            "Scenes",
            "Timeline",
            "Effects",
            "Transitions",
            "Captions",
            "Audio Tracks",
            "Exports",
            "Templates",
            "Render Queue",
            "Storage",
            "Editor Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Film className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Voice & Audio Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate professional AI voices, clone voices, compose music and produce studio-quality audio.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Voice Generator",
              "Voice Cloning",
              "Text to Speech",
              "Speech to Text",
              "AI Dubbing",
              "Podcast Creator",
              "Narration Studio",
              "Music Composer",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Mic className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Voice
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Clone Voice
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Music
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice Library
          </h2>

          <div className="space-y-4">
            {[
              "Male",
              "Female",
              "Child",
              "Narrator",
              "Corporate",
              "Podcast",
              "Celebrity Style",
              "Custom Voice",
            ].map((voice) => (
              <button
                key={voice}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {voice}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audio Production
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Music",
              "Background Music",
              "Sound Effects",
              "Ambient Audio",
              "Podcast Editing",
              "Audio Cleanup",
              "Noise Reduction",
              "Mastering",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Language Studio
          </h2>

          <div className="space-y-4">
            {[
              "English",
              "Hindi",
              "Telugu",
              "Tamil",
              "Spanish",
              "French",
              "German",
              "Japanese",
            ].map((language) => (
              <button
                key={language}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Audio Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Voice Models",
            "Voice Clones",
            "Music Tracks",
            "Podcasts",
            "Narrations",
            "Languages",
            "Audio Effects",
            "Captions",
            "Subtitles",
            "Exports",
            "Render Queue",
            "Audio Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Mic className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Animation Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create stunning 2D and 3D animations with AI-powered motion, characters and cinematic effects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Text to Animation",
              "Character Animation",
              "Motion Capture",
              "Skeleton Rigging",
              "Facial Animation",
              "Lip Sync",
              "Camera Animation",
              "Scene Animation",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Animation
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Motion
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Export Animation
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Animation Styles
          </h2>

          <div className="space-y-4">
            {[
              "2D Animation",
              "3D Animation",
              "Anime",
              "Pixar Style",
              "Clay",
              "Comic",
              "Game Cinematic",
              "Realistic",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Animation Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Keyframes",
              "Timeline",
              "Particles",
              "Physics",
              "Lighting",
              "Camera Paths",
              "Transitions",
              "Scene Builder",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Visual Effects
          </h2>

          <div className="space-y-4">
            {[
              "Fire",
              "Smoke",
              "Rain",
              "Snow",
              "Explosion",
              "Magic Effects",
              "Lens Flare",
              "Glow",
            ].map((effect) => (
              <button
                key={effect}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Animation Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Animations",
            "Characters",
            "Scenes",
            "Keyframes",
            "Motion Clips",
            "Effects",
            "Particles",
            "Camera Paths",
            "Lighting",
            "Physics",
            "Exports",
            "Animation Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI YouTube & Social Media Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create viral YouTube videos, Shorts, Instagram Reels, TikTok videos and publish everywhere with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "YouTube Video",
              "YouTube Shorts",
              "Instagram Reel",
              "Instagram Story",
              "TikTok",
              "Facebook Video",
              "LinkedIn Video",
              "X Video",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Play className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {item}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Content
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Posts
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Publish Everywhere
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Creator Tools
          </h2>

          <div className="space-y-4">
            {[
              "Thumbnail Generator",
              "Title Generator",
              "Description Writer",
              "Hashtag Generator",
              "Caption Writer",
              "SEO Optimizer",
              "Script Writer",
              "Content Planner",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Publishing Center
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "YouTube",
              "TikTok",
              "Instagram",
              "Facebook",
              "LinkedIn",
              "Pinterest",
              "Threads",
              "Telegram",
            ].map((platform) => (
              <button
                key={platform}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Channel Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Views",
              "Subscribers",
              "Watch Time",
              "CTR",
              "Retention",
              "Likes",
              "Comments",
              "Revenue",
            ].map((metric) => (
              <button
                key={metric}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {metric}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Creator Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Videos",
            "Shorts",
            "Reels",
            "Stories",
            "Posts",
            "Subscribers",
            "Views",
            "Watch Time",
            "Comments",
            "Revenue",
            "Scheduled Posts",
            "Creator Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Play className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Movie & Cinematic Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Produce cinematic films, trailers and storytelling experiences with AI-powered movie production tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Movie Generator",
              "Film Trailer",
              "Storyboard",
              "AI Actors",
              "Scene Builder",
              "Camera Director",
              "Hollywood VFX",
              "Cinematic Render",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Film className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create Movie
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Storyboard
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Render Cinema
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Production Styles
          </h2>

          <div className="space-y-4">
            {[
              "Action",
              "Adventure",
              "Comedy",
              "Drama",
              "Fantasy",
              "Sci-Fi",
              "Thriller",
              "Documentary",
            ].map((style) => (
              <button
                key={style}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Cinematic Production
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Camera Angles",
              "Lighting",
              "Lens Effects",
              "Scene Composition",
              "Slow Motion",
              "Drone Shots",
              "Time Lapse",
              "Visual Storytelling",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Film Studio Tools
          </h2>

          <div className="space-y-4">
            {[
              "AI Screenplay",
              "Shot List",
              "Scene Timeline",
              "Background Score",
              "Character Casting",
              "Voice Direction",
              "Color Grading",
              "Final Rendering",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Movie Production Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Movies",
            "Scenes",
            "Actors",
            "Storyboards",
            "Screenplays",
            "Camera Shots",
            "Effects",
            "Music",
            "Rendering",
            "Exports",
            "Production Time",
            "Cinema Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Film className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Live Streaming Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Broadcast live to multiple platforms with AI-powered production, moderation and audience engagement.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Go Live",
              "RTMP Streaming",
              "YouTube Live",
              "Facebook Live",
              "Twitch",
              "LinkedIn Live",
              "Screen Sharing",
              "Virtual Camera",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Start Streaming
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Stream
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Stream Settings
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Stream Features
          </h2>

          <div className="space-y-4">
            {[
              "Multi Camera",
              "Scene Switcher",
              "AI Moderator",
              "Live Captions",
              "Background Blur",
              "Virtual Background",
              "Picture in Picture",
              "Instant Replay",
            ].map((feature) => (
              <button
                key={feature}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audience Engagement
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Live Chat",
              "Super Chats",
              "Polls",
              "Q&A",
              "Giveaways",
              "Donations",
              "Reactions",
              "Guest Invites",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Live Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Live Viewers",
              "Peak Viewers",
              "Watch Time",
              "Chat Messages",
              "Engagement Rate",
              "Bitrate",
              "Dropped Frames",
              "Revenue",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Streaming Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Live Streams",
            "Scheduled Streams",
            "Viewers",
            "Followers",
            "Subscribers",
            "Watch Time",
            "Live Chat",
            "Donations",
            "Revenue",
            "Broadcast Time",
            "Platforms",
            "Streaming Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Image-to-Video & Video Transformation Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Turn images into cinematic videos, transform existing videos, upscale quality and generate realistic motion using AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Image to Video",
              "Video to Video",
              "Motion Transfer",
              "Style Transfer",
              "AI Upscaling",
              "Frame Interpolation",
              "Background Replace",
              "Video Restoration",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Enhance Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Result
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Generation Modes
          </h2>

          <div className="space-y-4">
            {[
              "Realistic",
              "Anime",
              "Cinematic",
              "Pixar",
              "Comic",
              "Fantasy",
              "Cyberpunk",
              "Photorealistic",
            ].map((mode) => (
              <button
                key={mode}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {mode}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Enhancement Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "4K Upscale",
              "8K Upscale",
              "Frame Repair",
              "Noise Removal",
              "Color Restore",
              "HDR Enhancement",
              "Sharpen",
              "Face Restore",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Motion AI
          </h2>

          <div className="space-y-4">
            {[
              "Camera Motion",
              "Object Motion",
              "Character Motion",
              "AI Tracking",
              "Physics Simulation",
              "Dynamic Lighting",
              "Scene Extension",
              "Loop Generator",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            AI Video Generation Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Image Projects",
            "Generated Videos",
            "Transforms",
            "Upscaled Videos",
            "Enhanced Frames",
            "Motion Clips",
            "Restored Videos",
            "Styles",
            "Exports",
            "Render Queue",
            "GPU Usage",
            "Generation Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Analytics & Publishing Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Analyze video performance, publish everywhere and grow your audience with AI-powered insights.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Video Analytics",
              "Audience Insights",
              "SEO Optimizer",
              "Auto Publishing",
              "Content Scheduler",
              "Monetization",
              "Comment Manager",
              "Growth AI",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Play className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Publish Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Release
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Growth Report
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Publishing Platforms
          </h2>

          <div className="space-y-4">
            {[
              "YouTube",
              "TikTok",
              "Instagram",
              "Facebook",
              "LinkedIn",
              "X",
              "Pinterest",
              "Telegram",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Analytics Modules
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Views",
              "Watch Time",
              "Retention",
              "CTR",
              "Subscribers",
              "Shares",
              "Likes",
              "Revenue",
            ].map((metric) => (
              <button
                key={metric}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {metric}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Growth Center
          </h2>

          <div className="space-y-4">
            {[
              "Trending Topics",
              "Best Upload Time",
              "Keyword Suggestions",
              "Title Optimization",
              "Thumbnail AI",
              "Audience Prediction",
              "Competitor Analysis",
              "Growth Recommendations",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Creator Analytics Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Published Videos",
            "Views",
            "Subscribers",
            "Watch Hours",
            "Revenue",
            "Comments",
            "Shares",
            "Likes",
            "CTR",
            "Retention",
            "Growth Rate",
            "Creator Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Play className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Collaboration & Cloud Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with teams in real time, manage cloud projects and streamline video production workflows.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Cloud Projects",
              "Real-time Editing",
              "Shared Assets",
              "Team Workspace",
              "Task Manager",
              "Review System",
              "Approvals",
              "Version Control",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Upload className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create Team
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Invite Members
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Open Workspace
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Collaboration Tools
          </h2>

          <div className="space-y-4">
            {[
              "Comments",
              "Annotations",
              "Mentions",
              "Approvals",
              "Review Queue",
              "Task Assignment",
              "Notifications",
              "Activity Feed",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Workspace Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Asset Library",
              "Cloud Storage",
              "Brand Kit",
              "Templates",
              "Shared Fonts",
              "Shared Music",
              "Review History",
              "Version Compare",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Management
          </h2>

          <div className="space-y-4">
            {[
              "Administrators",
              "Editors",
              "Reviewers",
              "Guests",
              "Permissions",
              "Audit Logs",
              "Security",
              "Team Analytics",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Collaboration Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Projects",
            "Team Members",
            "Shared Assets",
            "Tasks",
            "Reviews",
            "Comments",
            "Approvals",
            "Versions",
            "Storage",
            "Exports",
            "Activity",
            "Team Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Upload className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Enterprise Video Platform
            </h2>

            <p className="mt-2 text-muted-foreground">
              Manage enterprise video portals, training libraries, secure streaming and global video distribution with AI.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Enterprise Portal",
              "Corporate TV",
              "Training Videos",
              "Learning Library",
              "Knowledge Hub",
              "Video CMS",
              "Internal Broadcast",
              "Executive Messages",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Launch Enterprise Portal
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Upload Library
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Manage Access
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Enterprise Modules
          </h2>

          <div className="space-y-4">
            {[
              "Video Library",
              "Departments",
              "Teams",
              "Courses",
              "Playlists",
              "Compliance",
              "Approvals",
              "Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Enterprise Features
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "DRM Protection",
              "SSO Login",
              "Role Permissions",
              "Audit Logs",
              "Content Approval",
              "Regional Access",
              "CDN Delivery",
              "Secure Sharing",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Enterprise Insights
          </h2>

          <div className="space-y-4">
            {[
              "Employee Engagement",
              "Course Completion",
              "Compliance Reports",
              "Watch Analytics",
              "Knowledge Trends",
              "Learning Paths",
              "Department Metrics",
              "AI Recommendations",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Enterprise Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Organizations",
            "Departments",
            "Employees",
            "Courses",
            "Videos",
            "Libraries",
            "Watch Hours",
            "Compliance",
            "Storage",
            "Bandwidth",
            "Reports",
            "Enterprise Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video API & Automation Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Integrate AI video generation into your applications with APIs, automation workflows and cloud rendering.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Video Generation API",
              "REST API",
              "Webhooks",
              "Batch Rendering",
              "Automation Builder",
              "Cloud Rendering",
              "Scheduled Jobs",
              "Developer SDK",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Sparkles className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate API Key
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Create Workflow
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              View API Docs
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Developer Services
          </h2>

          <div className="space-y-4">
            {[
              "API Keys",
              "SDK",
              "CLI",
              "Webhooks",
              "OAuth",
              "JWT",
              "GraphQL",
              "REST",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Automation Workflows
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Auto Rendering",
              "Video Queue",
              "Webhook Events",
              "Cloud Sync",
              "Auto Publish",
              "Email Notification",
              "Batch Jobs",
              "Workflow Logs",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            API Monitoring
          </h2>

          <div className="space-y-4">
            {[
              "API Requests",
              "Rate Limits",
              "Latency",
              "Errors",
              "Usage Analytics",
              "Billing",
              "Logs",
              "Status",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Developer Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "API Keys",
            "Requests",
            "Workflows",
            "Batch Jobs",
            "Render Queue",
            "Cloud Storage",
            "Webhooks",
            "SDK Downloads",
            "Errors",
            "Latency",
            "Usage",
            "Developer Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Sparkles className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Stock Media Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Access millions of stock videos, images, music, sound effects and motion graphics powered by AI search.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Stock Videos",
              "Stock Images",
              "Music Library",
              "Sound Effects",
              "Voice Library",
              "Animated Overlays",
              "Motion Graphics",
              "3D Assets",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Film className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Browse Assets
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Search
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Import Assets
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Asset Categories
          </h2>

          <div className="space-y-4">
            {[
              "Nature",
              "Business",
              "Technology",
              "People",
              "Travel",
              "Education",
              "Sports",
              "Abstract",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Media Collections
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Premium Videos",
              "Royalty Free Music",
              "Background Loops",
              "Cinematic FX",
              "Transitions",
              "Icons",
              "Lottie Files",
              "Templates",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Asset Management
          </h2>

          <div className="space-y-4">
            {[
              "Favorites",
              "Collections",
              "Downloads",
              "Cloud Sync",
              "Asset Tags",
              "Version History",
              "Licenses",
              "Usage Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Media Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Videos",
            "Images",
            "Music",
            "Sound FX",
            "Overlays",
            "Templates",
            "Downloads",
            "Collections",
            "Favorites",
            "Cloud Storage",
            "Licenses",
            "Media Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Film className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Security & Rights Management
            </h2>

            <p className="mt-2 text-muted-foreground">
              Protect your videos with enterprise-grade security, copyright detection, licensing and AI content moderation.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "DRM Protection",
              "Copyright Scanner",
              "Watermark Generator",
              "License Manager",
              "Content Moderation",
              "Piracy Detection",
              "Deepfake Detection",
              "Regional Rights",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Run Security Scan
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Apply Watermark
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate License
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Protection Features
          </h2>

          <div className="space-y-4">
            {[
              "Invisible Watermark",
              "Visible Watermark",
              "Fingerprinting",
              "Encrypted Delivery",
              "Secure Streaming",
              "Viewer Tracking",
              "Screenshot Protection",
              "Download Control",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Compliance Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "DMCA",
              "GDPR",
              "Copyright Reports",
              "Usage Tracking",
              "License Validation",
              "Access Logs",
              "Security Policies",
              "Audit Reports",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Moderation
          </h2>

          <div className="space-y-4">
            {[
              "NSFW Detection",
              "Violence Detection",
              "Copyright Match",
              "Deepfake Scanner",
              "AI Review",
              "Fraud Detection",
              "Policy Violations",
              "Risk Assessment",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Security Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Protected Videos",
            "Licenses",
            "Copyright Matches",
            "Watermarks",
            "Moderation Jobs",
            "Threat Alerts",
            "Blocked Downloads",
            "Policy Reports",
            "Deepfake Scans",
            "Audit Logs",
            "Compliance",
            "Security Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Broadcast & TV Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Operate television channels, IPTV platforms and cloud broadcasting with AI-powered scheduling and production.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "TV Channel",
              "IPTV",
              "Satellite Broadcast",
              "News Studio",
              "Sports Broadcast",
              "Entertainment Channel",
              "Cloud Broadcast",
              "Multi-channel Streaming",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Launch Broadcast
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Schedule Programs
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Manage Channels
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Broadcast Modules
          </h2>

          <div className="space-y-4">
            {[
              "Live News",
              "Program Guide",
              "Commercials",
              "Emergency Alerts",
              "Weather Feed",
              "Sports Feed",
              "Playlists",
              "Archives",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Broadcast Operations
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Broadcast Scheduler",
              "Playlist Manager",
              "Program Library",
              "Advertisements",
              "Channel Branding",
              "Graphics",
              "Subtitle Feed",
              "Regional Feeds",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Broadcast Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Viewership",
              "Live Audience",
              "Regional Reach",
              "Broadcast Health",
              "Program Ratings",
              "Ad Revenue",
              "Bandwidth Usage",
              "Broadcast Reports",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Broadcast Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Channels",
            "Programs",
            "Broadcast Hours",
            "Live Streams",
            "Viewers",
            "Advertisements",
            "Studios",
            "Regions",
            "Bandwidth",
            "Revenue",
            "Reports",
            "Broadcast Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Education & E-Learning Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Build interactive online courses with AI instructors, quizzes, certificates and multilingual learning experiences.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Course Builder",
              "Lesson Creator",
              "AI Instructor",
              "Interactive Video",
              "Quiz Generator",
              "Assignments",
              "Certificates",
              "Learning Paths",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create Course
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Lessons
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Publish LMS
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Learning Modules
          </h2>

          <div className="space-y-4">
            {[
              "Video Lessons",
              "Practice Tests",
              "Assignments",
              "Flash Cards",
              "Discussion Forum",
              "Downloads",
              "Certificates",
              "Progress Tracking",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            AI Teaching Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Question Bank",
              "AI Tutor",
              "Course Planner",
              "Auto Grading",
              "Exam Generator",
              "Attendance",
              "Student Reports",
              "Gamification",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Learning Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Student Progress",
              "Completion Rate",
              "Quiz Results",
              "Learning Time",
              "Certificates",
              "Top Courses",
              "Engagement",
              "AI Insights",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            LMS Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Courses",
            "Lessons",
            "Students",
            "Certificates",
            "Assignments",
            "Quizzes",
            "Enrollments",
            "Completion Rate",
            "Watch Hours",
            "Revenue",
            "Reports",
            "Learning Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Marketing & Advertising Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create high-converting marketing videos, advertisements and AI-powered campaigns for every platform.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Video Ads",
              "Product Commercials",
              "Brand Campaigns",
              "Social Ads",
              "Lead Generation",
              "Promo Videos",
              "Sales Funnels",
              "Creative Studio",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Play className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create Campaign
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Generate Ad
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Optimization
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Campaign Types
          </h2>

          <div className="space-y-4">
            {[
              "Product Launch",
              "Brand Awareness",
              "Lead Generation",
              "Sales",
              "Retargeting",
              "Seasonal Campaign",
              "Event Promotion",
              "App Install",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Marketing Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "AI Copywriter",
              "A/B Testing",
              "Audience Targeting",
              "Call To Action",
              "Landing Pages",
              "Conversion Tracking",
              "Pixel Manager",
              "Creative Variants",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Campaign Analytics
          </h2>

          <div className="space-y-4">
            {[
              "Impressions",
              "Clicks",
              "CTR",
              "Conversions",
              "CPA",
              "ROAS",
              "Revenue",
              "Audience Insights",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Marketing Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Campaigns",
            "Advertisements",
            "Views",
            "Clicks",
            "Conversions",
            "Revenue",
            "ROAS",
            "Leads",
            "Customers",
            "A/B Tests",
            "Growth",
            "Marketing Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Play className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Operations Center
            </h2>

            <p className="mt-2 text-muted-foreground">
              Monitor rendering infrastructure, cloud resources, storage and production pipelines from one AI-powered dashboard.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Render Queue",
              "Cloud Rendering",
              "GPU Cluster",
              "Storage Manager",
              "Backup Center",
              "Recovery Manager",
              "Performance Monitor",
              "Operations AI",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-5 text-left transition hover:border-rose-500 hover:bg-white/5"
              >
                <Video className="mb-3 h-6 w-6 text-rose-500" />

                <div className="font-semibold">
                  {tool}
                </div>
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Open Operations
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Run Diagnostics
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Optimize Resources
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Infrastructure
          </h2>

          <div className="space-y-4">
            {[
              "GPU Nodes",
              "CPU Servers",
              "Cloud Storage",
              "CDN",
              "Load Balancer",
              "Databases",
              "AI Workers",
              "Edge Network",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-rose-500 hover:bg-white/5"
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
            Operations Tools
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Health Checks",
              "Auto Scaling",
              "Cache Manager",
              "Log Viewer",
              "Job Scheduler",
              "Incident Center",
              "Disaster Recovery",
              "Resource Optimizer",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Operations Insights
          </h2>

          <div className="space-y-4">
            {[
              "GPU Utilization",
              "Render Speed",
              "Storage Usage",
              "Bandwidth",
              "Queue Status",
              "Failure Prediction",
              "Cost Optimization",
              "System Alerts",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-rose-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="mb-8">
          <h2 className="text-2xl font-black">
            Operations Dashboard
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Render Jobs",
            "GPU Usage",
            "CPU Usage",
            "Memory",
            "Storage",
            "Bandwidth",
            "Cloud Nodes",
            "AI Workers",
            "Queue Size",
            "Backups",
            "Alerts",
            "Operations Score",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center transition hover:border-rose-500"
            >
              <Video className="mx-auto mb-3 h-7 w-7 text-rose-500" />

              <div className="font-bold">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-rose-600/10 via-orange-500/10 to-amber-500/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Market AI Video Operating System
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Generate, edit, animate, publish and manage professional videos,
              movies, advertisements, courses and live broadcasts using one AI platform.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-8 py-4 font-bold text-white">
              Launch Video Studio
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Publish Video
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "Video Templates",
            value: "5000+",
          },
          {
            title: "AI Effects",
            value: "2500+",
          },
          {
            title: "Voice Models",
            value: "1000+",
          },
          {
            title: "Cloud Rendering",
            value: "Unlimited",
          },
        ].map((card) => (
          <div
            key={card.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-rose-500">
              {card.value}
            </h3>

            <p className="mt-3 text-muted-foreground">
              {card.title}
            </p>
          </div>
        ))}
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-10 text-center">
          <h2 className="text-4xl font-black">
            Global AI Video Platform
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Everything needed to create, edit, render, stream and distribute
            professional videos with enterprise AI workflows.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "Video Generation",
            "AI Avatars",
            "Voice Studio",
            "Animation",
            "Movie Studio",
            "YouTube Creator",
            "Live Streaming",
            "Image to Video",
            "Analytics",
            "Marketing",
            "Enterprise",
            "Security",
            "Automation",
            "Cloud Rendering",
            "Publishing",
            "Operations",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold transition hover:border-rose-500 hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/5 p-10">
        <div className="mb-8">
          <h2 className="text-3xl font-black">
            Export & Distribution Center
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {[
            "MP4 Export",
            "MOV Export",
            "WebM Export",
            "GIF Export",
            "YouTube",
            "TikTok",
            "Instagram",
            "Facebook",
            "LinkedIn",
            "Cloud Storage",
            "API Delivery",
            "Enterprise CDN",
          ].map((item) => (
            <button
              key={item}
              className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-rose-500 hover:bg-white/5"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-rose-600/10 via-orange-500/10 to-amber-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Create Any Video With AI
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          From YouTube Shorts and advertisements to feature films, educational
          courses, enterprise broadcasting and live streaming—Market AI Video
          Studio brings every stage of modern video production into one
          intelligent workspace.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-rose-600 to-orange-500 px-10 py-5 text-lg font-bold text-white">
            Start Creating
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            Open Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
