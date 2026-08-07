import {
  HardDrive,
  Folder,
  Music4,
  Video,
  ImageIcon,
} from "lucide-react";

const storage = [
  {
    label: "Songs",
    used: "8.2 GB",
    icon: Music4,
  },
  {
    label: "Videos",
    used: "24.5 GB",
    icon: Video,
  },
  {
    label: "Images",
    used: "3.8 GB",
    icon: ImageIcon,
  },
];

export default function StorageCard() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center gap-4">

        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600">

          <HardDrive className="h-8 w-8 text-white" />

        </div>

        <div>

          <h2 className="text-2xl font-black">
            Cloud Storage
          </h2>

          <p className="text-muted-foreground">
            Secure AI Workspace
          </p>

        </div>

      </div>

      <div className="mb-8">

        <div className="mb-3 flex justify-between">

          <span>Used Storage</span>

          <span className="font-bold">
            36.5 GB / 100 GB
          </span>

        </div>

        <div className="h-3 overflow-hidden rounded-full bg-white/10">

          <div className="h-full w-[36%] rounded-full bg-gradient-to-r from-violet-600 to-cyan-500" />

        </div>

      </div>

      <div className="space-y-5">

        {storage.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.label}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-4"
            >

              <div className="flex items-center gap-4">

                <div className="rounded-xl bg-white/10 p-3">

                  <Icon className="h-5 w-5" />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {item.label}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.used}
                  </p>

                </div>

              </div>

              <Folder className="h-5 w-5 text-muted-foreground" />

            </div>
          );
        })}

      </div>

      <button className="mt-8 w-full rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5">

        Manage Storage

      </button>

    </section>
  );
}
