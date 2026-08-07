const tools = [
  {
    icon: "🎵",
    title: "AI Song Generator",
    description: "Create complete songs from a simple prompt.",
    badge: "Popular",
  },
  {
    icon: "✍️",
    title: "AI Lyrics",
    description: "Generate multilingual lyrics instantly.",
    badge: "New",
  },
  {
    icon: "🎤",
    title: "AI Singer",
    description: "Generate realistic singing voices.",
    badge: "Pro",
  },
  {
    icon: "🗣️",
    title: "Voice Clone",
    description: "Clone any voice with AI technology.",
    badge: "Pro",
  },
  {
    icon: "🎧",
    title: "Vocal Remover",
    description: "Separate vocals and instrumentals.",
    badge: "Free",
  },
  {
    icon: "🎬",
    title: "Music Video",
    description: "Generate AI music videos automatically.",
    badge: "Beta",
  },
  {
    icon: "🖼️",
    title: "Album Cover",
    description: "Create beautiful album artwork.",
    badge: "Free",
  },
  {
    icon: "🎹",
    title: "Beat Generator",
    description: "Generate original beats instantly.",
    badge: "New",
  },
  {
    icon: "🎼",
    title: "Background Music",
    description: "Royalty-free music for any content.",
    badge: "Popular",
  },
  {
    icon: "🎙️",
    title: "Podcast Studio",
    description: "AI podcast generation tools.",
    badge: "Pro",
  },
  {
    icon: "🎚️",
    title: "AI Mastering",
    description: "Professional audio mastering.",
    badge: "Pro",
  },
  {
    icon: "🔊",
    title: "Sound Effects",
    description: "Generate unlimited sound effects.",
    badge: "New",
  },
];

export default function AiTools() {
  return (
    <section
      id="tools"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
            AI TOOLS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Everything You Need
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Professional AI music creation tools built for creators,
            artists, businesses and developers.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="text-5xl">
                  {tool.icon}
                </div>

                <span className="rounded-full bg-violet-500/10 px-3 py-1 text-xs font-semibold text-violet-400">
                  {tool.badge}
                </span>

              </div>

              <h3 className="text-2xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-4 leading-8 text-muted-foreground">
                {tool.description}
              </p>

              <button className="mt-8 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-6 py-3 font-semibold text-white transition hover:scale-105">
                Open Tool
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
