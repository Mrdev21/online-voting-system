import { useEffect, useState } from "react";
import { getResults, getWinner } from "../../services/resultService";
import ResultChart from "../../components/admin/ResultChart";

function Results() {
  const [results, setResults] = useState([]);
  const [winner, setWinner] = useState(null);

  useEffect(() => {
    loadResults();
  }, []);

  const loadResults = async () => {
    try {
      const resultsResponse = await getResults();
      const winnerResponse = await getWinner();

      setResults(resultsResponse.data);
      setWinner(winnerResponse.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Heading */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Election Results
        </h1>

        <p className="mt-2 text-slate-400">
          View live election results and winner details
        </p>
      </div>

      {/* Winner Card */}
      {winner && (
        <div className="mb-8 rounded-3xl border border-cyan-500/40 bg-slate-800 p-6 sm:p-8">

          <h2 className="text-2xl font-bold text-cyan-400 sm:text-3xl">
            🏆 Winner
          </h2>

          <h3 className="mt-5 text-2xl font-bold text-white">
            {winner.candidateName}
          </h3>

          <p className="mt-2 text-slate-400">
            {winner.party}
          </p>

          <p className="mt-5 text-4xl font-bold text-green-400 sm:text-5xl">
            {winner.votes} Votes
          </p>

        </div>
      )}

      {/* Results Table */}
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-800">

        <table className="min-w-[700px] w-full">

          <thead className="border-b border-white/10 bg-slate-700">

            <tr>

              <th className="p-5 text-left text-white">
                Candidate
              </th>

              <th className="p-5 text-left text-white">
                Party
              </th>

              <th className="p-5 text-left text-white">
                Votes
              </th>

            </tr>

          </thead>

          <tbody>

            {results.map((result) => (

              <tr
                key={result.candidateName}
                className="border-b border-slate-700 transition hover:bg-slate-700/40"
              >

                <td className="p-5 font-medium text-white">
                  {result.candidateName}
                </td>

                <td className="p-5 text-slate-300">
                  {result.party}
                </td>

                <td className="p-5 text-xl font-bold text-cyan-400">
                  {result.votes}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Chart */}
      <div className="mt-8 rounded-3xl border border-white/10 bg-slate-800 p-4 sm:p-6">
        <ResultChart data={results} />
      </div>

    </div>
  );
}

export default Results;