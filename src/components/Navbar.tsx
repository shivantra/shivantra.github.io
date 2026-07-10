"use client";

import { useEffect, useRef, useState, type MouseEvent } from "react";
import "./Navbar.css";
import Link from "next/link";
import { Button, Container } from "./Typography";
import { basePath } from "@/lib/basePath";

interface NavbarProps {
  activePage?: "home" | "careers" | "legal";
}

function getOffcanvasInstance() {
  const el = document.getElementById("fbs__net-navbars");
  if (!el) return null;
  const w = window as typeof window & { bootstrap?: { Offcanvas: { getInstance: (el: Element) => { hide: () => void } | null } } };
  return w.bootstrap?.Offcanvas.getInstance(el) ?? null;
}

function closeOffcanvas() {
  getOffcanvasInstance()?.hide();
}

// On mobile/tablet, nav links live inside an offcanvas that sets
// overflow:hidden on <body> while open. Clicking a section link tries to
// scroll while that's still in effect, so the scroll silently fails or
// lands in the wrong place. Wait for the offcanvas's close transition to
// actually finish before scrolling.
function handleSectionLinkClick(sectionId: string, isHome: boolean) {
  return (e: MouseEvent<HTMLAnchorElement>) => {
    if (!isHome) return;
    const el = document.getElementById("fbs__net-navbars");
    if (!el?.classList.contains("show")) return;

    e.preventDefault();
    const onHidden = () => {
      el.removeEventListener("hidden.bs.offcanvas", onHidden);
      document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth", block: "start" });
      history.pushState(null, "", `#${sectionId}`);
    };
    el.addEventListener("hidden.bs.offcanvas", onHidden);
    closeOffcanvas();
  };
}

export default function Navbar({ activePage = "home" }: NavbarProps) {
  const isHome = activePage === "home";
  const navRef = useRef<HTMLElement>(null);
  const [isFixed, setIsFixed] = useState(false);
  const [navHeight, setNavHeight] = useState(0);

  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.getBoundingClientRect().height);
    }
    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsFixed(window.scrollY > 0);
        ticking = false;
      });
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {isFixed && <div style={{ height: navHeight }} aria-hidden="true" />}
      <header
        ref={navRef}
        className={`fbs__net-navbar navbar navbar-expand-lg dark${isFixed ? " fixed-nav" : ""}`}
        aria-label="shivantra.com navbar"
      >
      <Container className="d-flex align-items-center justify-content-between">
        <Link className="navbar-brand w-auto" href="/">
          <img
            className="logo dark img-fluid"
            src={`${basePath}/assets/images/logo-dark.svg`}
            alt="Shivantra dark logo"
          />
          <img
            className="logo light img-fluid"
            src={`${basePath}/assets/images/logo-light.svg`}
            alt="Shivantra light logo"
          />
        </Link>
        <div
          className="offcanvas offcanvas-start w-75"
          id="fbs__net-navbars"
          tabIndex={-1}
          aria-labelledby="fbs__net-navbarsLabel"
        >
          <div className="offcanvas-header">
            <div className="offcanvas-header-logo">
              <Link className="logo-link" id="fbs__net-navbarsLabel" href="/">
                <img
                  className="logo dark img-fluid"
                  src={`${basePath}/assets/images/logo-dark.svg`}
                  alt="Shivantra Logo"
                />
                <img
                  className="logo light img-fluid"
                  src={`${basePath}/assets/images/logo-light.svg`}
                  alt="Shivantra Logo"
                />
              </Link>
            </div>
            <button
              className="btn-close btn-close-black"
              type="button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>

          <div className="offcanvas-body align-items-lg-center">
            <ul className="navbar-nav nav me-auto ps-lg-5 mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link scroll-link${isHome ? " active" : ""}`}
                  aria-current={isHome ? "page" : undefined}
                  href={isHome ? "#home" : `${basePath}/#home`}
                  onClick={handleSectionLinkClick("home", isHome)}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href={isHome ? "#about" : `${basePath}/#about`} onClick={handleSectionLinkClick("about", isHome)}>
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href={isHome ? "#services" : `${basePath}/#services`} onClick={handleSectionLinkClick("services", isHome)}>
                  Services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link scroll-link" href={isHome ? "#contact" : `${basePath}/#contact`} onClick={handleSectionLinkClick("contact", isHome)}>
                  Contact
                </a>
              </li>
              <li className="nav-item">
                <Link
                  className={`nav-link scroll-link${activePage === "careers" ? " active" : ""}`}
                  aria-current={activePage === "careers" ? "page" : undefined}
                  href="/careers"
                  onClick={closeOffcanvas}
                >
                  Careers
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="ms-auto w-auto">
          <div className="header-social d-flex align-items-center gap-1">
            <Button href={isHome ? "#contact" : `${basePath}/#contact`} className="btn-primary py-2" onClick={handleSectionLinkClick("contact", isHome)}>
              Contact Now
            </Button>

            <button
              className="fbs__net-navbar-toggler justify-content-center align-items-center ms-auto"
              data-bs-toggle="offcanvas"
              data-bs-target="#fbs__net-navbars"
              aria-controls="fbs__net-navbars"
              aria-label="Toggle navigation"
              aria-expanded="false"
            >
              <svg
                className="fbs__net-icon-menu"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="21" x2="3" y1="6" y2="6"></line>
                <line x1="15" x2="3" y1="12" y2="12"></line>
                <line x1="17" x2="3" y1="18" y2="18"></line>
              </svg>
              <svg
                className="fbs__net-icon-close"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </Container>
      </header>
    </>
  );
}
