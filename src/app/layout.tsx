import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { basePath } from "@/lib/basePath";

export const metadata: Metadata = {
  title: "Shivantra - Software Consultancy & Development",
  description:
    "Shivantra Solutions Private Limited offers expert software consultancy, customized software development, web & mobile app development, ERP & CRM solutions, SaaS & MVP development.",
  keywords:
    "software consultancy, custom software development, web development, mobile development, ERP development, CRM development, SaaS development, MVP development, software integration, Shivantra Solutions",
  authors: [{ name: "Shivantra Solutions Private Limited", url: "https://github.com/shivantra" }],
  openGraph: {
    title: "Shivantra - Software Consultancy & Development",
    description:
      "Delivering customised software solutions including web, mobile, ERP, CRM, SaaS, and MVP development with over a decade of expertise.",
    url: "https://shivantra.com/",
    siteName: "Shivantra - Software Consultancy & Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://shivantra.com/assets/images/og.png",
        secureUrl: "https://shivantra.com/assets/images/og.png",
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Image of Shivantra",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@shivantra_",
    creator: "Shivantra Solutions Pvt Ltd",
    title: "Shivantra - Software Consultancy & Development",
    description:
      "Software Consultancy & Development including custom software, web, mobile, ERP, CRM, SaaS, and MVP solutions.",
    images: [
      {
        url: "https://shivantra.com/assets/images/og.png",
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Image of Shivantra",
      },
    ],
  },
  icons: {
    icon: `${basePath}/assets/images/favicon.ico`,
  },
  other: {
    category:
      "Technology, Software Development, JavaScript Development, Java Development, Custom Software Development, SaaS Development, Web Development, Mobile Development, MVP Development, ERP Development, CRM Development",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-17380738140"
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'AW-17380738140');
          `}
        </Script>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap"
          rel="stylesheet"
        />
<link href={`${basePath}/assets/vendors/bootstrap-icons/font/bootstrap-icons.min.css`} rel="stylesheet" />
        <link href={`${basePath}/assets/vendors/aos/aos.css`} rel="stylesheet" />
<Script
          src="https://www.google.com/recaptcha/api.js"
          strategy="lazyOnload"
        />
      </head>
      <body>
        {children}
        <div className="whatsapp-float-container" id="whatsapp-connect">
          <a
            href="https://wa.me/919023364417?text=Hello,%20I%20am%20interested%20in%20your%20software%20consultancy%20services.%20Can%20we%20discuss%20a%20project?"
            className="whatsapp-icon-link"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
          >
            <img
              src={`${basePath}/assets/images/whatsapp.svg`}
              alt="Chat on WhatsApp"
              className="whatsapp-icon"
            />
          </a>
        </div>
        <button id="back-to-top" aria-label="Back to top">
          <i className="bi bi-arrow-up-short" aria-hidden="true"></i>
        </button>
        <Script src={`${basePath}/assets/vendors/bootstrap/bootstrap.bundle.min.js`} strategy="afterInteractive" />
        <Script src={`${basePath}/assets/vendors/aos/aos.js`} strategy="afterInteractive" />
        <Script src={`${basePath}/assets/vendors/gsap/gsap.min.js`} strategy="afterInteractive" />
        <Script src={`${basePath}/assets/js/custom.js`} strategy="afterInteractive" />
        <Script src={`${basePath}/assets/js/form.js`} strategy="afterInteractive" />
      </body>
    </html>
  );
}
