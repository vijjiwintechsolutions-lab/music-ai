"use client";

import {
  ArrowRight,
  Bot,
  Brain,
  Cpu,
  Sparkles,
  Zap,
} from "lucide-react";

export default function Hero() {
  const cards = [
    {
      icon: Bot,
      title: "AI Agents",
      value: "150+",
    },
    {
      icon: Brain,
      title: "AI Models",
      value: "60+",
    },
    {
      icon: Cpu,
      title: "Tool Integrations",
      value: "500+",
    },
    {
      icon: Zap,
      title: "Daily Automations",
      value: "Unlimited",
    },
  ];

  return (
    <section className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-600/15 via-blue-600/10 to-indigo-700/15 p-10">

      <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl" />

      <div className="absolute bottom-0 left-0 h-72 w-72 rounded-full bg-blue-500/10 blur-3xl" />

      <div className="relative z-10 grid gap-10 lg:grid-cols-2">

        <div>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-cyan-300">

            <Sparkles className="h-4 w-4" />

            AI Assistant Operating System

          </div>

          <h1 className="text-5xl font-black leading-tight">

            Build, Create & Automate Everything With AI

          </h1>

          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">

            Market AI combines intelligent assistants, coding,
            image generation, research, automation, business tools,
            voice AI and workflow orchestration into one workspace.

          </p>

          <div className="mt-10 flex flex-wrap gap-4">

            <button className="inline-flex items-center gap-2 rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-8 py-4 font-bold text-white transition hover:scale-105">

              Launch Assistant

              <ArrowRight className="h-5 w-5" />

            </button>

            <button className="rounded-2xl border border-white/10 px-8 py-4 font-semibold transition hover:bg-white/5">

              Explore Features

            </button>

          </div>

        </div>

        <div className="grid gap-5 sm:grid-cols-2">

          {cards.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >

              <item.icon className="mb-5 h-10 w-10 text-cyan-400" />

              <h3 className="text-3xl font-black">

                {item.value}

              </h3>

              <p className="mt-2 text-muted-foreground">

                {item.title}

              </p>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
