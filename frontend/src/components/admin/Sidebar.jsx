import { NavLink, useNavigate } from "react-router-dom";
import {
  FaChartPie,
  FaUsers,
  FaVoteYea,
  FaTrophy,
  FaCog,
  FaSignOutAlt,
} from "react-icons/fa";
import { toast } from "react-toastify";

const menus = [
  { name: "Dashboard", icon: <FaChartPie />, path: "/admin/dashboard" },
  { name: "Candidates", icon: <FaUsers />, path: "/admin/candidates" },
  { name: "Users", icon: <FaUsers />, path: "/admin/users" },
  { name: "Elections", icon: <FaVoteYea />, path: "/admin/elections" },
  { name: "Results", icon: <FaTrophy />, path: "/admin/results" },
  { name: "Settings", icon: <FaCog />, path: "/admin/settings" },
];

function Sidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("role");

    toast.success("Logged out successfully 👋");

    setSidebarOpen(false);

    navigate("/login", { replace: true });
  };

  return (
    <>
      {/* Mobile Overlay */}
      {sidebarOpen && (
        <div
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <aside
        className={`
          fixed left-0 top-0 z-50
          flex h-screen w-72 shrink-0 flex-col
          border-r border-white/10 bg-slate-950
          transition-transform duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:fixed
          lg:top-0
          lg:left-0
          lg:translate-x-0
        `}
      >
        {/* Logo */}
        <div className="border-b border-white/10 p-6">
          <h1 className="text-3xl font-bold tracking-wide text-cyan-400">
            e-VOTING
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Admin Panel
          </p>
        </div>

        {/* Menu */}
        <div className="flex-1 overflow-y-auto px-4 py-6">
          <div className="space-y-2">
            {menus.map((menu) => (
              <NavLink
                key={menu.name}
                to={menu.path}
                onClick={() => setSidebarOpen(false)}
                className={({ isActive }) =>
                  `flex items-center gap-4 rounded-xl px-5 py-4 text-base font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-cyan-500 text-white shadow-lg"
                      : "text-slate-300 hover:bg-cyan-500/10 hover:text-cyan-400"
                  }`
                }
              >
                <span className="text-xl">
                  {menu.icon}
                </span>

                {menu.name}
              </NavLink>
            ))}
          </div>
        </div>

        {/* Logout */}
        <div className="mt-auto border-t border-white/10 p-5">
          <button
            onClick={handleLogout}
            className="flex w-full items-center gap-4 rounded-xl px-5 py-4 text-red-400 transition hover:bg-red-500/10"
          >
            <FaSignOutAlt className="text-xl" />
            Logout
          </button>
        </div>
      </aside>
    </>
  );
}

export default Sidebar;