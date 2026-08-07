"use client";

import { Bot, Brain, Cpu, CheckCircle } from "lucide-react";

export default function AssistantCard() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="flex items-center justify-between">

        <div className="flex items-center gap-4">

          <div className="rounded-2xl bg-cyan-500/10 p-4">

            <Bot className="h-8 w-8 text-cyan-400" />

          </div>

          <div>

            <h2 className="text-2xl font-black">
              Market AI Assistant
            </h2>

            <p className="text-muted-foreground">
              Enterprise AI Operating System
            </p>

          </div>

        </div>

        <div className="flex items-center gap-2 text-green-400">

          <CheckCircle className="h-5 w-5" />

          Online

        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        <div className="rounded-2xl border border-white/10 p-4">

          <Brain className="mb-3 h-6 w-6 text-cyan-400" />

          <h3 className="font-bold">AI Model</h3>

          <p className="text-muted-foreground">GPT-5.5</p>

        </div>

        <div className="rounded-2xl border border-white/10 p-4">

          <Cpu className="mb-3 h-6 w-6 text-cyan-400" />

          <h3 className="font-bold">Response</h3>

          <p className="text-muted-foreground">&lt; 1 Second</p>

        </div>

        <div className="rounded-2xl border border-white/10 p-4">

          <Bot className="mb-3 h-6 w-6 text-cyan-400" />

          <h3 className="font-bold">Status</h3>

          <p className="text-green-400">Ready</p>

        </div>

      </div>

    </div>
  );
}
