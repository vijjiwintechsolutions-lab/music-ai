"use client";

import {
  Code2,
  Image,
  Music4,
  Search,
  Video,
  Workflow,
} from "lucide-react";

const actions = [
  { title: "Generate Code", icon: Code2 },
  { title: "Create Image", icon: Image },
  { title: "Create Video", icon: Video },
  { title: "Compose Music", icon: Music4 },
  { title: "Research", icon: Search },
  { title: "Automation", icon: Workflow },
];

export default function QuickActions() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-black">

        Quick Actions

      </h2>

      <div className="grid gap-4 md:grid-cols-3">

        {actions.map((item)=>(
          <button
            key={item.title}
            className="rounded-2xl border border-white/10 p-5 transition hover:bg-white/5"
          >

            <item.icon className="mx-auto mb-3 h-7 w-7 text-cyan-400"/>

            <div className="font-semibold">

              {item.title}

            </div>

          </button>
        ))}

      </div>

    </div>
  );
}
