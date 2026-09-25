import React from "react";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import { conferenceData } from "../data/conferenceData";

import patronDaphne from "../assets/daphne-pillai.jpeg";
import patronFranav from "../assets/franav-pillai.jpeg";
import patronKMPillai from "../assets/km-vasudevan-pillai.jpeg";
import patronPriam from "../assets/priam-pillai.jpeg";

// To replace convener photos later, edit only these two import paths.
import convenerDeepika from "../assets/deepika-pillai.jpeg";
import convenerKavita from "../assets/kavita-pillai.png";

const convenerImages = [convenerDeepika, convenerKavita];

export default function Committee() {
  return (
    <>

      {/* Page Hero */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">GOVERNANCE & STEERING</span>
          <h1>Our Patrons & Organizing Committee</h1>
          <p className="inner-hero-desc">
            Meet the visionary leadership of Pillai University and the organizing committee behind Pillai PRISM 2026.
          </p>
        </div>
      </section>

      {/* Patrons */}
<section className="univ-section" id="patrons">
  <div className="container">
    <div className="univ-section-header text-center">
      <span className="univ-sub-badge">LEADERSHIP</span>
      <h2 className="univ-section-title">Our Patrons</h2>
      <div className="header-divider"></div>
    </div>

    <div className="patrons-official-grid">

      {/* Dr. K.M. Vasudevan Pillai */}
      <div className="patron-official-box">
        <div className="patron-initial-crest">
          <img
            src={patronKMPillai}
            alt="Dr. K.M. Vasudevan Pillai"
            className="patron-photo"
          />
        </div>

        <div className="patron-info">
          <h3>Dr. K.M. Vasudevan Pillai</h3>
          <p className="patron-official-role">
            President, Pillai University
          </p>
        </div>
      </div>

      {/* Dr. Daphne Pillai */}
      <div className="patron-official-box">
        <div className="patron-initial-crest">
          <img
            src={patronDaphne}
            alt="Dr. Daphne Pillai"
            className="patron-photo"
          />
        </div>

        <div className="patron-info">
          <h3>Dr. Daphne Pillai</h3>
          <p className="patron-official-role">
            Executive President, Pillai University
          </p>
        </div>
      </div>

      {/* Dr. Priam Pillai */}
      <div className="patron-official-box">
        <div className="patron-initial-crest">
          <img
            src={patronPriam}
            alt="Dr. Priam Pillai"
            className="patron-photo"
          />
        </div>

        <div className="patron-info">
          <h3>Dr. Priam Pillai</h3>
          <p className="patron-official-role">
            Vice-Chancellor, Pillai University
          </p>
        </div>
      </div>

      {/* Mr. Franav Pillai */}
      <div className="patron-official-box">
        <div className="patron-initial-crest">
          <img
            src={patronFranav}
            alt="Mr. Franav Pillai"
            className="patron-photo"
          />
        </div>

        <div className="patron-info">
          <h3>Mr. Franav Pillai</h3>
          <p className="patron-official-role">
            Deputy CEO, Mahatma Education Society
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
      {/* Conveners & Organizing Team */}
      <section className="univ-section bg-light-alt" id="committee">
        <div className="container">
          <div className="univ-section-header text-center">
            <span className="univ-sub-badge">ACADEMIC STEERING</span>
            <h2 className="univ-section-title">Conveners</h2>
            <div className="header-divider"></div>
          </div>

          <div className="conveners-official-row">
            {conferenceData.conveners.map((conv, idx) => (
              <div className="convener-official-card" key={conv.name}>
                {/* <span className="conv-index">0{idx + 1}</span> */}
                <div className="convener-photo">
                  <img
                    src={convenerImages[idx]}
                    alt={conv.name}
                    className="convener-photo-img"
                  />
                </div>
                <div className="convener-info">
                  <span className="conv-tag">CONVENER</span>
                  <h3>{conv.name}</h3>
                  <p>{conv.role}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Organizing Team */}
          <div className="organizing-official-wrapper" style={{ marginTop: "40px" }}>
            <div className="univ-section-header text-center" style={{ marginBottom: "25px" }}>
              <h3 className="univ-section-title" style={{ fontSize: "24px" }}>Organizing Team</h3>
            </div>
            <div className="organizing-official-grid">
              {conferenceData.organizingTeam.map((member) => (
                <div className="org-member-card" key={member.email}>
                  <div className="member-name-row">
                    <h4>{member.name}</h4>
                    <span className="team-pill">Organizing Team</span>
                  </div>
                  <div className="member-contacts">
                    <a href={`tel:${member.phone}`} className="member-phone">
                      📞 {member.phone}
                    </a>
                    <a href={`mailto:${member.email}`} className="member-email">
                      ✉ {member.email}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
