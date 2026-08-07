import {
  Brain,
  Cpu,
  CheckCircle2,
  Zap,
  Gauge,
} from "lucide-react";

const models = [
  {
    name: "Music GPT Ultra",
    type: "Song Generation",
    status: "Online",
    speed: "0.8x",
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    name: "Lyrics AI Pro",
    type: "Lyrics Generation",
    status: "Online",
    speed: "1.2x",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Voice Clone X",
    type: "Voice Cloning",
    status: "Training",
    speed: "0.6x",
    color: "from-pink-500 to-rose-500",
  },
  {
    name: "Video Diffusion",
    type: "Music Video",
    status: "Online",
    speed: "0.9x",
    color: "from-orange-500 to-red-500",
  },
];

export default function AIModels() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            AI Models
          </h2>

          <p className="mt-2 text-muted-foreground">
            Active AI engines running in your workspace.
          </p>

        </div>

        <Brain className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-5">

        {models.map((model) => (
          <div
            key={model.name}
            className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
          >

            <div className="flex items-center justify-between">

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${model.color}`}
                >

                  <Cpu className="h-7 w-7 text-white" />

                </div>

                <div>

                  <h3 className="font-bold">
                    {model.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {model.type}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-500">

                <CheckCircle2 className="h-4 w-4" />

                <span className="text-sm font-semibold">
                  {model.status}
                </span>

              </div>

            </div>

            <div className="mt-6 flex items-center justify-between rounded-2xl bg-black/20 p-4">

              <div className="flex items-center gap-2">

                <Gauge className="h-5 w-5 text-cyan-400" />

                <span className="text-sm">
                  Speed
                </span>

              </div>

              <span className="font-semibold">
                {model.speed}
              </span>

            </div>

            <button className="mt-5 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-3 font-semibold text-white transition hover:scale-[1.02]">

              <Zap className="h-5 w-5" />

              Use Model

            </button>

          </div>
        ))}

      </div>

    </section>
  );
}
