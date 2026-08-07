const features = [
  {
    title: "Lightning Fast",
    description:
      "Generate complete songs, lyrics and vocals within seconds using optimized AI pipelines.",
    icon: "⚡",
  },
  {
    title: "Commercial License",
    description:
      "Create original content for personal and commercial projects with flexible licensing.",
    icon: "💼",
  },
  {
    title: "100+ Languages",
    description:
      "Generate multilingual lyrics, speech and songs from a single platform.",
    icon: "🌍",
  },
  {
    title: "Cloud Storage",
    description:
      "Automatically save your generated songs and projects securely in the cloud.",
    icon: "☁️",
  },
  {
    title: "AI Voice Clone",
    description:
      "Clone voices with natural quality for music, narration and creative projects.",
    icon: "🎙️",
  },
  {
    title: "High Quality Audio",
    description:
      "Export studio-quality WAV, MP3 and lossless audio formats.",
    icon: "🎧",
  },
  {
    title: "Enterprise API",
    description:
      "Integrate Market1 AI directly into your own apps and products.",
    icon: "🔗",
  },
  {
    title: "24×7 Availability",
    description:
      "Create music anytime with powerful AI services available around the clock.",
    icon: "🚀",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm font-semibold text-cyan-400">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Why Choose Market1 AI?
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            Built for creators, musicians, startups, agencies and
            enterprises looking for the next generation AI music platform.
          </p>

        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-500 hover:shadow-xl"
            >

              <div className="mb-6 text-5xl">
                {feature.icon}
              </div>

              <h3 className="text-2xl font-bold">
                {feature.title}
              </h3>

              <p className="mt-4 leading-7 text-muted-foreground">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
