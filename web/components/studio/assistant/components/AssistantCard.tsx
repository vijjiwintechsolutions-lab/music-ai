"use client";

import { Bot, Brain, CheckCircle2, Cpu, Sparkles } from "lucide-react";

const stats = [
  {
    icon: Brain,
    label: "AI Model",
    value: "GPT-5.5",
  },
  {
    icon: Cpu,
    label: "Response",
    value: "< 1 sec",
  },
  {
    icon: Sparkles,
    label: "Accuracy",
    value: "99.9%",
  },
];

export default function AssistantCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8">

      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

        <div className="flex items-center gap-5">

          <div className="rounded-3xl bg-cyan-500/10 p-5">

            <Bot className="h-12 w-12 text-cyan-400" />

          </div>

          <div>

            <h2 className="text-3xl font-black">

              Market AI Assistant

            </h2>

            <p className="mt-2 text-muted-foreground">

              Your intelligent AI workspace for coding, business,
              research, automation and creativity.

            </p>

          </div>

        </div>

        <div className="inline-flex items-center gap-2 rounded-full bg-green-500/10 px-5 py-3 text-green-400">

          <CheckCircle2 className="h-5 w-5" />

          Assistant Online

        </div>

      </div>

      <div className="mt-8 grid gap-4 md:grid-cols-3">

        {stats.map((item) => (
          <div
            key={item.label}
            className="rounded-2xl border border-white/10 p-5"
          >

            <item.icon className="mb-3 h-7 w-7 text-cyan-400" />

            <div className="text-2xl font-black">

              {item.value}

            </div>

            <p className="mt-2 text-muted-foreground">

              {item.label}

            </p>

          </div>
        ))}

      </div>

    </section>
  );
}
