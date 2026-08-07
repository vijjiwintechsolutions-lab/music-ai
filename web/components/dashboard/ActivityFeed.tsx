import {
  CheckCircle2,
  Clock3,
  Music4,
  Mic2,
  Video,
  Sparkles,
} from "lucide-react";

const activities = [
  {
    title: "AI Song Generated",
    description: "Summer Nights.mp3",
    time: "2 minutes ago",
    icon: Music4,
    color: "bg-violet-500",
  },
  {
    title: "Voice Clone Completed",
    description: "Male Voice Model",
    time: "15 minutes ago",
    icon: Mic2,
    color: "bg-cyan-500",
  },
  {
    title: "Music Video Rendered",
    description: "Promo Video",
    time: "1 hour ago",
    icon: Video,
    color: "bg-pink-500",
  },
  {
    title: "AI Credits Added",
    description: "+250 Credits",
    time: "Today",
    icon: Sparkles,
    color: "bg-green-500",
  },
  {
    title: "Project Published",
    description: "Spotify Export",
    time: "Yesterday",
    icon: CheckCircle2,
    color: "bg-emerald-500",
  },
];

export default function ActivityFeed() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8">

        <h2 className="text-2xl font-black">
          Recent Activity
        </h2>

        <p className="mt-2 text-muted-foreground">
          Latest actions from your workspace.
        </p>

      </div>

      <div className="space-y-6">

        {activities.map((activity) => {
          const Icon = activity.icon;

          return (
            <div
              key={activity.title}
              className="flex items-start gap-5"
            >

              <div
                className={`flex h-14 w-14 items-center justify-center rounded-2xl ${activity.color}`}
              >

                <Icon className="h-7 w-7 text-white" />

              </div>

              <div className="flex-1">

                <h3 className="font-bold">
                  {activity.title}
                </h3>

                <p className="mt-1 text-sm text-muted-foreground">
                  {activity.description}
                </p>

                <div className="mt-3 flex items-center gap-2 text-xs text-muted-foreground">

                  <Clock3 className="h-4 w-4" />

                  {activity.time}

                </div>

              </div>

            </div>
          );
        })}

      </div>

    </section>
  );
}
