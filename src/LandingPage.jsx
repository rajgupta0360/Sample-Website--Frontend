import Projects from "./components/Projects";
import HappyClients from "./components/HappyClients";
import Newsletter from "./components/Newsletter";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import { WhyChooseUs } from "./components/WhyChooseUs";
import AboutUs from "./components/AboutUs";
import Features from "./components/Features";

function LandingPage() {
  return (
    <div>
      <Navbar />
      <Hero/>
      <WhyChooseUs />
      <AboutUs />
      <Projects />
      <HappyClients />
      <Features />
      <Newsletter />
      <Footer/>
    </div>
  );
}

export default LandingPage;
