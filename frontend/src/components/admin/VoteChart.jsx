import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
  Filler
);

function VoteChart() {
  const data = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Votes",
        data: [120, 250, 420, 610, 750, 980, 1250],
        fill: true,
        borderColor: "#22d3ee",
        backgroundColor: "rgba(34,211,238,0.15)",
        tension: 0.4,
        pointBackgroundColor: "#22d3ee",
        pointRadius: 4,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,

    plugins: {
      legend: {
        display: false,
      },

      tooltip: {
        backgroundColor: "#0f172a",
        titleColor: "#fff",
        bodyColor: "#fff",
      },
    },

    scales: {
      x: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#1e293b",
        },
      },

      y: {
        ticks: {
          color: "#94a3b8",
        },
        grid: {
          color: "#1e293b",
        },
      },
    },
  };

  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_35px_rgba(34,211,238,0.15)] lg:p-6">

      <h2 className="mb-6 text-xl font-bold text-white sm:text-2xl">
        Weekly Voting Analytics
      </h2>

      <div className="h-72 sm:h-80 lg:h-96">
        <Line data={data} options={options} />
      </div>

    </div>
  );
}

export default VoteChart;