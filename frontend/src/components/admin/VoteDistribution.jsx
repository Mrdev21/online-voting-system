import { useEffect, useState } from "react";
import { getResults } from "../../services/resultService";

import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function VoteDistribution() {
    const [chartData, setChartData] = useState({
      labels: [],
      datasets: [],
    });

    useEffect(() => {
      loadResults();
    }, []);

    const loadResults = async () => {
      try {
        const response = await getResults();

        const labels = response.data.map((item) => item.candidateName);

        const votes = response.data.map((item) => item.votes);

        setChartData({
          labels,
          datasets: [
            {
              data: votes,
              backgroundColor: [
                "#06b6d4",
                "#22c55e",
                "#f59e0b",
                "#ef4444",
                "#8b5cf6",
                "#3b82f6",
              ],
              borderWidth: 0,
            },
          ],
        });
      } catch (error) {
        console.error(error);
      }
    };


  const options = {

    responsive: true,
    maintainAspectRatio: true,

    plugins: {

      legend: {

        position: "bottom",

        labels: {

          color: "#cbd5e1",

          padding: 20,

          usePointStyle: true,
          

        },

      },

    },

    cutout: "70%",
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_35px_rgba(34,211,238,0.15)]">
      <h2 className="mb-6 text-2xl font-bold text-white">Vote Distribution</h2>

      <div className="mx-auto mt-4 h-72 w-72">
        <Doughnut data={chartData} options={options} />
      </div>
    </div>
  );

}

export default VoteDistribution;