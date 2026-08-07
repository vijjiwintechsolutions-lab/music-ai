import {
  Music4,
  Mic2,
  Video,
  ImageIcon,
  Wand2,
  Headphones,
  ArrowUpRight,
} from "lucide-react";

const tools = [
  {
    title: "AI Song Generator",
    users: "152K",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Voice Clone",
    users: "98K",
    icon: Mic2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Music Video",
    users: "87K",
    icon: Video,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Album Cover",
    users: "63K",
    icon: ImageIcon,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "Lyrics Generator",
    users: "176K",
    icon: Wand2,
    color: "from-orange-500 to-amber-500",
  },
  {
    title: "AI Mastering",
    users: "54K",
    icon: Headphones,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function PopularTools() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Popular AI Tools
          </h2>

          <p className="mt-2 text-muted-foreground">
            Most used tools across the platform.
          </p>

        </div>

      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">

        {tools.map((tool) => {
          const Icon = tool.icon;

          return (
            <button
              key={tool.title}
              className="group rounded-2xl border border-white/10 p-6 text-left transition hover:-translate-y-2 hover:border-violet-500 hover:bg-white/5"
            >

              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${tool.color}`}
              >

                <Icon className="h-8 w-8 text-white" />

              </div>

              <h3 className="mt-6 text-xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-2 text-sm text-muted-foreground">
                {tool.users} creators
              </p>

              <div className="mt-6 flex items-center gap-2 font-semibold text-violet-400">

                Launch

                <ArrowUpRight className="h-4 w-4 transition group-hover:translate-x-1 group-hover:-translate-y-1" />

              </div>

            </button>
          );
        })}

      </div>

    </section>
  );
}
