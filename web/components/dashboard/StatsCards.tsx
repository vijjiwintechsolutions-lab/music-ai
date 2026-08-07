import {
  Music4,
  Mic2,
  Video,
  Sparkles,
  TrendingUp,
} from "lucide-react";

const stats = [
  {
    title: "Songs Generated",
    value: "12,584",
    change: "+18%",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Voice Clones",
    value: "1,248",
    change: "+12%",
    icon: Mic2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Videos Created",
    value: "864",
    change: "+31%",
    icon: Video,
    color: "from-pink-500 to-orange-500",
  },
  {
    title: "AI Credits",
    value: "250",
    change: "Available",
    icon: Sparkles,
    color: "from-green-500 to-emerald-500",
  },
];

export default function StatsCards() {
  return (
    <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

      {stats.map((item) => {
        const Icon = item.icon;

        return (
          <div
            key={item.title}
            className="rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur transition hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
          >

            <div className="flex items-center justify-between">

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
              >

                <Icon className="h-8 w-8 text-white" />

              </div>

              <div className="flex items-center gap-1 rounded-full bg-green-500/10 px-3 py-1 text-sm font-semibold text-green-500">

                <TrendingUp className="h-4 w-4" />

                {item.change}

              </div>

            </div>

            <h3 className="mt-8 text-sm text-muted-foreground">
              {item.title}
            </h3>

            <h2 className="mt-2 text-4xl font-black">
              {item.value}
            </h2>

          </div>
        );
      })}

    </section>
  );
}
