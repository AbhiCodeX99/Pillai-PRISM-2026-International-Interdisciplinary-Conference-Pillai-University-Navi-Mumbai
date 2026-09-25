import React from "react";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import { datesData } from "../data/datesData";
import { conferenceData } from "../data/conferenceData";
import { generateGoogleCalendarUrl, downloadIcsFile } from "../utils/calendarHelper";

export default function ImportantDates() {
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

      {/* Page Hero */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">CONFERENCE TIMELINE</span>
          <h1>Important Deadline & Dates</h1>
          <p className="inner-hero-desc">
            Keep track of all submission deadlines, acceptance intimations, registration cut-offs, and the conference date.
          </p>
        </div>
      </section>

      {/* Dates Grid */}
      <section className="univ-section" id="dates-schedule">
        <div className="container">
          <div className="dates-cards-official-row">
            {datesData.map((d) => (
              <div className="date-official-box" key={d.id}>
                <div className="date-head-block">
                  <span className="d-day">{d.date}</span>
                  <span className="d-month">{d.month}</span>
                </div>
                <div className="date-body-block">
                  <h4>{d.title}</h4>
                  <div className="date-sync-btns">
                    {/* <button
                      type="button"
                      className="cal-action-btn"
                      onClick={() => handleGoogleCalendar(d)}
                      title="Add to Google Calendar"
                    >
                      📅 Google Calendar
                    </button>
                    <button
                      type="button"
                      className="cal-action-btn"
                      onClick={() => handleIcsDownload(d)}
                      title="Download .iCal file"
                    >
                      ⬇ .iCal
                    </button> */}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="submission-official-email-banner">
            <div className="email-banner-text">
              <strong>Abstract and Full Research Paper to be submitted to:</strong>
              <a href={`mailto:${conferenceData.email}`} className="official-email-link">
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

    </>
  );
}
