"use client";

import {
  Bot,
  Brain,
  Code2,
  Database,
  Globe,
  Image,
  Music4,
  Search,
  Video,
  Workflow,
} from "lucide-react";

const actions = [
  {
    title: "Generate Code",
    description: "Build websites, apps and APIs with AI.",
    icon: Code2,
  },
  {
    title: "Create Image",
    description: "Generate AI artwork and graphics.",
    icon: Image,
  },
  {
    title: "Generate Video",
    description: "Create AI videos and animations.",
    icon: Video,
  },
  {
    title: "Compose Music",
    description: "Produce songs and background music.",
    icon: Music4,
  },
  {
    title: "Research",
    description: "Search and summarize information.",
    icon: Search,
  },
  {
    title: "AI Agent",
    description: "Create intelligent autonomous agents.",
    icon: Bot,
  },
  {
    title: "Knowledge Base",
    description: "Manage AI memory and documents.",
    icon: Brain,
  },
  {
    title: "Automation",
    description: "Build workflows and automations.",
    icon: Workflow,
  },
  {
    title: "Database",
    description: "Design and manage databases.",
    icon: Database,
  },
  {
    title: "Browse Web",
    description: "Search the internet with AI.",
    icon: Globe,
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">

            Quick Actions

          </h2>

          <p className="mt-2 text-muted-foreground">

            Launch AI tools with one click.

          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-5">

        {actions.map((action) => (
          <button
            key={action.title}
            className="rounded-2xl border border-white/10 bg-background/40 p-5 text-left transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500 hover:bg-cyan-500/5"
          >

            <action.icon className="mb-4 h-9 w-9 text-cyan-400" />

            <h3 className="text-lg font-bold">

              {action.title}

            </h3>

            <p className="mt-2 text-sm text-muted-foreground">

              {action.description}

            </p>

          </button>
        ))}

      </div>

    </section>
  );
}
