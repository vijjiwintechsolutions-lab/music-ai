import {
  Crown,
  ShieldCheck,
  UserRound,
  UserPlus,
  MoreHorizontal,
} from "lucide-react";

const members = [
  {
    name: "Vijji",
    role: "Owner",
    status: "Online",
    icon: Crown,
    color: "bg-yellow-500",
  },
  {
    name: "AI Assistant",
    role: "Administrator",
    status: "Online",
    icon: ShieldCheck,
    color: "bg-violet-500",
  },
  {
    name: "Designer",
    role: "Editor",
    status: "Away",
    icon: UserRound,
    color: "bg-cyan-500",
  },
  {
    name: "Music Producer",
    role: "Contributor",
    status: "Offline",
    icon: UserRound,
    color: "bg-gray-500",
  },
];

export default function TeamMembers() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Team Members
          </h2>

          <p className="mt-2 text-muted-foreground">
            Workspace collaborators
          </p>

        </div>

        <button className="rounded-xl border border-white/10 p-2 hover:bg-white/5">
          <MoreHorizontal className="h-5 w-5" />
        </button>

      </div>

      <div className="space-y-5">

        {members.map((member) => {
          const Icon = member.icon;

          return (
            <div
              key={member.name}
              className="flex items-center justify-between rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-full ${member.color}`}
                >

                  <Icon className="h-7 w-7 text-white" />

                </div>

                <div>

                  <h3 className="font-bold">
                    {member.name}
                  </h3>

                  <p className="text-sm text-muted-foreground">
                    {member.role}
                  </p>

                </div>

              </div>

              <span
                className={`rounded-full px-4 py-2 text-sm font-semibold ${
                  member.status === "Online"
                    ? "bg-green-500/10 text-green-500"
                    : member.status === "Away"
                    ? "bg-yellow-500/10 text-yellow-500"
                    : "bg-gray-500/10 text-gray-400"
                }`}
              >
                {member.status}
              </span>

            </div>
          );
        })}

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

        <UserPlus className="h-5 w-5" />

        Invite Member

      </button>

    </section>
  );
}
