import {
  CheckCircle2,
  Cpu,
  Database,
  Globe,
  Server,
  ShieldCheck,
  Activity,
} from "lucide-react";

const services = [
  {
    name: "AI Generation",
    status: "Operational",
    icon: Cpu,
  },
  {
    name: "Voice Engine",
    status: "Operational",
    icon: Activity,
  },
  {
    name: "Cloud Storage",
    status: "Operational",
    icon: Database,
  },
  {
    name: "API Gateway",
    status: "Operational",
    icon: Globe,
  },
  {
    name: "Security",
    status: "Protected",
    icon: ShieldCheck,
  },
  {
    name: "Servers",
    status: "Healthy",
    icon: Server,
  },
];

export default function SystemStatus() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8">

        <h2 className="text-2xl font-black">
          System Status
        </h2>

        <p className="mt-2 text-muted-foreground">
          Live infrastructure monitoring
        </p>

      </div>

      <div className="space-y-5">

        {services.map((service) => {
          const Icon = service.icon;

          return (
            <div
              key={service.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500">

                  <Icon className="h-6 w-6 text-white" />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {service.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    Running normally
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-2 rounded-full bg-green-500/10 px-4 py-2 text-green-500">

                <CheckCircle2 className="h-4 w-4" />

                <span className="text-sm font-semibold">
                  {service.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

      <div className="mt-8 rounded-2xl border border-green-500/20 bg-green-500/10 p-5">

        <div className="flex items-center justify-between">

          <div>

            <h3 className="font-bold">
              Overall Status
            </h3>

            <p className="mt-2 text-sm text-muted-foreground">
              All systems are operating normally.
            </p>

          </div>

          <div className="text-right">

            <div className="text-3xl font-black text-green-500">
              99.99%
            </div>

            <div className="text-xs text-muted-foreground">
              Uptime
            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
