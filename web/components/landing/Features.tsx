const features = [
  {
    icon: "⚡",
    title: "Lightning Fast Generation",
    description:
      "Generate complete songs, lyrics and vocals within seconds using optimized AI models.",
  },
  {
    icon: "🌍",
    title: "100+ Languages",
    description:
      "Create music in Telugu, Hindi, English and over 100 supported languages.",
  },
  {
    icon: "🎤",
    title: "AI Voice Cloning",
    description:
      "Clone voices naturally with realistic speech and singing capabilities.",
  },
  {
    icon: "🎼",
    title: "Studio Quality",
    description:
      "Export professional-quality MP3, WAV and lossless audio ready for publishing.",
  },
  {
    icon: "☁️",
    title: "Cloud Workspace",
    description:
      "All projects are securely stored and accessible from any device.",
  },
  {
    icon: "🔗",
    title: "Developer API",
    description:
      "Integrate AI music generation directly into your own applications.",
  },
  {
    icon: "💰",
    title: "Commercial License",
    description:
      "Use generated content for YouTube, Spotify, ads, games and commercial projects.",
  },
  {
    icon: "🛡️",
    title: "Enterprise Security",
    description:
      "Modern security, encrypted storage and enterprise-ready infrastructure.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-semibold text-cyan-400">
            FEATURES
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Built For The Future
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Powerful AI technology designed for musicians, creators,
            businesses and developers.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 text-3xl">

                {feature.icon}

              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
