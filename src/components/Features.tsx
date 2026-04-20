import { SectionTag, Description, CardTitle } from "./Typography";

export default function Features() {
  return (
    <section className="section features__v2" id="features">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="d-lg-flex p-5 rounded-4 content" data-aos="fade-in" data-aos-delay="0">
              <div className="row">
                <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
                  <div className="row">
                    <div className="col-lg-11">
                      <div className="h-100 flex-column justify-content-between d-flex">
                        <div>
                          <SectionTag marginBottom>Why Choose us?</SectionTag>
                          <Description className="mb-5">
                            Our guiding principles are founded on three key pillars:{" "}
                            <b>agility, innovation, and excellence</b>. We pride ourselves on our
                            ability to execute swiftly, leveraging our technical expertise and
                            efficient processes to deliver results in a timely manner. Our commitment
                            to creativity drives us to think outside the box, constantly seeking
                            innovative solutions to meet the evolving needs of our clients.
                          </Description>
                          <Description>
                            Above all, we uphold the highest standards of quality in our work,
                            ensuring that every project we undertake is executed with precision and
                            attention to detail. By embodying these principles, we strive to exceed
                            expectations and drive success for our clients in every endeavor.
                          </Description>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-7">
                  <div className="row justify-content-end">
                    <div className="col-lg-11">
                      <div className="row">
                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="0">
                          <div className="icon text-center mb-4">
                            <i className="bi bi-briefcase-fill fs-4"></i>
                          </div>
                          <CardTitle className="fs-6 fw-bold mb-3">Agile Expertise &amp; Rapid Response</CardTitle>
                          <Description>
                            We use agile methods, rapid responses, and proactive communication to
                            adapt quickly, work efficiently, and deliver on time
                          </Description>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="100">
                          <div className="icon text-center mb-4">
                            <i className="bi bi-buildings-fill fs-4"></i>
                          </div>
                          <CardTitle className="fs-6 fw-bold mb-3">World-Class Technical Proficiency</CardTitle>
                          <Description>
                            Our expert team combines deep technical mastery with innovation to tackle
                            complex challenges and deliver robust, future-proof digital products.
                          </Description>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="200">
                          <div className="icon text-center mb-4">
                            <i className="bi bi-speedometer fs-4"></i>
                          </div>
                          <CardTitle className="fs-6 fw-bold mb-3">Strategic Partnership with Speed &amp; Professionalism</CardTitle>
                          <Description>
                            We match your business pace with top-tier professionalism, serving as
                            your dedicated, efficient, and reliable partner from concept to
                            deployment and beyond.
                          </Description>
                        </div>
                        <div className="col-sm-6" data-aos="fade-up" data-aos-delay="300">
                          <div className="icon text-center mb-4">
                            <i className="bi bi-sliders fs-4"></i>
                          </div>
                          <CardTitle className="fs-6 fw-bold mb-3">Tailored Solutions for Tangible Impact</CardTitle>
                          <Description>
                            We craft bespoke software tailored to your workflows and goals,
                            delivering measurable improvements and a clear competitive edge.
                          </Description>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
