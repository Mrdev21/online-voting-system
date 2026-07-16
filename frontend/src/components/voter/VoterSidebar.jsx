import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { getCurrentUser } from "../../services/userService";

import {
  FaHouseUser,
  FaHome,
  FaVoteYea,
  FaClipboardList,
  FaTrophy,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

import { toast } from "react-toastify";

const menus = [
  {
    name: "Dashboard",
    icon: <FaHome />,
    path: "/voter/dashboard",
  },
  {
    name: "Vote",
    icon: <FaVoteYea />,
    path: "/voter/vote",
  },
  {
    name: "Elections",
    icon: <FaClipboardList />,
    path: "/voter/elections",
  },
  {
    name: "Results",
    icon: <FaTrophy />,
    path: "/voter/results",
  },
  {
    name: "Home",
    icon: <FaHouseUser />,
    path: "/",
  },
  {
    name: "Profile",
    icon: <FaUser />,
    path: "/voter/profile",
  },
];

function VoterSidebar({ sidebarOpen, setSidebarOpen }) {
  const navigate = useNavigate();

  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const logout = () => {
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
          fixed
          left-0
          top-0
          z-50
          flex
          h-screen
          w-72
          shrink-0
          flex-col
          border-r
          border-white/10
          bg-slate-950
          transition-transform
          duration-300

          ${
            sidebarOpen
              ? "translate-x-0"
              : "-translate-x-full"
          }

          lg:fixed
          lg:translate-x-0
        `}
      >
        {/* Header */}

        <div className="border-b border-white/10 p-6">

          <div className="flex items-center justify-between">

            <h1 className="text-3xl font-bold text-cyan-400">
              e-VOTING
            </h1>

            <Link
              to="/voter/profile"
              onClick={() => setSidebarOpen(false)}
            >
              <img
                src={
                  user?.profilePhoto
                    ? `http://localhost:8080${user.profilePhoto}`
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        user?.fullName || "User"
                      )}&background=0891b2&color=fff`
                }
                alt="Profile"
                className="h-12 w-12 rounded-full border-2 border-cyan-400 object-cover transition hover:scale-105"
              />
            </Link>

          </div>

          <p className="mt-3 text-sm text-slate-500">
            Voter Panel
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
            onClick={logout}
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

export default VoterSidebar;