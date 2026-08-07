import {
  Bell,
  CheckCircle2,
  AlertCircle,
  Sparkles,
  Clock3,
  ArrowRight,
} from "lucide-react";

const notifications = [
  {
    title: "Song Generation Complete",
    message: "Your AI song 'Summer Vibes' is ready.",
    time: "2 min ago",
    icon: CheckCircle2,
    color: "text-green-500",
  },
  {
    title: "Credits Added",
    message: "250 AI credits have been added.",
    time: "20 min ago",
    icon: Sparkles,
    color: "text-violet-500",
  },
  {
    title: "Rendering in Progress",
    message: "Music video rendering has started.",
    time: "1 hour ago",
    icon: Clock3,
    color: "text-cyan-500",
  },
  {
    title: "Subscription Renewal",
    message: "Your Pro plan renews in 7 days.",
    time: "Today",
    icon: AlertCircle,
    color: "text-yellow-500",
  },
];

export default function NotificationsPanel() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Notifications
          </h2>

          <p className="mt-2 text-muted-foreground">
            Latest updates from Market1 AI.
          </p>

        </div>

        <Bell className="h-6 w-6 text-violet-400" />

      </div>

      <div className="space-y-5">

        {notifications.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.title}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex gap-4">

                <div className="mt-1">

                  <Icon className={`h-6 w-6 ${item.color}`} />

                </div>

                <div className="flex-1">

                  <div className="flex items-center justify-between">

                    <h3 className="font-bold">
                      {item.title}
                    </h3>

                    <span className="text-xs text-muted-foreground">
                      {item.time}
                    </span>

                  </div>

                  <p className="mt-2 text-sm leading-7 text-muted-foreground">
                    {item.message}
                  </p>

                </div>

              </div>

            </div>
          );
        })}

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl border border-white/10 py-4 font-semibold transition hover:bg-white/5">

        View All Notifications

        <ArrowRight className="h-5 w-5" />

      </button>

    </section>
  );
}
