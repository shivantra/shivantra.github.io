import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Stats from "@/components/Stats";
import Services from "@/components/Services";
import FAQ from "@/components/FAQ";
import TrustRecognition from "@/components/TrustRecognition";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <div className="site-wrap">
        <Navbar activePage="home" />
        <main id="main-content">
          <Hero />
          <About />
          <Features />
          <HowItWorks />
          <Stats />
          <Services />
          <FAQ />
          <TrustRecognition />
          <Contact />
          <Footer />
        </main>
      </div>
    </>
  );
}
