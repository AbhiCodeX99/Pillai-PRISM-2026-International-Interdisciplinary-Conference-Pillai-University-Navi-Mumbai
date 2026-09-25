import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { conferenceData } from "../data/conferenceData";
import mainbg from "../assets/mainbg.jpeg";
import brochurePdf from "../assets/Pillai PRISM 2026.pdf";

export default function Hero({ onOpenSubmission, onOpenTracker }) {
  const targetDate = new Date("2026-10-04T23:59:59+05:30").getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: "24",
    hours: "23",
    minutes: "20",
    seconds: "55",
  });

  // Countdown timer logic
  useEffect(() => {
    const calculateTime = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance > 0) {
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setTimeLeft({
          days: String(days).padStart(2, "0"),
          hours: String(hours).padStart(2, "0"),
          minutes: String(minutes).padStart(2, "0"),
          seconds: String(seconds).padStart(2, "0"),
        });
      } else {
        setTimeLeft({ days: "00", hours: "00", minutes: "00", seconds: "00" });
      }
    };

    calculateTime();
    const timer = setInterval(calculateTime, 1000);
    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <section className="futureaxis-hero-section">
      {/* Campus Scenery Background */}
      <div className="hero-bg-container">
        <img
          src={mainbg}
          alt="Pillai University Dr. K. M. Vasudevan Pillai Campus"
          className="hero-bg-photo"
        />
        <div className="hero-bg-vignette"></div>
      </div>

      <div className="hero-split-container">
        {/* Left Clear Pane */}
        <div className="hero-clear-left">
          <div className="hero-campus-caption">
            <span className="campus-caption-badge">Dr. K. M. Vasudevan Pillai Campus</span>
            <span className="campus-caption-loc">Panvel, Navi Mumbai</span>
          </div>
        </div>

        {/* Right Tinted Slant Pane */}
        <div className="hero-tinted-right-pane">
          <svg
            className="hero-slant-divider-svg"
            preserveAspectRatio="none"
            viewBox="0 0 60 100"
            aria-hidden="true"
          >
            <line
              x1="60"
              y1="0"
              x2="0"
              y2="100"
              stroke="rgba(255, 255, 255, 0.35)"
              strokeWidth="1.5"
              vectorEffect="non-scaling-stroke"
            />
          </svg>

          <div className="hero-pane-inner" style={{ padding: "32px 24px", color: "#ffffff" }}>
            {/* Institution Kicker */}
            <div className="hero-pane-kicker" style={{ marginBottom: "12px" }}>
              <span className="kicker-pillai" style={{ fontWeight: "700", letterSpacing: "1px" }}>
                PILLAI UNIVERSITY
              </span>
              <span className="kicker-sep" style={{ margin: "0 8px", color: "#fbbf24" }}>•</span>
              <span className="kicker-collab" style={{ opacity: 0.9 }}>
                School of Computing & School of Business
              </span>
            </div>

            {/* Conference Main Title */}
            <h1 className="hero-right-title" style={{ fontSize: "34px", fontWeight: "800", margin: "0 0 20px 0", letterSpacing: "0.5px" }}>
              {conferenceData.name}
            </h1>

            {/* Theme Box with Left Gold Accent Line */}
            <div
              className="hero-right-theme-box"
              style={{
                borderLeft: "4px solid #fbbf24",
                paddingLeft: "16px",
                marginBottom: "24px",
                textAlign: "left"
              }}
            >
              <span
                style={{
                  display: "block",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#fbbf24",
                  letterSpacing: "1.2px",
                  marginBottom: "4px",
                  textTransform: "uppercase"
                }}
              >
                INTERNATIONAL CONFERENCE ON
              </span>
              <p
                style={{
                  fontSize: "15px",
                  fontStyle: "italic",
                  fontWeight: "500",
                  lineHeight: "1.4",
                  margin: 0,
                  color: "#ffffff"
                }}
              >
                "{conferenceData.theme}"
              </p>
            </div>

            {/* Meta Info Grid */}
            <div
              className="hero-right-meta-grid"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: "16px",
                marginBottom: "24px",
                textAlign: "left"
              }}
            >
              <div>
                <span style={{ display: "block", fontSize: "11px", color: "#fbbf24", fontWeight: "700", letterSpacing: "0.8px" }}>
                  DATE
                </span>
                <strong style={{ fontSize: "14px", color: "#ffffff", fontWeight: "600" }}>
                  {conferenceData.date}
                </strong>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "11px", color: "#fbbf24", fontWeight: "700", letterSpacing: "0.8px" }}>
                  MODE
                </span>
                <strong style={{ fontSize: "14px", color: "#ffffff", fontWeight: "600" }}>
                  {conferenceData.mode} Mode
                </strong>
              </div>

              <div>
                <span style={{ display: "block", fontSize: "11px", color: "#fbbf24", fontWeight: "700", letterSpacing: "0.8px" }}>
                  LOCATION
                </span>
                <strong style={{ fontSize: "14px", color: "#ffffff", fontWeight: "600" }}>
                  Panvel, Navi Mumbai
                </strong>
              </div>
            </div>

            {/* Countdown Section */}
            <div className="hero-right-countdown" style={{ marginBottom: "20px", textAlign: "left" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  fontSize: "12px",
                  fontWeight: "700",
                  color: "#fbbf24",
                  letterSpacing: "0.8px",
                  marginBottom: "12px",
                  textTransform: "uppercase"
                }}
              >
                <span
                  style={{
                    width: "7px",
                    height: "7px",
                    backgroundColor: "#fbbf24",
                    borderRadius: "50%",
                    display: "inline-block"
                  }}
                ></span>
                <span>ABSTRACT SUBMISSION CLOSES IN:</span>
              </div>

              {/* Number Row */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "14px",
                  fontFamily: "monospace"
                }}
              >
                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: "26px", fontWeight: "800", color: "#ffffff" }}>{timeLeft.days}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "600", letterSpacing: "1px" }}>DAYS</span>
                </div>
                <span style={{ fontSize: "22px", color: "#fbbf24", fontWeight: "700", marginBottom: "12px" }}>:</span>

                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: "26px", fontWeight: "800", color: "#ffffff" }}>{timeLeft.hours}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "600", letterSpacing: "1px" }}>HOURS</span>
                </div>
                <span style={{ fontSize: "22px", color: "#fbbf24", fontWeight: "700", marginBottom: "12px" }}>:</span>

                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: "26px", fontWeight: "800", color: "#ffffff" }}>{timeLeft.minutes}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "600", letterSpacing: "1px" }}>MINS</span>
                </div>
                <span style={{ fontSize: "22px", color: "#fbbf24", fontWeight: "700", marginBottom: "12px" }}>:</span>

                <div style={{ textAlign: "center" }}>
                  <span style={{ display: "block", fontSize: "26px", fontWeight: "800", color: "#ffffff" }}>{timeLeft.seconds}</span>
                  <span style={{ fontSize: "10px", color: "rgba(255, 255, 255, 0.7)", fontWeight: "600", letterSpacing: "1px" }}>SECS</span>
                </div>
              </div>
            </div>

            {/* Same Theme Background Button (Exact Width Aligning to Countdown Text) */}
            <div style={{ display: "flex", justifyContent: "flex-start", marginTop: "16px" }}>
              <a
                href={brochurePdf}
                download="Pillai PRISM 2026.pdf"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "8px",
                  padding: "9px 18px",
                  backgroundColor: "rgba(255, 255, 255, 0.08)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  color: "#ffffff",
                  fontSize: "13px",
                  fontWeight: "700",
                  borderRadius: "12px",
                  textDecoration: "none",
                  border: "1px solid rgba(255, 255, 255, 0.2)",
                  boxShadow: "0 4px 12px rgba(0, 0, 0, 0.2)",
                  width: "100%",
                  maxWidth: "250px",
                  transition: "all 0.3s ease"
                }}
              >
                <span style={{ fontSize: "14px" }}></span>Download Conference Brochure
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
