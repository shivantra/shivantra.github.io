import "./HowItWorks.css";
import { steps } from "./DataListing";
import { Section, Container, SectionHeader, Description, CardTitle } from "./Typography";

function StepCard({
  number,
  title,
  description,
  delay,
  archLine,
  archDelay,
}: {
  number: number;
  title: string;
  description: string;
  delay: string;
  archLine: "normal" | "reverse" | null;
  archDelay: string | null;
}) {
  const cardClass = [
    "step-card text-center h-100 d-flex flex-column justify-content-start position-relative",
    archLine === "reverse" ? "reverse" : null,
    number === steps.length ? "last" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div className="col-md-6 col-lg-3" data-aos="fade-up" data-aos-delay={delay}>
      <div className={cardClass}>
        {archLine && (
          <div data-aos="fade-right" data-aos-delay={archDelay}>
            <img
              className={`arch-line${archLine === "reverse" ? " reverse" : ""}`}
              src={
                archLine === "reverse"
                  ? "/assets/images/arch-line-reverse.svg"
                  : "/assets/images/arch-line.svg"
              }
              alt=""
              role="presentation"
            />
          </div>
        )}
        <span className="step-number rounded-circle text-center fw-bold mb-5 mx-auto">
          {number}
        </span>
        <div>
          <CardTitle className="fs-5 mb-4">{title}</CardTitle>
          <Description>{description}</Description>
        </div>
      </div>
    </div>
  );
}

export default function HowItWorks() {
  return (
    <Section className="howitworks__v1" id="how-it-works">
      <Container>
        <SectionHeader tag="How it works" colClass="col-md-6 text-center mx-auto">
          <Description aos="fade-up" delay={200}>
            At Shivantra, we transform your vision into a robust digital solution through a proven,
            client-centric process. Our agile methodology ensures a swift, collaborative, and
            professional journey from concept to deployment.
          </Description>
        </SectionHeader>
        <div className="row g-md-5">
          {steps.map((step) => (
            <StepCard key={step.number} {...step} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
