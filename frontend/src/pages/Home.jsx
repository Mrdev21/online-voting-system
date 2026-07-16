import HeroSection from "../components/home/HeroSection";
import LiveElections from "../components/home/LiveElections";
import FeaturesSection from "../components/home/FeaturesSection";
import HowItWorks from "../components/home/HowItWorks";
import StatisticsSection from "../components/home/StatisticsSection";
import Footer from "../components/home/Footer";

function Home() {
  return (
    <>
      <HeroSection />
      <LiveElections />
      <FeaturesSection />
      <HowItWorks />
      <StatisticsSection />
      <Footer />
    </>
  );
}

export default Home;