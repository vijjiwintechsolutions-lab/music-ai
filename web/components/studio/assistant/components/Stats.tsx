"use client";

import {
  Activity,
  BarChart3,
  Bot,
  Brain,
  Clock3,
  Cpu,
  MessageSquare,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Total Conversations",
    value: "12,845",
    icon: MessageSquare,
    change: "+18%",
  },
  {
    title: "AI Agents",
    value: "150",
    icon: Bot,
    change: "+12%",
  },
  {
    title: "Tokens Processed",
    value: "28.4M",
    icon: Brain,
    change: "+34%",
  },
  {
    title: "Response Time",
    value: "0.8s",
    icon: Clock3,
    change: "-25%",
  },
  {
    title: "API Requests",
    value: "4.2M",
    icon: Cpu,
    change: "+21%",
  },
  {
    title: "Workflows",
    value: "896",
    icon: Activity,
    change: "+9%",
  },
  {
    title: "Weekly Growth",
    value: "31%",
    icon: TrendingUp,
    change: "+6%",
  },
  {
    title: "Performance",
    value: "99.9%",
    icon: BarChart3,
    change: "+1%",
  },
];

export default function Stats() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">

            AI Analytics

          </h2>

          <p className="mt-2 text-muted-foreground">

            Real-time assistant performance and usage.

          </p>

        </div>

      </div>

      <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">

        {stats.map((item) => (

          <div
            key={item.title}
            className="rounded-2xl border border-white/10 bg-background/40 p-5 transition-all duration-300 hover:-translate-y-1 hover:border-cyan-500"
          >

            <div className="mb-5 flex items-center justify-between">

              <div className="rounded-2xl bg-cyan-500/10 p-3">

                <item.icon className="h-6 w-6 text-cyan-400" />

              </div>

              <span className="rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-400">

                {item.change}

              </span>

            </div>

            <div className="text-3xl font-black">

              {item.value}

            </div>

            <p className="mt-2 text-muted-foreground">

              {item.title}

            </p>

          </div>

        ))}

      </div>

    </section>
  );
}
