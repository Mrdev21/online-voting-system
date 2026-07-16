import { useEffect, useState } from "react";
import { getCandidates } from "../../services/candidateService";
import { castVote } from "../../services/voteService";
import VoteConfirmModal from "../../components/voter/VoteConfirmModal";
import { toast } from "react-toastify";

function Vote() {
  const [candidates, setCandidates] = useState([]);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [showVoteModal, setShowVoteModal] = useState(false);
  const [hasVoted, setHasVoted] = useState(false);
  const [search, setSearch] = useState("");

  useEffect(() => {
    loadCandidates();
  }, []);

  const loadCandidates = async () => {
    try {
      const response = await getCandidates();
      setCandidates(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleVote = (candidate) => {
    setSelectedCandidate(candidate);
    setShowVoteModal(true);
  };

  const confirmVote = async () => {
    try {
      await castVote(selectedCandidate.id);

      setHasVoted(true);

      toast.success("Vote Cast Successfully 🎉");
    } catch (error) {
      if (error.response?.status === 400) {
        toast.error(error.response.data.message);
      } else {
        toast.error("Something went wrong.");
      }
    } finally {
      setShowVoteModal(false);
      setSelectedCandidate(null);
    }
  };

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.party.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mt-4">

      {/* Heading */}

      <div className="mb-8">

        <h1 className="text-3xl font-bold text-white sm:text-4xl">
          Cast Your Vote
        </h1>

        <p className="mt-2 text-slate-400">
          Choose your preferred candidate carefully. You can vote only once.
        </p>

      </div>

      {/* Search */}

      <input
        type="text"
        placeholder="Search candidate..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-8 w-full rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-white outline-none backdrop-blur-xl focus:border-cyan-400"
      />

      {/* Cards */}

      {filteredCandidates.length === 0 ? (
        <div className="rounded-3xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-xl">
          <h2 className="text-2xl font-bold text-white">
            No Candidates Found
          </h2>

          <p className="mt-2 text-slate-400">
            Try searching with another keyword.
          </p>
        </div>
      ) : (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {filteredCandidates.map((candidate) => (

            <div
              key={candidate.id}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(34,211,238,0.18)]"
            >

              <img
                src={
                  candidate.photo
                    ? `http://localhost:8080${candidate.photo}`
                    : `https://ui-avatars.com/api/?name=${encodeURIComponent(
                        candidate.name
                      )}&background=0891b2&color=fff`
                }
                alt={candidate.name}
                className="mx-auto h-24 w-24 rounded-full border-4 border-cyan-400 object-cover"
              />

              <h2 className="mt-5 text-center text-2xl font-bold text-white">
                {candidate.name}
              </h2>

              <p className="mt-2 text-center font-medium text-cyan-400">
                {candidate.party}
              </p>

              <p className="mt-4 min-h-[72px] text-center text-slate-400">
                {candidate.description}
              </p>

              <button
                disabled={hasVoted}
                onClick={() => handleVote(candidate)}
                className={`mt-6 w-full rounded-xl py-3 font-semibold text-white transition ${
                  hasVoted
                    ? "cursor-not-allowed bg-green-600"
                    : "bg-cyan-500 hover:bg-cyan-600"
                }`}
              >
                {hasVoted ? "✅ Already Voted" : "🗳 Vote"}
              </button>

            </div>

          ))}

        </div>
      )}

      {showVoteModal && (
        <VoteConfirmModal
          candidate={selectedCandidate}
          onClose={() => {
            setShowVoteModal(false);
            setSelectedCandidate(null);
          }}
          onConfirm={confirmVote}
        />
      )}

    </div>
  );
}

export default Vote;