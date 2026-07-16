function VoteConfirmModal({
  candidate,
  onClose,
  onConfirm,
}) {
  if (!candidate) return null;

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 backdrop-blur-sm">

      <div className="flex min-h-full items-start justify-center p-4 pt-24 lg:items-center lg:pt-6">

        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-8">

          <h2 className="text-center text-2xl font-bold text-white sm:text-3xl">
            Confirm Vote
          </h2>

          <div className="mt-8 flex flex-col items-center">

            <img
              src={
                candidate.photo
                  ? `http://localhost:8080${candidate.photo}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      candidate.name
                    )}&background=0891b2&color=fff`
              }
              alt={candidate.name}
              className="h-24 w-24 rounded-full border-4 border-cyan-400 object-cover"
            />

            <p className="mt-5 text-slate-300">
              You are voting for
            </p>

            <h3 className="mt-2 text-center text-2xl font-bold text-cyan-400">
              {candidate.name}
            </h3>

            <p className="mt-2 text-slate-400">
              {candidate.party}
            </p>

          </div>

          <div className="mt-8 rounded-2xl bg-slate-800 p-4 text-center">

            <p className="text-sm text-slate-400">
              ⚠️ Once your vote is submitted, it cannot be changed.
            </p>

          </div>

          <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">

            <button
              onClick={onClose}
              className="rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-600"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
            >
              Confirm Vote
            </button>

          </div>

        </div>

      </div>

    </div>
  );
}

export default VoteConfirmModal;