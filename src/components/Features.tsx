import "./Features.css";
import { features } from "./DataListing";
import { FeatureCard } from "./FeaturesListing";
import { Section, Container, Tag, Description } from "./Typography";

export default function Features() {
  return (
    <Section className="features__v2" id="features">
      <Container>
        <div className="d-lg-flex p-5 rounded-4 content" data-aos="fade-in" data-aos-delay="0">
          <div className="row">
            <div className="col-lg-5 mb-5 mb-lg-0" data-aos="fade-up" data-aos-delay="0">
              <div className="col-lg-11">
                <Tag marginBottom>Why Choose us?</Tag>
                <Description className="mb-5">
                  Our guiding principles are founded on three key pillars:{" "}
                  <b>agility, innovation, and excellence</b>. We pride ourselves on our ability to
                  execute swiftly, leveraging our technical expertise and efficient processes to
                  deliver results in a timely manner. Our commitment to creativity drives us to think
                  outside the box, constantly seeking innovative solutions to meet the evolving needs
                  of our clients.
                </Description>
                <Description>
                  Above all, we uphold the highest standards of quality in our work, ensuring that
                  every project we undertake is executed with precision and attention to detail. By
                  embodying these principles, we strive to exceed expectations and drive success for
                  our clients in every endeavor.
                </Description>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="col-lg-11 ms-auto">
                <div className="row">
                  {features.map((feature) => (
                    <FeatureCard key={feature.title} {...feature} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
