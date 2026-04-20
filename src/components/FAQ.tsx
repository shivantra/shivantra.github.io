import "./FAQ.css";
import { SectionTitle, SectionTag, Description } from "./Typography";

const faqs = [
  {
    id: "One",
    question: "What services does your software company offer?",
    answer:
      "Shivantra Solutions offers a full suite of software consultancy and development services. We specialize in Custom Software Development, Web & Mobile Application Development, and strategic solutions like ERP & CRM Development, AI, and API Development. We also provide expert IT & Product Consultancy and IT Staffing to help you define a winning strategy and build the perfect team.",
    open: true,
  },
  {
    id: "Two",
    question: "How much does it cost to build?",
    answer:
      "The cost of building can vary widely depending on the complexity, features, and specific requirements of your project. We offer several pricing packages to accommodate different budgets and needs. After an initial consultation, we can provide a detailed quote based on your specific goals and objectives.",
    open: false,
  },
  {
    id: "Three",
    question: "Can you work with our existing technical specifications?",
    answer:
      "That's perfectly fine! We are highly flexible and experienced in collaborating with clients who have their own detailed specifications. We'll work closely with your team to review your requirements, provide expert consultation to ensure the plan is robust and feasible, and then execute the development process with precision. Our goal is to bring your vision to life exactly as you've defined it, leveraging our expertise to guarantee a successful outcome.",
    open: false,
  },
  {
    id: "Four",
    question: "What kind of projects do you work on?",
    answer:
      "We work with a wide range of software projects, from developing custom solutions from scratch to integrating with your existing software ecosystem. Our expertise spans various domains, including e-commerce and customer engagement portals, commissioning systems, annotation tools, and data manipulation systems. We're happy to help you implement core technologies for your upcoming projects and support the latest advancements in the technology world.",
    open: false,
  },
  {
    id: "Five",
    question: "Will you provide support or work with our existing systems?",
    answer:
      "Yes, our commitment to you extends beyond the initial development phase. We provide technical support to ensure your new application runs smoothly. Additionally, we are experts at working with existing software ecosystems. We can take an overview of your current systems to implement new integrations or make necessary changes to support the latest technological advancements.",
    open: false,
  },
  {
    id: "Six",
    question: "How do you charge, and what is the minimum budget requirement?",
    answer:
      "There is no minimum budget requirement to start a project with us. We offer two flexible pricing models based on the nature of your project: a fixed-price quotation for projects with a clearly defined scope, and an hourly rate for projects with evolving requirements.",
    open: false,
  },
  {
    id: "Seven",
    question: "What technologies do you work with, and what is your experience?",
    answer:
      "With over a decade of experience in the industry, we have developed a deep expertise across modern technology stacks. We specialize in the JavaScript ecosystem, including frameworks like React and React-Native, and server-side development with Node.js. We are also highly proficient in the Java ecosystem, utilizing Spring and developing robust RESTful APIs.",
    open: false,
  },
  {
    id: "Eight",
    question: "How are we involved in the development process?",
    answer:
      "We champion agile development, ensuring a collaborative and transparent process from start to finish. You are an integral part of the journey, able to monitor progress and provide feedback through regular calls and meetings. This approach also allows us to be highly flexible, so we can readily accommodate new requirements and scope changes in ongoing projects to guarantee the best possible outcome.",
    open: false,
  },
];

export default function FAQ() {
  return (
    <section className="section faq__v2" id="faq">
      <div className="container">
        <div className="row mb-4">
          <div className="col-md-6 col-lg-7 mx-auto text-center">
            <SectionTag marginBottom>FAQ</SectionTag>
            <SectionTitle>Frequently Asked Questions</SectionTitle>
            <Description aos="fade-up" delay={100}>
              Everything You Need to Know.
            </Description>
          </div>
        </div>
        <div className="row">
          <div className="col-md-8 mx-auto" data-aos="fade-up" data-aos-delay="200">
            <div className="faq-content">
              <div className="accordion custom-accordion" id="accordionPanelsStayOpenExample">
                {faqs.map((faq) => (
                  <div key={faq.id} className="accordion-item">
                    <h2 className="accordion-header">
                      <button
                        className={`accordion-button${faq.open ? "" : " collapsed"}`}
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target={`#panelsStayOpen-collapse${faq.id}`}
                        aria-expanded={faq.open ? "true" : "false"}
                        aria-controls={`panelsStayOpen-collapse${faq.id}`}
                      >
                        {faq.question}
                      </button>
                    </h2>
                    <div
                      className={`accordion-collapse collapse${faq.open ? " show" : ""}`}
                      id={`panelsStayOpen-collapse${faq.id}`}
                    >
                      <div className="accordion-body">{faq.answer}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
