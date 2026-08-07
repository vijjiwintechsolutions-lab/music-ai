"use client";

const chats = [
  "Generate Website",
  "Build Mobile App",
  "Create Marketing Plan",
  "Explain React",
  "Business Analytics",
];

export default function RecentChats() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-black">

        Recent Conversations

      </h2>

      <div className="space-y-3">

        {chats.map((chat)=>(
          <div
            key={chat}
            className="rounded-2xl border border-white/10 p-4"
          >

            {chat}

          </div>
        ))}

      </div>

    </div>
  );
}
