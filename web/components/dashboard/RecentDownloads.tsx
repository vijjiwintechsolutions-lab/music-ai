import {
  Download,
  Music4,
  Video,
  ImageIcon,
  FileAudio,
  Clock3,
} from "lucide-react";

const downloads = [
  {
    name: "summer-hit.mp3",
    type: "Audio",
    size: "9.8 MB",
    time: "2 mins ago",
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    name: "promo-video.mp4",
    type: "Video",
    size: "84 MB",
    time: "15 mins ago",
    icon: Video,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "album-cover.png",
    type: "Image",
    size: "2.6 MB",
    time: "40 mins ago",
    icon: ImageIcon,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "podcast-intro.wav",
    type: "Audio",
    size: "15 MB",
    time: "Yesterday",
    icon: FileAudio,
    color: "from-emerald-500 to-green-500",
  },
];

export default function RecentDownloads() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Recent Downloads
          </h2>

          <p className="mt-2 text-muted-foreground">
            Files exported from Market1 AI.
          </p>

        </div>

        <Download className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-5">

        {downloads.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center gap-5">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r ${item.color}`}
                >

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <div>

                  <h3 className="font-bold">
                    {item.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.type} • {item.size}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <div className="flex items-center justify-end gap-2 text-sm text-muted-foreground">

                  <Clock3 className="h-4 w-4" />

                  {item.time}

                </div>

                <button className="mt-3 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-500 px-5 py-2 text-sm font-semibold text-white transition hover:scale-105">

                  Download Again

                </button>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
