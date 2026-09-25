import React, { useState } from "react";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import { tracksData } from "../data/tracksData";
import { conferenceData } from "../data/conferenceData";
import ExpandableText from "../components/ExpandableText";

export default function CallForPapers() {
  const [selectedTrackTab, setSelectedTrackTab] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTopics = tracksData
    .filter((t) => (selectedTrackTab === "all" ? true : t.id === Number(selectedTrackTab)))
    .flatMap((t) => t.topics.map((top) => ({ trackId: t.id, trackTitle: t.title, topic: top })))
    .filter((item) =>
      searchQuery.trim() ? item.topic.toLowerCase().includes(searchQuery.toLowerCase()) : true
    );

  const handleDownloadTemplate = () => {
    alert("Downloading official Pillai PRISM 2026 MS Word Abstract Template (.docx)...");
  };

  return (
    <>
      {/* Page Hero */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">CALL FOR PAPERS & RESEARCH TRACKS</span>
          <h1>General Track For Paper Presentation</h1>
          <p className="inner-hero-desc">
            Researchers, academicians, scholars, industry professionals, and students are invited to submit original, unpublished research papers across 5 specialized interdisciplinary tracks.
          </p>

          {/* <div className="hero-quick-actions-bar">
            <button
              type="button"
              className="hero-primary-cta"
              onClick={() => window.location.assign(`mailto:${conferenceData.email}`)}
            >
              Submit Paper Online Now
            </button>
            <button
              type="button"
              className="hero-secondary-cta"
              onClick={() => window.location.assign(`mailto:${conferenceData.email}?subject=Paper%20Status%20Query`)}
            >
              Track Submitted Paper Status
            </button>
            <button
              type="button"
              className="hero-outline-cta"
              onClick={handleDownloadTemplate}
            >
              Download Abstract Template (.DOCX)
            </button>
          </div> */}
        </div>
      </section>

      {/* Tracks & Topics Directory */}
      <section className="univ-section" id="cfp-directory">
        <div className="container">
          {/* Track Selector Tabs */}
          <div className="tracks-tab-layout">
            <div className="tracks-selector-pills">
              <button
                className={`track-select-pill ${selectedTrackTab === "all" ? "active" : ""}`}
                onClick={() => setSelectedTrackTab("all")}
              >
                <span className="pill-num">ALL</span>
                <span className="pill-title">All 50+ Topics</span>
              </button>
              {tracksData.map((track) => (
                <button
                  key={track.id}
                  className={`track-select-pill ${selectedTrackTab === track.id ? "active" : ""}`}
                  onClick={() => setSelectedTrackTab(track.id)}
                >
                  <span className="pill-num">0{track.id}</span>
                  <span className="pill-title">{track.title}</span>
                </button>
              ))}
            </div>

            {/* Fixed Search Bar (Flexbox Layout) */}
            <div className="track-search-wrapper">
              <div className="track-search-input-wrap">
                <span className="search-icon">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                  </svg>
                </span>

                <input
                  type="text"
                  className="track-search-input"
                  placeholder="Search across 50+ research topics & keywords (e.g. AI, ESG, FinTech)..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />

                {searchQuery && (
                  <button
                    type="button"
                    className="clear-search-btn"
                    onClick={() => setSearchQuery("")}
                    aria-label="Clear search"
                  >
                    ✕
                  </button>
                )}
              </div>
            </div>

            {/* Active Display */}
            <div className="active-track-display-card">
              <div className="active-track-header">
                <div>
                  <span className="track-badge-tag">
                    {selectedTrackTab === "all" ? "ALL 5 TRACKS" : `TRACK 0${selectedTrackTab}`}
                  </span>
                  <h3>
                    {selectedTrackTab === "all"
                      ? "Comprehensive Conference Topic Directory (50+ Specialized Domains)"
                      : tracksData.find((t) => t.id === selectedTrackTab)?.title}
                  </h3>
                </div>
                {/* <button
                  type="button"
                  className="submit-to-track-btn"
                  onClick={() => window.location.assign(`mailto:${conferenceData.email}`)}
                >
                  Submit Paper to Track 0{selectedTrackTab === "all" ? "1" : selectedTrackTab} →
                </button> */}
              </div>

              <div className="track-topics-bullet-grid">
                {filteredTopics.length > 0 ? (
                  filteredTopics.map((item, idx) => (
                    <div className="official-topic-item" key={item.topic + idx}>
                      <span className="bullet-dot">•</span>
                      <p>
                        {selectedTrackTab === "all" && (
                          <strong style={{ color: "var(--univ-blue-light)", marginRight: "6px" }}>
                            [Track 0{item.trackId}]
                          </strong>
                        )}
                        {item.topic}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="no-topics-found">
                    No topics found matching "{searchQuery}". Try searching for keywords like "AI", "Finance", "Strategy", or "Cloud".
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Guidelines For Research Paper Submission */}
      <section className="univ-section bg-light-alt" id="guidelines">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">Abstract SPECIFICATIONS</span>
            <h2 className="univ-section-title">Official Guidelines for Research Paper Submission</h2>
            <div className="header-divider"></div>
          </div>

          <div className="guidelines-official-grid">
            <div className="guide-card-official">
              <div className="guide-tag">01</div>
              <h4>COVER PAGE</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.coverPage} limit={80} />
            </div>

            <div className="guide-card-official">
              <div className="guide-tag">02</div>
              <h4>ABSTRACT</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.abstract} limit={90} />
            </div>

            <div className="guide-card-official">
              <div className="guide-tag">03</div>
              <h4>FULL PAPER</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.fullPaper} limit={90} />
            </div>

            <div className="guide-card-official">
              <div className="guide-tag">04</div>
              <h4>FORMATTING</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.formatting} limit={80} />
            </div>
          </div>

          {/* Paper Structure Card */}
          <div className="paper-structure-official-card">
            <div className="structure-head">
              <span className="structure-label">Abstract SEQUENCE</span>
              <h3>PAPER STRUCTURE CHECKLIST</h3>
            </div>
            <ExpandableText text={conferenceData.submissionGuidelines.paperStructure} limit={120} className="structure-desc" />

            <div className="structure-tags-flow">
              <span>Title</span> →
              <span>Author Details & Affiliation</span> →
              <span>Abstract (150-250 words)</span> →
              <span>Keywords</span> →
              <span>Introduction</span> →
              <span>Literature Review</span> →
              <span>Research Methodology</span> →
              <span>Results / Data Analysis</span> →
              <span>Discussion</span> →
              <span>Findings</span> →
              <span>Conclusion</span> →
              <span>Implications / Recommendations</span> →
              <span>References (APA 7th)</span>
            </div>
          </div>

          {/* Important Notice & Publication Opportunities */}
          <div className="two-cols-notice-grid">
            <div className="notice-box-official">
              <h4>IMPORTANT: Originality & Double-Blind Review</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.originalityNotice} limit={110} />
            </div>

            <div className="pub-box-official">
              <h4>Publication Opportunities & Indexing</h4>
              <ExpandableText
                text="All accepted, registered and presented research papers will be published in official Conference Proceedings with ISSN/ISBN. High-caliber papers will be recommended for fast-track publication in Scopus and UGC-CARE listed journals."
                limit={110}
              />
            </div>
          </div>

          {/* Bottom Action Bar */}
          <div className="bottom-submission-banner">
            <div>
              <h3>Ready to Submit Your Abstract?</h3>
              <p>Deadline for Abstract: <strong>10th October 2026</strong></p>
            </div>
            <a
              className="banner-submit-btn"
              href="https://forms.gle/9oJQnpRJGNHpL73eA"
              target="_blank"
              rel="noopener noreferrer"
            >
              Submit your Abstract
            </a>
          </div>
        </div>
      </section>
    </>
  );
}