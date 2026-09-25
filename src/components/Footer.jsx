import React from "react";
import { Link } from "react-router-dom";
import { conferenceData } from "../data/conferenceData";
import PULOGO from "../assets/PULOGO.png";
export default function Footer({ onOpenRegister, onOpenSubmission }) {
  return (
    <footer className="futureaxis-footer">
      <div className="container footer-main-grid-official">
        {/* Col 1: University Branding */}
        <div className="footer-univ-col">
            <div className="navbar-logo-wrapper">
                <img
                  src={PULOGO}
                  alt="Pillai University Emblem"
                  className="navbar-accent-graphic"
                />
              

      
            <div >
              <h3 style = {{color: 'white'}}>Pillai PRISM 2026</h3>
              <span>Pillai University, Navi Mumbai</span>
            </div>
            
          </div>
<br></br>
          <p className="footer-theme-blurb">
            International conference on - <strong>Transforming Business and Society through Emerging Technologies, Innovation and Sustainable Development</strong>
          </p>

          <p className="footer-collab-blurb">
            Conference of <strong>School of Computing</strong> and <strong>School of Business (UG)</strong> in collaboration with <strong>Research & Development Committee (RDC)</strong>.
          </p>

          <div className="footer-mes-badge">
             Mahatma Education Society (MES) • Over Four Decades of Educational Excellence
          </div>
        </div>

        {/* Col 2: Quick Links */}
        <div className="footer-links-col">
          <h4>Navigation</h4>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About the Conference</Link></li>
            <li><Link to="/call-for-papers">General Tracks & CFP</Link></li>
            <li><Link to="/important-dates">Important Dates</Link></li>
            <li><Link to="/committee">Our Patrons & Committee</Link></li>
            <li><Link to="/registration">Registration Fees</Link></li>
            <li><Link to="/contact">Contact Secretariat</Link></li>
          </ul>
        </div>

       {/* Col 3: Tracks */}
<div className="footer-links-col">
  <h4>
    <Link to="/call-for-papers">Conference Tracks</Link>
  </h4>

  <ul>
    <li>Track 1: AI & Digital Intelligence</li>
    <li>Track 2: Emerging Technologies & IoT</li>
    <li>Track 3: Future of Business & FinTech</li>
    <li>Track 4: Sustainable Business & ESG</li>
    <li>Track 5: Computing for Society</li>
  </ul>
</div>

        {/* Col 4: Contact & Venue */}
        <div className="footer-contact-col">
          <h4>Conference Secretariat</h4>
          <p className="footer-address">
             Dr. K. M. Vasudevan Pillai Campus, 10, Sector 16, New Panvel East, Navi Mumbai, Maharashtra 410206
          </p>
          <p className="footer-email">
             <a href={`mailto:${conferenceData.email}`}>{conferenceData.email}</a>
          </p>
          <p className="footer-phone">
             +91 97632 71245 / +91 99675 06362
          </p>
          <div className="footer-mode-pill">
             Mode of Conference: <strong>Hybrid</strong>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom-strip-official">
        <div className="container footer-bottom-flex">
          <p>© 2026 Pillai PRISM • Pillai University. All Rights Reserved.</p>
          <div className="footer-legal-links">
            <span>UGC / State Private University</span>
            <span>•</span>
            <span>NAAC Accredited Heritage</span>
            <span>•</span>
            <span>ISSN Proceedings</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
