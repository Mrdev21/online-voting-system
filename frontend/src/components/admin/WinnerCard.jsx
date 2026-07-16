
import { useEffect, useState } from "react";
import { getWinner } from "../../services/resultService";

function WinnerCard() {
    const [winner, setWinner] = useState({
      candidateName: "",
      party: "",
      votes: 0,
    });

    useEffect(() => {
      loadWinner();
    }, []);

    const loadWinner = async () => {
      try {
        const response = await getWinner();
        setWinner(response.data);
      } catch (error) {
        console.error(error);
      }
    };
  return (
    <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-400/40 hover:shadow-[0_10px_35px_rgba(34,211,238,0.15)]">
      <h2 className="mb-6 text-2xl font-bold text-white">Current Leader</h2>

      <div className="flex flex-1 flex-col items-center justify-between">
        <img
          src={
            winner.photo
              ? `http://localhost:8080${winner.photo}`
              : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                  winner.candidateName,
                )}&background=0891b2&color=fff`
          }
          alt={winner.candidateName}
          className="h-24 w-24 rounded-full border-4 border-cyan-400 object-cover"
        />

        <h3 className="mt-4 text-2xl font-bold text-white">
          {winner.candidateName}
        </h3>

        <p className="text-slate-400">{winner.party}</p>

        <div className="mt-6 w-full rounded-2xl bg-slate-800 p-4 text-center">
          <p className="text-slate-400">Total Votes</p>

          <h2 className="mt-2 text-4xl font-bold text-cyan-400">
            {winner.votes}
          </h2>
        </div>

        <span className="mt-6 rounded-full bg-green-500/20 px-4 py-2 text-green-400">
          🏆 Leading
        </span>
      </div>
    </div>
  );
}

export default WinnerCard;