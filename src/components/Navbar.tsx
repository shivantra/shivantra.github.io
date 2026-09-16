"use client";

import { useEffect, useLayoutEffect, useRef, useState, type MouseEvent } from "react";
import "./Navbar.css";
import Link from "next/link";
import { Button, Container } from "./Typography";
import { basePath } from "@/lib/basePath";

interface NavbarProps {
  activePage?: "home" | "careers" | "legal" | "services";
}

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "contact", label: "Contact" },
];

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const isHome = activePage === "home";
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const selectedSection = isHome ? activeSection : activePage;

  useEffect(() => {
    if (!isHome) return;
    let frame = 0;
    const syncHash = () => {
      const id = window.location.hash.slice(1);
      if (navLinks.some((link) => link.id === id)) setActiveSection(id);
    };
    const syncScroll = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const threshold = Math.max(180, window.innerHeight * 0.25);
        let current = "home";
        for (const link of navLinks) {
          const section = document.getElementById(link.id);
          if (section && section.getBoundingClientRect().top <= threshold) current = link.id;
        }
        setActiveSection(current);
      });
    };
    syncHash();
    window.addEventListener("hashchange", syncHash);
    window.addEventListener("popstate", syncHash);
    window.addEventListener("scroll", syncScroll, { passive: true });
    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("hashchange", syncHash);
      window.removeEventListener("popstate", syncHash);
      window.removeEventListener("scroll", syncScroll);
    };
  }, [isHome]);


  function closeMenu() {
    dialogRef.current?.close();
    setMenuOpen(false);
  }

  // A native modal owns focus and sits above the page without translating
  // any page elements or changing the body's position and scroll offset.
  useLayoutEffect(() => {
    if (!menuOpen) return;
    const dialog = dialogRef.current;
    if (!dialog) return;
    dialog.showModal();
    return () => {
      dialog.close();
    };
  }, [menuOpen]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 992px)");
    const onResize = () => {
      if (desktop.matches) closeMenu();
    };
    desktop.addEventListener("change", onResize);
    return () => desktop.removeEventListener("change", onResize);
  }, []);

  function handleSectionLinkClick(sectionId: string) {
    return (e: MouseEvent<HTMLAnchorElement>) => {
      closeMenu();
      if (!isHome) return;
      e.preventDefault();
      setActiveSection(sectionId);
      history.pushState(null, "", `#${sectionId}`);
      // One intentional scroll after React has closed the modal.
      requestAnimationFrame(() => {
        document.getElementById(sectionId)?.scrollIntoView({
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches ? "instant" : "smooth",
          block: "start",
        });
      });
    };
  }

  return (
    <>
      <div className="fbs__net-navbar-spacer" aria-hidden="true" />
      <header className="fbs__net-navbar navbar" aria-label="shivantra.com navbar">
        <Container className="d-flex align-items-center justify-content-between">
          <Link className="navbar-brand" href="/" onClick={closeMenu}>
            <img
              className="logo img-fluid"
              src={`${basePath}/assets/images/logo-dark.svg`}
              alt="Shivantra logo"
            />
          </Link>

          <nav className="fbs__net-nav-desktop" aria-label="Primary">
            <ul className="fbs__net-nav-list">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <a
                    className={`nav-link scroll-link${link.id === selectedSection ? " active" : ""}`}
                    aria-current={link.id === selectedSection ? "page" : undefined}
                    href={isHome ? `#${link.id}` : `${basePath}/#${link.id}`}
                    onClick={handleSectionLinkClick(link.id)}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  className={`nav-link${activePage === "careers" ? " active" : ""}`}
                  aria-current={activePage === "careers" ? "page" : undefined}
                  href="/careers"
                >
                  Careers
                </Link>
              </li>
            </ul>
          </nav>

          <div className="fbs__net-nav-actions">
            <Button
              href={isHome ? "#contact" : `${basePath}/#contact`}
              className="btn-primary py-2 d-none d-sm-inline-flex"
              onClick={handleSectionLinkClick("contact")}
            >
              Contact Now
            </Button>

            <button
              type="button"
              className="fbs__net-navbar-toggler"
              aria-label="Open navigation menu"
              aria-controls="fbs__net-mobile-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg className="fbs__net-navbar-toggler-icon-menu" xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="21" x2="3" y1="6" y2="6"></line>
                <line x1="15" x2="3" y1="12" y2="12"></line>
                <line x1="17" x2="3" y1="18" y2="18"></line>
              </svg>
            </button>
          </div>
        </Container>
      </header>

      <dialog
        ref={dialogRef}
        id="fbs__net-mobile-menu"
        className="fbs__net-mobile-panel"
        aria-label="Navigation menu"
        onCancel={closeMenu}
        onClose={() => {
          // A queued close event can arrive after the dialog has reopened.
          if (!dialogRef.current?.open) setMenuOpen(false);
        }}
      >
        <div className="fbs__net-mobile-panel-header">
          <Link href="/" onClick={closeMenu}>
            <img
              className="logo img-fluid"
              src={`${basePath}/assets/images/logo-dark.svg`}
              alt="Shivantra logo"
            />
          </Link>
          <button type="button" autoFocus onClick={closeMenu} className="fbs__net-mobile-panel-close" aria-label="Close navigation menu">
            <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path>
            </svg>
          </button>
        </div>
        <p className="fbs__net-mobile-eyebrow">Explore Shivantra</p>
        <ul className="fbs__net-mobile-nav-list">
          {navLinks.map((link) => (
            <li key={link.id}>
              <a
                className={`nav-link scroll-link${link.id === selectedSection ? " active" : ""}`}
                aria-current={link.id === selectedSection ? "page" : undefined}
                href={isHome ? `#${link.id}` : `${basePath}/#${link.id}`}
                onClick={handleSectionLinkClick(link.id)}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <Link
              className={`nav-link${activePage === "careers" ? " active" : ""}`}
              aria-current={activePage === "careers" ? "page" : undefined}
              href="/careers"
              onClick={closeMenu}
            >
              Careers
            </Link>
          </li>
        </ul>
        <div className="fbs__net-mobile-contact">
          <p className="fbs__net-mobile-contact-title">Have a project in mind?</p>
          <p className="fbs__net-mobile-contact-copy">Let’s build something great together.</p>
          <Button
            href={isHome ? "#contact" : `${basePath}/#contact`}
            className="btn-primary w-100 d-flex align-items-center justify-content-between"
            onClick={handleSectionLinkClick("contact")}
          >
            Contact Now
            <span aria-hidden="true">↗</span>
          </Button>
        </div>
      </dialog>
    </>
  );
}
