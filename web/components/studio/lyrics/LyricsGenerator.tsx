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

    </div>

  );
}
