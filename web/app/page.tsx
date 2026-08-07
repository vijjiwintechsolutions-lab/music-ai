import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
          <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            🚀 AI Powered Music Platform
          </span>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Create Original
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              {" "}Music{" "}
            </span>
            With AI
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Generate songs, lyrics, vocals, album covers, music videos,
            voice cloning and much more — all from one AI platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Generate Song
            </button>

            <button className="rounded-xl border px-8 py-4 font-semibold transition hover:bg-accent">
              Watch Demo
            </button>
          </div>
        </section>
      </main>
    </>
  );
}
