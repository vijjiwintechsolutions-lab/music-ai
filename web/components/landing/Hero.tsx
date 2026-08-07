export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        <div className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm text-violet-400">
          🚀 World's Smartest AI Music Platform
        </div>

        <h1 className="max-w-5xl text-5xl font-black leading-tight md:text-7xl">
          Create Songs,
          <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Voices{" "}
          </span>
          & Music Videos
          <br />
          With AI
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
          Generate original songs, lyrics, AI singers, voice cloning,
          mastering, album covers and music videos from a single platform.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">

          <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:scale-105">
            Generate Song
          </button>

          <button className="rounded-xl border px-8 py-4 font-semibold transition hover:bg-accent">
            Explore AI Tools
          </button>

        </div>

        <div className="mt-20 grid w-full max-w-5xl gap-6 md:grid-cols-4">

          <div className="rounded-2xl border p-6">
            <h2 className="text-3xl font-bold text-violet-500">100+</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Languages
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-3xl font-bold text-cyan-500">25+</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Tools
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-3xl font-bold text-green-500">1M+</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Songs Generated
            </p>
          </div>

          <div className="rounded-2xl border p-6">
            <h2 className="text-3xl font-bold text-orange-500">24/7</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              AI Availability
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
