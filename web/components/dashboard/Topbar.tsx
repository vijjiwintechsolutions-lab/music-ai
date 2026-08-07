"use client";

import {
  Bell,
  Search,
  Sparkles,
  Settings,
  CircleUserRound,
} from "lucide-react";

export default function Topbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-background/80 backdrop-blur-xl">

      <div className="flex h-20 items-center justify-between px-8">

        <div>

          <h1 className="text-3xl font-black">
            Dashboard
          </h1>

          <p className="mt-1 text-sm text-muted-foreground">
            Welcome back to Market1 AI Studio
          </p>

        </div>

        <div className="flex items-center gap-5">

          {/* Search */}

          <div className="hidden lg:flex">

            <div className="flex items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-4 py-3">

              <Search className="h-5 w-5 text-muted-foreground" />

              <input
                type="text"
                placeholder="Search projects..."
                className="w-72 bg-transparent outline-none placeholder:text-muted-foreground"
              />

            </div>

          </div>

          {/* Credits */}

          <div className="hidden items-center gap-2 rounded-2xl border border-violet-500/20 bg-violet-500/10 px-5 py-3 md:flex">

            <Sparkles className="h-5 w-5 text-violet-400" />

            <span className="font-semibold">
              250 Credits
            </span>

          </div>

          {/* Notifications */}

          <button className="relative rounded-2xl border border-white/10 p-3 transition hover:bg-white/5">

            <Bell className="h-5 w-5" />

            <span className="absolute right-3 top-3 h-2.5 w-2.5 rounded-full bg-red-500" />

          </button>

          {/* Settings */}

          <button className="rounded-2xl border border-white/10 p-3 transition hover:bg-white/5">

            <Settings className="h-5 w-5" />

          </button>

          {/* User */}

          <button className="flex items-center gap-3 rounded-2xl border border-white/10 px-3 py-2 transition hover:bg-white/5">

            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500">

              <CircleUserRound className="h-6 w-6 text-white" />

            </div>

            <div className="hidden text-left lg:block">

              <h3 className="font-semibold">
                Creator
              </h3>

              <p className="text-xs text-muted-foreground">
                Pro Plan
              </p>

            </div>

          </button>

        </div>

      </div>

    </header>
  );
}
