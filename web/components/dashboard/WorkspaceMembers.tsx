import {
  Crown,
  ShieldCheck,
  UserRound,
  UserPlus,
  Mail,
  MoreHorizontal,
} from "lucide-react";

const members = [
  {
    name: "Vijji",
    email: "owner@market1.ai",
    role: "Owner",
    status: "Online",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
  },
  {
    name: "AI Assistant",
    email: "assistant@market1.ai",
    role: "Administrator",
    status: "Online",
    icon: ShieldCheck,
    color: "from-violet-600 to-fuchsia-500",
  },
  {
    name: "Music Producer",
    email: "producer@market1.ai",
    role: "Editor",
    status: "Away",
    icon: UserRound,
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "Graphic Designer",
    email: "design@market1.ai",
    role: "Viewer",
    status: "Offline",
    icon: UserRound,
    color: "from-emerald-500 to-green-500",
  },
];

export default function WorkspaceMembers() {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur">

      <div className="mb-8 flex items-center justify-between">

        <div>

          <h2 className="text-2xl font-black">
            Workspace Members
          </h2>

          <p className="mt-2 text-muted-foreground">
            Manage your collaborators and permissions.
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
              key={member.email}
              className="flex flex-col gap-5 rounded-2xl border border-white/10 p-5 transition hover:border-violet-500 hover:bg-white/5 lg:flex-row lg:items-center lg:justify-between"
            >

              <div className="flex items-center gap-4">

                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-r ${member.color}`}
                >

                  <Icon className="h-8 w-8 text-white" />

                </div>

                <div>

                  <h3 className="text-lg font-bold">
                    {member.name}
                  </h3>

                  <div className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">

                    <Mail className="h-4 w-4" />

                    {member.email}

                  </div>

                </div>

              </div>

              <div className="flex items-center gap-4">

                <span className="rounded-full bg-violet-500/10 px-4 py-2 text-sm font-semibold text-violet-400">

                  {member.role}

                </span>

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

            </div>

          );
        })}

      </div>

      <button className="mt-8 flex w-full items-center justify-center gap-3 rounded-2xl bg-gradient-to-r from-violet-600 to-cyan-500 py-4 font-semibold text-white transition hover:scale-[1.02]">

        <UserPlus className="h-5 w-5" />

        Invite New Member

      </button>

    </section>
  );
}
