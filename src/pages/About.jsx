import React, { useState } from "react";
import { Link } from "react-router-dom";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import { conferenceData } from "../data/conferenceData";
import ExpandableText from "../components/ExpandableText";

export default function About() {
  const [activeTab, setActiveTab] = useState("conf");

  return (
    <>
      {/* Page Hero */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">ABOUT PILLAI PRISM 2026</span>
          <h1>About the Conference & Collaborating Schools</h1>
          <p className="inner-hero-desc">
            Discover the academic heritage of Pillai University, the collaborating schools, and the Research & Development Committee driving innovation at PRISM 2026.
          </p>
        </div>
      </section>

      {/* Main About Details */}
      <section className="univ-section" id="about-details">
        <div className="container">
          <div className="about-tabs-container">
            <div className="about-tabs-nav">
              <button
                className={`about-nav-btn ${activeTab === "conf" ? "active" : ""}`}
                onClick={() => setActiveTab("conf")}
              >
                About Pillai PRISM 2026
              </button>
              <button
                className={`about-nav-btn ${activeTab === "univ" ? "active" : ""}`}
                onClick={() => setActiveTab("univ")}
              >
                About Pillai University
              </button>
              <button
                className={`about-nav-btn ${activeTab === "computing" ? "active" : ""}`}
                onClick={() => setActiveTab("computing")}
              >
                School of Computing
              </button>
              <button
                className={`about-nav-btn ${activeTab === "business" ? "active" : ""}`}
                onClick={() => setActiveTab("business")}
              >
                School of Business (UG)
              </button>
              <button
                className={`about-nav-btn ${activeTab === "rdc" ? "active" : ""}`}
                onClick={() => setActiveTab("rdc")}
              >
                Research & Development (RDC)
              </button>
            </div>

            <div className="about-tab-content-card">
              {activeTab === "conf" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">INTERNATIONAL CONFERENCE</span>
                    <h3>Pillai PRISM 2026</h3>
                    <span className="tab-subtitle">Perspectives. Research. Innovation. Synergy. Multidisciplinary</span>
                  </div>
                  <ExpandableText text={conferenceData.aboutConference} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Organized by:</strong> {conferenceData.organizedBy}</div>
                    <div><strong>Date & Mode:</strong> {conferenceData.date} • {conferenceData.mode}</div>
                    <div><strong>Submission Email:</strong> {conferenceData.email}</div>
                  </div>
                </div>
              )}

              {activeTab === "univ" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">THE UNIVERSITY</span>
                    <h3>Pillai University, Navi Mumbai</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutUniversity} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Parent Trust:</strong> Mahatma Education Society (MES - Est. 1970)</div>
                    <div><strong>Campus:</strong> Dr. K. M. Vasudevan Pillai Campus, New Panvel</div>
                  </div>
                </div>
              )}

              {activeTab === "computing" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">COLLABORATING SCHOOL</span>
                    <h3>Pillai University School of Computing</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutComputing} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Dean & Convener:</strong> Deepika Sharma, Dean, School of Computing</div>
                    <div><strong>Research Spectrum:</strong> AI, Generative Intelligence, IoT, Blockchain, Quantum Computing</div>
                  </div>
                </div>
              )}

              {activeTab === "business" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">COLLABORATING SCHOOL</span>
                    <h3>Pillai University School of Business (UG)</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutBusiness} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Dean & Convener:</strong> Dr. Kavita Kathare, Dean, School of Business (UG)</div>
                    <div><strong>Research Spectrum:</strong> FinTech, Sustainable Enterprise, ESG, Global Markets, Trade Strategy</div>
                  </div>
                </div>
              )}

              {activeTab === "rdc" && (
                <div className="tab-pane">
                  <div className="tab-pane-header">
                    <span className="tab-tag">RESEARCH & DEVELOPMENT</span>
                    <h3>Research & Development Committee (RDC)</h3>
                  </div>
                  <ExpandableText text={conferenceData.aboutRDC} limit={160} className="tab-para" />
                  <div className="tab-meta-strip">
                    <div><strong>Core Function:</strong> Interdisciplinary Research Catalyst & Peer-Review Assurance</div>
                    <div><strong>Aim:</strong> Sustainable Innovation & Knowledge Creation</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}