import type { Metadata } from "next";
import "./careers.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button, Section, Container, Tag, SectionHeader, Heading, CardTitle, FeatureItem, Description } from "@/components/Typography";
import { basePath } from "@/lib/basePath";

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
          <Section className="careers" id="about">
            <Container>
              <div className="row">
                <div className="col-md-6 order-md-2">
                  <div className="row justify-content-end">
                    <div className="col-md-11 mb-4 mb-md-0">
                      <Tag marginBottom>Careers at Shivantra</Tag>
                      <Description aos="fade-up" delay={200}>
                        Be part of a team that thrives on innovation, collaboration, and
                        excellence. Together, we build solutions that empower businesses across
                        the globe.
                      </Description>
                      <Heading className="small fw-bold mt-4 mb-3">
                        Why join Shivantra?
                      </Heading>
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
                      src={`${basePath}/assets/images/careers-hero.png`}
                      alt="Careers shivantra"
                      data-aos="fade-up"
                      data-aos-delay="0"
                    />
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="stats__v3">
            <Container>
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
                        <CardTitle className="fs-3 fs-md-2 fw-bold text-white">
                          <span>
                            Empowering people.
                            <br />
                            Transforming possibilities.
                          </span>
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="openings" id="openings">
            <Container>
              <SectionHeader tag="Current openings" title="Discover roles where your talent thrives." />
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
            </Container>
          </Section>

          <Footer />
        </main>
      </div>
    </>
  );
}
