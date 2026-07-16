import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaHome } from "react-icons/fa";

import { getCurrentUser } from "../../services/userService";

function VoterTopbar({ setSidebarOpen }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    loadUser();
  }, []);

  const loadUser = async () => {
    try {
      const response = await getCurrentUser();
      setUser(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <header className="border-b border-white/10 bg-slate-900">

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
              Voter Dashboard
            </h1>

            <p className="hidden text-sm text-slate-400 sm:block">
              Welcome back 👋
            </p>

          </div>

        </div>

        {/* Right */}
        <div className="flex items-center gap-3">

          <Link
            to="/"
            className="rounded-xl bg-slate-800 p-3 text-slate-300 transition hover:bg-slate-700 hover:text-cyan-400"
            title="Home"
          >
            <FaHome />
          </Link>

          <Link to="/voter/profile">
            <img
              src={
                user?.profilePhoto
                  ? `http://localhost:8080${user.profilePhoto}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      user?.fullName || "User"
                    )}&background=0891b2&color=fff`
              }
              alt="Profile"
              className="h-10 w-10 rounded-full border-2 border-cyan-400 object-cover transition duration-300 hover:scale-105"
            />
          </Link>

        </div>

      </div>

    </header>
  );
}

export default VoterTopbar;