import {
  CalendarDays,
  Clock3,
  Sparkles,
  Music4,
  Video,
  Mic2,
  ArrowRight,
} from "lucide-react";

const tasks = [
  {
    title: "Generate Telugu Song",
    time: "Today • 11:30 AM",
    status: "Queued",
    icon: Music4,
    color: "bg-violet-500",
  },
  {
    title: "Voice Clone Training",
    time: "Today • 2:00 PM",
    status: "Running",
    icon: Mic2,
    color: "bg-cyan-500",
  },
  {
    title: "Music Video Rendering",
    time: "Tomorrow • 9:00 AM",
    status: "Scheduled",
    icon: Video,
    color: "bg-pink-500",
  },
];

export default function UpcomingTasks() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Upcoming Tasks
          </h2>

          <p className="mt-2 text-muted-foreground">
            Scheduled AI jobs and processing queue.
          </p>

        </div>

        <CalendarDays className="h-7 w-7 text-violet-400" />

      </div>

      <div className="space-y-5">

        {tasks.map((task) => {
          const Icon = task.icon;

          return (
            <div
              key={task.title}
              className="rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-start justify-between">

                <div className="flex items-start gap-4">

                  <div
                    className={`flex h-14 w-14 items-center justify-center rounded-2xl ${task.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <div>

                    <h3 className="font-bold">
                      {task.title}
                    </h3>

                    <div className="mt-3 flex items-center gap-2 text-sm text-muted-foreground">

                      <Clock3 className="h-4 w-4" />

                      {task.time}

                    </div>

                  </div>

                </div>

                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">
                  {task.status}
                </span>

              </div>

            </div>
          );
        })}

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

        <Sparkles className="h-5 w-5" />

        Schedule New Task

        <ArrowRight className="h-5 w-5" />

      </button>

    </section>
  );
}
