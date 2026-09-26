import React from "react";
import { conferenceData } from "../data/conferenceData";

export default function Contact() {
  const coordinators = [
    {
      name: "Dr. Nikita Bahaley",
      role: "Organizing Team Coordinator",
      phone: "9763271245",
      email: "nikitabahaley@mes.ac.in",
    },
    {
      name: "Dr. Nisha Yadav",
      role: "Organizing Team Coordinator",
      phone: "9967506362",
      email: "nishayadav@mes.ac.in",
    },
  ];

  const officialEmail = conferenceData?.email || "icetes2025@mes.ac.in";

  // Clean Gmail URL generator with standard Subject line only
  const getGmailComposeUrl = (recipientEmail) => {
    const encodedEmail = encodeURIComponent(recipientEmail);
    const encodedSubject = encodeURIComponent("Conference Inquiry");
    
    return `https://mail.google.com/mail/?view=cm&fs=1&to=${encodedEmail}&su=${encodedSubject}`;
  };

  return (
    <>
      {/* Page Hero Header */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">SECRETARIAT & HELPDESK</span>
          <h1>Contact Secretariat</h1>
          <p className="inner-hero-desc">
            Get in touch with the conference team for paper submission assistance, registration queries, and venue travel directions.
          </p>
        </div>
      </section>

      {/* Main Showcase Section */}
      <section className="univ-section" id="contact-info">
        <div className="container" style={{ maxWidth: "1140px", margin: "0 auto" }}>
          
          {/* Official Conference Desk Banner */}
          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
              padding: "26px 32px",
              marginBottom: "36px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.04)",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: "20px",
            }}
          >
            <div>
              <span
                style={{
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#64748b",
                  textTransform: "uppercase",
                  letterSpacing: "0.6px",
                }}
              >
                Official Conference Desk
              </span>
              <h3
                style={{
                  margin: "4px 0 0 0",
                  fontSize: "21px",
                  color: "#0f172a",
                  fontWeight: "700",
                }}
              >
                General Inquiry & Submissions
              </h3>
            </div>

            {/* Official Email Link */}
            <a
              href={getGmailComposeUrl(officialEmail)}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "10px",
                background: "#fef2f2",
                border: "1px solid #fecaca",
                padding: "10px 18px",
                borderRadius: "8px",
                color: "#d92323",
                fontWeight: "700",
                fontSize: "15px",
                textDecoration: "none",
                transition: "all 0.2s ease",
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#d92323"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              {officialEmail}
            </a>
          </div>

          {/* Section Header */}
          <div style={{ marginBottom: "20px" }}>
            <span className="univ-sub-badge" style={{ fontSize: "11px", marginBottom: "4px" }}>
              DIRECT ASSISTANCE
            </span>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", margin: "4px 0 2px 0" }}>
              Organizing Team Helplines
            </h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0 }}>
              Reach out to our event coordinators for immediate queries:
            </p>
          </div>

          {/* Coordinators Cards Grid */}
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
              gap: "24px",
              marginBottom: "40px",
            }}
          >
            {coordinators.map((person, index) => (
              <div
                key={index}
                style={{
                  background: "#ffffff",
                  borderRadius: "14px",
                  border: "1px solid #e2e8f0",
                  padding: "26px",
                  boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
                  display: "flex",
                  flexDirection: "column",
                  gap: "12px",
                }}
              >
                <div>
                  <h4 style={{ fontSize: "19px", fontWeight: "700", color: "#0f172a", margin: "0 0 2px 0" }}>
                    {person.name}
                  </h4>
                  <span style={{ fontSize: "13px", color: "#64748b", fontWeight: "500" }}>
                    {person.role}
                  </span>
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: "10px", marginTop: "6px" }}>
                  {/* Phone Direct Dialing */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ background: "#fef2f2", padding: "8px", borderRadius: "8px", display: "flex" }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d92323"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                      </svg>
                    </div>
                    <a
                      href={`tel:+91${person.phone}`}
                      style={{ fontSize: "15px", fontWeight: "700", color: "#0f172a", textDecoration: "none" }}
                    >
                      +91 {person.phone}
                    </a>
                  </div>

                  {/* Standard Direct Mailto Link */}
                  <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                    <div style={{ background: "#fef2f2", padding: "8px", borderRadius: "8px", display: "flex" }}>
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="#d92323"
                        strokeWidth="2.2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                        <polyline points="22,6 12,13 2,6"></polyline>
                      </svg>
                    </div>
                    <a
                      href={`mailto:${person.email}`}
                      style={{ fontSize: "14.5px", fontWeight: "600", color: "#d92323", textDecoration: "none" }}
                    >
                      {person.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Campus Location & Travel Details */}
          <div style={{ marginBottom: "20px" }}>
            <span className="univ-sub-badge" style={{ fontSize: "11px", marginBottom: "4px" }}>
              VENUE DETAILS
            </span>
            <h3 style={{ fontSize: "20px", fontWeight: "700", color: "#0f172a", margin: "4px 0 2px 0" }}>
              Campus Location & Travel Info
            </h3>
            <p style={{ fontSize: "13.5px", color: "#64748b", margin: 0 }}>
              Directions for visiting delegates and participants:
            </p>
          </div>

          <div
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              border: "1px solid #e2e8f0",
              padding: "26px",
              boxShadow: "0 4px 14px rgba(0,0,0,0.04)",
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "28px",
            }}
          >
            {/* Address Card */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#eff6ff", padding: "8px", borderRadius: "8px", display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0056b3"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                </div>
                <h4 style={{ margin: 0, fontSize: "17px", color: "#0f172a", fontWeight: "700" }}>
                  Campus Address
                </h4>
              </div>
              <p style={{ margin: 0, fontSize: "14px", color: "#475569", lineHeight: "1.6" }}>
                Pillai College of Engineering (PCE), Dr. K. M. Vasudevan Pillai Campus, Sector 16, New Panvel East, Navi Mumbai, Maharashtra 410206
              </p>
              <div style={{ marginTop: "4px" }}>
                <a
                  href="https://maps.google.com/?q=Dr.+K.+M.+Vasudevan+Pillai+Campus+Panvel"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    fontSize: "14px",
                    fontWeight: "700",
                    color: "#0056b3",
                    textDecoration: "none",
                  }}
                >
                </a>
              </div>
            </div>

            {/* Transit Access */}
            <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <div style={{ background: "#eff6ff", padding: "8px", borderRadius: "8px", display: "flex" }}>
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#0056b3"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect x="1" y="3" width="15" height="13"></rect>
                    <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
                    <circle cx="5.5" cy="18.5" r="2.5"></circle>
                    <circle cx="18.5" cy="18.5" r="2.5"></circle>
                  </svg>
                </div>
                <h4 style={{ margin: 0, fontSize: "17px", color: "#0f172a", fontWeight: "700" }}>
                  Transit Details
                </h4>
              </div>
              <ul style={{ margin: 0, paddingLeft: "20px", fontSize: "14px", color: "#475569", lineHeight: "1.7" }}>
                <li><strong>Nearest Railway Station:</strong> Panvel Railway Station (~2.5 km)</li>
                <li><strong>Nearest Airport:</strong>Navi Mumbai International Airport (NMIA) (~10 km)</li>
              </ul>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
