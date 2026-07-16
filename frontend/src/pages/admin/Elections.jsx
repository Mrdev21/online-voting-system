import { useEffect, useState } from "react";
import { toast } from "react-toastify";

import {
  getElections,
  deleteElection,
} from "../../services/electionService";

import AddElectionModal from "../../components/admin/AddElectionModal";
import EditElectionModal from "../../components/admin/EditElectionModal";

function Elections() {
  const [elections, setElections] = useState([]);

  const [showModal, setShowModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedElection, setSelectedElection] = useState(null);

  useEffect(() => {
    loadElections();
  }, []);

  const loadElections = async () => {
    try {
      const response = await getElections();
      setElections(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this election?"
    );

    if (!confirmDelete) return;

    try {
      await deleteElection(id);

      toast.success("Election deleted successfully");

      loadElections();
    } catch (error) {
      console.error(error);

      toast.error("Failed to delete election");
    }
  };

  const handleEdit = (election) => {
    setSelectedElection(election);
    setShowEditModal(true);
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "ACTIVE":
        return "bg-green-500/20 text-green-400";

      case "UPCOMING":
        return "bg-yellow-500/20 text-yellow-400";

      case "ENDED":
        return "bg-red-500/20 text-red-400";

      default:
        return "bg-slate-700 text-white";
    }
  };

  return (
    <div className="p-4 sm:p-6 lg:p-8">

      {/* Header */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">

        <div>
          <h1 className="text-3xl font-bold text-white sm:text-4xl">
            Elections
          </h1>

          <p className="mt-2 text-slate-400">
            Manage all elections
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          + Add Election
        </button>

      </div>

      {/* Table */}
      <div className="overflow-x-auto rounded-3xl border border-white/10 bg-slate-800">

        <table className="min-w-[850px] w-full">

          <thead className="border-b border-white/10 bg-slate-700">

            <tr>

              <th className="p-5 text-left text-white">
                Title
              </th>

              <th className="p-5 text-left text-white">
                Start Date
              </th>

              <th className="p-5 text-left text-white">
                End Date
              </th>

              <th className="p-5 text-left text-white">
                Status
              </th>

              <th className="p-5 text-center text-white">
                Actions
              </th>

            </tr>

          </thead>

          <tbody>

            {elections.map((election) => (

              <tr
                key={election.id}
                className="border-b border-slate-700 transition hover:bg-slate-700/40"
              >

                <td className="p-5 font-medium text-white">
                  {election.title}
                </td>

                <td className="p-5 text-slate-300">
                  {election.startDate}
                </td>

                <td className="p-5 text-slate-300">
                  {election.endDate}
                </td>

                <td className="p-5">

                  <span
                    className={`rounded-full px-4 py-2 text-sm ${getStatusColor(
                      election.status
                    )}`}
                  >
                    {election.status}
                  </span>

                </td>

                <td className="p-5">

                  <div className="flex justify-center gap-2">

                    <button
                      onClick={() => handleEdit(election)}
                      className="rounded-lg bg-cyan-500 px-4 py-2 text-sm text-white transition hover:bg-cyan-600"
                    >
                      Edit
                    </button>

                    <button
                      onClick={() => handleDelete(election.id)}
                      className="rounded-lg bg-red-500 px-4 py-2 text-sm text-white transition hover:bg-red-600"
                    >
                      Delete
                    </button>

                  </div>

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* Add Modal */}
      {showModal && (
        <AddElectionModal
          onClose={() => setShowModal(false)}
          onSuccess={loadElections}
        />
      )}

      {/* Edit Modal */}
      {showEditModal && selectedElection && (
        <EditElectionModal
          election={selectedElection}
          onClose={() => {
            setShowEditModal(false);
            setSelectedElection(null);
          }}
          onSuccess={loadElections}
        />
      )}

    </div>
  );
}

export default Elections;