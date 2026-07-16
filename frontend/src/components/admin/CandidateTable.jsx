function CandidateTable({ candidates, onEdit, onDelete }) {
  return (
    <div className="mt-8 overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

      <table className="min-w-[1100px] w-full">
        <thead className="border-b border-white/10 bg-slate-900/50">
          <tr className="text-left text-slate-400">
            <th className="p-5">Photo</th>
            <th>Name</th>
            <th>Party</th>
            <th>Symbol</th>
            <th>Description</th>
            <th>Status</th>
            <th className="text-center">Actions</th>
          </tr>
        </thead>

        <tbody>
          {candidates.map((candidate) => (
            <tr
              key={candidate.id}
              className="border-b border-white/5 transition hover:bg-white/5"
            >
              {/* Photo */}
              <td className="p-5">
                <img
                  src={
                    candidate.photo
                      ? `http://localhost:8080${candidate.photo}`
                      : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                          candidate.name
                        )}&background=0891b2&color=fff`
                  }
                  alt={candidate.name}
                  className="h-12 w-12 rounded-full border-2 border-cyan-500 object-cover"
                />
              </td>

              {/* Name */}
              <td className="font-medium text-white">
                {candidate.name}
              </td>

              {/* Party */}
              <td className="text-slate-300">
                {candidate.party}
              </td>

              {/* Symbol */}
              <td>
                <span className="rounded-lg bg-cyan-500/20 px-3 py-1 text-cyan-400">
                  {candidate.symbol}
                </span>
              </td>

              {/* Description */}
              <td
                className="max-w-[220px] truncate text-slate-400"
                title={candidate.description}
              >
                {candidate.description}
              </td>

              {/* Status */}
              <td>
                <span className="rounded-full bg-green-500/20 px-4 py-2 text-green-400">
                  Active
                </span>
              </td>

              {/* Actions */}
              <td className="px-4 py-5">
                <div className="flex justify-center gap-2">

                  <button
                    onClick={() => onEdit(candidate)}
                    className="rounded-lg bg-cyan-500 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => onDelete(candidate)}
                    className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
                  >
                    Delete
                  </button>

                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

    </div>
  );
}

export default CandidateTable;