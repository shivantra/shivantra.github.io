import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FifthTitle, Description } from "@/components/Typography";

export const metadata: Metadata = {
  title: "Terms and Conditions | Shivantra - Software Consultancy & Development",
  description:
    "Shivantra Solutions Private Limited terms and conditions — read our terms of service before using our software consultancy and development services.",
};

export default function TermsConditions() {
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
              <h1 className="tag text-uppercase" data-aos="fade-up">
                Terms and Conditions
              </h1>
              <br />
              <small>
                Last updated on: <strong className="text-primary">25th October 2024</strong>
              </small>
              <br />
              <small>
                Effective: <strong className="text-primary">25th October 2024</strong>
              </small>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Overview</FifthTitle>
              <Description className="justify-content">
                Shivantra Solutions Private Limited (&quot;we&quot;, &quot;us&quot;,
                &quot;our&quot;) is a software consultancy and development organization dedicated
                to delivering customized software solutions and integrations of existing systems.
                By accessing our website and/or using our services, you (&quot;you&quot;,
                &quot;your&quot;) agree to comply with and be bound by the following terms and
                conditions (&quot;Terms of Service&quot;, &quot;Terms&quot;). Please read these
                Terms carefully. If you do not agree, you may not access or use our website or
                services.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 1 - Online Services Terms</FifthTitle>
              <Description className="justify-content">
                By using our services, you represent that you are at least the age of majority in
                your jurisdiction and have the legal capacity to enter into this agreement. You may
                not use our services for any illegal or unauthorized purpose and must comply with
                all applicable laws and regulations.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 2 - General Conditions</FifthTitle>
              <Description className="justify-content">
                We reserve the right to refuse service to anyone for any reason at any time. You
                understand that your data may be transferred unencrypted and may involve
                transmissions over various networks. You agree not to reproduce, duplicate, copy,
                sell, resell, or exploit any portion of the services without our express written
                permission.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 3 - User Personal Information</FifthTitle>
              <Description className="justify-content">
                We take all reasonable measures to protect your personal information from
                unauthorized access, alteration, or destruction; maintain data accuracy; and
                ensure appropriate use. We follow generally accepted industry standards to protect
                the personal information submitted to us, both during transmission and once we
                receive it. However, no method of transmission or electronic storage is 100%
                secure, and we cannot guarantee its absolute security.
              </Description>
              <Description className="justify-content">
                Shivantra Solutions does not target its offerings toward, and does not knowingly
                collect any personal information from, users under 13 years of age. In the event
                of a business transition, such as a merger, acquisition, or sale of all or a
                portion of our assets, your personal information may be among the assets
                transferred. You will be notified via email of any such change in ownership or
                control of your personal information.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>
                Section 4 - Accuracy, Completeness, and Timeliness of Information
              </FifthTitle>
              <Description className="justify-content">
                While we strive to provide accurate and timely information, we make no guarantees
                about the accuracy, completeness, or timeliness of any information on our website
                or services. Any reliance on this information is at your own risk.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 5 - Modifications to Services and Prices</FifthTitle>
              <Description className="justify-content">
                Prices for our services are subject to change without notice. We reserve the right
                to modify or discontinue any service at any time without notice. We are not liable
                for any modification or discontinuance of the services.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 6 - Warranties and Disclaimers</FifthTitle>
              <Description className="justify-content">
                We provide our services using a commercially reasonable level of skill and care.
                However, we provide the services on an &quot;as is&quot; basis and make no
                warranties, express or implied. We hereby disclaim all other warranties, including
                but not limited to implied warranties of merchantability, fitness for a particular
                purpose, and non-infringement of intellectual property rights. In no event shall
                Shivantra Solutions be liable for any damages arising from the use or inability to
                use our software and services, including but not limited to loss of data or
                profits, or business interruption.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 7 - Services Offered</FifthTitle>
              <Description className="justify-content">Our services include, but are not limited to:</Description>
              <ul className="justify-content text-dark">
                <li>Customized Software Development</li>
                <li>SaaS Development</li>
                <li>Web Development</li>
                <li>Mobile Development</li>
                <li>Monitoring System Development</li>
                <li>Dashboard Development</li>
                <li>API Development</li>
                <li>Product Prototyping</li>
                <li>Extension Development</li>
                <li>ERP Consultations and Development</li>
                <li>CRM Consultations and Development</li>
                <li>Product Consultations</li>
                <li>Corporate Training</li>
              </ul>
              <Description className="justify-content">
                We strive for excellence and innovation in all our projects, ensuring that we meet
                and exceed your expectations.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 8 - Billing and Account Information</FifthTitle>
              <Description className="justify-content">
                You agree to provide accurate billing information and to promptly update your
                account details to ensure we can process your orders effectively. We reserve the
                right to refuse any order or limit quantities for any reason.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 9 - Third-Party Tools and Links</FifthTitle>
              <Description className="justify-content">
                We may provide access to third-party tools that we do not monitor or control. Your
                use of these tools is at your own risk. We are not responsible for any issues
                arising from your use of third-party tools or websites.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 10 - User Comments and Feedback</FifthTitle>
              <Description className="justify-content">
                If you submit comments, suggestions, or other materials, you grant us the right to
                use them without any obligation to maintain confidentiality, provide compensation,
                or respond. You are responsible for the accuracy of your comments.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 11 - Errors and Omissions</FifthTitle>
              <Description className="justify-content">
                Occasionally, information on our site may contain typographical errors or
                inaccuracies. We reserve the right to correct these errors at any time and do not
                have an obligation to update information on our site.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 12 - Prohibited Uses</FifthTitle>
              <Description className="justify-content">
                You are prohibited from using our services to engage in unlawful acts, violate any
                laws, or infringe upon the rights of others. We reserve the right to terminate
                your access for any violations.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 13 - Indemnification</FifthTitle>
              <Description className="justify-content">
                You agree to indemnify and hold harmless Shivantra Solutions Private Limited and
                its affiliates from any claims arising from your violation of these Terms.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 14 - Severability</FifthTitle>
              <Description className="justify-content">
                If any provision of these Terms is deemed unlawful or unenforceable, the remaining
                provisions shall remain in effect.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 15 - Termination</FifthTitle>
              <Description className="justify-content">
                These Terms are effective until terminated by either party. We may terminate these
                Terms if you fail to comply with any provision.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 16 - Entire Agreement</FifthTitle>
              <Description className="justify-content">
                These Terms constitute the entire agreement between you and us regarding your use
                of our services, superseding any prior agreements.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 17 - Governing Law</FifthTitle>
              <Description className="justify-content">
                These Terms are governed by the laws of India. Any disputes shall be resolved in
                the courts of Bharuch, Gujarat, India.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 18 - Changes to Terms of Service</FifthTitle>
              <Description className="justify-content">
                We may update these Terms at any time. If we make any material changes, we will
                notify you by email or via notice on our website. Your continued use of our
                services following the posting of changes constitutes acceptance of those changes.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 19 - Contact Information</FifthTitle>
              <Description className="justify-content">
                Questions about these Terms should be directed to us at{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a>.
              </Description>

              <FifthTitle className="mt-5 fw-semibold" noAnimation>Section 20 - Company Information</FifthTitle>
              <Description className="justify-content">
                <b>Company Name:</b> Shivantra Solutions Private Limited
                <br />
                <b>Principal Place of Business:</b> Block No. 706, Anandnagar, Bharuch, Gujarat,
                India, 392001
                <br />
                <b>Contact Email:</b>{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a>
                <br />
                <b>Contact Number:</b> +91-9023364417
              </Description>
            </div>
          </section>
          <Footer />
        </main>
      </div>
    </>
  );
}
