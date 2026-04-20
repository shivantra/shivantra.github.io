import "./Hero.css";
import Marquee from "react-fast-marquee";
import { Button, Section, Container, Tag, PageTitle, Description } from "./Typography";

export default function Hero() {
  return (
    <Section className="hero__v6" id="home">
      <Container>
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-lg-11">
                <Tag hero>Software Consultancy &amp; Development</Tag>
                <PageTitle>Agile and innovative software solutions with excellence</PageTitle>
                <Description hero aos="fade-up" delay={200}>Empowering your business to thrive in the digital era. We engineer world-class
                  software solutions that simplify complexities and unlock your full potential.</Description>
                <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300">
                  <Button href="#services" className="btn-white-outline">
                    Learn More
                    <svg
                      className="lucide lucide-arrow-up-right"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M7 7h10v10"></path>
                      <path d="M7 17 17 7"></path>
                    </svg>
                  </Button>
                </div>
                <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400">
                  <span className="logos-title text-uppercase text-center text-md-start mb-4 d-block">
                    Trusted by major companies worldwide
                  </span>
                  <Marquee speed={40} gradient={false} pauseOnHover className="logo-carousel-wrapper">
                    <a href="https://axelor.com/" target="_blank" rel="noopener noreferrer" className="logo-carousel-item">
                      <img src="/assets/images/axelor-logo.svg" alt="Axelor ERP" />
                    </a>
                    <span className="logo-carousel-item">
                      <img src="/assets/images/palisa-studio-logo.svg" alt="Palisa Studio" />
                    </span>
                    <a href="https://www.elementsimpact.com/en" target="_blank" rel="noopener noreferrer" className="logo-carousel-item">
                      <img src="/assets/images/elements-impact-logo.png" alt="Elements Impact" />
                    </a>
                    <a href="https://goovee.com/" target="_blank" rel="noopener noreferrer" className="logo-carousel-item">
                      <img src="/assets/images/goovee-logo.svg" alt="Goovee" />
                    </a>
                    <span className="logo-carousel-item">
                      <img src="/assets/images/adconseils.png" alt="AdConseils" />
                    </span>
                    <a href="https://erp-axenr.fr/" target="_blank" rel="noopener noreferrer" className="logo-carousel-item">
                      <img src="/assets/images/axenr-logo.png" alt="Axenr" />
                    </a>
                    <span className="logo-carousel-item">
                      <img src="/assets/images/fnx.png" alt="FNX" />
                    </span>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6">
            <div className="hero-img">
              <img
                className="img-main img-fluid rounded-4"
                src="/assets/images/hero.svg"
                alt="Hero Image"
                data-aos="fade-in"
                data-aos-delay="500"
              />
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
