import {
  Flame,
  Music4,
  Mic2,
  Video,
  ImageIcon,
  ArrowUpRight,
} from "lucide-react";

const templates = [
  {
    title: "Lo-Fi Chill",
    category: "Song",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
    uses: "24.5K",
  },
  {
    title: "Podcast Voice",
    category: "Voice Clone",
    icon: Mic2,
    color: "from-cyan-500 to-blue-500",
    uses: "18.2K",
  },
  {
    title: "Lyric Video",
    category: "Video",
    icon: Video,
    color: "from-pink-500 to-red-500",
    uses: "15.8K",
  },
  {
    title: "Neon Album Cover",
    category: "Artwork",
    icon: ImageIcon,
    color: "from-emerald-500 to-green-500",
    uses: "11.7K",
  },
];

export default function TrendingTemplates() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Trending Templates
          </h2>

          <p className="mt-2 text-muted-foreground">
            Most popular templates this week.
          </p>

        </div>

        <Flame className="h-7 w-7 text-orange-500" />

      </div>

      <div className="grid gap-6 md:grid-cols-2">

        {templates.map((template) => {
          const Icon = template.icon;

          return (
            <button
              key={template.title}
              className="group rounded-2xl border border-white/10 p-6 text-left transition hover:-translate-y-2 hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${template.color}`}
                >

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1" />

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {template.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {template.category}
              </p>

              <div className="mt-6 flex items-center justify-between">

                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-sm font-semibold text-violet-400">
                  {template.uses} Uses
                </span>

                <span className="text-sm font-semibold text-violet-400">
                  Use Template
                </span>

              </div>

            </button>
          );
        })}

      </div>

    </section>
  );
}
