import "./Services.css";
import { services } from "./DataListing";
import { ServiceCard } from "./ServicesListing";
import { Section, Container, SectionHeader } from "./Typography";

export default function Services() {
  return (
    <Section className="services__v3" id="services">
      <Container>
        <SectionHeader
          tag="Our Services"
          title="Explore how our solutions can simplify complexities and unlock your full potential."
        />
        <div className="row g-4">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </Container>
    </Section>
  );
}
