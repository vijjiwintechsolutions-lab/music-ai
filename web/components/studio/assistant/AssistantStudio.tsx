"use client";

import Hero from "./components/Hero";
import Sidebar from "./components/Sidebar";
import ChatPanel from "./components/ChatPanel";
import QuickActions from "./components/QuickActions";
import Stats from "./components/Stats";
import RecentChats from "./components/RecentChats";
import AssistantCard from "./components/AssistantCard";

export default function AssistantStudio() {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-7xl space-y-8 p-6">

        <Hero />

        <div className="grid gap-6 xl:grid-cols-4">

          <Sidebar />

          <div className="space-y-6 xl:col-span-3">

            <AssistantCard />

            <ChatPanel />

            <QuickActions />

            <RecentChats />

            <Stats />

          </div>

        </div>

      </div>
    </div>
  );
}
