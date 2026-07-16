function ProfileForm({
  form,
  handleChange,
  handleSubmit,
}) {
  return (
    <form
      onSubmit={handleSubmit}
      className="grid gap-6 md:grid-cols-2"
    >
      <div>
        <label className="mb-2 block text-slate-400">
          Full Name
        </label>

        <input
          name="fullName"
          value={form.fullName}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-700 p-3 text-white outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-slate-400">
          Email
        </label>

        <input
          value={form.email}
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-slate-700 p-3 text-slate-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-slate-400">
          Phone
        </label>

        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-700 p-3 text-white outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-slate-400">
          Address
        </label>

        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          className="w-full rounded-xl bg-slate-700 p-3 text-white outline-none"
        />
      </div>

      <div>
        <label className="mb-2 block text-slate-400">
          Role
        </label>

        <input
          value={form.role}
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-slate-700 p-3 text-cyan-400"
        />
      </div>

      <div>
        <label className="mb-2 block text-slate-400">
          Voting Status
        </label>

        <input
          value={form.hasVoted ? "Voted" : "Not Voted"}
          disabled
          className="w-full cursor-not-allowed rounded-xl bg-slate-700 p-3 text-white"
        />
      </div>

      <div className="md:col-span-2 flex justify-end">
        <button
          className="rounded-xl bg-cyan-500 px-8 py-3 font-semibold text-white transition hover:bg-cyan-600"
        >
          Save Changes
        </button>
      </div>
    </form>
  );
}

export default ProfileForm;