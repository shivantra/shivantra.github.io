import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FifthTitle, SixthTitle, Description } from "@/components/Typography";

export const metadata: Metadata = {
  title: "Refund and Cancellations | Shivantra - Software Consultancy & Development",
  description:
    "Shivantra Solutions Private Limited refund and cancellation policy — learn about our terms for cancellations and refund eligibility.",
};

export default function RefundCancellations() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="site-wrap">
        <Navbar activePage="legal" />
        <main id="main-content">
          <section className="terms section">
            <div className="container" data-aos="fade-up" data-aos-delay="200">
              <span className="tag text-uppercase" data-aos="fade-up">
                Refund and Cancellation Policy
              </span>
              <br />
              <small>
                Last updated on: <strong className="text-primary">25th October 2024</strong>
              </small>
              <br />
              <small>
                Effective: <strong className="text-primary">25th October 2024</strong>
              </small>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Introduction</FifthTitle>
              <Description className="justify-content">
                At Shivantra Solutions Private Limited (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;), we strive to provide the highest quality software consultancy
                and development services. However, we understand that there may be instances where
                you may need to cancel a service or request a refund. This policy outlines our
                terms regarding refunds and cancellations.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Cancellation Policy</FifthTitle>
              <SixthTitle className="fw-semibold" noAnimation>Service Cancellation</SixthTitle>
              <Description className="justify-content">
                You may cancel a service at any time prior to its commencement. To initiate a
                cancellation, please contact us via email at{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a>. If you cancel a
                service before work has commenced, you will not incur any charges.
              </Description>

              <SixthTitle className="fw-semibold" noAnimation>Post-Commencement Cancellation</SixthTitle>
              <Description className="justify-content">
                If you wish to cancel a service after work has started, please note that charges
                may apply based on the work completed up to the cancellation date. We will provide
                a detailed invoice outlining the services rendered and applicable fees.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Refund Policy</FifthTitle>
              <SixthTitle className="fw-semibold" noAnimation>Eligibility for Refunds</SixthTitle>
              <Description className="justify-content">
                Refunds may be granted under specific circumstances, including but not limited to:
              </Description>
              <ul className="justify-content">
                <li>Services not delivered as per the agreed specifications.</li>
                <li>Significant delays in project delivery without prior communication.</li>
              </ul>

              <SixthTitle className="fw-semibold" noAnimation>Requesting a Refund</SixthTitle>
              <Description className="justify-content">
                To request a refund, please submit a written request to{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a> within 14 days
                of the service completion date, clearly outlining the reason for your request.
              </Description>

              <SixthTitle className="fw-semibold" noAnimation>Refund Process</SixthTitle>
              <Description className="justify-content">
                Upon receiving your request, we will review it and respond within 10 business
                days. If approved, refunds will be processed using the original payment method
                within 14 business days.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Non-Refundable Services</FifthTitle>
              <Description className="justify-content">
                Certain services may be non-refundable, including:
              </Description>
              <ul className="justify-content">
                <li>
                  Customized software development that has already been completed and delivered.
                </li>
                <li>
                  Services that have been partially rendered unless otherwise agreed upon.
                </li>
              </ul>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Changes to the Policy</FifthTitle>
              <Description className="justify-content">
                We reserve the right to modify this Refund and Cancellation Policy at any time.
                Any changes will be effective immediately upon posting on our website. We encourage
                you to review this policy periodically.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Contact Us</FifthTitle>
              <Description className="justify-content">
                For any questions regarding this policy or to initiate a cancellation or refund
                request, please contact us at:
              </Description>
              <Description className="justify-content">
                <b>Email:</b>{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a>
                <br />
                <b>Phone:</b> +91-9023364417
              </Description>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
