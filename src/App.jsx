import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Leaderboard from "./components/Leaderboard";
import HowItWorks from "./components/HowItWorks";
import DownloadApp from "./components/DownloadApp";
import Stats from "./components/Stats";
import Testimonials from "./components/Testimonials";
import Brands from "./components/Brands";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Features />
      <Leaderboard />
      <HowItWorks />

      <DownloadApp />

      <Stats />
      <Testimonials />
      <Brands />

      <Footer />
    </>
  );
}

export default App;