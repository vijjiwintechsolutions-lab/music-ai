const steps = [
  {
    step: "01",
    icon: "💡",
    title: "Describe Your Idea",
    description:
      "Tell Market1 AI what you want. Choose genre, mood, language, singer, tempo and style.",
  },
  {
    step: "02",
    icon: "🤖",
    title: "AI Creates Everything",
    description:
      "Our AI generates lyrics, melody, vocals, background music and artwork automatically.",
  },
  {
    step: "03",
    icon: "🎛️",
    title: "Customize",
    description:
      "Edit lyrics, regenerate vocals, remix songs and fine tune every detail before exporting.",
  },
  {
    step: "04",
    icon: "🚀",
    title: "Export & Publish",
    description:
      "Download high-quality MP3, WAV or publish directly to your favourite platforms.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-28"
    >
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">

          <span className="rounded-full border border-green-500/20 bg-green-500/10 px-5 py-2 text-sm font-semibold text-green-400">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-black">
            Create Music In Minutes
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg text-muted-foreground">
            A simple workflow powered by advanced AI models that anyone can use.
          </p>

        </div>

        <div className="grid gap-8 lg:grid-cols-4">

          {steps.map((step) => (
            <div
              key={step.step}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur transition duration-300 hover:-translate-y-2 hover:border-violet-500 hover:shadow-2xl"
            >

              <div className="absolute right-6 top-6 text-6xl font-black text-white/5">
                {step.step}
              </div>

              <div className="mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-r from-violet-600 to-cyan-500 text-4xl">

                {step.icon}

              </div>

              <h3 className="text-2xl font-bold">
                {step.title}
              </h3>

              <p className="mt-5 leading-8 text-muted-foreground">
                {step.description}
              </p>

              <div className="mt-8 inline-flex rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                Step {step.step}
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
