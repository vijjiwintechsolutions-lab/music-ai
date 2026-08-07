"use client";

import { useState } from "react";

import {
  Mic2,
  Upload,
  Cpu,
  Sparkles,
  UserRound,
  Globe,
  Wand2,
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

    </div>

  );
}
