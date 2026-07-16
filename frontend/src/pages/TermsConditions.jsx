import { useNavigate } from "react-router-dom";

function TermsConditions() {
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
            Terms & Conditions
          </h1>

          <p className="mt-6 leading-8 text-slate-300">
            By using the Online Voting System, you agree to follow the rules and
            policies that ensure secure, fair, and transparent elections for
            all participants.
          </p>

          <div className="mt-10 space-y-6">

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                User Responsibilities
              </h2>

              <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-300">
                <li>Each registered voter can cast only one vote.</li>
                <li>Users must provide accurate and valid information.</li>
                <li>Sharing login credentials with others is prohibited.</li>
                <li>Users are responsible for maintaining account security.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                Election Rules
              </h2>

              <ul className="mt-3 list-disc space-y-3 pl-6 text-slate-300">
                <li>Votes cannot be changed after submission.</li>
                <li>Election results are generated automatically by the system.</li>
                <li>Only authorized administrators can manage elections.</li>
                <li>Any misuse of the platform may result in account suspension.</li>
              </ul>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-cyan-400">
                Disclaimer
              </h2>

              <p className="mt-2 leading-7 text-slate-300">
                The Online Voting System is intended for educational and
                demonstration purposes. Every effort is made to ensure system
                reliability, security, and transparency.
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default TermsConditions;