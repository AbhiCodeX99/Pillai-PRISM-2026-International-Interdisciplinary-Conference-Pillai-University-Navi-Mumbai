  import React, { useState, useEffect } from "react";
  import { Link } from "react-router-dom";
  import { conferenceData } from "../data/conferenceData";
  import mainbg from "../assets/mainbg.jpeg";

  export default function Hero({ onOpenSubmission, onOpenTracker }) {
    const targetDate = new Date("2026-10-10T23:59:59+05:30").getTime();

    const [timeLeft, setTimeLeft] = useState({
      days: "24",
      hours: "23",
      minutes: "20",
      seconds: "55",
    });

    // Countdown timer
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
        {/* Background Campus Photo */}
        <div className="hero-bg-container">
          <img
            src={mainbg}
            alt="Pillai University Dr. K. M. Vasudevan Pillai Campus"
            className="hero-bg-photo"
          />
          <div className="hero-bg-vignette"></div>
        </div>

        <div className="hero-split-container">
          {/* Left Side: 53% Clear to reveal the campus entrance & scenery */}
          <div className="hero-clear-left">
            <div className="hero-campus-caption">
              <span className="campus-caption-badge"> Dr. K. M. Vasudevan Pillai Campus</span>
              <span className="campus-caption-loc">Panvel, Navi Mumbai</span>
            </div>
          </div>

          {/* Right Side: 44% Slant Cut tinted with 40% #c4242d gradient */}
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
            <div className="hero-pane-inner">
              {/* Pillai Collab Header */}
              <div className="hero-pane-kicker">
                <span className="kicker-pillai">PILLAI UNIVERSITY</span>
                <span className="kicker-sep">|</span>
                <span className="kicker-collab">School of Computing & School of Business</span>
              </div>

              {/* Conference Title & Subtext */}
              <h1 className="hero-right-title">
                {conferenceData.name}
              </h1>

            <br></br>

              {/* Theme Quote */}
              <div className="hero-right-theme-box">
                <span className="theme-box-label">INTERNATIONAL CONFERENCE ON</span>
                <p className="theme-box-text">{conferenceData.theme}</p>
              </div>
            <br></br>
              {/* Meta Row: Date, Mode, Location */}
              <div className="hero-right-meta-grid">
                <div className="hero-meta-pill">
                  <span className="meta-pill-icon"></span>
                  <div className="meta-pill-content">
                    <span className="meta-pill-lbl">DATE</span>
                    <strong className="meta-pill-val">{conferenceData.date}</strong>
                  </div>
                </div>

                <div className="hero-meta-pill">
                  <span className="meta-pill-icon"></span>
                  <div className="meta-pill-content">
                    <span className="meta-pill-lbl">MODE</span>
                    <strong className="meta-pill-val">{conferenceData.mode} Mode</strong>
                  </div>
                </div>

                <div className="hero-meta-pill">
                  <span className="meta-pill-icon"></span>
                  <div className="meta-pill-content">
                    <span className="meta-pill-lbl">LOCATION</span>
                    <strong className="meta-pill-val">Panvel, Navi Mumbai</strong>
                  </div>
                </div>
              </div>
  <br></br>
              {/* Countdown Clock */}
              <div className="hero-right-countdown">
                <div className="countdown-headline">
                  <span className="countdown-pulse-dot"></span>
                  <span>Abstract Submission Closes in:</span>
                </div>
                <div className="countdown-blocks-row">
                  <div className="c-block">
                    <span className="c-val">{timeLeft.days}</span>
                    <span className="c-lbl">DAYS</span>
                  </div>
                  <span className="c-colon">:</span>
                  <div className="c-block">
                    <span className="c-val">{timeLeft.hours}</span>
                    <span className="c-lbl">HOURS</span>
                  </div>
                  <span className="c-colon">:</span>
                  <div className="c-block">
                    <span className="c-val">{timeLeft.minutes}</span>
                    <span className="c-lbl">MINS</span>
                  </div>
                  <span className="c-colon">:</span>
                  <div className="c-block">
                    <span className="c-val">{timeLeft.seconds}</span>
                    <span className="c-lbl">SECS</span>
                  </div>
                </div>
              </div>

            
            </div>
          </div>
        </div>
      </section>
    );
  }