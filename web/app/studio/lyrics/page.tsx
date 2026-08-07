import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import LyricsGenerator from "@/components/studio/lyrics/LyricsGenerator";

export default function LyricsStudioPage() {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <LyricsGenerator />

        </main>

      </div>

    </div>
  );
}
