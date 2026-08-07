import {
  CalendarDays,
  Music4,
  Mic2,
  Video,
  ImageIcon,
  Sparkles,
} from "lucide-react";

const history = [
  {
    date: "Today",
    action: "Generated AI Song",
    tool: "Song Generator",
    credits: 25,
    icon: Music4,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    date: "Today",
    action: "Voice Clone",
    tool: "Voice Studio",
    credits: 40,
    icon: Mic2,
    color: "from-cyan-500 to-blue-500",
  },
  {
    date: "Yesterday",
    action: "Created Music Video",
    tool: "Video AI",
    credits: 60,
    icon: Video,
    color: "from-pink-500 to-red-500",
  },
  {
    date: "Yesterday",
    action: "Generated Album Cover",
    tool: "Image AI",
    credits: 15,
    icon: ImageIcon,
    color: "from-emerald-500 to-green-500",
  },
  {
    date: "2 Days Ago",
    action: "Purchased Credits",
    tool: "Billing",
    credits: 500,
    icon: Sparkles,
    color: "from-amber-500 to-orange-500",
  },
];

export default function UsageHistory() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Usage History
          </h2>

          <p className="mt-2 text-muted-foreground">
            Recent AI activity and credit usage.
          </p>

        </div>

        <CalendarDays className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-5">

        {history.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={`${item.date}-${item.action}`}
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
                    {item.action}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {item.tool}
                  </p>

                </div>

              </div>

              <div className="text-right">

                <div className="font-bold">
                  {item.credits} Credits
                </div>

                <div className="text-sm text-muted-foreground">
                  {item.date}
                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
