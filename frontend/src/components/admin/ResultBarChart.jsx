import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

function ResultBarChart({ data }) {
  return (
    <div className="rounded-3xl bg-slate-800 p-6">

      <h2 className="mb-6 text-2xl font-bold text-white">
        Candidate Votes
      </h2>

      <ResponsiveContainer width="100%" height={350}>

        <BarChart data={data}>

          <CartesianGrid strokeDasharray="3 3" />

          <XAxis dataKey="candidateName" />

          <YAxis />

          <Tooltip />

          <Bar
            dataKey="votes"
            radius={[8, 8, 0, 0]}
          />

        </BarChart>

      </ResponsiveContainer>

    </div>
  );
}

export default ResultBarChart;