export default function TrustRecognition() {
  return (
    <section className="section trust-recognition border-4 border-primary" id="trust">
      <div className="container">
        <div className="content p-5 rounded-4">
          <div className="row mb-5">
            <div className="col-md-8 mx-auto text-center">
              <span
                className="subtitle text-uppercase mb-3"
                data-aos="fade-up"
                data-aos-delay="0"
              >
                Partners &amp; Recognition
              </span>
              <p data-aos="fade-up" data-aos-delay="200">
                Collaborating with leading organizations and recognized for our excellence in the
                industry.
              </p>
            </div>
          </div>

          <div className="mb-5 p-2" data-aos="fade-up" data-aos-delay="0">
            <h5 className="fw-bold mb-4 text-center text-md-start">Our Partners</h5>
            <div className="row align-items-center flex-column flex-md-row text-center text-md-start">
              <div className="col-md-2 col-6 mb-3 mb-md-0">
                <a href="https://axelor.com" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/images/axelor-logo.svg"
                    alt="Axelor ERP"
                    className="img-fluid"
                    style={{ maxHeight: "40px" }}
                  />
                </a>
              </div>
              <div className="col-md-10 col-12">
                <h6 className="fw-bold mb-1">Axelor ERP</h6>
                <p className="small mb-0">
                  Open-source, modular business application platform that streamlines operations
                  with integrated enterprise software, project management, and business process
                  automation.
                </p>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <h5 className="fw-bold mb-4 text-center text-md-start">Industry Recognition</h5>
            <div className="row align-items-center flex-column flex-md-row text-center text-md-start">
              <div className="col-md-2 col-6 mb-3 mb-md-0">
                <a href="https://www.designrush.com/" target="_blank" rel="noreferrer noopener">
                  <img
                    src="/assets/images/designrush-recognition.png"
                    alt="Top Web Development 2025 Recognition"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </a>
              </div>
              <div className="col-md-10 col-12">
                <h6 className="fw-bold mb-1">Recognition by DesignRush</h6>
                <p className="small mb-0">
                  Featured by DesignRush, the premier B2B marketplace connecting businesses with
                  top-rated agencies across software, app development, design, and marketing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
