import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getCurrentUser } from "../../services/userService";
import { getElections } from "../../services/electionService";

function Dashboard() {
  const [user, setUser] = useState(null);
  const [activeElection, setActiveElection] = useState(null);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const userResponse = await getCurrentUser();
      setUser(userResponse.data);

      const electionResponse = await getElections();

      const active = electionResponse.data.find(
        (e) => e.status === "ACTIVE"
      );

      setActiveElection(active);
    } catch (error) {
      console.error(error);
    }
  };

  if (!user) {
    return (
      <div className="flex h-[70vh] items-center justify-center">
        <p className="text-lg text-white">Loading...</p>
      </div>
    );
  }

  return (
    <div>
      {/* Heading */}
      <div className="mb-8 mt-4">

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Welcome, {user.fullName} 👋
        </h1>

        <p className="mt-2 text-slate-400">
          Here's an overview of your voting dashboard.
        </p>

      </div>

      {/* Cards */}

      <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-3">

        {/* Current Election */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">

          <h2 className="text-lg text-slate-400">
            Current Election
          </h2>

          <p className="mt-4 text-2xl font-bold text-white">
            {activeElection
              ? activeElection.title
              : "No Active Election"}
          </p>

        </div>

        {/* Voting Status */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">

          <h2 className="text-lg text-slate-400">
            Voting Status
          </h2>

          <p
            className={`mt-4 text-2xl font-bold ${
              user.hasVoted
                ? "text-green-400"
                : "text-yellow-400"
            }`}
          >
            {user.hasVoted
              ? "Already Voted"
              : "Not Voted"}
          </p>

        </div>

        {/* Voter ID */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)] sm:col-span-2 xl:col-span-1">

          <h2 className="text-lg text-slate-400">
            Voter ID
          </h2>

          <p className="mt-4 break-all text-2xl font-bold text-cyan-400">
            EVS-{String(user.id).padStart(6, "0")}
          </p>

        </div>

      </div>

      {/* Bottom Section */}

      <div className="mt-10">

        {user.hasVoted ? (

          <div className="rounded-3xl border border-green-500/30 bg-green-500/10 p-6">

            <h2 className="text-2xl font-bold text-green-400">
              ✅ Vote Submitted
            </h2>

            <p className="mt-3 text-slate-300">
              Thank you for participating in the election.
              Your vote has been securely recorded.
            </p>

          </div>

        ) : activeElection ? (

          <div className="rounded-3xl border border-cyan-500/20 bg-white/5 p-6">

            <h2 className="text-2xl font-bold text-white">
              Ready to Vote?
            </h2>

            <p className="mt-3 text-slate-300">
              An active election is currently running.
              Cast your vote before the election ends.
            </p>

            <Link
              to="/voter/vote"
              className="mt-6 inline-flex w-full justify-center rounded-2xl bg-cyan-500 px-8 py-4 text-lg font-semibold text-white transition hover:bg-cyan-600 sm:w-auto"
            >
              🗳 Go to Vote
            </Link>

          </div>

        ) : (

          <div className="rounded-3xl border border-yellow-500/30 bg-yellow-500/10 p-6">

            <h2 className="text-2xl font-bold text-yellow-400">
              ⚠ No Active Election
            </h2>

            <p className="mt-3 text-slate-300">
              There is currently no active election.
              Please check back later when a new election starts.
            </p>

          </div>

        )}

      </div>

    </div>
  );
}

export default Dashboard;