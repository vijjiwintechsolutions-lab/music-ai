import {
  Clock3,
  LoaderCircle,
  CheckCircle2,
  XCircle,
  Music4,
} from "lucide-react";

const queue = [
  {
    title: "Generate Telugu Folk Song",
    progress: 82,
    status: "Processing",
    icon: LoaderCircle,
    color: "text-cyan-400",
  },
  {
    title: "Clone Female Voice",
    progress: 100,
    status: "Completed",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Create Album Cover",
    progress: 47,
    status: "Rendering",
    icon: Clock3,
    color: "text-yellow-500",
  },
  {
    title: "Music Video Export",
    progress: 0,
    status: "Failed",
    icon: XCircle,
    color: "text-red-500",
  },
];

export default function AIGenerationQueue() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            AI Generation Queue
          </h2>

          <p className="mt-2 text-muted-foreground">
            Live processing status of your AI jobs.
          </p>

        </div>

        <Music4 className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-6">

        {queue.map((job) => {
          const Icon = job.icon;

          return (
            <div
              key={job.title}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <Icon className={`h-7 w-7 ${job.color}`} />

                  <div>

                    <h3 className="font-bold">
                      {job.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {job.status}
                    </p>

                  </div>

                </div>

                <span className="font-bold">
                  {job.progress}%
                </span>

              </div>

              <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">

                <div
                  className={`h-full rounded-full ${
                    job.status === "Completed"
                      ? "bg-green-500"
                      : job.status === "Failed"
                      ? "bg-red-500"
                      : "bg-gradient-to-r from-violet-600 to-cyan-500"
                  }`}
                  style={{
                    width: `${job.progress}%`,
                  }}
                />

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
