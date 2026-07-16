import { FaLock, FaBolt, FaUserCheck, FaGlobe } from "react-icons/fa";
import Container from "../ui/Container";

const features = [
  {
    icon: <FaLock size={30} />,
    title: "Secure Voting",
    description:
      "End-to-end encrypted voting system with complete security.",
  },
  {
    icon: <FaBolt size={30} />,
    title: "Instant Results",
    description:
      "View election results in real time immediately after voting.",
  },
  {
    icon: <FaUserCheck size={30} />,
    title: "Verified Voters",
    description:
      "One voter can vote only once using JWT authentication.",
  },
  {
    icon: <FaGlobe size={30} />,
    title: "Vote Anywhere",
    description:
      "Participate securely from anywhere in the world.",
  },
];

function FeaturesSection() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-slate-950 py-20 lg:py-24"
    >
      {/* Background Glow */}

      <div className="absolute -left-20 top-0 h-64 w-64 rounded-full bg-blue-600/10 blur-3xl md:h-80 md:w-80"></div>

      <div className="absolute -right-20 bottom-0 h-72 w-72 rounded-full bg-cyan-500/10 blur-3xl md:h-96 md:w-96"></div>

      <Container>
        {/* Heading */}

        <div className="mb-14 text-center">

          <h2 className="text-3xl font-heading font-bold text-white sm:text-4xl lg:text-5xl">
            Why Choose e-VOTING?
          </h2>

          <p className="mx-auto mt-4 max-w-2xl px-2 text-slate-400">
            Fast, secure and transparent online election platform.
          </p>

        </div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature) => (

            <div
              key={feature.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-3 hover:border-cyan-400 hover:shadow-[0_0_35px_rgba(6,182,212,0.25)] lg:p-8"
            >

              <div className="mb-6 inline-flex rounded-2xl bg-cyan-500/10 p-4 text-cyan-400">
                {feature.icon}
              </div>

              <h3 className="text-xl font-bold text-white lg:text-2xl">
                {feature.title}
              </h3>

              <p className="mt-4 text-sm leading-7 text-slate-400 lg:text-base">
                {feature.description}
              </p>

            </div>

          ))}

        </div>
      </Container>
    </section>
  );
}

export default FeaturesSection;