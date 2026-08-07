import {
  FileAudio,
  FileVideo,
  ImageIcon,
  Download,
  MoreHorizontal,
} from "lucide-react";

const files = [
  {
    name: "summer-song.mp3",
    type: "Audio",
    size: "8.4 MB",
    date: "2 min ago",
    icon: FileAudio,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    name: "music-video.mp4",
    type: "Video",
    size: "84 MB",
    date: "15 min ago",
    icon: FileVideo,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "album-cover.png",
    type: "Image",
    size: "2.8 MB",
    date: "1 hour ago",
    icon: ImageIcon,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "podcast-intro.mp3",
    type: "Audio",
    size: "5.6 MB",
    date: "Yesterday",
    icon: FileAudio,
    color: "from-emerald-500 to-green-500",
  },
];

export default function RecentFiles() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Recent Files
          </h2>

          <p className="mt-2 text-muted-foreground">
            Your latest generated assets
          </p>

        </div>

        <button className="rounded-xl border border-white/10 p-2 hover:bg-white/5">
          <MoreHorizontal className="h-5 w-5" />
        </button>

      </div>

      <div className="space-y-4">

        {files.map((file) => {
          const Icon = file.icon;

          return (
            <div
              key={file.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${file.color}`}
                >

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <div>

                  <h3 className="font-semibold">
                    {file.name}
                  </h3>

                  <p className="mt-1 text-sm text-muted-foreground">
                    {file.type} • {file.size}
                  </p>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span className="hidden text-sm text-muted-foreground md:block">
                  {file.date}
                </span>

                <button className="rounded-xl border border-white/10 p-3 transition hover:bg-white/5">

                  <Download className="h-5 w-5" />

                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
