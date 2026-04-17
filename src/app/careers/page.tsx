import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, SubTitle, SectionTitle, ForthTitle, ThirdTitle, FeatureItem, Description } from "@/components/Typography";

export const metadata: Metadata = {
  title: "Careers at Shivantra - Join Our Team",
  description:
    "Discover career opportunities at Shivantra Solutions. Join a passionate team building innovative software solutions that empower businesses worldwide.",
  keywords:
    "Shivantra careers, software jobs, IT jobs, full stack developer jobs, mobile app developer careers, UI UX designer jobs, software tester QA jobs, tech careers, software consultancy jobs, software development careers, SaaS careers, ERP CRM jobs, work at Shivantra, technology careers India, join Shivantra team",
  openGraph: {
    title: "Careers at Shivantra – Join Our Team of Innovators",
    description:
      "Explore exciting career opportunities at Shivantra Solutions. Join a team of innovators, developers, and creators building world-class software solutions that empower businesses worldwide.",
    url: "https://shivantra.com/careers",
    siteName: "Shivantra - Software Consultancy & Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://shivantra.com/assets/images/og.png",
        type: "image/png",
        alt: "Image of Shivantra",
      },
    ],
  },
};

export default function Careers() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="site-wrap">
        <Navbar activePage="careers" />
        <main id="main-content">
          <section className="careers section" id="about">
            <div className="container">
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="row justify-content-end">
                    <div className="col-md-11 mb-4 mb-md-0">
                      <SubTitle marginBottom>Careers at Shivantra</SubTitle>
                      <Description aos="fade-up" delay={200}>
                        Be part of a team that thrives on innovation, collaboration, and
                        excellence. Together, we build solutions that empower businesses across
                        the globe.
                      </Description>
                      <ForthTitle className="small fw-bold mt-4 mb-3">
                        Why join Shivantra?
                      </ForthTitle>
                      <ul
                        className="d-flex flex-column list-unstyled gap-3 features"
                        data-aos="fade-up"
                        data-aos-delay="400"
                      >
                        {[
                          "Work with cutting-edge technologies and global clients",
                          "Collaborative, transparent, and growth-oriented culture",
                          "Opportunities to innovate, learn, and upskill continuously",
                          "Flexible work environment with a focus on work-life balance",
                          "Competitive compensation and benefits",
                        ].map((item) => (
                          <FeatureItem key={item}>{item}</FeatureItem>
                        ))}
                      </ul>
                      <Description aos="fade-up" delay={100}>
                        Ready to shape the future with us? Submit your application below and
                        let&apos;s get started.
                      </Description>
                    </div>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="img-wrap position-relative">
                    <img
                      className="img-fluid rounded-4"
                      src="/assets/images/careers-hero.png"
                      alt="Careers shivantra"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="stats__v3 section">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <div
                    className="d-flex flex-wrap content rounded-4"
                    data-aos="fade-up"
                    data-aos-delay="0"
                  >
                    <div className="rounded-borders">
                      <div className="rounded-border-1"></div>
                      <div className="rounded-border-2"></div>
                      <div className="rounded-border-3"></div>
                    </div>
                    <div
                      className="col-12 mb-4 mb-md-0 text-center"
                      data-aos="fade-up"
                      data-aos-delay="100"
                    >
                      <div className="stat-item">
                        <ThirdTitle className="fs-3 fs-md-2 fw-bold text-white">
                          <span>
                            Empowering people.
                            <br />
                            Transforming possibilities.
                          </span>
                        </ThirdTitle>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="section openings" id="openings">
            <div className="container">
              <div className="row mb-5">
                <div className="col-md-8 mx-auto text-center">
                  <SubTitle marginBottom>Current openings</SubTitle>
                  <SectionTitle>Discover roles where your talent thrives.</SectionTitle>
                </div>
              </div>
              <div className="row g-4">
                <div className="col text-center" data-aos="fade-up" data-aos-delay="0">
                  <Button
                    className="btn-primary py-2"
                    href="https://www.notion.so/shivantra/Careers-24dd744ec4ad803bac5ec34906ae0df3"
                    target="_blank"
                    rel="noopener noreferrer"
                    referrerPolicy="no-referrer"
                    ariaLabel="Apply Now (opens in new tab)"
                  >
                    Apply Now
                  </Button>
                </div>
              </div>
            </div>
          </section>

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
