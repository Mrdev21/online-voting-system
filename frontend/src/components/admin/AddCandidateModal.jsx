import { useState } from "react";
import {
  addCandidate,
  uploadCandidatePhoto,
} from "../../services/candidateService";

function AddCandidateModal({ onClose, onSuccess }) {
  const [form, setForm] = useState({
    name: "",
    party: "",
    symbol: "",
    description: "",
    photo: "",
  });

  const [selectedImage, setSelectedImage] = useState(null);
  const [preview, setPreview] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (!file) return;

    setSelectedImage(file);
    setPreview(URL.createObjectURL(file));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let photo = "";

      if (selectedImage) {
        const uploadResponse = await uploadCandidatePhoto(selectedImage);
        photo = uploadResponse.data.photo;
      }

      await addCandidate({
        ...form,
        photo,
      });

      onSuccess();
      onClose();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 mt-20 p-4 backdrop-blur-sm">

      <div className="max-h-[90vh] w-full max-w-xl overflow-y-auto mt-10 rounded-3xl border border-white/10 bg-slate-900 p-6 shadow-2xl sm:p-8">

        <h2 className="mb-8 text-center text-2xl font-bold text-white sm:text-3xl">
          Add Candidate
        </h2>

        <form onSubmit={handleSubmit} className="space-y-5">

          <input
            name="name"
            placeholder="Candidate Name"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <input
            name="party"
            placeholder="Party Name"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <input
            name="symbol"
            placeholder="Election Symbol"
            onChange={handleChange}
            className="w-full rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <textarea
            name="description"
            maxLength={300}
            placeholder="Candidate Description"
            onChange={handleChange}
            className="h-32 w-full resize-none rounded-xl border border-white/10 bg-slate-800 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <div>

            <label className="mb-2 block text-sm font-medium text-slate-300">
              Candidate Photo
            </label>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="w-full rounded-xl border border-white/10 bg-slate-800 p-3 text-white"
            />

            {preview && (
              <div className="mt-5 flex justify-center">

                <img
                  src={preview}
                  alt="Preview"
                  className="h-32 w-32 rounded-2xl border-4 border-cyan-500 object-cover"
                />

              </div>
            )}

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
              Save Candidate
            </button>

          </div>

        </form>

      </div>

    </div>
  );
}

export default AddCandidateModal;