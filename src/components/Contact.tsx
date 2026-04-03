"use client";

import { useState } from "react";

const GOOGLE_FORM_URL =
  "https://docs.google.com/forms/d/e/1FAIpQLSeUsJRCZVyWolcbIz4NLB4nsW_M88eVSfYzxt5T3HrI5Rz5AA/formResponse";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [notification, setNotification] = useState<{
    msg: string;
    type: "success" | "error";
  } | null>(null);

  const showNotification = (msg: string, type: "success" | "error") => {
    setNotification({ msg, type });
    setTimeout(() => setNotification(null), 3000);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { name, email, phone, subject, message } = form;

    if (!name || !email) {
      showNotification("Name and email are required", "error");
      return;
    }
    if (!EMAIL_REGEX.test(email)) {
      showNotification("Enter a valid email", "error");
      return;
    }

    const params = new URLSearchParams({
      "entry.2131742683": name,
      "entry.988251478": email,
      "entry.1922968647": phone,
      "entry.977598766": subject,
      "entry.1464684411": message,
    });

    try {
      await fetch(`${GOOGLE_FORM_URL}?${params.toString()}`, {
        method: "POST",
        mode: "no-cors",
      });
      showNotification("Your response is submitted. Thank You", "success");
      setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      setSubmitDisabled(true);
      // Reset reCAPTCHA if available
      if (typeof window !== "undefined" && (window as unknown as { grecaptcha?: { reset: () => void } }).grecaptcha) {
        (window as unknown as { grecaptcha: { reset: () => void } }).grecaptcha.reset();
      }
    } catch {
      showNotification("Error submitting response. Try again", "error");
    }
  };

  // Called by reCAPTCHA callback
  if (typeof window !== "undefined") {
    (window as unknown as { enableSubmitBtn: () => void }).enableSubmitBtn = () => setSubmitDisabled(false);
  }

  return (
    <section className="section contact__v2" id="contact">
      <div className="container">
        <div className="row mb-5">
          <div className="col-md-6 col-lg-7 mx-auto text-center">
            <span
              className="subtitle text-uppercase mb-3"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              Contact Us
            </span>
            <p data-aos="fade-up" data-aos-delay="100">
              Let&apos;s make something great together!
            </p>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="d-flex gap-5 flex-column">
              <div className="d-flex align-items-start gap-3" data-aos="fade-up" data-aos-delay="0">
                <div className="icon d-block">
                  <i className="bi bi-telephone" aria-hidden="true"></i>
                </div>
                <span>
                  <span className="d-block">Phone</span>
                  <strong>+91-9023364417</strong>
                </span>
              </div>
              <div
                className="d-flex align-items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <div className="icon d-block">
                  <i className="bi bi-send" aria-hidden="true"></i>
                </div>
                <span>
                  <span className="d-block">Email</span>
                  <strong>contact@shivantra.com</strong>
                </span>
              </div>
              <div
                className="d-flex align-items-start gap-3"
                data-aos="fade-up"
                data-aos-delay="200"
              >
                <div className="icon d-block">
                  <i className="bi bi-geo-alt" aria-hidden="true"></i>
                </div>
                <span>
                  <span className="d-block">Address</span>
                  <address className="fw-bold">
                    Block No : 706, <br />
                    Anandnagar Society,
                    <br />
                    G.H Board, Bharuch,
                    <br />
                    Gujarat, India 392001
                  </address>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-wrapper" data-aos="fade-up" data-aos-delay="300">
              <form id="contactForm" onSubmit={handleSubmit}>
                <div className="row gap-3 mb-3">
                  <div className="col-md-12">
                    <label className="mb-2" htmlFor="name">
                      Name
                    </label>
                    <input
                      className="form-control"
                      id="name"
                      type="text"
                      name="name"
                      required
                      aria-required="true"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="mb-2" htmlFor="email">
                      Email
                    </label>
                    <input
                      className="form-control"
                      id="email"
                      type="email"
                      name="email"
                      required
                      aria-required="true"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="col-md-12">
                    <label className="mb-2" htmlFor="phone">
                      Phone
                    </label>
                    <input
                      className="form-control"
                      id="phone"
                      type="text"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row gap-3 mb-3">
                  <div className="col-md-12">
                    <label className="mb-2" htmlFor="subject">
                      Subject
                    </label>
                    <input
                      className="form-control"
                      id="subject"
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                <div className="row gap-3 gap-md-0 mb-3">
                  <div className="col-md-12">
                    <label className="mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      className="form-control"
                      id="message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                    ></textarea>
                  </div>
                </div>
                <div
                  className="g-recaptcha mb-2"
                  data-sitekey="6Lc406MrAAAAAO9xqeDSLJzcWFUx6rJLhJi7_Vb0"
                  data-callback="enableSubmitBtn"
                ></div>
                <button
                  className="btn btn-primary fw-semibold"
                  id="submitBtn"
                  type="submit"
                  disabled={submitDisabled}
                >
                  Send Message
                </button>
              </form>
              {notification && (
                <div
                  className={`mt-3 alert alert-${notification.type === "success" ? "success" : "danger"}`}
                >
                  {notification.msg}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
