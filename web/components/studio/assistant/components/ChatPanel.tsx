"use client";

import { Send } from "lucide-react";
import { useState } from "react";

export default function ChatPanel() {

  const [message, setMessage] = useState("");

  return (

    <div className="rounded-3xl border border-white/10 bg-white/5 p-6">

      <h2 className="mb-6 text-2xl font-black">

        AI Chat

      </h2>

      <div className="mb-6 h-80 overflow-y-auto rounded-2xl border border-white/10 p-4">

        <div className="rounded-xl bg-cyan-500/10 p-4">

          👋 Welcome to Market AI Assistant.

        </div>

      </div>

      <div className="flex gap-3">

        <input
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          placeholder="Ask anything..."
          className="flex-1 rounded-2xl border border-white/10 bg-transparent px-4 py-3 outline-none"
        />

        <button className="rounded-2xl bg-cyan-600 px-5">

          <Send className="h-5 w-5 text-white"/>

        </button>

      </div>

    </div>

  );

}
