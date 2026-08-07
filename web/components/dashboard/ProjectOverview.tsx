import {
  FolderOpen,
  Music4,
  Mic2,
  Video,
  ImageIcon,
  Clock3,
} from "lucide-react";

const projects = [
  {
    title: "Summer Vibes Album",
    type: "Music Production",
    progress: 92,
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Celebrity Voice Model",
    type: "Voice Clone",
    progress: 68,
    icon: Mic2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "AI Music Video",
    type: "Video Generation",
    progress: 81,
    icon: Video,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Album Artwork",
    type: "Cover Design",
    progress: 100,
    icon: ImageIcon,
    color: "from-emerald-500 to-green-500",
  },
];

export default function ProjectOverview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Project Overview
          </h2>

          <p className="mt-2 text-muted-foreground">
            Track your active AI projects.
          </p>

        </div>

        <FolderOpen className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-6">

        {projects.map((project) => {
          const Icon = project.icon;

          return (
            <div
              key={project.title}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center justify-between">

                <div className="flex items-center gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${project.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      {project.title}
                    </h3>

                    <p className="text-sm text-muted-foreground">
                      {project.type}
                    </p>

                  </div>

                </div>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">

                  <Clock3 className="h-4 w-4" />

                  Active

                </div>

              </div>

              <div className="mt-6">

                <div className="mb-2 flex justify-between text-sm">

                  <span>Progress</span>

                  <span>{project.progress}%</span>

                </div>

                <div className="h-3 overflow-hidden rounded-full bg-white/10">

                  <div
                    className={`h-full rounded-full bg-gradient-to-r ${project.color}`}
                    style={{ width: `${project.progress}%` }}
                  />

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
