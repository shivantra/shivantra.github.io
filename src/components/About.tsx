import "./About.css";
import { Section, Container, Description, FeatureItem, Heading, Tag, CardTitle } from "./Typography";
import { basePath } from "@/lib/basePath";

export default function About() {
  return (
    <Section className="about__v4" id="about">
      <Container>
        <div className="row">
          <div className="col-md-6 order-md-2">
            <div className="row justify-content-end">
              <div className="col-md-11 mb-4 mb-md-0">
                <Tag marginBottom>About us</Tag>
                <div data-aos="fade-up" data-aos-delay="200">
                  <Description><b>Shivantra Solutions Private Limited</b> is a software consultancy and
                    development organisation, delivering customised software development and
                    integrations of existing systems. Our passion for technology drives us to
                    continuously learn and grow, staying ahead of the curve in an ever-changing
                    digital landscape. With over a decade of experience, we know the technique when
                    it comes to building things.</Description>
                  <Description>Whether you&apos;re a small startup or a large corporation, we have the
                    expertise and resources to deliver results. From simple websites to complex
                    applications, we have the skills and experience to bring your ideas to life.</Description>
                </div>
                <Heading className="small fw-bold mt-4 mb-3">Key Values and Vision</Heading>
                <ul
                  className="d-flex flex-row flex-wrap list-unstyled gap-3 features"
                  data-aos="fade-up"
                  data-aos-delay="400"
                >
                  {["Agility", "Excellence", "Innovation", "Quality", "Speed", "Transparency"].map(
                    (value) => (
                      <FeatureItem key={value}>{value}</FeatureItem>
                    )
                  )}
                </ul>
                <Description hero aos="fade-up" delay={100}>
                  An ecosystem that eases human efforts, saving time and energy with the help of
                  technologies, allowing them to focus on what truly matters and unlock their full
                  potential.
                </Description>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="img-wrap position-relative">
              <img
                className="img-fluid rounded-4"
                src={`${basePath}/assets/images/about-hero.png`}
                alt="About shivantra"
                data-aos="fade-up"
                data-aos-delay="0"
              />
              <div
                className="mission-statement p-4 rounded-4 d-flex gap-4"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="mission-icon text-center rounded-circle">
                  <i className="bi bi-bullseye fs-4" aria-hidden="true"></i>
                </div>
                <div>
                  <CardTitle className="text-uppercase fw-bold">Mission Statement</CardTitle>
                  <Description className="fs-5 mb-0">
                    Offering world class technology solutions for complex business requirements and
                    challenges, empowering organizations &amp; individuals across all industries to
                    stay ahead with the digital era.
                  </Description>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
