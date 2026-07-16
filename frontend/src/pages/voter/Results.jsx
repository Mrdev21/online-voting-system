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
    <div className="mt-4">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Election Results
        </h1>

        <p className="mt-2 text-slate-400">
          Live election results and current leading candidate.
        </p>

      </div>

      {/* Winner */}

      {winner && (
        <div className="mb-8 rounded-3xl border border-cyan-500/30 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]">

          <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">

            <img
              src={
                winner.photo
                  ? `http://localhost:8080${winner.photo}`
                  : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                      winner.candidateName
                    )}&background=0891b2&color=fff`
              }
              alt={winner.candidateName}
              className="h-28 w-28 rounded-full border-4 border-cyan-400 object-cover"
            />

            <div className="flex-1">

              <h2 className="text-3xl font-bold text-cyan-400">
                🏆 Winner
              </h2>

              <h3 className="mt-3 text-2xl font-bold text-white">
                {winner.candidateName}
              </h3>

              <p className="mt-2 text-slate-400">
                {winner.party}
              </p>

            </div>

            <div>

              <p className="text-slate-400">
                Total Votes
              </p>

              <h2 className="mt-2 text-5xl font-bold text-green-400">
                {winner.votes}
              </h2>

            </div>

          </div>

        </div>
      )}

      {/* Table */}

      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl">

        <table className="min-w-full">

          <thead className="border-b border-white/10 bg-slate-800">

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

            {results.length > 0 ? (

              results.map((result) => (

                <tr
                  key={result.candidateName}
                  className="border-b border-white/5 hover:bg-white/5"
                >

                  <td className="p-5 font-medium text-white">
                    {result.candidateName}
                  </td>

                  <td className="p-5 text-slate-300">
                    {result.party}
                  </td>

                  <td className="p-5 font-bold text-cyan-400">
                    {result.votes}
                  </td>

                </tr>

              ))

            ) : (

              <tr>

                <td
                  colSpan={3}
                  className="p-10 text-center text-slate-400"
                >
                  No Results Available
                </td>

              </tr>

            )}

          </tbody>

        </table>

      </div>

      {/* Chart */}

      {results.length > 0 && (

        <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">

          <ResultChart data={results} />

        </div>

      )}

    </div>
  );
}

export default Results;