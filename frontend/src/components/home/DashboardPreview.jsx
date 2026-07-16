function DashboardPreview() {
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_0_50px_rgba(37,99,235,0.25)] backdrop-blur-xl">
      <h2 className="mb-6 text-xl font-bold text-white">
        Election Dashboard
      </h2>

      <div className="mb-6 flex items-center justify-between">
        <span className="rounded-full bg-green-500/20 px-3 py-1 text-sm text-green-400">
          ● LIVE
        </span>

        <span className="text-sm text-slate-400">
          12,580 Voters
        </span>
      </div>

      <div className="space-y-5">
        <div className="rounded-xl bg-slate-800 p-4">
          <p className="text-gray-400">Active Election</p>

          <h3 className="mt-1 text-2xl font-bold text-green-400">
            Presidential Election
          </h3>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-gray-400">Votes Cast</p>

            <h3 className="text-xl font-bold text-white">
              8,945
            </h3>
          </div>

          <div className="rounded-xl bg-slate-800 p-4">
            <p className="text-gray-400">Participation</p>

            <h3 className="text-xl font-bold text-cyan-400">
              72%
            </h3>
          </div>
        </div>
      </div>

      {/* Progress Bar */}

      <div className="mt-6">
        <div className="mb-2 flex justify-between text-sm text-slate-400">
          <span>Voting Progress</span>

          <span>72%</span>
        </div>

        <div className="h-2 rounded-full bg-slate-700">
          <div className="h-2 w-[72%] rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"></div>
        </div>
      </div>
    </div>
  );
}

export default DashboardPreview;