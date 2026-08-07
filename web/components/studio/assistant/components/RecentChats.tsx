"use client";

import {
  Bot,
  Clock3,
  Pin,
  Search,
  Sparkles,
} from "lucide-react";

const chats = [
  {
    title: "Build an AI Marketplace",
    model: "GPT-5.5",
    time: "2 min ago",
    pinned: true,
  },
  {
    title: "Generate React Dashboard",
    model: "GPT-5.5",
    time: "15 min ago",
    pinned: false,
  },
  {
    title: "Create Marketing Strategy",
    model: "Business AI",
    time: "35 min ago",
    pinned: false,
  },
  {
    title: "Design Mobile App UI",
    model: "Design AI",
    time: "1 hour ago",
    pinned: true,
  },
  {
    title: "Research Competitors",
    model: "Research AI",
    time: "Yesterday",
    pinned: false,
  },
];

export default function RecentChats() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-6 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

        <div>

          <h2 className="text-2xl font-black">

            Recent Conversations

          </h2>

          <p className="mt-2 text-muted-foreground">

            Continue where you left off.

          </p>

        </div>

        <div className="flex items-center gap-3 rounded-2xl border border-white/10 px-4 py-3">

          <Search className="h-5 w-5 text-cyan-400" />

          <input
            placeholder="Search conversations..."
            className="bg-transparent outline-none"
          />

        </div>

      </div>

      <div className="space-y-4">

        {chats.map((chat) => (

          <button
            key={chat.title}
            className="flex w-full items-center justify-between rounded-2xl border border-white/10 bg-background/40 p-5 text-left transition hover:border-cyan-500 hover:bg-cyan-500/5"
          >

            <div className="flex items-center gap-4">

              <div className="rounded-2xl bg-cyan-500/10 p-3">

                <Bot className="h-6 w-6 text-cyan-400" />

              </div>

              <div>

                <h3 className="font-bold">

                  {chat.title}

                </h3>

                <div className="mt-2 flex flex-wrap gap-3 text-sm">

                  <span className="inline-flex items-center gap-1 rounded-full bg-cyan-500/10 px-3 py-1 text-cyan-400">

                    <Sparkles className="h-3 w-3" />

                    {chat.model}

                  </span>

                  <span className="inline-flex items-center gap-1 text-muted-foreground">

                    <Clock3 className="h-3 w-3" />

                    {chat.time}

                  </span>

                </div>

              </div>

            </div>

            {chat.pinned && (

              <Pin className="h-5 w-5 text-yellow-400" />

            )}

          </button>

        ))}

      </div>

    </section>
  );
}
