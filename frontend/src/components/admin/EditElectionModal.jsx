import { useState } from "react";
import { updateElection } from "../../services/electionService";
import { toast } from "react-toastify";

function EditElectionModal({ election, onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: election.title,
    startDate: election.startDate,
    endDate: election.endDate,
    status: election.status,
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateElection(election.id, form);

      toast.success("Election updated successfully 🎉");

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to update election");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">

      <div className="w-full max-w-xl rounded-3xl bg-slate-900 p-8">

        <h2 className="mb-6 text-3xl font-bold text-white">
          Edit Election
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            type="date"
            name="startDate"
            value={form.startDate}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <input
            type="date"
            name="endDate"
            value={form.endDate}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          />

          <select
            name="status"
            value={form.status}
            onChange={handleChange}
            className="w-full rounded-xl bg-slate-800 p-4 text-white outline-none"
          >
            <option value="UPCOMING">Upcoming</option>
            <option value="ACTIVE">Active</option>
            <option value="ENDED">Ended</option>
          </select>

          <div className="flex justify-end gap-4">

            <button
              type="button"
              onClick={onClose}
              className="rounded-xl bg-slate-700 px-6 py-3 text-white"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-xl bg-cyan-500 px-6 py-3 text-white"
            >
              Update
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default EditElectionModal;