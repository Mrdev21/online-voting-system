import { useEffect, useState } from "react";

import CandidateTable from "../../components/admin/CandidateTable";
import AddCandidateModal from "../../components/admin/AddCandidateModal";
import EditCandidateModal from "../../components/admin/EditCandidateModal";
import DeleteCandidateModal from "../../components/admin/DeleteCandidateModal";

import { getCandidates } from "../../services/candidateService";

function Candidates() {
  const [openModal, setOpenModal] = useState(false);
  const [candidates, setCandidates] = useState([]);
  const [editModal, setEditModal] = useState(false);
  const [selectedCandidate, setSelectedCandidate] = useState(null);
  const [deleteCandidate, setDeleteCandidate] = useState(null);
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

  const filteredCandidates = candidates.filter(
    (candidate) =>
      candidate.name.toLowerCase().includes(search.toLowerCase()) ||
      candidate.party.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        {/* Left */}
        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Candidates
          </h1>

          <p className="mt-2 text-slate-400">
            Manage election candidates
          </p>
        </div>

        {/* Right */}
        <div className="flex w-full flex-col gap-3 sm:flex-row lg:w-auto">

          <input
            type="text"
            placeholder="Search candidate..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full rounded-xl border border-slate-700 bg-slate-800 px-4 py-3 text-white outline-none transition focus:border-cyan-500 sm:w-80"
          />

          <button
            onClick={() => setOpenModal(true)}
            className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
          >
            + Add Candidate
          </button>

        </div>

      </div>

      {/* Table */}
      <CandidateTable
        candidates={filteredCandidates}
        onEdit={(candidate) => {
          setSelectedCandidate(candidate);
          setEditModal(true);
        }}
        onDelete={(candidate) => {
          setDeleteCandidate(candidate);
        }}
      />

      {/* Add Modal */}
      {openModal && (
        <AddCandidateModal
          onClose={() => setOpenModal(false)}
          onSuccess={loadCandidates}
        />
      )}

      {/* Edit Modal */}
      {editModal && (
        <EditCandidateModal
          candidate={selectedCandidate}
          onClose={() => setEditModal(false)}
          onSuccess={loadCandidates}
        />
      )}

      {/* Delete Modal */}
      {deleteCandidate && (
        <DeleteCandidateModal
          candidate={deleteCandidate}
          onClose={() => setDeleteCandidate(null)}
          onSuccess={loadCandidates}
        />
      )}

    </div>
  );
}

export default Candidates;