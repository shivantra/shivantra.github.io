import "./FAQ.css";
import { faqs } from "./DataListing";
import { FAQItem } from "./FAQListing";
import { Section, Container, SectionHeader, Description } from "./Typography";

export default function FAQ() {
  return (
    <Section className="faq__v2" id="faq">
      <Container>
        <SectionHeader
          tag="FAQ"
          title="Frequently Asked Questions"
          colClass="col-md-6 col-lg-7 mx-auto text-center"
          tight
        >
          <Description aos="fade-up" delay={100}>
            Everything You Need to Know.
          </Description>
        </SectionHeader>
        <div className="row">
          <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="accordion custom-accordion" id="accordionPanelsStayOpenExample">
              {faqs.map((faq) => (
                <FAQItem key={faq.id} {...faq} />
              ))}
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
}
