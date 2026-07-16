import { Outlet } from "react-router-dom";
import { useState } from "react";

import Sidebar from "../components/admin/Sidebar";
import Topbar from "../components/admin/Topbar";

function AdminLayout() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#020617]">

      {/* Sidebar */}
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content */}
      <div className="flex min-h-screen flex-col lg:ml-72">

        {/* Topbar */}
        <Topbar
          setSidebarOpen={setSidebarOpen}
        />

        {/* Page Content */}
        <main className="relative flex-1 overflow-x-hidden overflow-y-auto p-4 sm:p-6 lg:p-8">

          {/* Background Glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">

            <div className="absolute -left-40 -top-40 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl"></div>

            <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-blue-600/10 blur-3xl"></div>

            <div className="absolute bottom-0 left-1/3 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl"></div>

          </div>

          <div className="relative z-10">
            <Outlet />
          </div>

        </main>

      </div>

    </div>
  );
}

export default AdminLayout;