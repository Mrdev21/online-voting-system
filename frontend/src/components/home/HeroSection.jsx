import HeroBadge from "./HeroBadge";
import HeroButtons from "./HeroButtons";
import HeroStats from "./HeroStats";
import DashboardPreview from "./DashboardPreview";
import Container from "../ui/Container";

function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-x-hidden bg-slate-950 pt-18"
    >
      <div className="absolute -left-24 top-10 h-72 w-72 rounded-full bg-blue-600/20 blur-3xl md:h-96 md:w-96"></div>

      <div className="absolute -right-20 bottom-0 h-64 w-64 rounded-full bg-cyan-500/20 blur-3xl md:h-80 md:w-80"></div>

      <Container className="flex min-h-screen items-center py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <HeroBadge />

            <h1 className="mt-6 text-center text-4xl font-heading font-bold leading-tight text-white sm:text-5xl md:text-6xl lg:text-left lg:text-7xl">
              Secure{" "}
              <span className="bg-linear-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
                Digital
              </span>
              <br />
              <span className="text-primary">Voting Platform</span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-slate-300 lg:mx-0 lg:text-left">
              Vote securely, transparently and conveniently from anywhere using
              our modern online voting system.
            </p>

            <HeroButtons />

            <div className="mt-8 grid grid-cols-2 gap-4 text-sm text-slate-300 lg:flex lg:flex-wrap lg:gap-6">
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-green-400"></span>
                End-to-End Encryption
              </div>

              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-cyan-400"></span>
                One Person One Vote
              </div>

              <div className="col-span-2 flex items-center gap-2 lg:col-span-1">
                <span className="h-2 w-2 rounded-full bg-blue-400"></span>
                Real-Time Results
              </div>
            </div>

            <HeroStats />
          </div>

          <div className="relative mt-8 lg:mt-0">
            <DashboardPreview />

            {/* Floating Card 1 */}

            <div className="absolute -left-22 top-24 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur lg:block">
              <p className="text-sm text-slate-400">Verified Voters</p>

              <h3 className="mt-1 text-2xl font-bold text-cyan-400">12,580</h3>
            </div>

            {/* Floating Card 2 */}

            <div className="absolute -right-16 bottom-20 hidden rounded-2xl border border-white/10 bg-slate-900/80 px-5 py-4 shadow-xl backdrop-blur lg:block">
              <p className="text-sm text-slate-400">Success Rate</p>

              <h3 className="mt-1 text-2xl font-bold text-green-400">99.8%</h3>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default HeroSection;
