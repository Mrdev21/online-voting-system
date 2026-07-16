import { useEffect, useState } from "react";
import { getDashboardStats } from "../../services/dashboardService";
import StatCard from "../../components/admin/StatCard";
import VoteChart from "../../components/admin/VoteChart";
import WinnerCard from "../../components/admin/WinnerCard";
import RecentElections from "../../components/admin/RecentElections";
import VoteDistribution from "../../components/admin/VoteDistribution";

import {
  FaUsers,
  FaUserTie,
  FaVoteYea,
  FaCheckCircle,
} from "react-icons/fa";

function Dashboard() {
  const [stats, setStats] = useState({
    totalUsers: 0,
    totalCandidates: 0,
    totalVotes: 0,
    activeElections: 0,
  });

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      const response = await getDashboardStats();
      setStats(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="space-y-6 p-4 sm:p-6">

      {/* Dashboard Heading */}

      <div>
        <h1 className="text-2xl font-bold text-white sm:text-3xl">
          Admin Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-400">
          Welcome back! Here's an overview of your voting system.
        </p>
      </div>

      {/* Stats */}

      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">

        <StatCard
          title="Total Voters"
          value={stats.totalUsers}
          color="text-cyan-400"
          icon={<FaUsers className="text-cyan-400" />}
          change="+12% this month"
        />

        <StatCard
          title="Candidates"
          value={stats.totalCandidates}
          color="text-green-400"
          icon={<FaUserTie className="text-green-400" />}
          change="+2 new"
        />

        <StatCard
          title="Active Elections"
          value={stats.activeElections}
          color="text-yellow-400"
          icon={<FaVoteYea className="text-yellow-400" />}
          change="Running"
        />

        <StatCard
          title="Votes Cast"
          value={stats.totalVotes}
          color="text-pink-400"
          icon={<FaCheckCircle className="text-pink-400" />}
          change="72% turnout"
        />

      </div>

      {/* Charts */}

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-12">

        {/* Left */}

        <div className="space-y-6 xl:col-span-8">

          <VoteChart />

          <RecentElections />

        </div>

        {/* Right */}

        <div className="space-y-6 xl:col-span-4">

          <VoteDistribution />

          <WinnerCard />

        </div>

      </div>

    </div>
  );
}

export default Dashboard;