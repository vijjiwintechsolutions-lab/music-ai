const showcase = [
  {
    title: "AI Song Generator",
    subtitle: "Create complete songs from text prompts",
    gradient: "from-violet-600 to-fuchsia-500",
    emoji: "🎵",
  },
  {
    title: "AI Voice Clone",
    subtitle: "Generate realistic singing voices",
    gradient: "from-cyan-500 to-blue-500",
    emoji: "🎙️",
  },
  {
    title: "AI Music Video",
    subtitle: "Turn songs into cinematic videos",
    gradient: "from-pink-500 to-orange-500",
    emoji: "🎬",
  },
];

export default function Showcase() {
  return (
    <section className="py-28">

      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            LIVE SHOWCASE
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Build Amazing Music
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Experience the next generation AI studio built for creators.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-3">

          {showcase.map((item) => (
            <div
              key={item.title}
              className="group overflow-hidden rounded-[32px] border border-white/10 bg-white/5 backdrop-blur transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
            >

              <div
                className={`flex h-64 items-center justify-center bg-gradient-to-br ${item.gradient}`}
              >

                <div className="text-8xl transition duration-300 group-hover:scale-110">
                  {item.emoji}
                </div>

              </div>

              <div className="p-8">

                <h3 className="text-2xl font-black">
                  {item.title}
                </h3>

                <p className="mt-4 leading-8 text-muted-foreground">
                  {item.subtitle}
                </p>

                <button className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                  Launch Tool
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}
