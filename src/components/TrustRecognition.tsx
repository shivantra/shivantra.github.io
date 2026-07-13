import "./TrustRecognition.css";
import { Section, Container, SectionHeader, Description, SubHeading, Caption } from "./Typography";
import { basePath } from "@/lib/basePath";

export default function TrustRecognition() {
  return (
    <Section className="trust-recognition border-4 border-primary" id="trust">
      <Container>
        <div className="content p-5 rounded-4">
          <SectionHeader tag="Partners & Recognition">
            <Description aos="fade-up" delay={200}>
              Collaborating with leading organizations and recognized for our excellence in the
              industry.
            </Description>
          </SectionHeader>

          <div className="mb-5 p-2" data-aos="fade-up" data-aos-delay="0">
            <SubHeading className="fw-bold mb-4 text-center text-md-start">Our Partners</SubHeading>
            <div className="row align-items-center flex-column flex-md-row text-center text-md-start">
              <div className="col-md-2 col-6 mb-3 mb-md-0">
                <a href="https://axelor.com" target="_blank" rel="noreferrer noopener">
                  <img
                    src={`${basePath}/assets/images/axelor-logo.svg`}
                    alt="Axelor ERP"
                    className="img-fluid"
                    style={{ maxHeight: "40px" }}
                  />
                </a>
              </div>
              <div className="col-md-10 col-12">
                <Caption className="fw-bold mb-1">Axelor ERP</Caption>
                <Description className="small mb-0">
                  Open-source, modular business application platform that streamlines operations
                  with integrated enterprise software, project management, and business process
                  automation.
                </Description>
              </div>
            </div>
          </div>

          <div data-aos="fade-up" data-aos-delay="100">
            <SubHeading className="fw-bold mb-4 text-center text-md-start">Industry Recognition</SubHeading>
            <div className="row align-items-center flex-column flex-md-row text-center text-md-start">
              <div className="col-md-2 col-6 mb-3 mb-md-0">
                <a href="https://www.designrush.com/" target="_blank" rel="noreferrer noopener">
                  <img
                    src={`${basePath}/assets/images/designrush-recognition.png`}
                    alt="Top Web Development 2025 Recognition"
                    className="img-fluid"
                    style={{ maxHeight: "100px" }}
                  />
                </a>
              </div>
              <div className="col-md-10 col-12">
                <Caption className="fw-bold mb-1">Recognition by DesignRush</Caption>
                <Description className="small mb-0">
                  Featured by DesignRush, the premier B2B marketplace connecting businesses with
                  top-rated agencies across software, app development, design, and marketing.
                </Description>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
