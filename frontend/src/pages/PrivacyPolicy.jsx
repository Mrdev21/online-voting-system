import { useNavigate } from "react-router-dom";

function PrivacyPolicy() {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen overflow-hidden bg-slate-950 px-6 py-12 text-white">

      {/* Background Glow */}
      <div className="absolute -left-20 top-20 h-72 w-72 rounded-full bg-blue-600/10 blur-[120px]" />

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-5xl mt-18">

        {/* Back Button */}

        <button
          onClick={() => navigate("/")}
          className="mb-10 rounded-xl border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 font-medium text-cyan-400 transition hover:bg-cyan-500 hover:text-white"
        >
          ← Back to Home
        </button>

        {/* Card */}

        <div className="rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl lg:p-12">

          <h1 className="text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Privacy Policy
          </h1>

          <p className="mt-6 leading-8 text-slate-300">
            Your privacy is our priority. The Online Voting System is designed
            to securely collect and protect only the information required for
            voter authentication and election management.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                Information We Collect
              </h2>

              <p className="mt-2 leading-7 text-slate-300">
                We collect only essential information such as your name, email
                address, and encrypted password to verify your identity and
                provide secure access.
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                Security
              </h2>

              <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-300">
                <li>Passwords are securely encrypted using BCrypt.</li>
                <li>JWT Authentication protects user sessions.</li>
                <li>Votes remain anonymous and confidential.</li>
                <li>All communication is secured.</li>
                <li>Your personal information is never sold or shared.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                User Rights
              </h2>

              <p className="mt-2 leading-7 text-slate-300">
                Users can securely access, update, and manage their accounts.
                Personal information is handled responsibly and only for
                election-related purposes.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default PrivacyPolicy;