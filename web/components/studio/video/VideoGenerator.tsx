"use client";

import { useState } from "react";

import {
  Video,
  Upload,
  Wand2,
  Play,
} from "lucide-react";

const styles = [
  "Cinematic",
  "Anime",
  "Realistic",
  "3D",
  "Fantasy",
  "Sci-Fi",
];

export default function VideoGenerator() {
  const [prompt, setPrompt] = useState("");
  const [style, setStyle] = useState(styles[0]);

  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-5xl font-black">
          AI Video Studio
        </h1>

        <p className="mt-3 text-lg text-muted-foreground">
          Generate professional AI videos in minutes.
        </p>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Text to Video
          </h2>

          <textarea
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            placeholder="Describe your video..."
            className="min-h-[240px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              <Wand2 className="mr-2 inline h-5 w-5" />
              Generate Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              <Upload className="mr-2 inline h-5 w-5" />
              Upload Image
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-6 text-2xl font-black">
            Video Style
          </h2>

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

          <div className="mt-8 rounded-2xl border border-white/10 p-8 text-center">
            <Video className="mx-auto mb-4 h-16 w-16 text-red-500" />

            <p className="font-semibold">
              Ready to create
            </p>
          </div>

          <button className="mt-8 w-full rounded-2xl border border-white/10 py-4 hover:bg-white/5">
            <Play className="mr-2 inline h-5 w-5" />
            Preview
          </button>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Image to Video
            </h2>

            <p className="mt-2 text-muted-foreground">
              Animate photos into realistic cinematic videos.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Upload className="mx-auto mb-6 h-16 w-16 text-red-500" />

            <h3 className="text-xl font-bold">
              Upload Image
            </h3>

            <p className="mt-3 text-muted-foreground">
              PNG, JPG and WEBP supported.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Browse Image
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Animate Image
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Motion Brush
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Auto Camera
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Duration
          </h2>

          <div className="space-y-4">
            {[
              "5 Seconds",
              "10 Seconds",
              "15 Seconds",
              "30 Seconds",
              "1 Minute",
              "Custom",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Camera Controls
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Zoom In",
              "Zoom Out",
              "Pan Left",
              "Pan Right",
              "Orbit",
              "Tilt",
              "Dolly",
              "Drone Shot",
            ].map((camera) => (
              <button
                key={camera}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {camera}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Resolution
          </h2>

          <div className="space-y-4">
            {[
              "720p",
              "1080p",
              "2K",
              "4K",
              "8K",
              "HDR",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Character Consistency
            </h2>

            <p className="mt-2 text-muted-foreground">
              Keep the same character appearance across every scene.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Upload className="mx-auto mb-6 h-16 w-16 text-red-500" />

            <h3 className="text-xl font-bold">
              Upload Character Reference
            </h3>

            <p className="mt-3 text-muted-foreground">
              Upload one or multiple reference images.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Select Images
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Lock Character
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Face Reference
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Costume Lock
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Character Settings
          </h2>

          <div className="space-y-4">
            {[
              "Face Identity",
              "Hair Style",
              "Clothing",
              "Accessories",
              "Expressions",
              "Body Shape",
              "Age",
              "Skin Tone",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Pose Control
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Standing",
              "Walking",
              "Running",
              "Sitting",
              "Jumping",
              "Dancing",
              "Fighting",
              "Custom Pose",
            ].map((pose) => (
              <button
                key={pose}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {pose}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Motion Paths
          </h2>

          <div className="space-y-4">
            {[
              "Walk Forward",
              "Walk Backward",
              "Orbit Camera",
              "Follow Subject",
              "Circular Motion",
              "Slow Motion",
              "Fast Motion",
              "Multi Character Scene",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Face Swap & Lip Sync
            </h2>

            <p className="mt-2 text-muted-foreground">
              Replace faces, synchronize speech and create realistic AI actors.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Upload className="mx-auto mb-6 h-16 w-16 text-red-500" />

            <h3 className="text-xl font-bold">
              Upload Source Media
            </h3>

            <p className="mt-3 text-muted-foreground">
              Upload video, image or face reference.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Browse Files
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Face Swap
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Lip Sync
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Voice Over
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Actors
          </h2>

          <div className="space-y-4">
            {[
              "Male Actor",
              "Female Actor",
              "Child",
              "Narrator",
              "News Presenter",
              "Teacher",
              "Business Host",
              "Custom Avatar",
            ].map((actor) => (
              <button
                key={actor}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {actor}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Emotion Control
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Happy",
              "Sad",
              "Angry",
              "Excited",
              "Fear",
              "Surprised",
              "Confident",
              "Neutral",
            ].map((emotion) => (
              <button
                key={emotion}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {emotion}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Expression Editor
          </h2>

          <div className="space-y-4">
            {[
              "Smile",
              "Eye Contact",
              "Blink",
              "Eyebrows",
              "Mouth Movement",
              "Head Rotation",
              "Hand Gestures",
              "Auto Expressions",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              Timeline Editor
            </h2>

            <p className="mt-2 text-muted-foreground">
              Edit videos with multiple tracks, keyframes and cinematic transitions.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-background p-8">
            <div className="space-y-4">
              {[
                "Video Track",
                "Audio Track",
                "Voice Over",
                "Subtitles",
                "Effects",
              ].map((track) => (
                <div
                  key={track}
                  className="flex items-center gap-4 rounded-xl border border-white/10 p-4"
                >
                  <div className="w-40 font-semibold">
                    {track}
                  </div>

                  <div className="flex-1 rounded-lg bg-white/5 p-3">
                    <div className="h-6 rounded bg-gradient-to-r from-red-600 to-orange-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Add Track
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Split Clip
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Merge Clips
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Timeline Tools
          </h2>

          <div className="space-y-4">
            {[
              "Undo",
              "Redo",
              "Snap",
              "Ripple Edit",
              "Magnet",
              "Markers",
              "Zoom",
              "Auto Save",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Scene Manager
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Intro",
              "Scene 1",
              "Scene 2",
              "Scene 3",
              "Transition",
              "Credits",
              "Outro",
              "Ending",
            ].map((scene) => (
              <button
                key={scene}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {scene}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Transitions & Keyframes
          </h2>

          <div className="space-y-4">
            {[
              "Fade",
              "Dissolve",
              "Slide",
              "Zoom",
              "Rotate",
              "Motion Blur",
              "Keyframe Editor",
              "Animation Curves",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Video Effects
            </h2>

            <p className="mt-2 text-muted-foreground">
              Enhance every scene with cinematic AI-powered visual effects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Green Screen",
              "Background Replace",
              "Object Removal",
              "Sky Replace",
              "Color Grading",
              "Depth Blur",
              "Relighting",
              "AI Upscale",
            ].map((effect) => (
              <button
                key={effect}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {effect}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Apply Effects
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Changes
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Reset
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Enhancements
          </h2>

          <div className="space-y-4">
            {[
              "Sharpen",
              "Denoise",
              "HDR",
              "Stabilize",
              "Slow Motion",
              "Frame Boost",
              "Relight",
              "Face Enhance",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Object Editing
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Remove Object",
              "Replace Object",
              "Expand Scene",
              "Inpainting",
              "Outpainting",
              "Clone Object",
              "Magic Eraser",
              "Smart Fill",
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
          <h2 className="mb-8 text-2xl font-black">
            Style Transfer
          </h2>

          <div className="space-y-4">
            {[
              "Anime",
              "Pixar",
              "Watercolor",
              "Oil Painting",
              "Cyberpunk",
              "Sketch",
              "Comic Book",
              "Photorealistic",
            ].map((styleItem) => (
              <button
                key={styleItem}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {styleItem}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Audio Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create professional audio for every video automatically.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Background Music",
              "Voice Over",
              "Sound Effects",
              "Ambient Audio",
              "Noise Removal",
              "Auto Sync",
              "AI Dubbing",
              "Audio Cleanup",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Audio
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Auto Mix
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview Audio
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice Options
          </h2>

          <div className="space-y-4">
            {[
              "Male",
              "Female",
              "Child",
              "Narrator",
              "News",
              "Podcast",
              "Celebrity Style",
              "Custom Voice",
            ].map((voice) => (
              <button
                key={voice}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Audio Mixer
          </h2>

          <div className="space-y-5">
            {[
              "Master Volume",
              "Voice",
              "Music",
              "Effects",
              "Ambience",
              "Bass",
              "Treble",
              "Stereo Width",
            ].map((channel) => (
              <div
                key={channel}
                className="rounded-2xl border border-white/10 p-5"
              >
                <div className="mb-3 flex justify-between">
                  <span>{channel}</span>

                  <span className="font-bold text-red-500">
                    80%
                  </span>
                </div>

                <input
                  type="range"
                  min="0"
                  max="100"
                  defaultValue="80"
                  className="w-full"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            AI Processing
          </h2>

          <div className="space-y-4">
            {[
              "Noise Suppression",
              "Echo Cancellation",
              "Auto Leveling",
              "Speech Enhancement",
              "Background Isolation",
              "Music Ducking",
              "Lip Sync Alignment",
              "Final Audio Master",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Subtitle Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Automatically generate subtitles, captions and multilingual translations.
            </p>
          </div>

          <textarea
            placeholder="Paste transcript or upload a video..."
            className="min-h-[220px] w-full rounded-2xl border border-white/10 bg-background p-6 outline-none"
          />

          <div className="mt-6 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Captions
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Auto Translate
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Dubbing
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Languages
          </h2>

          <div className="space-y-4">
            {[
              "English",
              "తెలుగు",
              "Hindi",
              "Tamil",
              "Kannada",
              "Spanish",
              "French",
              "Japanese",
            ].map((language) => (
              <button
                key={language}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {language}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Caption Styles
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Modern",
              "YouTube",
              "Netflix",
              "Minimal",
              "Bold",
              "Animated",
              "Karaoke",
              "Custom",
            ].map((styleItem) => (
              <button
                key={styleItem}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {styleItem}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Text Animation
          </h2>

          <div className="space-y-4">
            {[
              "Fade In",
              "Slide Up",
              "Zoom",
              "Bounce",
              "Typewriter",
              "Glow",
              "Neon",
              "Motion Tracking",
            ].map((animation) => (
              <button
                key={animation}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {animation}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Avatar Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create realistic talking avatars and virtual presenters.
            </p>
          </div>

          <div className="rounded-3xl border-2 border-dashed border-white/10 bg-background p-12 text-center">
            <Upload className="mx-auto mb-6 h-16 w-16 text-red-500" />

            <h3 className="text-xl font-bold">
              Upload Avatar Reference
            </h3>

            <p className="mt-3 text-muted-foreground">
              Upload a face image or create an AI avatar.
            </p>

            <button className="mt-8 rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Select Image
            </button>
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Avatar
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Talking Avatar
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Presenter Mode
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Avatar Library
          </h2>

          <div className="space-y-4">
            {[
              "Business Presenter",
              "Teacher",
              "News Anchor",
              "Doctor",
              "Sales Expert",
              "Coach",
              "Influencer",
              "Custom Avatar",
            ].map((avatar) => (
              <button
                key={avatar}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {avatar}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Gesture Controls
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Wave",
              "Point",
              "Smile",
              "Hand Raise",
              "Walking",
              "Eye Contact",
              "Head Movement",
              "Custom Motion",
            ].map((gesture) => (
              <button
                key={gesture}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {gesture}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Voice & Animation
          </h2>

          <div className="space-y-4">
            {[
              "AI Voice",
              "Lip Sync",
              "Emotion Control",
              "Head Tracking",
              "Body Animation",
              "Eye Tracking",
              "Background Scene",
              "Export Avatar",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8 flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-black">
                Video Library
              </h2>

              <p className="mt-2 text-muted-foreground">
                Organize all your AI-generated videos and projects.
              </p>
            </div>

            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-6 py-3 font-bold text-white">
              New Project
            </button>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Product Commercial",
                duration: "00:45",
                quality: "4K",
              },
              {
                title: "AI Presenter",
                duration: "03:20",
                quality: "1080p",
              },
              {
                title: "Travel Reel",
                duration: "00:58",
                quality: "4K",
              },
              {
                title: "Movie Trailer",
                duration: "02:15",
                quality: "8K",
              },
              {
                title: "Marketing Ad",
                duration: "01:10",
                quality: "4K",
              },
            ].map((video) => (
              <div
                key={video.title}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <div>
                  <h3 className="font-bold">
                    {video.title}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {video.duration} • {video.quality}
                  </p>
                </div>

                <div className="flex gap-3">
                  <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
                    <Play className="h-5 w-5" />
                  </button>

                  <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">
                    <Upload className="h-5 w-5" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Favorites
          </h2>

          <div className="space-y-4">
            {[
              "Commercial Ads",
              "YouTube Videos",
              "Instagram Reels",
              "TikTok",
              "Product Demo",
              "Presentation",
              "AI Avatar",
              "Animations",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            AI Templates
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "YouTube Intro",
              "Instagram Reel",
              "TikTok Short",
              "Product Ad",
              "Podcast Video",
              "Tutorial",
              "Presentation",
              "Movie Trailer",
            ].map((template) => (
              <button
                key={template}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Cloud Storage
          </h2>

          <div className="space-y-5">
            {[
              ["Storage Used", "128 GB"],
              ["Available", "872 GB"],
              ["Projects", "542"],
              ["Exports", "1,284"],
              ["Shared Files", "63"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-red-500">
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
              Video Analytics
            </h2>

            <p className="mt-2 text-muted-foreground">
              Track audience engagement and overall video performance.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-4">
            {[
              ["Views", "8.4M"],
              ["Watch Time", "512K hrs"],
              ["Subscribers", "124K"],
              ["Revenue", "₹9.8L"],
            ].map((item) => (
              <div
                key={item[0]}
                className="rounded-2xl border border-white/10 p-6 text-center"
              >
                <h3 className="text-3xl font-black text-red-500">
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
                title: "Audience Retention",
                value: "92%",
              },
              {
                title: "Engagement Rate",
                value: "88%",
              },
              {
                title: "Completion Rate",
                value: "81%",
              },
              {
                title: "CTR",
                value: "14%",
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

                  <span className="font-bold text-red-500">
                    {item.value}
                  </span>
                </div>

                <div className="h-3 rounded-full bg-white/10">
                  <div
                    className="h-3 rounded-full bg-gradient-to-r from-red-600 to-orange-500"
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
              "YouTube",
              "Instagram",
              "TikTok",
              "Facebook",
              "LinkedIn",
              "X",
              "Vimeo",
              "Website",
            ].map((platform) => (
              <button
                key={platform}
                className="w-full rounded-xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
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
              "Age Groups",
              "Gender",
              "Top Countries",
              "Top Cities",
              "Devices",
              "Languages",
              "Traffic Sources",
              "Returning Viewers",
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
          <h2 className="mb-8 text-2xl font-black">
            Export Statistics
          </h2>

          <div className="space-y-4">
            {[
              "Total Exports",
              "4K Videos",
              "8K Videos",
              "Cloud Renders",
              "Downloads",
              "Shared Projects",
              "Processing Time",
              "Storage Usage",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Collaboration
            </h2>

            <p className="mt-2 text-muted-foreground">
              Collaborate with editors, designers and creators in real time.
            </p>
          </div>

          <div className="space-y-4">
            {[
              {
                title: "Product Launch Campaign",
                members: "12 Members",
              },
              {
                title: "YouTube Documentary",
                members: "6 Members",
              },
              {
                title: "Social Media Ads",
                members: "8 Members",
              },
              {
                title: "Course Production",
                members: "10 Members",
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
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create Team
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Invite Members
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Share Project
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Team Roles
          </h2>

          <div className="space-y-4">
            {[
              "Administrator",
              "Editor",
              "Reviewer",
              "Animator",
              "Designer",
              "Voice Artist",
              "Client",
              "Viewer",
            ].map((role) => (
              <button
                key={role}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Review Workflow
          </h2>

          <div className="space-y-4">
            {[
              "Pending Review",
              "Approved",
              "Needs Changes",
              "Client Feedback",
              "Final Review",
              "Ready to Export",
              "Published",
              "Archived",
            ].map((status) => (
              <button
                key={status}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Comments & Version History
          </h2>

          <div className="space-y-4">
            {[
              "Initial Draft",
              "Client Review",
              "Animation Updated",
              "Audio Improved",
              "Color Corrected",
              "Subtitle Added",
              "Final Export",
              "Published Version",
            ].map((version) => (
              <div
                key={version}
                className="rounded-2xl border border-white/10 p-5"
              >
                {version}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Asset Library
            </h2>

            <p className="mt-2 text-muted-foreground">
              Access millions of videos, images, icons, audio and templates.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            {[
              "Stock Videos",
              "Stock Photos",
              "Icons",
              "Illustrations",
              "3D Models",
              "Music",
              "Sound Effects",
              "Transitions",
              "Animations",
            ].map((asset) => (
              <button
                key={asset}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {asset}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Browse Assets
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Upload Asset
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Search
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Brand Kit
          </h2>

          <div className="space-y-4">
            {[
              "Logo",
              "Fonts",
              "Brand Colors",
              "Watermark",
              "Intro",
              "Outro",
              "Lower Thirds",
              "Brand Templates",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Template Library
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "YouTube",
              "Instagram",
              "TikTok",
              "Facebook",
              "LinkedIn",
              "Presentation",
              "Product Demo",
              "Documentary",
            ].map((template) => (
              <button
                key={template}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {template}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Asset Statistics
          </h2>

          <div className="space-y-5">
            {[
              ["Stock Videos", "2.8M+"],
              ["Images", "12M+"],
              ["Icons", "450K+"],
              ["Music Tracks", "210K+"],
              ["Templates", "18K+"],
              ["Animations", "96K+"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-red-500">
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
              AI Recording Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Record your screen, webcam and presentations with AI assistance.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Screen Recording",
              "Webcam",
              "Microphone",
              "System Audio",
              "Window Capture",
              "Browser Tab",
              "Full Screen",
              "Virtual Camera",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Start Recording
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Pause
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Stop
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Recording Settings
          </h2>

          <div className="space-y-4">
            {[
              "1080p",
              "4K",
              "60 FPS",
              "HDR",
              "Noise Reduction",
              "Auto Focus",
              "Background Blur",
              "AI Enhancement",
            ].map((setting) => (
              <button
                key={setting}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Teleprompter
          </h2>

          <div className="space-y-5">
            {[
              "Import Script",
              "Auto Scroll",
              "Scroll Speed",
              "Font Size",
              "Mirror Mode",
              "Highlight Line",
              "Countdown",
              "Remote Control",
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
          <h2 className="mb-8 text-2xl font-black">
            Presentation Mode
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Slides",
              "Picture-in-Picture",
              "Virtual Background",
              "Laser Pointer",
              "Presenter Notes",
              "Whiteboard",
              "Live Annotation",
              "Audience View",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Streaming Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Broadcast live to multiple platforms with AI production tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "YouTube Live",
              "Twitch",
              "Facebook Live",
              "Kick",
              "LinkedIn Live",
              "Instagram Live",
              "RTMP",
              "Custom Server",
            ].map((platform) => (
              <button
                key={platform}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {platform}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Go Live
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Test Stream
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              End Stream
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Stream Status
          </h2>

          <div className="space-y-5">
            {[
              ["Status", "Offline"],
              ["Viewers", "0"],
              ["Bitrate", "6000 kbps"],
              ["Latency", "Low"],
              ["Dropped Frames", "0"],
              ["Duration", "00:00:00"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>{item[0]}</span>

                <span className="font-bold text-red-500">
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
            Live Production
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Scene Switcher",
              "Picture-in-Picture",
              "Lower Thirds",
              "Countdown Timer",
              "Sponsor Banner",
              "Scoreboard",
              "Screen Share",
              "Virtual Camera",
            ].map((feature) => (
              <button
                key={feature}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {feature}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Audience Tools
          </h2>

          <div className="space-y-4">
            {[
              "Live Chat Overlay",
              "Polls",
              "Q&A",
              "Donations",
              "Subscriber Alerts",
              "Moderation",
              "Viewer Analytics",
              "Multi-stream",
            ].map((tool) => (
              <button
                key={tool}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
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
              AI Video Enhancement
            </h2>

            <p className="mt-2 text-muted-foreground">
              Upscale, restore and enhance videos with professional AI tools.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "4K Upscale",
              "8K Upscale",
              "Frame Interpolation",
              "Slow Motion",
              "HDR Enhancement",
              "Video Restoration",
              "AI Sharpen",
              "Color Recovery",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Enhance Video
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
            Enhancement Presets
          </h2>

          <div className="space-y-4">
            {[
              "YouTube",
              "Netflix",
              "Cinema",
              "Mobile",
              "Gaming",
              "Documentary",
              "Animation",
              "Archive Restore",
            ].map((preset) => (
              <button
                key={preset}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            AI Restoration
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Scratch Removal",
              "Dust Cleanup",
              "Noise Reduction",
              "Flicker Removal",
              "Deinterlace",
              "Colorize B&W",
              "Stabilization",
              "Face Recovery",
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
          <h2 className="mb-8 text-2xl font-black">
            Quality Controls
          </h2>

          <div className="space-y-4">
            {[
              "AI Sharpen",
              "Denoise",
              "Motion Blur Fix",
              "HDR Tone Mapping",
              "Brightness",
              "Contrast",
              "Saturation",
              "Export Quality",
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
      </div>

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-3xl border border-white/10 bg-white/5 p-8">
          <div className="mb-8">
            <h2 className="text-2xl font-black">
              AI Animation Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Create cinematic motion graphics, logo animations and particle effects.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Logo Animation",
              "Motion Graphics",
              "Intro",
              "Outro",
              "Lower Third",
              "Title Animation",
              "Particle FX",
              "Text Animation",
            ].map((tool) => (
              <button
                key={tool}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {tool}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Animation
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Preview
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Save Preset
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Animation Presets
          </h2>

          <div className="space-y-4">
            {[
              "Fade",
              "Zoom",
              "Slide",
              "Bounce",
              "Spin",
              "Glitch",
              "Neon",
              "Cinematic",
            ].map((preset) => (
              <button
                key={preset}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Keyframe Animation
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Position",
              "Scale",
              "Rotation",
              "Opacity",
              "Anchor Point",
              "Mask",
              "Camera",
              "Custom Curve",
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
          <h2 className="mb-8 text-2xl font-black">
            Particle Effects
          </h2>

          <div className="space-y-4">
            {[
              "Fire",
              "Smoke",
              "Rain",
              "Snow",
              "Sparkles",
              "Confetti",
              "Lightning",
              "Magic Dust",
            ].map((effect) => (
              <button
                key={effect}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
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
              AI Commercial Studio
            </h2>

            <p className="mt-2 text-muted-foreground">
              Generate high-converting advertisements, product videos and marketing campaigns.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {[
              "Product Ad",
              "Social Media",
              "YouTube Ad",
              "Instagram Reel",
              "TikTok Ad",
              "Facebook Campaign",
              "Google Ads",
              "Brand Story",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Generate Commercial
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              AI Script
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Storyboard
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Campaign Types
          </h2>

          <div className="space-y-4">
            {[
              "E-commerce",
              "Fashion",
              "Food",
              "Education",
              "Healthcare",
              "Technology",
              "Real Estate",
              "Travel",
            ].map((campaign) => (
              <button
                key={campaign}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {campaign}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="grid gap-8 xl:grid-cols-2">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Marketing Assets
          </h2>

          <div className="grid gap-4 md:grid-cols-2">
            {[
              "Product Showcase",
              "Promo Banner",
              "Call To Action",
              "Testimonials",
              "Offers",
              "Brand Logo",
              "QR Code",
              "Watermark",
            ].map((asset) => (
              <button
                key={asset}
                className="rounded-2xl border border-white/10 p-5 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {asset}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Publishing Channels
          </h2>

          <div className="space-y-4">
            {[
              "YouTube",
              "Instagram",
              "TikTok",
              "Facebook",
              "LinkedIn",
              "WhatsApp",
              "Website",
              "Export Campaign",
            ].map((channel) => (
              <button
                key={channel}
                className="w-full rounded-2xl border border-white/10 p-4 text-left font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {channel}
              </button>
            ))}
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
              Discover premium templates, LUTs, transitions and creator assets.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {[
              "Video Templates",
              "LUT Collection",
              "Transition Packs",
              "Motion Presets",
              "Lower Thirds",
              "Intro Kits",
              "Outro Kits",
              "Sound Packs",
              "Overlay Effects",
            ].map((item) => (
              <button
                key={item}
                className="rounded-2xl border border-white/10 p-6 font-semibold transition hover:border-red-500 hover:bg-white/5"
              >
                {item}
              </button>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Browse Marketplace
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              Upload Asset
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 hover:bg-white/5">
              My Downloads
            </button>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
          <h2 className="mb-8 text-2xl font-black">
            Creator Hub
          </h2>

          <div className="space-y-4">
            {[
              "Top Creators",
              "Trending Templates",
              "Editor's Choice",
              "New Releases",
              "Weekly Picks",
              "Best Sellers",
              "Free Downloads",
              "Premium Assets",
            ].map((item) => (
              <button
                key={item}
                className="w-full rounded-xl border border-white/10 p-4 font-semibold transition hover:border-red-500 hover:bg-white/5"
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
            Community Sharing
          </h2>

          <div className="space-y-4">
            {[
              "Publish Project",
              "Share Template",
              "Creator Portfolio",
              "Community Feed",
              "Challenges",
              "Live Workshops",
              "Collaboration Board",
              "Video Showcase",
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
          <h2 className="mb-8 text-2xl font-black">
            Marketplace Statistics
          </h2>

          <div className="space-y-5">
            {[
              ["Templates", "48K+"],
              ["LUT Packs", "8.5K+"],
              ["Transitions", "15K+"],
              ["Motion Presets", "22K+"],
              ["Creator Assets", "310K+"],
              ["Downloads", "12M+"],
            ].map((item) => (
              <div
                key={item[0]}
                className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
              >
                <span>
                  {item[0]}
                </span>

                <span className="font-bold text-red-500">
                  {item[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-yellow-500/10 p-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="text-4xl font-black">
              Complete AI Video Platform
            </h2>

            <p className="mt-4 max-w-3xl text-lg text-muted-foreground">
              Create AI videos, talking avatars, commercials, cinematic films,
              social media content, livestreams and professional productions
              from one unified studio.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-8 py-4 font-bold text-white">
              Create New Video
            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold hover:bg-white/5">
              Open Library
            </button>
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {[
          {
            title: "AI Models",
            value: "120+",
          },
          {
            title: "Templates",
            value: "50K+",
          },
          {
            title: "Effects",
            value: "2,500+",
          },
          {
            title: "Export Formats",
            value: "20+",
          },
        ].map((item) => (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-8 text-center"
          >
            <h3 className="text-4xl font-black text-red-500">
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
            Export & Publishing
          </h2>

          <p className="mt-3 text-lg text-muted-foreground">
            Export your videos or publish directly to your favorite platforms.
          </p>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {[
            "MP4",
            "MOV",
            "AVI",
            "MKV",
            "WEBM",
            "GIF",
            "Alpha Channel",
            "Image Sequence",
            "1080p",
            "4K UHD",
            "8K HDR",
            "60 FPS",
            "YouTube",
            "Instagram",
            "TikTok",
            "Commercial License",
          ].map((item) => (
            <div
              key={item}
              className="rounded-2xl border border-white/10 p-5 text-center font-semibold transition hover:border-red-500 hover:bg-white/5"
            >
              {item}
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-white/10 bg-gradient-to-r from-red-600/10 via-orange-500/10 to-yellow-500/10 p-12 text-center">
        <h2 className="text-5xl font-black">
          Market AI Video Studio
        </h2>

        <p className="mx-auto mt-6 max-w-4xl text-lg text-muted-foreground">
          A complete AI-powered video creation ecosystem with text-to-video,
          image animation, AI avatars, cinematic editing, collaboration,
          streaming, analytics, publishing and commercial production tools.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-5">
          <button className="rounded-2xl bg-gradient-to-r from-red-600 to-orange-500 px-10 py-5 text-lg font-bold text-white">
            Launch Video Studio
          </button>

          <button className="rounded-2xl border border-white/10 px-10 py-5 text-lg font-semibold hover:bg-white/5">
            View Documentation
          </button>
        </div>
      </div>
    </div>
  );
}
