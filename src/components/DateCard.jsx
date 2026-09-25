import React from "react";
import { generateGoogleCalendarUrl, downloadIcsFile } from "../utils/calendarHelper";

export default function DateCard({ date, month, rawDate, title, status, badge, description, details }) {
  const handleGoogleCalendar = (e) => {
    e.stopPropagation();
    const url = generateGoogleCalendarUrl({
      title: `Pillai PRISM 2026: ${title}`,
      description: `${description || title}\n\nPillai PRISM 2026 - International Conference at Pillai University, Navi Mumbai.`,
      location: "Dr. K. M. Vasudevan Pillai Campus, New Panvel, Navi Mumbai",
      startDate: rawDate || "2026-10-04T09:00:00+05:30",
      endDate: rawDate || "2026-10-04T18:00:00+05:30",
    });
    window.open(url, "_blank");
  };

  const handleIcsDownload = (e) => {
    e.stopPropagation();
    downloadIcsFile({
      title: `Pillai PRISM 2026: ${title}`,
      description: `${description || title}\nPillai PRISM 2026 - International Hybrid Conference.`,
      location: "Dr. K. M. Vasudevan Pillai Campus, New Panvel, Navi Mumbai",
      startDate: rawDate || "2026-10-04T09:00:00+05:30",
      endDate: rawDate || "2026-10-04T18:00:00+05:30",
      filename: `PRISM_2026_${title.replace(/\s+/g, "_")}.ics`,
    });
  };

  return (
    <div className={`date-card-v2 ${status === "Priority" ? "priority-card" : ""}`}>
      {badge && <span className="date-badge-tag">{badge}</span>}

      <div className="date-number-wrap">
        <span className="date-num">{date}</span>
        <span className="date-mon">{month}</span>
      </div>

      <div className="date-text-content">
        <h3>{title}</h3>
        {description && <p className="date-desc">{description}</p>}
      </div>

      <div className="date-calendar-actions">
        <button
          type="button"
          className="cal-btn gcal-btn"
          title="Add this deadline to Google Calendar"
          onClick={handleGoogleCalendar}
        >
          📅 Add to Google Calendar
        </button>

        <button
          type="button"
          className="cal-btn ics-btn"
          title="Download Apple / Outlook .iCal file"
          onClick={handleIcsDownload}
        >
          ⬇ .iCal
        </button>
      </div>
    </div>
  );
}