import type { Metadata } from "next";
import "../legal.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Section, Container, SubHeading, Caption, Description } from "@/components/Typography";

export const metadata: Metadata = {
  title: "Privacy Policy | Shivantra - Software Consultancy & Development",
  description:
    "Shivantra Solutions Private Limited offers expert software consultancy, customized software development, web & mobile app development, ERP & CRM solutions, SaaS & MVP development.",
};

export default function PrivacyPolicy() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      <div className="site-wrap">
        <Navbar activePage="legal" />
        <main id="main-content">
          <Section className="terms">
            <Container>
              <h1 className="tag text-uppercase" data-aos="fade-up">
                Privacy Policy
              </h1>
              <br />
              <small>
                Last updated on: <strong className="text-primary">25th October 2024</strong>
              </small>
              <br />
              <small>
                Effective: <strong className="text-primary">25th October 2024</strong>
              </small>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Introduction</SubHeading>
              <Description className="justify-content">
                Our privacy page informs you of our policies regarding the collection, use, and
                disclosure of personal data when you use our services and the choices you have
                associated with that data. Shivantra Solutions Private Limited (&quot;us&quot;,
                &quot;we&quot;, or &quot;our&quot;) operates{" "}
                <a href="http://www.shivantra.com">www.shivantra.com</a> (the &quot;Service&quot;).
                This page outlines our policies regarding the collection, use, and disclosure of
                personal data when you use our Service and the choices you have regarding that data.
              </Description>
              <Description className="justify-content">
                We use your data to provide and improve our Service. By using the Service, you agree
                to the collection and use of information in accordance with this policy. Unless
                otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the
                same meanings as in our Terms and Conditions, accessible from{" "}
                <a href="http://www.shivantra.com">www.shivantra.com</a>.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Information Collection and Use</SubHeading>
              <Description className="justify-content">
                We collect various types of information for different purposes to provide and
                improve our services to you.
              </Description>

              <Caption className="fw-semibold" noAnimation>Cookie &amp; Usage Data</Caption>
              <Description className="justify-content">
                We may collect information about how the Service is accessed and used
                (&quot;Usage Data&quot;). This Usage Data may include details such as your
                computer&apos;s Internet Protocol address (IP address), browser type, browser
                version, the pages of our Service that you visit, the time and date of your visit,
                the time spent on those pages, unique device identifiers, and other diagnostic data.
              </Description>

              <Caption className="fw-semibold" noAnimation>Tracking &amp; Cookies Data</Caption>
              <Description className="justify-content">
                We use cookies and similar tracking technologies to monitor activity on our Service
                and store certain information. Cookies are small files containing data that may
                include an anonymous unique identifier. Cookies are sent to your browser from a
                website and stored on your device.
              </Description>

              <Caption className="fw-semibold" noAnimation>Types of Cookies:</Caption>
              <ul className="justify-content">
                <li>
                  <strong>Persistent Cookies:</strong> These remain on your device for a specified
                  period and are activated each time you visit the website that created the cookie.
                </li>
                <li>
                  <strong>Session Cookies:</strong> These are temporary and allow website operators
                  to link your actions during a browser session. They are deleted when you close
                  your browser.
                </li>
                <li>
                  <strong>Performance Cookies:</strong> These collect data for statistical purposes
                  on how visitors use a website. They do not contain personal information and are
                  used to enhance your user experience.
                </li>
                <li>
                  <strong>Advertising Cookies:</strong> Third-party vendors, including Google, use
                  cookies to serve ads based on your previous visits to our website or other
                  websites.
                </li>
              </ul>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Use of Data</SubHeading>
              <Description className="justify-content">
                Shivantra Solutions Private Limited uses the collected data for various purposes,
                including:
              </Description>
              <ul className="justify-content">
                <li>To provide and maintain the Service</li>
                <li>To improve the Service</li>
                <li>To monitor usage</li>
                <li>To address technical issues</li>
              </ul>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Transfer of Data</SubHeading>
              <Description className="justify-content">
                Your information, including Personal Data, may be transferred to — and maintained
                on — computers located outside of your state, province, country, or other
                governmental jurisdictions where data protection laws may differ from those in your
                jurisdiction.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Disclosure of Data</SubHeading>
              <Caption className="fw-semibold" noAnimation>Legal Requirements</Caption>
              <Description className="justify-content">
                Shivantra Solutions Private Limited may disclose your Personal Data in good faith
                belief that such action is necessary to:
              </Description>
              <ul className="justify-content">
                <li>Comply with a legal obligation</li>
                <li>Protect and defend the rights or property of Shivantra Solutions</li>
                <li>
                  Prevent or investigate possible wrongdoing in connection with our Services
                </li>
                <li>Protect the personal safety of users of the Services or the public</li>
                <li>Protect against legal liability</li>
              </ul>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Security of Data</SubHeading>
              <Description className="justify-content">
                The security of your data is important to us. However, please remember that no
                method of transmission over the Internet, or method of electronic storage, is 100%
                secure.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Analytics</SubHeading>
              <Description className="justify-content">
                We may use third-party Service Providers to monitor and analyze the use of our
                Services.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Links to Other Sites</SubHeading>
              <Description className="justify-content">
                Our Services may contain links to other websites that are not operated by us. If
                you click on a third-party link, you will be directed to that third party&apos;s
                site. We strongly recommend reviewing the Privacy Policy of every site you visit.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Children&apos;s Policy</SubHeading>
              <Description className="justify-content">
                Our Services do not address anyone under the age of 18 (&quot;Children&quot;). We
                do not knowingly collect personally identifiable information from anyone under the
                age of 18.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Changes to This Privacy Policy</SubHeading>
              <Description className="justify-content">
                We may update our Privacy Policy from time to time. We will notify you of any
                changes by posting the new Privacy Policy on this page.
              </Description>

              <SubHeading className="mt-5 fw-semibold" noAnimation>Contact Us</SubHeading>
              <Description className="justify-content">
                Questions about the policy should be directed to us at{" "}
                <a href="mailto:contact@shivantra.com">contact@shivantra.com</a>.
              </Description>
            </Container>
          </Section>
          <Footer />
        </main>
      </div>
    </>
  );
}
