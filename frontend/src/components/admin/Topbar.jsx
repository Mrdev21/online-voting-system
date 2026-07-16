import { useState, useRef, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import {
  FaBell,
  FaSearch,
  FaHome,
  FaBars,
} from "react-icons/fa";

import { getCurrentUser } from "../../services/userService";
import NotificationDropdown from "./NotificationDropdown";

function Topbar({ setSidebarOpen }) {
  const navigate = useNavigate();
  const location = useLocation();

  const [showNotifications, setShowNotifications] = useState(false);
  const [user, setUser] = useState(null);

  const dropdownRef = useRef(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const res = await getCurrentUser();
      setUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setShowNotifications(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
  }, []);

  const handleProfileClick = () => {
    if (location.pathname === "/admin/settings") {
      navigate("/admin/dashboard");
    } else {
      navigate("/admin/settings");
    }
  };

  return (
    <header className="sticky top-0 z-30 border-b border-white/10 bg-slate-900">
      <div className="flex items-center justify-between px-4 py-4 sm:px-6 lg:px-8">

        {/* Left */}
        <div className="flex items-center gap-4">

          <button
            onClick={() => setSidebarOpen(true)}
            className="rounded-xl bg-slate-800 p-3 text-white transition hover:bg-slate-700 lg:hidden"
          >
            <FaBars />
          </button>

          <div>
            <h1 className="text-2xl font-bold text-white sm:text-3xl">
              Dashboard
            </h1>

            <p className="hidden text-sm text-slate-400 sm:block">
              Welcome back, Admin 👋
            </p>
          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3 sm:gap-4">

          {/* Search */}
          <div className="relative hidden lg:block">
            <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-500" />

            <input
              type="text"
              placeholder="Search..."
              className="w-72 rounded-xl border border-white/10 bg-slate-800 py-3 pl-11 pr-4 text-white outline-none transition focus:border-cyan-400"
            />
          </div>

          {/* Home */}
          <Link
            to="/"
            className="rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700 hover:text-cyan-400"
            title="Home"
          >
            <FaHome />
          </Link>

          {/* Notification */}
          <div
            className="relative"
            ref={dropdownRef}
          >
            <button
              onClick={() =>
                setShowNotifications(!showNotifications)
              }
              className="relative rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700 hover:text-cyan-400"
            >
              <FaBell />

              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-slate-900 bg-red-500"></span>
            </button>

            {showNotifications && (
              <NotificationDropdown />
            )}
          </div>

          {/* Profile */}
          <img
            onClick={handleProfileClick}
            src={
              user?.profilePhoto
                ? `http://localhost:8080${user.profilePhoto}`
                : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                    user?.fullName || "Admin"
                  )}&background=0891b2&color=fff`
            }
            alt="Profile"
            className="h-10 w-10 cursor-pointer rounded-full border-2 border-cyan-400 object-cover transition hover:scale-105 sm:h-11 sm:w-11"
          />

        </div>
      </div>
    </header>
  );
}

export default Topbar;