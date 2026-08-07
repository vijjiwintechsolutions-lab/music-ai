const tools = [
  {
    title: "AI Song Generator",
    description:
      "Generate original songs in seconds using powerful AI models.",
    icon: "🎵",
  },
  {
    title: "AI Lyrics",
    description:
      "Create meaningful lyrics in more than 100 languages.",
    icon: "✍️",
  },
  {
    title: "Voice Cloning",
    description:
      "Clone voices with realistic quality for your projects.",
    icon: "🎙️",
  },
  {
    title: "AI Singer",
    description:
      "Generate professional AI singing vocals instantly.",
    icon: "🎤",
  },
  {
    title: "Vocal Remover",
    description:
      "Separate vocals and instrumentals with one click.",
    icon: "🎧",
  },
  {
    title: "Music Video",
    description:
      "Create AI-powered music videos from your songs.",
    icon: "🎬",
  },
  {
    title: "Album Cover",
    description:
      "Generate stunning album artwork automatically.",
    icon: "🖼️",
  },
  {
    title: "Audio Mastering",
    description:
      "Enhance your music with AI mastering technology.",
    icon: "🎚️",
  },
];

export default function AiTools() {
  return (
    <section
      id="tools"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            AI TOOLS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Everything You Need
          </h2>

          <p className="mx-auto mt-5 max-w-3xl text-lg text-muted-foreground">
            One platform to create songs, lyrics, vocals,
            covers, podcasts, music videos and much more.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {tools.map((tool) => (
            <div
              key={tool.title}
              className="group rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="mb-6 text-5xl">
                {tool.icon}
              </div>

              <h3 className="text-xl font-bold">
                {tool.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {tool.description}
              </p>

              <button className="mt-8 rounded-lg bg-violet-600 px-5 py-3 font-semibold text-white transition hover:bg-violet-700">
                Explore
              </button>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
