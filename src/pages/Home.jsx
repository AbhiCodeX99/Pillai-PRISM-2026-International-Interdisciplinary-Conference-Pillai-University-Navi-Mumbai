import React, { useState } from "react";
import { Link } from "react-router-dom";
import imgmaps from "../assets/mapsformat.jpg";
import Hero from "../components/Hero";
import deepikaPillai from "../assets/deepika-pillai.jpeg";
import kavitaPillai from "../assets/kavita-pillai.png";
import { useRegistration } from "../components/SiteLayout";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import patronDaphne from "../assets/daphne-pillai.jpeg";
import patronFranav from "../assets/franav-pillai.jpeg";
import patronKMPillai from "../assets/km-vasudevan-pillai.jpeg";
import patronPriam from "../assets/priam-pillai.jpeg";
import { conferenceData } from "../data/conferenceData";
import { datesData } from "../data/datesData";
import { tracksData } from "../data/tracksData";
import { generateGoogleCalendarUrl, downloadIcsFile } from "../utils/calendarHelper";
import ExpandableText from "../components/ExpandableText";
import Registration from "./Registration.jsx";
import Committee from "./Committee.jsx";
import CallForPapers from "./CallForPapers.jsx";
import Contact from "./Contact";
export default function Home() {
  const { openRegistration } = useRegistration();
  const [activeAboutTab, setActiveAboutTab] = useState("conf");
  const [selectedTrackTab, setSelectedTrackTab] = useState(1);
  const handleGoogleCalendar = (dateItem) => {
    const url = generateGoogleCalendarUrl({
      title: `Pillai PRISM 2026: ${dateItem.title}`,
      description: `${dateItem.description}\nPillai PRISM 2026 - International Hybrid Conference. Submit to: ${conferenceData.email}`,
      location: conferenceData.venue,
      startDate: dateItem.rawDate,
      endDate: dateItem.rawDate,
    });
    window.open(url, "_blank");
  };

  const handleIcsDownload = (dateItem) => {
    downloadIcsFile({
      title: `Pillai PRISM 2026: ${dateItem.title}`,
      description: `${dateItem.description}\nPillai PRISM 2026 - International Hybrid Conference.`,
      location: conferenceData.venue,
      startDate: dateItem.rawDate,
      endDate: dateItem.rawDate,
      filename: `PRISM_2026_${dateItem.date}_${dateItem.month}.ics`,
    });
  };

  return (
    <>
      {/* Hero */}
      <Hero />

      {/* =========================================================
          SECTION: ABOUT (Conference, University, Computing, Business, RDC)
      ========================================================= */}
      <section className="univ-section" id="about">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">ABOUT THE INSTITUTION & CONFERENCE</span>
            <h2 className="univ-section-title">Institutional Overview & Background</h2>
            <div className="header-divider"></div>
          </div>

          {/* About Tab Switcher */}
          <div className="about-tabs-container">
            <div className="about-tabs-nav">
              <button
                className={`about-nav-btn ${activeAboutTab === "conf" ? "active" : ""}`}
                onClick={() => setActiveAboutTab("conf")}
              >
                Pillai PRISM 2026
              </button>
              <button
                className={`about-nav-btn ${activeAboutTab === "univ" ? "active" : ""}`}
                onClick={() => setActiveAboutTab("univ")}
              >
                About Pillai University
              </button>
              <button
                className={`about-nav-btn ${activeAboutTab === "computing" ? "active" : ""}`}
                onClick={() => setActiveAboutTab("computing")}
              >
                School of Computing
              </button>
              <button
                className={`about-nav-btn ${activeAboutTab === "business" ? "active" : ""}`}
                onClick={() => setActiveAboutTab("business")}
              >
                School of Business (UG)
              </button>
              <button
                className={`about-nav-btn ${activeAboutTab === "rdc" ? "active" : ""}`}
                onClick={() => setActiveAboutTab("rdc")}
              >
                RDC Committee
              </button>
            </div>

            {/* Tab Contents */}
            <div className="about-tab-content-card">
              {activeAboutTab === "conf" && (
                <div className="tab-pane">
                  <div className="tab-pane-header" style={{ marginBottom: "20px" }}>
  <span className="tab-tag" style={{ display: "inline-block", marginBottom: "8px" }}>
    INTERNATIONAL CONFERENCE
  </span>
  <h3 style={{ fontSize: "24px", fontWeight: "700", color: "#0f172a", margin: "0 0 6px 0", lineHeight: "1.3" }}>
    About the Conference — Pillai PRISM 2026
  </h3>
  <p style={{ fontSize: "15px", fontWeight: "600", color: "#d92323", margin: 0, letterSpacing: "0.2px" }}>
    Perspectives. Research. Innovation. Synergy. Multidisciplinary
  </p>
</div>
                  <ExpandableText text={conferenceData.aboutConference} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Organized by:</strong> {conferenceData.organizedBy}</div>
                    <div><strong>Date & Mode:</strong> {conferenceData.date} • {conferenceData.mode}</div>
                  </div>
                </div>
              )}

              {activeAboutTab === "univ" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">THE UNIVERSITY</span>
                    <h3>About Pillai University, Navi Mumbai</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutUniversity} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Under the Aegis of:</strong> Mahatma Education Society (MES - 4+ Decades Legacy)</div>
                    <div><strong>Campus:</strong> Dr. K. M. Vasudevan Pillai Campus, New Panvel</div>
                  </div>
                </div>
              )}

              {activeAboutTab === "computing" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">COLLABORATING SCHOOL</span>
                    <h3>About Pillai University School of Computing</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutComputing} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Dean & Convener:</strong> Deepika Sharma, Dean, School of Computing</div>
                    <div><strong>Key Domains:</strong> AI, IoT, Blockchain, Quantum Computing, Fog & Cloud Systems</div>
                  </div>
                </div>
              )}

              {activeAboutTab === "business" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">COLLABORATING SCHOOL</span>
                    <h3>About Pillai University School of Business (UG)</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutBusiness} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Dean & Convener:</strong> Dr. Kavita Kathare, Dean, School of Business (UG)</div>
                    <div><strong>Key Domains:</strong> FinTech, Sustainable Business, ESG, Global Markets, Digital Commerce</div>
                  </div>
                </div>
              )}

              {activeAboutTab === "rdc" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">RESEARCH & DEVELOPMENT</span>
                    <h3>Research & Development Committee (RDC)</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutRDC} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Role:</strong> Research Catalyst & Publication Quality Assurance</div>
                    <div><strong>Objective:</strong> Interdisciplinary Innovation & Sustainable Progress</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: OBJECTIVES OF THE CONFERENCE
      ========================================================= */}
      <section className="univ-section bg-light-alt" id="objectives">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">CONFERENCE VISION</span>
            <h2 className="univ-section-title">Objectives of the Conference</h2>
            <div className="header-divider"></div>
          </div>

          <div className="objectives-grid-official">
            {conferenceData.objectives.map((obj, i) => (
              <div className="objective-box-official" key={obj.title}>
                <div className="obj-index-circle">0{i + 1}</div>
                <div className="obj-text-content">
                  <h4>{obj.title}</h4>
                  <p>{obj.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: GENERAL TRACKS FOR PAPER PRESENTATION
      ========================================================= */}
      <CallForPapers />

      {/* =========================================================
          SECTION: IMPORTANT DEADLINE & DATES
      ========================================================= */}
      <section className="univ-section bg-light-alt" id="dates">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">TIMELINE</span>
            <h2 className="univ-section-title">Important Deadline & Dates</h2>
            <div className="header-divider"></div>
          </div>

          <div className="dates-cards-official-row">
            {datesData.map((d) => (
              <div className="date-official-box" key={d.id}>
                <div className="date-head-block">
                  <span className="d-day">{d.date}</span>
                  <span className="d-month">{d.month}</span>
                </div>
                <div className="date-body-block">
                  <h4>{d.title}</h4>
                  {/* <div className="date-sync-btns">
                    <button
                      type="button"
                      className="cal-action-btn"
                      onClick={() => handleGoogleCalendar(d)}
                      title="Add to Google Calendar"
                    >
                      Google Calendar
                    </button>
                    <button
                      type="button"
                      className="cal-action-btn"
                      onClick={() => handleIcsDownload(d)}
                      title="Download .iCal file"
                    >
                      .iCal
                    </button>
                  </div> */}
                </div>
              </div>
            ))}
          </div>

          <div className="submission-official-email-banner">
            <div className="email-banner-text">
              <strong>Abstract and Full Research Paper to be submitted to:</strong><a href={`mailto:${conferenceData.email}`} className="official-email-link">
                {conferenceData.email}
              </a>
            </div>
            {/* <button
              type="button"
              className="primary-hero-btn"
              onClick={() => window.location.assign(`mailto:${conferenceData.email}`)}
            >
              Upload via Online Portal →
            </button> */}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: GUIDELINES FOR RESEARCH PAPER SUBMISSION
      ========================================================= */}
      <section className="univ-section" id="guidelines">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">AUTHOR INSTRUCTIONS</span>
            <h2 className="univ-section-title">Guidelines for Research Paper Submission</h2>
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
              <span className="structure-label">MANUSCRIPT SEQUENCE</span>
              <h3>PAPER STRUCTURE</h3>
            </div>
            <ExpandableText text={conferenceData.submissionGuidelines.paperStructure} limit={120} className="structure-desc" />

            <div className="structure-tags-flow">
              <span>Title</span> →
              <span>Author Details & Affiliation</span> →
              <span>Abstract</span> →
              <span>Keywords</span> →
              <span>Introduction</span> →
              <span>Literature Review</span> →
              <span>Research Methodology</span> →
              <span>Results/Data Analysis</span> →
              <span>Discussion</span> →
              <span>Findings</span> →
              <span>Conclusion</span> →
              <span>Implications/Recommendations</span> →
              <span>References</span>
            </div>
          </div>

          {/* Important Originality Notice & Publication Opportunities */}
          <div className="two-cols-notice-grid">
            <div className="notice-box-official">
              <h4>IMPORTANT: Originality & Review Process</h4>
              <ExpandableText text={conferenceData.submissionGuidelines.originalityNotice} limit={110} />
            </div>

            <div className="pub-box-official">
              <h4>Publication Opportunities</h4>
              <ExpandableText
                text="All accepted, registered and presented research papers will be published in official Conference Proceedings with ISSN/ISBN. High-quality papers will be considered for recommended publication in Scopus & UGC-CARE listed journals."
                limit={110}
              />
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: BEST PAPER AWARDS
      ========================================================= */}
      <section className="univ-section bg-light-alt" id="awards">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">RECOGNITION</span>
            <h2 className="univ-section-title">Best Paper Awards</h2>
            <p className="univ-section-desc">
              The conference chairs will choose the two best papers out of those selected for presentation to receive awards.
            </p>
            <div className="header-divider"></div>
          </div>

          <div className="awards-official-grid">
            {conferenceData.awards.map((aw, idx) => (
              <div className="award-card-official" key={aw.category}>
                <div className="award-trophy-badge">🏆</div>
                <div className="award-prize-amount">{aw.amount}</div>
                <h3>{aw.category}</h3>
                <p>{aw.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION: REGISTRATION & MODE OF PAYMENT (THE ONE POWERHOUSE PLACE)
      ========================================================= */}
<Registration />
      {/* Patrons */}
<Committee />
{/* =========================================================
          SECTION 1: EMBEDDED CONTACT PAGE COMPONENT
      ========================================================= */}
      <section className="univ-section" id="contact-embed" style={{ paddingBottom: "20px" }}>
        <Contact />
      </section>

      {/* =========================================================
          SECTION 2: CAMPUS VENUE & GOOGLE MAP DETAILS (BELOW CONTACT)
      ========================================================= */}
      <section className="univ-section bg-light-alt" id="venue" style={{ paddingTop: "20px" }}>
        <div className="container">
          <div className="venue-contact-split">
            
            {/* Campus & Location Info */}
            <div className="venue-info-box">
              <span className="univ-sub-badge">CAMPUS VENUE</span>
              <h2>Dr. K. M. Vasudevan Pillai Campus</h2>
              <p className="venue-inst-name">Pillai College of Engineering • Mahatma Education Society</p>
              <p className="venue-addr-full">
                📍 10, Sector 16, New Panvel East, Navi Mumbai, Maharashtra 410206, India
              </p>

              {/* Direct Maps & Directions Links */}
              <div className="venue-links-group" style={{ display: "flex", gap: "12px", flexWrap: "wrap", marginTop: "16px" }}>
                <a
                  href="https://maps.google.com/?q=Dr.+K.+M.+Vasudevan+Pillai+Campus+Panvel"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="primary-hero-btn btn-sm"
                >
                  View on Google Maps ↗
                </a>
              </div>
            </div>

            {/* Campus Image / Map Card Box */}
            <div className="campus-image-card-box">
              <img
                src={imgmaps}
                alt="Pillai College Panvel Campus Location Map"
                className="campus-img-real"
              />
            </div>

          </div>
        </div>
      </section>

    </>
  );
}

