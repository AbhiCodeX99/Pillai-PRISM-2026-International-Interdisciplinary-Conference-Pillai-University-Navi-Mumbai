import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { conferenceData } from "../data/conferenceData";
import PULOGO from "../assets/PULOGO.png";

export default function Navbar({
  onOpenRegister,
  onOpenSubmission,
  onOpenTracker,
}) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeForDesktop = () => {
      if (window.matchMedia("(min-width: 1051px)").matches) setMenuOpen(false);
    };
    const closeOnEscape = (event) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    window.addEventListener("resize", closeForDesktop, { passive: true });
    window.addEventListener("keydown", closeOnEscape);
    return () => {
      window.removeEventListener("resize", closeForDesktop);
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, []);

  useEffect(() => {
    setMenuOpen(false);
  }, [location.pathname]);

  const closeMenu = () => setMenuOpen(false);

  const isActive = (path) => location.pathname === path;

  return (
    <>
      {/* Main Navbar */}
      <header className={`main-navbar ${scrolled ? "scrolled" : ""}`}>
        <div className="container main-navbar-container">

          {/* Logo & Brand */}
          <div className="navbar-brand-group">
            <Link
              to="/"
              className="navbar-brand-link"
              aria-label="Pillai University Home"
              onClick={closeMenu}
            >
              <div className="navbar-logo-wrapper">
                <img
                  src={PULOGO}
                  alt="Pillai University Emblem"
                  className="navbar-accent-graphic"
                />
              </div>

              <div className="navbar-brand-text-container">
                <div className="navbar-brand-text">
                  <span className="brand-word-pillai">Pillai</span>
                  <span className="brand-word-univ">University</span>

                  <div className="brand-est-rule">
                    <span className="brand-est-label">Est. 1998</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>

          {/* Nav Links */}
          <nav className="desktop-nav-menu">
            <Link
              to="/"
              className={isActive("/") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Home
            </Link>

            <Link
              to="/about"
              className={isActive("/about") ? "active-link" : ""}
              onClick={closeMenu}
            >
              About
            </Link>

             <Link
              to="/call-for-papers"
              className={isActive("/call-for-papers") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Call for Papers
            </Link> 

            <Link
              to="/important-dates"
              className={isActive("/important-dates") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Important Dates
            </Link>

            <Link
              to="/committee"
              className={isActive("/committee") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Committee
            </Link>

            <Link
              to="/registration"
              className={isActive("/registration") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Registration
            </Link>

            <Link
              to="/contact"
              className={isActive("/contact") ? "active-link" : ""}
              onClick={closeMenu}
            >
              Contact
            </Link>
          </nav>

          {/* Action CTAs */}
          <div className="navbar-action-group">
            {/* <button
              type="button"
              className="nav-submit-paper-btn"
              onClick={() => {
                closeMenu();

                if (onOpenSubmission) {
                  onOpenSubmission();
                }
              }}
            >
              Submit Paper
            </button> */}

            <Link
              to="/registration"
              className="nav-register-cta-btn"
              onClick={closeMenu}
            >
              Register Now
            </Link>

            {/* Mobile Hamburger */}
            <button
              type="button"
              className={`mobile-menu-btn ${menuOpen ? "open" : ""}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle navigation menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
            >
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {menuOpen && (
          <div className="mobile-nav-drawer" id="mobile-navigation">
            <div className="mobile-nav-links">
              <Link
                to="/"
                className={isActive("/") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Home Overview
              </Link>

              <Link
                to="/about"
                className={isActive("/about") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 About Pillai PRISM
              </Link>

              <Link
                to="/call-for-papers"
                className={isActive("/call-for-papers") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Call for Papers & 5 Tracks
              </Link>

              <Link
                to="/important-dates"
                className={isActive("/important-dates") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Important Dates
              </Link>

              <Link
                to="/committee"
                className={isActive("/committee") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Leadership & Committee
              </Link>

              <Link
                to="/registration"
                className={isActive("/registration") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Registration & Payment
              </Link>

              <Link
                to="/contact"
                className={isActive("/contact") ? "active-mobile" : ""}
                onClick={closeMenu}
              >
                 Contact Secretariat
              </Link>
            </div>

            <div className="mobile-drawer-btn-row">
              {/* <button
                type="button"
                className="mobile-btn submit-btn"
                onClick={() => {
                  closeMenu();

                  if (onOpenSubmission) {
                    onOpenSubmission();
                  }
                }}
              >
                 Submit Paper
              </button> */}

              <Link
                to="/registration"
                className="mobile-btn register-btn"
                onClick={closeMenu}
              >
                 Register Now
              </Link>
            </div>
          </div>
        )}
      </header>

      {/* University / Conference Information Bar */}
      <div className="top-univ-bar">
        <div className="container top-univ-inner">
          <div className="univ-affiliation">
            <span className="mes-tag">
              MAHATMA EDUCATION SOCIETY
            </span>

            <span className="univ-status">
              Pillai University, Navi Mumbai (State Private University)
            </span>
          </div>

          <div className="top-univ-links">
            <span className="conf-date-pill">
               19 December 2026 • Hybrid Mode
            </span>

            {/* <button
              type="button"
              className="track-status-top-btn"
              onClick={() => {
                if (onOpenTracker) {
                  onOpenTracker();
                }
              }}
            >
               Track Paper Status
            </button> */}
          </div>
        </div>
      </div>
    </>
  );
}
