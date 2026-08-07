import Sidebar from "@/components/dashboard/Sidebar";
import Topbar from "@/components/dashboard/Topbar";
import SongGenerator from "@/components/studio/song/SongGenerator";

export default function SongStudioPage() {
  return (
    <div className="flex min-h-screen bg-background">

      <Sidebar />

      <div className="flex-1">

        <Topbar />

        <main className="p-8">

          <SongGenerator />

        </main>

      </div>

    </div>
  );
}
