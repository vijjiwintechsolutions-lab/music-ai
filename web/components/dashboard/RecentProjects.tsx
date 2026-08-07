import {
  Music4,
  Mic2,
  Video,
  Clock3,
  MoreHorizontal,
} from "lucide-react";

const projects = [
  {
    name: "Summer Vibes",
    type: "AI Song",
    status: "Completed",
    updated: "5 min ago",
    icon: Music4,
    color: "bg-green-500",
  },
  {
    name: "Telugu Melody",
    type: "Voice Clone",
    status: "Processing",
    updated: "12 min ago",
    icon: Mic2,
    color: "bg-yellow-500",
  },
  {
    name: "Music Promo",
    type: "AI Video",
    status: "Completed",
    updated: "1 hour ago",
    icon: Video,
    color: "bg-green-500",
  },
  {
    name: "LoFi Beats",
    type: "AI Song",
    status: "Queued",
    updated: "3 hours ago",
    icon: Music4,
    color: "bg-blue-500",
  },
];

export default function RecentProjects() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Recent Projects
          </h2>

          <p className="mt-2 text-muted-foreground">
            Continue where you left off.
          </p>

        </div>

        <button className="rounded-xl border border-white/10 p-2 hover:bg-white/5">
          <MoreHorizontal className="h-5 w-5" />
        </button>

      </div>

      <div className="space-y-5">

        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center gap-5">

                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500">

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <div>

                  <h3 className="font-bold">
                    {project.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {project.type}
                  </p>

                </div>

              </div>

              <div className="hidden items-center gap-6 lg:flex">

                <div className="flex items-center gap-2">

                  <span
                    className={`h-2.5 w-2.5 rounded-full ${project.color}`}
                  />

                  <span className="text-sm">
                    {project.status}
                  </span>

                </div>

                <div className="flex items-center gap-2 text-muted-foreground">

                  <Clock3 className="h-4 w-4" />

                  <span className="text-sm">
                    {project.updated}
                  </span>

                </div>

                <button className="rounded-xl border border-white/10 px-5 py-2 font-medium hover:bg-white/5">
                  Open
                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
