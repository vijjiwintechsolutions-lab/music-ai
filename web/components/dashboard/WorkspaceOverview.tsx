import {
  FolderKanban,
  Music4,
  FileAudio,
  Video,
  ImageIcon,
  Users,
  ArrowUpRight,
} from "lucide-react";

const workspace = [
  {
    title: "Projects",
    value: "128",
    icon: FolderKanban,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    title: "Songs",
    value: "1,284",
    icon: Music4,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Audio Files",
    value: "8,532",
    icon: FileAudio,
    color: "from-green-500 to-emerald-500",
  },
  {
    title: "Videos",
    value: "315",
    icon: Video,
    color: "from-pink-500 to-red-500",
  },
  {
    title: "Images",
    value: "972",
    icon: ImageIcon,
    color: "from-orange-500 to-yellow-500",
  },
  {
    title: "Collaborators",
    value: "18",
    icon: Users,
    color: "from-indigo-500 to-violet-500",
  },
];

export default function WorkspaceOverview() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Workspace Overview
          </h2>

          <p className="mt-2 text-muted-foreground">
            Everything stored inside your Market1 AI workspace.
          </p>

        </div>

      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

        {workspace.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="group rounded-2xl border border-white/10 p-6 transition hover:-translate-y-2 hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center justify-between">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <ArrowUpRight className="h-5 w-5 text-muted-foreground transition group-hover:-translate-y-1 group-hover:translate-x-1" />

              </div>

              <h2 className="mt-8 text-5xl font-black">
                {item.value}
              </h2>

              <p className="mt-3 text-muted-foreground">
                {item.title}
              </p>

            </div>
          );
        })}

      </div>

    </section>
  );
}
