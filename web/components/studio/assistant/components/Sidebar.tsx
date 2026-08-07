"use client";

import {
  BarChart3,
  Bot,
  Brain,
  Database,
  FileText,
  Folder,
  Globe,
  Image,
  MessageSquare,
  Mic,
  Search,
  Settings,
  Shield,
  Workflow,
  Wrench,
} from "lucide-react";

const menu = [
  {
    title: "AI Chat",
    icon: MessageSquare,
  },
  {
    title: "AI Agents",
    icon: Bot,
  },
  {
    title: "Knowledge Base",
    icon: Brain,
  },
  {
    title: "Memory",
    icon: Database,
  },
  {
    title: "Tool Calling",
    icon: Wrench,
  },
  {
    title: "Browser",
    icon: Globe,
  },
  {
    title: "Vision AI",
    icon: Image,
  },
  {
    title: "Voice AI",
    icon: Mic,
  },
  {
    title: "Research",
    icon: Search,
  },
  {
    title: "Files",
    icon: Folder,
  },
  {
    title: "Workflows",
    icon: Workflow,
  },
  {
    title: "Documents",
    icon: FileText,
  },
  {
    title: "Security",
    icon: Shield,
  },
  {
    title: "Analytics",
    icon: BarChart3,
  },
  {
    title: "Settings",
    icon: Settings,
  },
];

export default function Sidebar() {
  return (
    <aside className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6">

        <h2 className="text-xl font-black">

          Assistant Studio

        </h2>

        <p className="mt-2 text-sm text-muted-foreground">

          AI Workspace Navigation

        </p>

      </div>

      <nav className="space-y-2">

        {menu.map((item) => (
          <button
            key={item.title}
            className="flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-cyan-500/10 hover:text-cyan-400"
          >

            <item.icon className="h-5 w-5" />

            <span className="font-medium">

              {item.title}

            </span>

          </button>
        ))}

      </nav>

    </aside>
  );
}
