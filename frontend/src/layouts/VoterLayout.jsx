import { Outlet } from "react-router-dom";
import { useState } from "react";

import VoterSidebar from "../components/voter/VoterSidebar";
import VoterTopbar from "../components/voter/VoterTopbar";

function VoterLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#020617]">

      {/* Sidebar */}
      <VoterSidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex min-w-0 flex-1 flex-col lg:ml-72">

        {/* Topbar */}
        <VoterTopbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page */}
        <main className="relative flex-1 p-4 sm:p-6 lg:p-8">

          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-700/10 blur-3xl"></div>

            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-900/10 blur-3xl"></div>

            <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-600/10 blur-3xl"></div>

          </div>

          <div className="relative z-10">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
}

export default VoterLayout;