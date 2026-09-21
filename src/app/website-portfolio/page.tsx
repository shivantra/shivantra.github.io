import type { Metadata } from "next";
import "./page.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  Button,
  Section,
  Container,
  Tag,
  PageTitle,
  SectionTitle,
  Description,
} from "@/components/Typography";
import { basePath, siteUrl } from "@/lib/basePath";

const pageUrl = `${siteUrl}/website-portfolio`;
const homeUtmUrl = `${siteUrl}/?utm_source=shivantra&utm_medium=referral&utm_campaign=website_portfolio`;

export const metadata: Metadata = {
  title: "Website Portfolio | Shivantra",
  description:
    "Explore live websites Shivantra has designed and developed for clients across India, France and Canada — from business and corporate sites to landing pages.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "Website Portfolio | Shivantra",
    description: "Explore live websites Shivantra has designed and developed for clients across India, France and Canada.",
    url: pageUrl,
    siteName: "Shivantra - Software Consultancy & Development",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: `${siteUrl}/assets/images/og.png`,
        secureUrl: `${siteUrl}/assets/images/og.png`,
        type: "image/png",
        width: 1920,
        height: 1080,
        alt: "Image of Shivantra",
      },
    ],
  },
};

type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  description: string;
  countryCode: "IN" | "CA" | "FR";
  countryName: string;
};

const projects: Project[] = [
  { slug: "sams-grill", name: "Sams Grill", url: "https://greenthera.shivantra.com/samsgrill.ca", domain: "samsgrill.ca", description: "A fresh, homemade burger restaurant site built around a bold menu presentation and an easy online ordering path.", countryCode: "CA", countryName: "Canada" },
  { slug: "les-bienheureux", name: "Les Bienheureux", url: "https://greenthera.shivantra.com/lesbienheureux.com", domain: "lesbienheureux.com", description: "A multilingual spirits brand site with an age-verification gate and a refined, premium product presentation.", countryCode: "FR", countryName: "France" },
  { slug: "solaris-360", name: "Solaris 360", url: "https://greenthera.shivantra.com/solaris360.com/", domain: "solaris360.com", description: "A solar energy company site showcasing rooftop installations, live performance stats and consultation booking.", countryCode: "IN", countryName: "India" },
  { slug: "dr-prashant-kariya", name: "Dr Prashant Kariya", url: "https://drprashantkariya.com/", domain: "drprashantkariya.com", description: "A pediatric care practice site presenting the doctor's credentials, outcomes and an easy appointment path.", countryCode: "IN", countryName: "India" },
  { slug: "best-career-counselling", name: "Best Career Counselling", url: "https://bestcareercounselling.com/", domain: "bestcareercounselling.com", description: "A career counselling service helping students and parents choose the right academic stream with confidence.", countryCode: "IN", countryName: "India" },
  { slug: "maa-yashoda", name: "Maa Yashoda", url: "https://greenthera.shivantra.com/maayashoda.com/", domain: "maayashoda.com", description: "A maternal and child care centre site guiding families through their care journey with clarity and trust.", countryCode: "IN", countryName: "India" },
  { slug: "blanco", name: "Blanco", url: "https://greenthera.shivantra.com/blanco.com/", domain: "blanco.com", description: "A dental clinic website built around appointment booking and a calm, reassuring patient experience.", countryCode: "IN", countryName: "India" },
  { slug: "trboalgo", name: "TrboAlgo", url: "https://greenthera.shivantra.com/trboalgo.com", domain: "trboalgo.com", description: "An algorithmic trading platform site presenting live market data through a clean, focused interface.", countryCode: "CA", countryName: "Canada" },
  { slug: "domaine-morisseau", name: "Domaine Morisseau", url: "https://greenthera.shivantra.com/domainemorisseau.com/", domain: "domainemorisseau.com", description: "An artisan winery site showcasing the estate's wines with an elegant, story-led presentation.", countryCode: "FR", countryName: "France" },
  { slug: "frenchkiss-suncare", name: "Frenchkiss Suncare", url: "https://greenthera.shivantra.com/frenchkiss-suncare.com/", domain: "frenchkiss-suncare.com", description: "A suncare brand site built around clean product storytelling and a smooth online shopping experience.", countryCode: "FR", countryName: "France" },
  { slug: "ashva-finserv", name: "Ashva Finserv", url: "https://ashvafinserv.com/", domain: "ashvafinserv.com", description: "A financial planning firm site guiding families toward long-term financial confidence and clarity.", countryCode: "IN", countryName: "India" },
  { slug: "excreatio", name: "Excreatio", url: "https://greenthera.shivantra.com/excreatio.com/", domain: "excreatio.com", description: "A sustainability-focused company site presenting nature-driven solutions with a clean, editorial design.", countryCode: "FR", countryName: "France" },
  { slug: "winke", name: "Winke", url: "https://greenthera.shivantra.com/winke.fr/", domain: "winke.fr", description: "A marketplace platform connecting winegrowers with verified service providers across France.", countryCode: "FR", countryName: "France" },
  { slug: "heart-first", name: "Heart First", url: "https://greenthera.shivantra.com/heartfirstsurat.com/", domain: "heartfirstsurat.com", description: "An interventional cardiologist's practice site presenting credentials, outcomes and patient resources.", countryCode: "IN", countryName: "India" },
  { slug: "hermit-trust", name: "Hermit Trust", url: "https://hermittrust.com/", domain: "hermittrust.com", description: "A charitable trust site sharing its values, activities and the ways supporters can get involved.", countryCode: "IN", countryName: "India" },
  { slug: "albae", name: "Albae", url: "https://shivantra-albae.vercel.app/", domain: "shivantra-albae.vercel.app", description: "An algae-based vegan nutrition brand site built around product storytelling, certifications and online shopping.", countryCode: "IN", countryName: "India" },
  { slug: "dr-desai-eye-hospital", name: "Dr Desai Eye Hospital", url: "https://shivantra-drdesaieyehospital.vercel.app/", domain: "shivantra-drdesaieyehospital.vercel.app", description: "An eye hospital and laser centre site presenting specialities, outcomes and an easy appointment path.", countryCode: "IN", countryName: "India" },
  { slug: "atmatex", name: "Atmatex", url: "https://shivantra-atmatex.vercel.app/", domain: "shivantra-atmatex.vercel.app", description: "A heritage textile manufacturer site showcasing woven fabrics, silk and zari craftsmanship since 1956.", countryCode: "IN", countryName: "India" },
];

const flagEmoji: Record<Project["countryCode"], string> = {
  IN: "🇮🇳",
  CA: "🇨🇦",
  FR: "🇫🇷",
};

const countryCount = new Set(projects.map((p) => p.countryCode)).size;

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "CollectionPage",
      name: "Website Portfolio",
      url: pageUrl,
      description:
        "Live websites designed and developed by Shivantra Solutions Private Limited for clients across India, France and Canada.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: `${siteUrl}/` },
        { "@type": "ListItem", position: 2, name: "Website Portfolio", item: pageUrl },
      ],
    },
  ],
};

export default function Portfolio() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="site-wrap portfolio-page">
        <Navbar activePage="portfolio" />
        <main id="main-content">
          <Section className="portfolio-hero" id="portfolio-hero">
            <Container>
              <div className="row">
                <div className="col-lg-8">
                  <Tag marginBottom>Our Work</Tag>
                  <PageTitle>Website Portfolio</PageTitle>
                  <Description hero aos="fade-up" delay={200}>
                    A selection of live websites we have designed and developed for clients —
                    spanning business sites, personal brands, financial services and campaign
                    landing pages.
                  </Description>
                  <div className="stat-row" data-aos="fade-up" data-aos-delay="300">
                    <div className="stat-item">
                      <div className="stat-number">{projects.length}</div>
                      <div className="stat-label">Live Websites</div>
                    </div>
                    <div className="stat-item">
                      <div className="stat-number">{countryCount}</div>
                      <div className="stat-label">Countries Served</div>
                    </div>
                  </div>
                </div>
              </div>
            </Container>
          </Section>

          <Section className="section-muted" id="portfolio-grid">
            <Container>
              <div className="row g-4 portfolio-grid">
                {projects.map((project, index) => (
                  <div className="col-12 col-md-6" key={project.slug}>
                    <div
                      className="portfolio-card"
                      data-aos="fade-up"
                      data-aos-delay={String((index % 2) * 100)}
                    >
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="portfolio-card-media"
                        aria-label={`Visit ${project.name}`}
                      >
                        <img
                          src={`${basePath}/assets/images/portfolio/${project.slug}.webp`}
                          alt={`${project.name} website screenshot`}
                          loading="lazy"
                        />
                        <span className="portfolio-card-overlay" aria-hidden="true">
                          <span className="portfolio-card-overlay-icon">
                            <i className="bi bi-arrow-up-right"></i>
                          </span>
                        </span>
                      </a>
                      <div className="portfolio-card-content">
                        <span className="portfolio-card-flag">
                          <span aria-hidden="true">{flagEmoji[project.countryCode]}</span>
                          {project.countryName}
                        </span>
                        <div className="portfolio-card-title">{project.name}</div>
                        <div className="portfolio-card-domain">{project.domain}</div>
                        <p className="portfolio-card-description">{project.description}</p>
                        <Button
                          href={project.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-white-outline portfolio-card-link"
                        >
                          Visit Website
                          <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                        </Button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Container>
          </Section>

          <Section id="portfolio-about">
            <Container>
              <div className="portfolio-about" data-aos="fade-up" data-aos-delay="100">
                <Tag marginBottom>About Shivantra</Tag>
                <Description>
                  <b>Shivantra Solutions Private Limited</b> is a software consultancy and
                  development organisation, delivering customised software development and
                  integrations of existing systems. Our passion for technology drives us to
                  continuously learn and grow, staying ahead of the curve in an ever-changing
                  digital landscape. With over a decade of experience, we know the technique
                  when it comes to building things.
                </Description>
                <div className="vision-label">
                  <i className="bi bi-bullseye" aria-hidden="true"></i>
                  Mission Statement
                </div>
                <Description>
                  Offering world class technology solutions for complex business requirements
                  and challenges, empowering organizations &amp; individuals across all
                  industries to stay ahead with the digital era.
                </Description>
                <div className="vision-label">
                  <i className="bi bi-stars" aria-hidden="true"></i>
                  Vision Statement
                </div>
                <Description className="mb-0">
                  An ecosystem that eases human efforts, saving time and energy with the help
                  of technologies, allowing them to focus on what truly matters and unlock
                  their full potential.
                </Description>
                <Button href={homeUtmUrl} className="btn-white-outline read-more-btn">
                  Read More
                  <i className="bi bi-arrow-up-right ms-2" aria-hidden="true"></i>
                </Button>
              </div>
            </Container>
          </Section>

          <Section id="portfolio-cta">
            <Container>
              <div className="portfolio-cta-banner" data-aos="fade-up" data-aos-delay="100">
                <SectionTitle>Want a website like this for your business?</SectionTitle>
                <Description className="mb-0 text-white-50">
                  Tell us about your project and we will help you plan the right approach.
                </Description>
                <div className="cta d-flex flex-wrap justify-content-center gap-2 mt-4">
                  <Button href={`${basePath}/#contact`} className="btn-light">
                    Discuss Your Website
                  </Button>
                </div>
              </div>
            </Container>
          </Section>

          <Footer />
        </main>
      </div>
    </>
  );
}
