export default function CTA() {
  return (
    <section className="relative overflow-hidden py-28">

      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,rgba(139,92,246,0.22),transparent_60%)]" />

      <div className="mx-auto max-w-7xl px-6">

        <div className="rounded-[40px] border border-white/10 bg-gradient-to-r from-violet-600/20 via-fuchsia-600/20 to-cyan-600/20 p-12 backdrop-blur-xl md:p-20">

          <div className="mx-auto max-w-4xl text-center">

            <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-semibold text-violet-400">
              START CREATING TODAY
            </span>

            <h2 className="mt-8 text-5xl font-black leading-tight md:text-6xl">
              Turn Your Ideas Into
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}Amazing Music
              </span>
            </h2>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-muted-foreground">
              Generate original songs, lyrics, AI singers,
              beats, music videos, album covers and more —
              all from one professional AI platform.
            </p>

            <div className="mt-12 flex flex-wrap justify-center gap-5">

              <button className="rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:scale-105">

                🚀 Start Free

              </button>

              <button className="rounded-2xl border border-white/10 bg-white/5 px-8 py-4 text-lg font-semibold backdrop-blur transition hover:bg-white/10">

                View Pricing

              </button>

            </div>

            <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">

              <span>✅ Free Plan</span>

              <span>✅ No Credit Card</span>

              <span>✅ 100+ Languages</span>

              <span>✅ Commercial License</span>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
