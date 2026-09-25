import React from "react";
import { conferenceData } from "../data/conferenceData";

export default function AwardsSection({ onOpenSubmission }) {
  return (
    <section className="section awards-section" id="awards">
      <div className="container">
        <div className="awards-banner-card">
          <div className="awards-banner-left">
            <span className="section-label gold-label">RECOGNITION & EXCELLENCE</span>
            <h2>Best Paper Awards & Cash Prizes</h2>
            <p>
              Pillai PRISM 2026 celebrates exceptional scientific rigor, innovation, and impactful scholarship across all tracks with prestigious trophies, certificates, and cash grants.
            </p>

            <div className="award-stats-row">
              <div className="award-stat-item">
                <strong>₹50,000+</strong>
                <span>Total Cash Prize Pool</span>
              </div>
              <div className="award-stat-item">
                <strong>05 Tracks</strong>
                <span>Best Paper Trophies</span>
              </div>
              <div className="award-stat-item">
                <strong>Fast-Track</strong>
                <span>Scopus Indexing</span>
              </div>
            </div>
          </div>

          <div className="awards-banner-right">
            <div className="trophy-badge-box">
              <span className="trophy-icon">🏆</span>
              <h3>₹10,000</h3>
              <p>Best Paper Award per Track</p>
              <small>+ Memento & Certificate of Excellence</small>
            </div>
          </div>
        </div>

        {/* Awards Grid */}
        <div className="awards-cards-grid">
          {conferenceData.awards.map((award, idx) => (
            <div className="award-info-card" key={award.title}>
              <div className="award-card-header">
                <span className="award-index">0{idx + 1}</span>
                <h4>{award.title}</h4>
              </div>
              <div className="award-reward-box">
                <span className="reward-tag">Prize / Incentive</span>
                <strong>{award.reward}</strong>
              </div>
              <p>{award.description}</p>
            </div>
          ))}
        </div>

        {/* Publication Indexing Highlights */}
        <div className="publication-partners-strip">
          <div className="pub-text">
            <span className="section-label">PUBLICATION CHANNELS</span>
            <h3>Indexed Proceedings & Journal Publication</h3>
            <p>
              All registered and presented papers will be published in official ISBN Conference Proceedings. Outstanding papers will be recommended for inclusion in:
            </p>
          </div>

          <div className="indexing-badges-row">
            <div className="index-chip">
              <span className="chip-bullet">✦</span>
              <div>
                <strong>Scopus Indexed Series</strong>
                <small>Partner Proceedings</small>
              </div>
            </div>
            <div className="index-chip">
              <span className="chip-bullet">✦</span>
              <div>
                <strong>UGC-CARE Listed</strong>
                <small>Peer Reviewed Journals</small>
              </div>
            </div>
            <div className="index-chip">
              <span className="chip-bullet">✦</span>
              <div>
                <strong>CrossRef & DOI</strong>
                <small>Persistent Identifiers</small>
              </div>
            </div>
            <div className="index-chip">
              <span className="chip-bullet">✦</span>
              <div>
                <strong>Google Scholar</strong>
                <small>Global Citation Indexing</small>
              </div>
            </div>
          </div>
        </div>

        <div className="awards-cta-center">
          <button className="primary-btn pulse-btn" onClick={onOpenSubmission}>
            Submit Your Paper for Best Paper Award →
          </button>
        </div>
      </div>
    </section>
  );
}

