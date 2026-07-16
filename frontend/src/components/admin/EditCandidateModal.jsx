import { useState, useEffect } from "react";
import { updateCandidate } from "../../services/candidateService";
import { toast } from "react-toastify";

function EditCandidateModal({ candidate, onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    party: "",
    symbol: "",
    description: "",
  });

  useEffect(() => {
    if (candidate) {
      setForm({
        name: candidate.name || "",
        party: candidate.party || "",
        symbol: candidate.symbol || "",
        description: candidate.description || "",
      });
    }
  }, [candidate]);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateCandidate(candidate.id, form);

      toast.success("Candidate Updated Successfully 🎉");

      onSuccess();
      onClose();
    } catch (err) {
      console.error(err);
      toast.error("Failed to update candidate");
    }
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto bg-black/70 backdrop-blur-sm">

      <div className="flex min-h-full items-start justify-center p-4 pt-24 lg:items-center lg:pt-6">

        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-8">

          <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
            Edit Candidate
          </h2>

          <form onSubmit={handleSubmit} className="space-y-5">

            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Candidate Name"
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="party"
              value={form.party}
              onChange={handleChange}
              placeholder="Party"
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            <input
              name="symbol"
              value={form.symbol}
              onChange={handleChange}
              placeholder="Symbol"
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              placeholder="Description"
              rows={5}
              className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
            />

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
                Update Candidate
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
}

export default EditCandidateModal;