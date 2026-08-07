import Link from "next/link";
import {
  Music4,
  Wand2,
  Mic2,
  Video,
  ImageIcon,
  Headphones,
  ArrowRight,
} from "lucide-react";

const actions = [
  {
    title: "Generate Song",
    description: "Create a complete AI song.",
    href: "/studio/song",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Generate Lyrics",
    description: "Write lyrics in any language.",
    href: "/studio/lyrics",
    icon: Wand2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Clone Voice",
    description: "Create realistic AI voices.",
    href: "/studio/voice",
    icon: Mic2,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Music Video",
    description: "Generate cinematic videos.",
    href: "/studio/video",
    icon: Video,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Album Cover",
    description: "Create AI cover artwork.",
    href: "/studio/cover",
    icon: ImageIcon,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Audio Mastering",
    description: "Professional AI mastering.",
    href: "/studio/mastering",
    icon: Headphones,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function QuickActions() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8">

        <h2 className="text-2xl font-black">
          Quick Actions
        </h2>

        <p className="mt-2 text-muted-foreground">
          Start a new AI project with one click.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {actions.map((action) => {
          const Icon = action.icon;

          return (
            <Link
              key={action.title}
              href={action.href}
              className="group rounded-2xl border border-white/10 p-6 transition hover:-translate-y-2 hover:border-violet-500 hover:bg-white/5"
            >

              <div
                className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${action.color}`}
              >

                <Icon className="h-8 w-8 text-white" />

              </div>

              <h3 className="text-xl font-bold">
                {action.title}
              </h3>

              <p className="mt-3 leading-7 text-muted-foreground">
                {action.description}
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-violet-400">

                Launch

                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />

              </div>

            </Link>
          );
        })}

      </div>

    </section>
  );
}
