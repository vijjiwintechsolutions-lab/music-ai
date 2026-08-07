import {
  Activity,
  Cpu,
  Timer,
  Gauge,
  TrendingUp,
  Database,
} from "lucide-react";

const metrics = [
  {
    title: "Generation Speed",
    value: "2.3 sec",
    icon: Timer,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "GPU Usage",
    value: "72%",
    icon: Cpu,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Success Rate",
    value: "99.8%",
    icon: TrendingUp,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Requests Today",
    value: "14,258",
    icon: Activity,
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "API Latency",
    value: "84 ms",
    icon: Gauge,
    color: "from-orange-500 to-red-500",
  },
  {
    title: "Storage Used",
    value: "36.5 GB",
    icon: Database,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function PerformanceMetrics() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8">

        <h2 className="text-2xl font-black">
          Performance Metrics
        </h2>

        <p className="mt-2 text-muted-foreground">
          Live platform performance and AI processing statistics.
        </p>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {metrics.map((metric) => {
          const Icon = metric.icon;

          return (
            <div
              key={metric.title}
              className="rounded-2xl border border-white/10 p-6 transition hover:-translate-y-1 hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${metric.color}`}
                >

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <span className="text-3xl font-black">
                  {metric.value}
                </span>

              </div>

              <h3 className="mt-6 text-lg font-bold">
                {metric.title}
              </h3>

            </div>
          );
        })}

      </div>

    </section>
  );
}
