import { useState } from "react";
import { addElection } from "../../services/electionService";
import { toast } from "react-toastify";

function AddElectionModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    title: "",
    startDate: "",
    endDate: "",
    status: "UPCOMING",
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
      await addElection(form);

      toast.success("Election added successfully 🎉");

      onSuccess();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add election");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 backdrop-blur-sm">

      <div className="flex min-h-full items-start justify-center p-4 pt-24 lg:items-center lg:pt-6">

        {/* Modal */}
        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-8">

          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            Add Election
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="title"
              placeholder="Election Title"
              value={form.title}
              onChange={handleChange}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            <div className="grid gap-5 sm:grid-cols-2">

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  Start Date
                </label>

                <input
                  type="date"
                  name="startDate"
                  value={form.startDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm text-slate-300">
                  End Date
                </label>

                <input
                  type="date"
                  name="endDate"
                  value={form.endDate}
                  onChange={handleChange}
                  className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
                />
              </div>

            </div>

            <div>

              <label className="mb-2 block text-sm text-slate-300">
                Election Status
              </label>

              <select
                name="status"
                value={form.status}
                onChange={handleChange}
                className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
              >
                <option value="UPCOMING">Upcoming</option>
                <option value="ACTIVE">Active</option>
                <option value="ENDED">Ended</option>
              </select>

            </div>

            <div className="flex flex-col-reverse gap-3 pt-3 sm:flex-row sm:justify-end">

              <button
                type="button"
                onClick={onClose}
                className="rounded-xl bg-slate-700 px-6 py-3 text-white transition hover:bg-slate-600"
              >
                Cancel
              </button>

              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-6 py-3 font-semibold text-white transition hover:bg-cyan-600"
              >
                Save Election
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default AddElectionModal;