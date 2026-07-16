import { FaUser, FaLock, FaBuilding } from "react-icons/fa";

function Settings() {
  return (
    <div className="min-h-screen bg-slate-900 p-8">

      <h1 className="mb-8 text-4xl font-bold text-white">
        Settings
      </h1>

      <div className="space-y-8">

        {/* Profile */}

        <div className="rounded-3xl bg-slate-800 p-8">

          <div className="mb-6 flex items-center gap-3">

            <FaUser className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              Admin Profile
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <input
              placeholder="Full Name"
              className="rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

            <input
              placeholder="Email"
              className="rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

          </div>

          <button className="mt-6 rounded-xl bg-cyan-500 px-6 py-3 text-white hover:bg-cyan-600">
            Update Profile
          </button>

        </div>

        {/* Password */}

        <div className="rounded-3xl bg-slate-800 p-8">

          <div className="mb-6 flex items-center gap-3">

            <FaLock className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              Change Password
            </h2>

          </div>

          <div className="space-y-5">

            <input
              type="password"
              placeholder="Current Password"
              className="w-full rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

            <input
              type="password"
              placeholder="New Password"
              className="w-full rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

            <input
              type="password"
              placeholder="Confirm Password"
              className="w-full rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

          </div>

          <button className="mt-6 rounded-xl bg-green-500 px-6 py-3 text-white hover:bg-green-600">
            Change Password
          </button>

        </div>

        {/* Organization */}

        <div className="rounded-3xl bg-slate-800 p-8">

          <div className="mb-6 flex items-center gap-3">

            <FaBuilding className="text-cyan-400" />

            <h2 className="text-2xl font-bold text-white">
              Organization Settings
            </h2>

          </div>

          <div className="grid gap-5 md:grid-cols-2">

            <input
              placeholder="Organization Name"
              className="rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

            <input
              placeholder="Election Title"
              className="rounded-xl bg-slate-700 p-4 text-white outline-none"
            />

          </div>

          <button className="mt-6 rounded-xl bg-purple-500 px-6 py-3 text-white hover:bg-purple-600">
            Save Settings
          </button>

        </div>

      </div>

    </div>
  );
}

export default Settings;