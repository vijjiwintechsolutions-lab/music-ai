"use client";

import { useState } from "react";
import {
  Bot,
  Paperclip,
  Image,
  Mic,
  Send,
  Sparkles,
} from "lucide-react";

const suggestions = [
  "Build a React dashboard",
  "Generate a business plan",
  "Create an AI image prompt",
  "Write a Python script",
];

export default function ChatPanel() {
  const [message, setMessage] = useState("");

  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex items-center gap-3">

        <Bot className="h-8 w-8 text-cyan-400" />

        <div>

          <h2 className="text-2xl font-black">

            AI Conversation

          </h2>

          <p className="text-muted-foreground">

            Ask anything. Market AI is ready.

          </p>

        </div>

      </div>

      <div className="space-y-5 rounded-2xl border border-white/10 p-5">

        <div className="flex gap-3">

          <div className="rounded-full bg-cyan-500/10 p-2">

            <Bot className="h-5 w-5 text-cyan-400" />

          </div>

          <div className="rounded-2xl bg-cyan-500/10 p-4">

            👋 Welcome! What would you like to build today?

          </div>

        </div>

      </div>

      <div className="mt-6">

        <h3 className="mb-3 font-bold">

          Suggested Prompts

        </h3>

        <div className="flex flex-wrap gap-3">

          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setMessage(item)}
              className="rounded-full border border-white/10 px-4 py-2 text-sm transition hover:border-cyan-500 hover:bg-cyan-500/10"
            >
              <Sparkles className="mr-2 inline h-4 w-4" />

              {item}
            </button>
          ))}

        </div>

      </div>

      <div className="mt-8 rounded-2xl border border-white/10 p-4">

        <div className="flex flex-wrap gap-3">

          <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">

            <Paperclip className="h-5 w-5" />

          </button>

          <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">

            <Image className="h-5 w-5" />

          </button>

          <button className="rounded-xl border border-white/10 p-3 hover:bg-white/5">

            <Mic className="h-5 w-5" />

          </button>

          <input
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Type your message..."
            className="min-w-[250px] flex-1 bg-transparent px-4 outline-none"
          />

          <button className="rounded-xl bg-gradient-to-r from-cyan-600 to-blue-600 p-3 text-white hover:opacity-90">

            <Send className="h-5 w-5" />

          </button>

        </div>

      </div>

    </section>
  );
}
