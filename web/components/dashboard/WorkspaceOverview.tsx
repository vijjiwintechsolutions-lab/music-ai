"use client";

import { Sparkles, ArrowUpRight, FolderKanban, Zap, Activity } from "lucide-react";
import Link from "next/link";

export default function WorkspaceOverview() {
  return (
    <div className="space-y-8">
      {/* Welcome Banner */}
      <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-cyan-600/10 via-blue-500/10 to-indigo-500/10 p-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/20 bg-cyan-500/10 px-3.5 py-1 text-xs font-bold text-cyan-400">
              <Sparkles className="h-3.5 w-3.5" /> Workspace Active
            </div>
            <h1 className="mt-4 text-3xl font-black tracking-tight">Welcome back, Creator! 👋</h1>
            <p className="mt-2 text-sm text-muted-foreground max-w-xl">
              Your AI generation queues are running smoothly. You have 1,450 credits remaining for this billing cycle.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/studio/code"
              className="rounded-2xl bg-gradient-to-r from-cyan-600 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:opacity-90"
            >
              Start New Project
            </Link>
          </div>
        </div>
      </div>

      {/* Quick Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-bold">Total Projects</span>
            <FolderKanban className="h-5 w-5 text-cyan-400" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-black">28</span>
            <span className="text-xs font-bold text-emerald-400">+4 this week</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-bold">Credits Remaining</span>
            <Zap className="h-5 w-5 text-amber-400" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-black">1,450</span>
            <span className="text-xs font-bold text-muted-foreground">/ 2,000 limit</span>
          </div>
        </div>

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-sm font-bold">System Status</span>
            <Activity className="h-5 w-5 text-emerald-400" />
          </div>
          <div className="mt-4 flex items-baseline gap-2">
            <span className="text-4xl font-black text-emerald-400">99.9%</span>
            <span className="text-xs font-bold text-muted-foreground">Operational</span>
          </div>
        </div>
      </div>

      {/* Recent Projects Section */}
      <div className="rounded-3xl border border-white/10 bg-white/5 p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-black">Recent Generations</h2>
          <Link href="/dashboard/projects" className="text-xs font-bold text-cyan-400 hover:underline flex items-center gap-1">
            View All <ArrowUpRight className="h-3.5 w-3.5" />
          </Link>
        </div>

        <div className="space-y-4">
          {[
            { title: "E-Commerce Landing Page UI", type: "Code Studio", time: "2 hours ago", status: "Completed" },
            { title: "Cyberpunk Cityscape 8K", type: "Image Studio", time: "5 hours ago", status: "Completed" },
            { title: "Lo-Fi Chillhop Track #4", type: "Song Studio", time: "1 day ago", status: "Processing" },
          ].map((project, idx) => (
            <div key={idx} className="flex items-center justify-between rounded-2xl border border-white/5 bg-background/40 p-4 transition hover:border-cyan-500/40">
              <div className="flex items-center gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-lg font-bold">
                  ⚡
                </div>
                <div>
                  <h4 className="text-sm font-bold">{project.title}</h4>
                  <p className="text-xs text-muted-foreground">{project.type} • {project.time}</p>
                </div>
              </div>
              <span className={`rounded-full px-3 py-1 text-[10px] font-bold ${
                project.status === "Completed" ? "bg-emerald-500/10 text-emerald-400" : "bg-amber-500/10 text-amber-400 animate-pulse"
              }`}>
                {project.status}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
