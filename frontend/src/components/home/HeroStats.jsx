import { useEffect, useState } from "react";
import api from "../../services/api";

function HeroStats() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCandidates: 0,
    totalVotes: 0,
    activeElections: 0,
  });

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const response = await api.get("/dashboard/stats");
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="mt-10 grid grid-cols-2 gap-6 md:grid-cols-4">

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          {stats.totalUsers}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Registered Voters
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          {stats.activeElections}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Elections
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          {stats.totalVotes}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Votes Cast
        </p>
      </div>

      <div className="text-center">
        <h2 className="text-3xl font-bold text-white">
          {stats.totalCandidates}
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Candidates
        </p>
      </div>

    </div>
  );
}

export default HeroStats;