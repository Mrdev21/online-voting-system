function RecentElections() {
  const elections = [
    {
      id: 1,
      name: "Presidential Election",
      status: "Active",
      voters: 12580,
    },
    {
      id: 2,
      name: "College Election",
      status: "Upcoming",
      voters: 2450,
    },
    {
      id: 3,
      name: "Municipal Election",
      status: "Completed",
      voters: 8640,
    },
  ];

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-12 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_35px_rgba(34,211,238,0.15)]">
      <h2 className="mb-6 text-2xl font-bold text-white">
        Recent Elections
      </h2>

      <table className="w-full">
        <thead>
          <tr className="border-b border-slate-700 text-left text-slate-400">
            <th className="pb-3">Election</th>
            <th className="pb-3">Status</th>
            <th className="pb-3">Voters</th>
          </tr>
        </thead>

        <tbody>
          {elections.map((election) => (
            <tr
              key={election.id}
              className="border-b border-slate-800"
            >
              <td className="py-4 text-white">
                {election.name}
              </td>

              <td className="py-4">
                <span className="rounded-full bg-cyan-500/20 px-3 py-1 text-sm text-cyan-400">
                  {election.status}
                </span>
              </td>

              <td className="py-4 text-slate-300">
                {election.voters}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default RecentElections;