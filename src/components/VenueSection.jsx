import React from "react";
import { conferenceData } from "../data/conferenceData";
import venuimg from "../assets/mapsformat.jpg";
import ExpandableText from "./ExpandableText";

export default function VenueSection() {
  return (
    <section className="section venue-section" id="venue">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">LOCATION & CAMPUS</p>
          <h2>Conference Venue & Travel Guide</h2>
          <p className="section-subtitle">
            Experience the vibrant academic ecosystem at Dr. K. M. Vasudevan Pillai Campus, New Panvel, Navi Mumbai.
          </p>
        </div>

        <div className="venue-grid">
          {/* Venue Info & Address */}
          <div className="venue-card-main">
            <div className="venue-header-pill">
              <span>🏛️ HOST INSTITUTION</span>
            </div>

            <h3>Dr. K. M. Vasudevan Pillai Campus</h3>
            <p className="venue-campus-sub">
              Pillai University • Mahatma Education Society (MES)
            </p>

            <p className="venue-address-text">
              📍 10, Sector 16, New Panvel East, Navi Mumbai, Maharashtra 410206, India
            </p>

            <div className="campus-amenities-list">
              <div className="amenity-item">
                <span className="amenity-icon">🎤</span>
                <div>
                  <strong>Air-Conditioned Auditoriums</strong>
                  <small>State-of-the-art acoustic sound & multi-angle streaming</small>
                </div>
              </div>
              <div className="amenity-item">
                <span className="amenity-icon">💻</span>
                <div>
                  <strong>Smart Research & Computing Labs</strong>
                  <small>High-speed gigabit Wi-Fi & computing terminals</small>
                </div>
              </div>
              <div className="amenity-item">
                <span className="amenity-icon">🍽️</span>
                <div>
                  <strong>University Banquet & Dining Court</strong>
                  <small>Multicuisine conference refreshments & luncheon</small>
                </div>
              </div>
              <div className="amenity-item">
                <span className="amenity-icon">🅿️</span>
                <div>
                  <strong>Secure Campus Parking</strong>
                  <small>Ample 2-wheeler and 4-wheeler parking space</small>
                </div>
              </div>
            </div>

            <div className="venue-actions-row">
              <a
                href="https://maps.google.com/?q=Dr.+K.+M.+Vasudevan+Pillai+Campus+Panvel"
                target="_blank"
                rel="noopener noreferrer"
                className="primary-btn"
              >
                Open in Google Maps ↗
              </a>
              <a href={`mailto:${conferenceData.email}`} className="secondary-btn">
                Request Campus Shuttle Info
              </a>
            </div>
          </div>

          {/* Campus Visuals & Transit */}
          <div className="venue-side-column">
            {/* Campus Photo Card */}
            <div className="campus-visual-card">
              <img
                src={venuimg}
                alt="Pillai University Campus"
                className="campus-photo"
              />
              <div className="campus-photo-caption">
                <strong>Pillai University Academic Infrastructure</strong>
                <span>New Panvel East, Navi Mumbai</span>
              </div>
            </div>

            {/* Travel Connections */}
            <div className="transit-modes-box">
              <h4>How to Reach Panvel Campus</h4>

              <div className="transit-row">
                <span className="transit-icon">✈️</span>
                <div>
                  <strong>By Air:</strong>
                  <ExpandableText
                    text="Chhatrapati Shivaji Maharaj International Airport (BOM) — 42 km (1 hr via Eastern Freeway / Sion-Panvel Highway). Navi Mumbai Airport (NMIA) — 8 km."
                    limit={80}
                  />
                </div>
              </div>

              <div className="transit-row">
                <span className="transit-icon">🚆</span>
                <div>
                  <strong>By Train:</strong>
                  <ExpandableText
                    text="Panvel Railway Junction (Central Railway & Harbour Line) — 2 km. Direct suburban local trains available from CSMT, Thane, and Kurla."
                    limit={80}
                  />
                </div>
              </div>

              <div className="transit-row">
                <span className="transit-icon">🚗</span>
                <div>
                  <strong>By Road:</strong>
                  <ExpandableText
                    text="Strategically located at the starting node of Mumbai-Pune Expressway and connected directly to Sion-Panvel Highway."
                    limit={80}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

