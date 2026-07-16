import { FaUserCheck, FaVoteYea, FaChartBar } from "react-icons/fa";
import Container from "../ui/Container";

const steps = [
  {
    icon: <FaUserCheck size={28} />,
    title: "Login Securely",
    desc: "Authenticate with your voter account using JWT security.",
  },
  {
    icon: <FaVoteYea size={28} />,
    title: "Cast Your Vote",
    desc: "Choose your candidate and submit your vote securely.",
  },
  {
    icon: <FaChartBar size={28} />,
    title: "View Results",
    desc: "Watch live election results after voting ends.",
  },
];

function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-blue-800/15 blur-[120px] md:h-96 md:w-96"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/15 blur-[120px] md:h-96 md:w-96"></div>

      <Container>
        {/* Heading */}

        <div className="mb-14 text-center">

          <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
            How It Works
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-slate-400">
            Voting in just three simple steps.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-3">

          {steps.map((step, index) => (

            <div
              key={step.title}
              className="relative rounded-3xl border border-white/10 bg-white/5 p-6 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] lg:p-8"
            >

              {/* Step Number */}

              <div className="absolute -top-5 left-1/2 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-primary font-bold text-white shadow-lg">
                {index + 1}
              </div>

              {/* Icon */}

              <div className="mt-6 flex justify-center text-cyan-400">
                {step.icon}
              </div>

              {/* Title */}

              <h3 className="mt-6 text-xl font-bold text-white lg:text-2xl">
                {step.title}
              </h3>

              {/* Description */}

              <p className="mt-4 text-sm leading-7 text-slate-400 lg:text-base">
                {step.desc}
              </p>

            </div>

          ))}

        </div>
      </Container>
    </section>
  );
}

export default HowItWorks;