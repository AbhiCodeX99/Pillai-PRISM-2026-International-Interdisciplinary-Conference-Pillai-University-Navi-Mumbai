import React, { useState } from "react";
import { conferenceData } from "../data/conferenceData";

export default function SpeakersSection() {
  const [activeSpeaker, setActiveSpeaker] = useState(null);

  return (
    <section className="section speakers-section" id="speakers">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">GLOBAL THOUGHT LEADERSHIP</p>
          <h2>Distinguished Keynote Speakers</h2>
          <p className="section-subtitle">
            Pillai PRISM 2026 convenes visionary computer scientists, sustainable business pioneers, and enterprise leaders from top global institutions.
          </p>
        </div>

        <div className="speakers-grid">
          {conferenceData.speakers.map((speaker) => (
            <div className="speaker-card" key={speaker.id}>
              <div className="speaker-img-wrapper">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="speaker-photo"
                  loading="lazy"
                />
                <span className="speaker-badge">{speaker.category}</span>
              </div>

              <div className="speaker-info">
                <h3>{speaker.name}</h3>
                <span className="speaker-title">{speaker.title}</span>
                <p className="speaker-affiliation">{speaker.affiliation}</p>

                <div className="speaker-topic-box">
                  <span className="topic-tag">Keynote Address</span>
                  <p className="topic-title">"{speaker.topic}"</p>
                </div>

                <button
                  type="button"
                  className="speaker-bio-btn"
                  onClick={() => setActiveSpeaker(speaker)}
                >
                  View Profile & Abstract →
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Speaker Modal */}
        {activeSpeaker && (
          <div className="modal-overlay" onClick={() => setActiveSpeaker(null)}>
            <div className="modal-container speaker-modal" onClick={(e) => e.stopPropagation()}>
              <div className="modal-header">
                <span className="modal-header-badge">{activeSpeaker.category} Profile</span>
                <button className="modal-close-btn" onClick={() => setActiveSpeaker(null)}>✕</button>
              </div>

              <div className="modal-body speaker-bio-body">
                <div className="speaker-modal-left">
                  <img src={activeSpeaker.image} alt={activeSpeaker.name} className="speaker-modal-photo" />
                  <h4>{activeSpeaker.name}</h4>
                  <p className="modal-sub">{activeSpeaker.title}</p>
                  <p className="modal-aff">{activeSpeaker.affiliation}</p>
                </div>

                <div className="speaker-modal-right">
                  <div className="keynote-highlight-card">
                    <span>PLENARY KEYNOTE SESSION</span>
                    <h3>"{activeSpeaker.topic}"</h3>
                  </div>

                  <div className="bio-paragraphs">
                    <p>
                      {activeSpeaker.name} has over two decades of international research experience in cross-disciplinary technological innovation, published in premier IEEE, ACM and Harvard Business Review outlets.
                    </p>
                    <p>
                      Their keynote at Pillai PRISM 2026 will dissect the paradigm shift in emerging technologies, offering actionable roadmaps for scholars, industry leaders, and policy architects.
                    </p>
                  </div>

                  <div className="modal-footer-actions" style={{ justifyContent: "flex-start", marginTop: "20px" }}>
                    <button type="button" className="primary-btn" onClick={() => setActiveSpeaker(null)}>
                      Close Profile
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

