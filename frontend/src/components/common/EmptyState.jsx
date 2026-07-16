import { FaVoteYea } from "react-icons/fa";

function EmptyState() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">

      <FaVoteYea className="text-7xl text-cyan-500" />

      <h2 className="mt-6 text-3xl font-bold text-white">
        No Candidates Available
      </h2>

      <p className="mt-3 max-w-md text-slate-400">
        Please wait until the administrator adds candidates for this election.
      </p>

    </div>
  );
}

export default EmptyState;