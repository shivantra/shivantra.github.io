import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer pt-5 pb-5">
      <div className="container">
        <div className="row mb-5 pb-4">
          <div className="col-md-7 text-center">
            <h2 className="fs-5">Join our newsletter</h2>
            <p>Your weekly dose of tech insights and offers—join our newsletter today!</p>
          </div>
          <div className="col-md-5 d-flex justify-content-center align-items-center">
            <a
              href="https://shivantra.substack.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary fs-6 text-white"
              aria-label="Subscribe to newsletter (opens in new tab)"
            >
              Subscribe
            </a>
          </div>
        </div>
        <div className="row justify-content-between mb-5 g-xl-5">
          <div className="col-md-4 mb-5 mb-lg-0">
            <img
              className="logo dark mb-2"
              src="/assets/images/footer-logo.png"
              alt="Shivantra footer logo"
              height="40"
            />
            <p className="mb-4">
              <b>Shivantra Solutions Private Limited</b> is your trusted partner for world-class
              software development and IT consultancy. We leverage our expertise in custom software,
              mobile apps, web solutions, and strategic integrations to empower organizations and
              individuals. Our commitment to agility, innovation, and excellence ensures we deliver
              robust, scalable, and future-ready technology solutions that drive your success.
            </p>
          </div>
          <div className="col-md-7">
            <div className="row g-2">
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <h3 className="mb-3">Company</h3>
                <ul className="list-unstyled">
                  <li>
                    <Link href="/careers">
                      Careers <span className="badge ms-1">we&apos;re hiring</span>
                    </Link>
                  </li>
                  <li>
                    <Link href="/terms-conditions">Terms &amp; Conditions</Link>
                  </li>
                  <li>
                    <Link href="/refund-cancellations">Refund &amp; Cancellations</Link>
                  </li>
                  <li>
                    <Link href="/privacy-policy">Privacy Policy</Link>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0">
                <h3 className="mb-3">Follow Us</h3>
                <ul className="list-unstyled">
                  <li>
                    <a
                      href="https://www.linkedin.com/company/shivantra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="/assets/images/linkedin.svg"
                        alt="LinkedIn"
                        className="social-icon"
                      />
                      LinkedIN
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/shivantra/#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="/assets/images/instagram.svg"
                        alt="Instagram"
                        className="social-icon"
                      />
                      Instagram
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.threads.com/@shivantra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="/assets/images/threads.svg"
                        alt="Threads"
                        className="social-icon"
                      />
                      Threads
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://x.com/shivantra_"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img src="/assets/images/x.svg" alt="X" className="social-icon" />X
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/people/Shivantra/61558501586792/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="/assets/images/facebook.svg"
                        alt="Facebook"
                        className="social-icon"
                      />
                      Facebook
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://github.com/shivantra"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="social-link"
                    >
                      <img
                        src="/assets/images/github.svg"
                        alt="GitHub"
                        className="social-icon"
                      />
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-md-6 col-lg-4 mb-4 mb-lg-0 quick-contact">
                <h3 className="mb-3">Contact</h3>
                <p className="d-flex mb-3">
                  <i className="bi bi-geo-alt-fill me-3" aria-hidden="true"></i>
                  <span>
                    Block No : 706, <br />
                    Anandnagar Society, <br />
                    G.H Board, Bharuch, <br />
                    Gujarat, India 392001
                  </span>
                </p>
                <a className="d-flex mb-3" href="mailto:contact@shivantra.com">
                  <i className="bi bi-envelope-fill me-3" aria-hidden="true"></i>
                  <span>contact@shivantra.com</span>
                </a>
                <a className="d-flex mb-3" href="tel:+919023364417">
                  <i className="bi bi-telephone-fill me-3" aria-hidden="true"></i>
                  <span>+91-9023364417</span>
                </a>
                <a className="d-flex mb-3" href="https://shivantra.com">
                  <i className="bi bi-globe me-3" aria-hidden="true"></i>
                  <span>www.shivantra.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="row credits pt-3">
          <div className="col-xl-8 text-center text-xl-start mb-3 mb-xl-0">
            &copy; 2023 &ndash; {new Date().getFullYear()}{" "}
            <b>
              <span className="text-primary">Shivantra</span>
            </b>
            . All rights reserved.
          </div>
          <div className="col-xl-4 justify-content-start justify-content-xl-end quick-links d-flex flex-column flex-xl-row text-center text-xl-start gap-1"></div>
        </div>
      </div>
    </footer>
  );
}
