export default function Hero() {
  return (
    <section className="relative overflow-hidden">

      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-background" />

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(139,92,246,0.25),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(34,211,238,0.18),transparent_35%)]" />

      <div className="mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center justify-center px-6 py-20 text-center">

        <div className="mb-8 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
          🚀 World's Most Advanced AI Music Platform
        </div>

        <h1 className="max-w-6xl text-5xl font-black leading-tight tracking-tight md:text-7xl lg:text-8xl">

          Create Songs,

          <span className="bg-gradient-to-r from-violet-500 via-fuchsia-500 to-cyan-400 bg-clip-text text-transparent">
            {" "}Lyrics{" "}
          </span>

          Voices & Videos

          <br />

          Using AI

        </h1>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-muted-foreground md:text-xl">

          Generate studio-quality songs, lyrics, AI singers,
          voice cloning, background music, album covers,
          podcasts, music videos and more from one platform.

        </p>

        <div className="mt-12 flex flex-wrap justify-center gap-5">

          <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">

            🎵 Generate Song

          </button>

          <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/10">

            ▶ Explore Studio

          </button>

        </div>

        <div className="mt-20 grid w-full max-w-6xl gap-6 md:grid-cols-4">

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h2 className="text-4xl font-black text-violet-500">
              100+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Languages
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h2 className="text-4xl font-black text-cyan-400">
              25+
            </h2>

            <p className="mt-3 text-muted-foreground">
              AI Tools
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h2 className="text-4xl font-black text-green-500">
              1M+
            </h2>

            <p className="mt-3 text-muted-foreground">
              Songs Generated
            </p>

          </div>

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

            <h2 className="text-4xl font-black text-orange-500">
              24×7
            </h2>

            <p className="mt-3 text-muted-foreground">
              AI Available
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}
