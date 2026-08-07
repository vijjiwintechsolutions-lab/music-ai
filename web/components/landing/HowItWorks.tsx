const steps = [
  {
    step: "01",
    title: "Describe Your Idea",
    description:
      "Enter a prompt describing the style, mood, genre, language, or artist inspiration for your song.",
    icon: "💡",
  },
  {
    step: "02",
    title: "AI Creates Everything",
    description:
      "Market1 AI generates lyrics, melody, vocals, background music, album art and more in minutes.",
    icon: "🤖",
  },
  {
    step: "03",
    title: "Customize",
    description:
      "Edit lyrics, regenerate vocals, change language, remix music and enhance audio quality.",
    icon: "🎛️",
  },
  {
    step: "04",
    title: "Export & Share",
    description:
      "Download your song in multiple formats or publish directly to your favorite platforms.",
    icon: "🚀",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full bg-green-500/10 px-4 py-2 text-sm font-semibold text-green-500">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-4xl font-black md:text-5xl">
            Create Music in 4 Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            No musical experience required. Just describe your idea and let
            Market1 AI create professional-quality music for you.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.step}
              className="relative overflow-hidden rounded-3xl border bg-card p-8 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="mb-6 flex items-center justify-between">

                <div className="text-5xl">
                  {step.icon}
                </div>

                <span className="text-4xl font-black text-violet-500/20">
                  {step.step}
                </span>

              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-5 leading-7 text-muted-foreground">
                {step.description}
              </p>

              <div className="mt-8 h-1 w-16 rounded-full bg-gradient-to-r from-violet-500 to-cyan-400" />

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
