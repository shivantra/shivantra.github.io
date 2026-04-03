export default function Hero() {
  return (
    <section className="hero__v6 section" id="home">
      <div className="container">
        <div className="row">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <div className="row">
              <div className="col-lg-11">
                <span
                  className="hero-subtitle text-uppercase"
                  data-aos="fade-up"
                  data-aos-delay="0"
                >
                  Software Consultancy &amp; Development
                </span>
                <h1 className="hero-title mb-3" data-aos="fade-up" data-aos-delay="100">
                  Agile and innovative software solutions with excellence
                </h1>
                <p
                  className="hero-description mb-4 mb-lg-5"
                  data-aos="fade-up"
                  data-aos-delay="200"
                >
                  Empowering your business to thrive in the digital era. We engineer world-class
                  software solutions that simplify complexities and unlock your full potential.
                </p>
                <div className="cta d-flex gap-2 mb-4 mb-lg-5" data-aos="fade-up" data-aos-delay="300">
                  <a className="btn btn-white-outline" href="#services">
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
                  </a>
                </div>
                <div className="logos mb-4" data-aos="fade-up" data-aos-delay="400">
                  <span className="logos-title text-uppercase text-center text-md-start mb-4 d-block">
                    Trusted by major companies worldwide
                  </span>
                  <div className="logo-carousel-wrapper">
                    <div className="logo-carousel-track">
                      <a href="https://axelor.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/axelor-logo.svg" alt="Axelor ERP" />
                      </a>
                      <img src="/assets/images/palisa-studio-logo.svg" alt="Palisa Studio" />
                      <a
                        href="https://www.elementsimpact.com/en"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img src="/assets/images/elements-impact-logo.png" alt="Elements Impact" />
                      </a>
                      <a href="https://goovee.com/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/goovee-logo.svg" alt="Goovee" />
                      </a>
                      <img src="/assets/images/adconseils.png" alt="AdConseils" />
                      <a href="https://erp-axenr.fr/" target="_blank" rel="noopener noreferrer">
                        <img src="/assets/images/axenr-logo.png" alt="Axenr" />
                      </a>
                      <img src="/assets/images/fnx.png" alt="FNX" />
                      {/* Duplicated for seamless loop — hidden from screen readers */}
                      <span aria-hidden="true">
                        <a
                          href="https://axelor.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                        >
                          <img src="/assets/images/axelor-logo.svg" alt="" />
                        </a>
                        <img src="/assets/images/palisa-studio-logo.svg" alt="" />
                        <a
                          href="https://www.elementsimpact.com/en"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                        >
                          <img src="/assets/images/elements-impact-logo.png" alt="" />
                        </a>
                        <a
                          href="https://goovee.com/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                        >
                          <img src="/assets/images/goovee-logo.svg" alt="" />
                        </a>
                        <img src="/assets/images/adconseils.png" alt="" />
                        <a
                          href="https://erp-axenr.fr/"
                          target="_blank"
                          rel="noopener noreferrer"
                          tabIndex={-1}
                        >
                          <img src="/assets/images/axenr-logo.png" alt="" />
                        </a>
                        <img src="/assets/images/fnx.png" alt="" />
                      </span>
                    </div>
                  </div>
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
      </div>
    </section>
  );
}
