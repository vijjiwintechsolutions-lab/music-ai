import Link from "next/link";
import {
  Music4,
  Sparkles,
  Wand2,
  Mic2,
  Video,
  ImageIcon,
  Headphones,
  ArrowRight,
} from "lucide-react";

const tools = [
  {
    title: "Song Generator",
    description: "Generate complete songs from prompts.",
    icon: Music4,
    href: "/studio/song",
  },
  {
    title: "Lyrics Generator",
    description: "Create lyrics in 100+ languages.",
    icon: Wand2,
    href: "/studio/lyrics",
  },
  {
    title: "Voice Clone",
    description: "Clone realistic AI voices.",
    icon: Mic2,
    href: "/studio/voice",
  },
  {
    title: "Music Video",
    description: "Generate AI music videos.",
    icon: Video,
    href: "/studio/video",
  },
  {
    title: "Album Cover",
    description: "Create stunning cover art.",
    icon: ImageIcon,
    href: "/studio/cover",
  },
  {
    title: "Audio Mastering",
    description: "Professional AI mastering.",
    icon: Headphones,
    href: "/studio/mastering",
  },
];

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-background">

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-16">

          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">

            <div>

              <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                AI STUDIO
              </span>

              <h1 className="mt-6 text-5xl font-black">
                Welcome to Market1 AI
              </h1>

              <p className="mt-6 max-w-2xl text-lg text-muted-foreground">
                Build songs, lyrics, voices, videos and audio using one
                professional AI workspace.
              </p>

            </div>

            <button className="flex items-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 font-semibold text-white">

              <Sparkles className="h-5 w-5" />

              New Project

            </button>

          </div>

        </div>

      </section>

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tools.map((tool) => {
            const Icon = tool.icon;

            return (
              <Link
                key={tool.title}
                href={tool.href}
                className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
              >

                <div className="mb-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <h2 className="text-2xl font-bold">
                  {tool.title}
                </h2>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {tool.description}
                </p>

                <div className="mt-8 flex items-center gap-2 font-semibold text-violet-400">

                  Open Tool

                  <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

                </div>

              </Link>
            );
          })}

        </div>

      </section>

    </main>
  );
}
