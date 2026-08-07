export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-violet-950/30 via-background to-background" />

      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

        {/* Badge */}
        <div className="mb-8 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium text-violet-400">
          🚀 World's Smartest AI Music Platform
        </div>

        {/* Heading */}
        <h1 className="max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">
          Create
          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Songs{" "}
          </span>
          <br />
          Voices & Music Videos
          <br />
          With AI
        </h1>

        {/* Description */}
        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">
          Generate original songs, lyrics, AI singers, voice cloning,
          mastering, album covers, podcasts, background music,
          sound effects and music videos from one platform.
        </p>

        {/* Buttons */}
        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition-all duration-300 hover:scale-105 hover:bg-violet-700">
            🎵 Generate Song
          </button>

          <button className="rounded-xl border border-border px-8 py-4 font-semibold transition-all duration-300 hover:bg-accent">
            ▶ Watch Demo
          </button>

        </div>

        {/* Stats */}
        <div className="mt-24 grid w-full max-w-6xl gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-4xl font-black text-violet-500">
              100+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Languages Supported
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-4xl font-black text-cyan-500">
              25+
            </h2>

            <p className="mt-3 text-muted-foreground">
              AI Music Tools
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-4xl font-black text-green-500">
              1M+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Songs Generated
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-8 shadow-sm">
            <h2 className="text-4xl font-black text-orange-500">
              24/7
            </h2>

            <p className="mt-3 text-muted-foreground">
              AI Availability
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
