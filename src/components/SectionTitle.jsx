import React from "react";

export default function SectionTitle({ label, title, subtitle, center = false }) {
  return (
    <div className={`section-heading ${center ? "text-center" : ""}`}>
      {label && <p className="section-label">{label}</p>}
      {title && <h2>{title}</h2>}
      {subtitle && <p className="section-subtitle">{subtitle}</p>}
    </div>
  );
}

