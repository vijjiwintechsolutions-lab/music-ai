"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  Home,
  Music4,
  Wand2,
  Mic2,
  Video,
  ImageIcon,
  Headphones,
  FileAudio,
  Settings,
  CreditCard,
  Users,
  BarChart3,
  Sparkles,
} from "lucide-react";

const menu = [
  {
    title: "Dashboard",
    icon: Home,
    href: "/dashboard",
  },
  {
    title: "Song Generator",
    icon: Music4,
    href: "/studio/song",
  },
  {
    title: "Lyrics Generator",
    icon: Wand2,
    href: "/studio/lyrics",
  },
  {
    title: "Voice Clone",
    icon: Mic2,
    href: "/studio/voice",
  },
  {
    title: "Music Video",
    icon: Video,
    href: "/studio/video",
  },
  {
    title: "Album Cover",
    icon: ImageIcon,
    href: "/studio/cover",
  },
  {
    title: "Audio Mastering",
    icon: Headphones,
    href: "/studio/mastering",
  },
  {
    title: "Audio Converter",
    icon: FileAudio,
    href: "/studio/converter",
  },
  {
    title: "Analytics",
    icon: BarChart3,
    href: "/analytics",
  },
  {
    title: "Billing",
    icon: CreditCard,
    href: "/billing",
  },
  {
    title: "Team",
    icon: Users,
    href: "/team",
  },
  {
    title: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-72 border-r border-white/10 bg-background lg:flex lg:flex-col">

      <div className="border-b border-white/10 p-8">

        <div className="flex items-center gap-4">

          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

            <Sparkles className="h-7 w-7 text-white" />

          </div>

          <div>

            <h2 className="text-2xl font-black">
              Market1 AI
            </h2>

            <p className="text-sm text-muted-foreground">
              AI Studio
            </p>

          </div>

        </div>

      </div>

      <nav className="flex-1 space-y-2 overflow-y-auto p-5">

        {menu.map((item) => {
          const Icon = item.icon;

          const active = pathname === item.href;

          return (
            <Link
              key={item.title}
              href={item.href}
              className={`flex items-center gap-4 rounded-2xl px-5 py-4 transition ${
                active
                  ? "bg-gradient-to-r from-violet-600 to-cyan-500 text-white"
                  : "hover:bg-white/5"
              }`}
            >

              <Icon className="h-5 w-5" />

              <span className="font-medium">
                {item.title}
              </span>

            </Link>
          );
        })}

      </nav>

      <div className="border-t border-white/10 p-6">

        <div className="rounded-3xl bg-gradient-to-br from-violet-600 to-cyan-500 p-6">

          <h3 className="text-xl font-bold text-white">
            Upgrade to Pro
          </h3>

          <p className="mt-3 text-sm text-white/80">
            Unlock unlimited AI tools, faster generation and commercial
            licensing.
          </p>

          <button className="mt-6 w-full rounded-xl bg-white py-3 font-semibold text-black">
            Upgrade
          </button>

        </div>

      </div>

    </aside>
  );
}
