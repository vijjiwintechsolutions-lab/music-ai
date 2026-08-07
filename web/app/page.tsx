import Navbar from "@/components/landing/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl flex-col items-center justify-center px-6 text-center">
          <span className="mb-6 rounded-full border border-violet-500/30 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-400">
            🚀 AI Powered Music Platform
          </span>

          <h1 className="max-w-5xl text-5xl font-extrabold leading-tight tracking-tight md:text-7xl">
            Create Original{" "}
            <span className="bg-gradient-to-r from-violet-500 to-cyan-400 bg-clip-text text-transparent">
              Music
            </span>{" "}
            With AI
          </h1>

          <p className="mt-8 max-w-2xl text-lg text-muted-foreground">
            Generate songs, lyrics, vocals, album covers, music videos,
            voice cloning, and much more — all from one AI platform.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <button className="rounded-xl bg-violet-600 px-8 py-4 font-semibold text-white transition hover:bg-violet-700">
              Generate Song
            </button>

            <button className="rounded-xl border border-border px-8 py-4 font-semibold transition hover:bg-accent">
              Watch Demo
            </button>
          </div>

          <div className="mt-16 grid w-full max-w-5xl grid-cols-2 gap-6 md:grid-cols-4">
            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-violet-500">100+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Languages Supported
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-cyan-500">25+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI Tools
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-green-500">1M+</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Songs Generated
              </p>
            </div>

            <div className="rounded-2xl border p-6">
              <h3 className="text-3xl font-bold text-orange-500">24/7</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                AI Availability
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
