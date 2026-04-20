import { SectionTag, Description, CardTitle } from "./Typography";

export default function HowItWorks() {
  return (
    <section className="section howitworks__v1" id="how-it-works">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 text-center mx-auto">
            <SectionTag marginBottom>How it works</SectionTag>
            <Description aos="fade-up" delay={200}>
              At Shivantra, we transform your vision into a robust digital solution through a
              proven, client-centric process. Our agile methodology ensures a swift, collaborative,
              and professional journey from concept to deployment.
            </Description>
          </div>
        </div>
        <div className="row g-md-5">
          <div className="col-md-6 col-lg-3">
            <div
              className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div data-aos="fade-right" data-aos-delay="500">
                <img
                  className="arch-line"
                  src="/assets/images/arch-line.svg"
                  alt=""
                  role="presentation"
                />
              </div>
              <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">1</span>
              <div>
                <CardTitle className="fs-5 mb-4">Strategize &amp; Define</CardTitle>
                <Description>
                  We start with an in-depth consultation to understand your business and goals. Our
                  experts then craft a detailed roadmap, defining project scope, technology stack,
                  and a strategic plan to build a solution that meets your needs.
                </Description>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="600">
            <div className="step-card reverse text-center h-100 d-flex flex-column justify-content-start position-relative">
              <div data-aos="fade-right" data-aos-delay="1100">
                <img
                  className="arch-line reverse"
                  src="/assets/images/arch-line-reverse.svg"
                  alt=""
                  role="presentation"
                />
              </div>
              <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">2</span>
              <CardTitle className="fs-5 mb-4">Innovate &amp; Develop</CardTitle>
              <Description>
                Leveraging our agile approach, we begin development with a focus on speed and
                quality. We work collaboratively, providing regular updates and incorporating your
                feedback to ensure the final product is perfectly aligned with your vision.
              </Description>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1200">
            <div className="step-card text-center h-100 d-flex flex-column justify-content-start position-relative">
              <div data-aos="fade-right" data-aos-delay="1700">
                <img
                  className="arch-line"
                  src="/assets/images/arch-line.svg"
                  alt=""
                  role="presentation"
                />
              </div>
              <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">3</span>
              <CardTitle className="fs-5 mb-4">Test &amp; Deliver</CardTitle>
              <Description>
                Before launch, every solution undergoes rigorous quality assurance and testing to
                ensure it&apos;s robust, secure, and performs flawlessly. We handle the seamless
                deployment of your solution, getting it into your hands swiftly.
              </Description>
            </div>
          </div>
          <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay="1800">
            <div className="step-card last text-center h-100 d-flex flex-column justify-content-start position-relative">
              <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">4</span>
              <div>
                <CardTitle className="fs-5 mb-4">Support &amp; Evolve</CardTitle>
                <Description>
                  Our commitment extends beyond the launch. We provide ongoing support and
                  maintenance to ensure your software remains relevant and performs optimally,
                  helping your business adapt and grow.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
