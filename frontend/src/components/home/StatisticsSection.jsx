import { useEffect, useState } from "react";
import Container from "../ui/Container";
import api from "../../services/api";

function StatisticsSection() {
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
      const { data } = await api.get("/dashboard/stats");
      setStats(data);
    } catch (error) {
      console.log(error);
    }
  };

  const statistics = [
    {
      value: stats.totalUsers,
      title: "Registered Voters",
    },
    {
      value: stats.activeElections,
      title: "Total Elections",
    },
    {
      value: stats.totalCandidates,
      title: "Candidates",
    },
    {
      value: stats.totalVotes,
      title: "Votes Cast",
    },
  ];

  return (
    <section
      id="statistics"
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-800/15 blur-[120px] md:h-96 md:w-96"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-700/15 blur-[120px] md:h-96 md:w-96"></div>

      <Container>
        {/* Heading */}

        <div className="mb-14 text-center">

          <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
            Platform Statistics
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-slate-400">
            Real-time statistics from the Online Voting System.
          </p>

        </div>

        {/* Statistics Cards */}

        <div className="grid grid-cols-2 gap-5 md:grid-cols-2 xl:grid-cols-4">

          {statistics.map((item) => (

            <div
              key={item.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-blue-500 hover:shadow-[0_0_40px_rgba(37,99,235,0.25)] lg:p-8"
            >

              <h3 className="bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl lg:text-5xl">
                {item.value}
              </h3>

              <p className="mt-3 text-sm text-slate-300 lg:text-base">
                {item.title}
              </p>

            </div>

          ))}

        </div>
      </Container>
    </section>
  );
}

export default StatisticsSection;