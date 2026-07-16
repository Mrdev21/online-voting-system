import Button from "../components/ui/Button";

function Register() {
  return (
    <section className="flex min-h-screen items-center justify-center bg-slate-950 px-6">
      <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">

        <h1 className="text-center text-4xl font-heading font-bold text-white">
          Create Account
        </h1>

        <p className="mt-2 text-center text-slate-400">
          Register as a voter
        </p>

        <form className="mt-8 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="email"
            placeholder="Email"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <input
            type="password"
            placeholder="Password"
            className="w-full rounded-xl border border-white/10 bg-slate-900 px-4 py-3 text-white outline-none focus:border-cyan-400"
          />

          <Button className="w-full py-3">
            Register
          </Button>

        </form>

      </div>
    </section>
  );
}

export default Register;