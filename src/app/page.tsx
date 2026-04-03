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
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
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
      <div className="whatsapp-float-container" id="whatsapp-connect">
        <a
          href="https://wa.me/919023364417?text=Hello,%20I%20am%20interested%20in%20your%20software%20consultancy%20services.%20Can%20we%20discuss%20a%20project?"
          className="whatsapp-icon-link"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
        >
          <img
            src="/assets/images/whatsapp.svg"
            alt="Chat on WhatsApp"
            className="whatsapp-icon"
          />
        </a>
      </div>
      <button id="back-to-top" aria-label="Back to top">
        <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
      </button>
    </>
  );
}
