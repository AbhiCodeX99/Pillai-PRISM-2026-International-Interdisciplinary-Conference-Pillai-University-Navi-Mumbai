export function generateGoogleCalendarUrl({ title, description, location, startDate, endDate }) {
  const formatTime = (dateStr) => {
    const d = new Date(dateStr);
    return d.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const start = formatTime(startDate || "2026-12-19T09:00:00+05:30");
  const end = formatTime(endDate || "2026-12-19T18:00:00+05:30");

  const url = new URL("https://calendar.google.com/calendar/render");
  url.searchParams.set("action", "TEMPLATE");
  url.searchParams.set("text", title || "Pillai PRISM 2026 Conference");
  url.searchParams.set("dates", `${start}/${end}`);
  url.searchParams.set("details", description || "Pillai PRISM 2026 - International Conference on Emerging Technologies and Sustainable Development");
  url.searchParams.set("location", location || "Dr. K. M. Vasudevan Pillai Campus, New Panvel, Navi Mumbai");

  return url.toString();
}

export function downloadIcsFile({ title, description, location, startDate, endDate, filename = "pillai-prism-2026.ics" }) {
  const formatIcsTime = (dateStr) => {
    const d = new Date(dateStr);
    return d.toISOString().replace(/-|:|\.\d+/g, "");
  };

  const start = formatIcsTime(startDate || "2026-12-19T09:00:00+05:30");
  const end = formatIcsTime(endDate || "2026-12-19T18:00:00+05:30");

  const icsContent = [
    "BEGIN:VCALENDAR",
    "VERSION:2.0",
    "PRODID:-//Pillai University//PRISM 2026//EN",
    "CALSCALE:GREGORIAN",
    "METHOD:PUBLISH",
    "BEGIN:VEVENT",
    `SUMMARY:${title}`,
    `DESCRIPTION:${description}`,
    `LOCATION:${location}`,
    `DTSTART:${start}`,
    `DTEND:${end}`,
    `STATUS:CONFIRMED`,
    "END:VEVENT",
    "END:VCALENDAR"
  ].join("\r\n");

  const blob = new Blob([icsContent], { type: "text/calendar;charset=utf-8" });
  const link = document.createElement("a");
  link.href = window.URL.createObjectURL(blob);
  link.setAttribute("download", filename);
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

