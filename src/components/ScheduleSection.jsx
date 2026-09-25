import React, { useState } from "react";
import { conferenceData } from "../data/conferenceData";

export default function ScheduleSection() {
  const [filter, setFilter] = useState("all");

  const filterEvents = () => {
    if (filter === "keynote") {
      return conferenceData.scheduleTimeline.filter(
        (item) => item.title.toLowerCase().includes("keynote") || item.title.toLowerCase().includes("inaugural")
      );
    }
    if (filter === "tracks") {
      return conferenceData.scheduleTimeline.filter((item) => item.title.toLowerCase().includes("parallel"));
    }
    if (filter === "awards") {
      return conferenceData.scheduleTimeline.filter(
        (item) => item.title.toLowerCase().includes("valedictory") || item.title.toLowerCase().includes("panel")
      );
    }
    return conferenceData.scheduleTimeline;
  };

  const filteredItems = filterEvents();

  const handleDownloadSchedule = () => {
    let scheduleText = `PILLAI PRISM 2026 - OFFICIAL PROGRAM SCHEDULE\nDate: 19 December 2026 (Saturday)\nVenue: Dr. K. M. Vasudevan Pillai Campus, Panvel, Navi Mumbai (Hybrid Mode)\n\n`;
    conferenceData.scheduleTimeline.forEach((item, idx) => {
      scheduleText += `[${item.time}] ${item.title}\nLocation: ${item.location}\nDetails: ${item.description}\n\n`;
    });

    const blob = new Blob([scheduleText], { type: "text/plain;charset=utf-8" });
    const link = document.createElement("a");
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute("download", "Pillai_PRISM_2026_Schedule.txt");
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="section schedule-section" id="schedule">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">PROGRAM ITINERARY</p>
          <h2>Conference Schedule (19 Dec 2026)</h2>
          <p className="section-subtitle">
            A power-packed day featuring inaugural addresses, international plenary keynotes, 5 parallel presentation tracks, panel discussions, and best paper awards.
          </p>
        </div>

        {/* Schedule Filter Tabs */}
        <div className="schedule-tabs-row">
          <div className="schedule-filter-tabs">
            <button
              className={`filter-tab-btn ${filter === "all" ? "active" : ""}`}
              onClick={() => setFilter("all")}
            >
              Full Day Itinerary
            </button>
            <button
              className={`filter-tab-btn ${filter === "keynote" ? "active" : ""}`}
              onClick={() => setFilter("keynote")}
            >
              Keynotes & Inaugural
            </button>
            <button
              className={`filter-tab-btn ${filter === "tracks" ? "active" : ""}`}
              onClick={() => setFilter("tracks")}
            >
              Parallel Paper Tracks
            </button>
            <button
              className={`filter-tab-btn ${filter === "awards" ? "active" : ""}`}
              onClick={() => setFilter("awards")}
            >
              Panel & Valedictory
            </button>
          </div>

          <button className="secondary-btn download-sched-btn" onClick={handleDownloadSchedule}>
            📥 Download Program Schedule (.TXT)
          </button>
        </div>

        {/* Timeline Flow */}
        <div className="schedule-timeline-grid">
          {filteredItems.map((slot, index) => (
            <div className="schedule-card" key={slot.time + index}>
              <div className="schedule-time-block">
                <span className="time-badge">🕒 {slot.time}</span>
                <span className="location-pill">📍 {slot.location}</span>
              </div>

              <div className="schedule-content-block">
                <h3>{slot.title}</h3>
                <p>{slot.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

