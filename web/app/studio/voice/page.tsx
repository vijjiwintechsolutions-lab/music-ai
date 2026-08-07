import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import VoiceClone from "@/components/studio/voice/VoiceClone";

export default function VoiceStudioPage() {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <VoiceClone />

        </main>

      </div>

    </div>
  );
}
