import React from "react";

export default function ObjectiveCard({ number, title, tag, description }) {
  return (
    <div className="objective-card-v2">
      <div className="objective-card-header">
        <span className="objective-num">{number}</span>
        {tag && <span className="objective-tag">{tag}</span>}
      </div>

      <h3 className="objective-title">{title}</h3>
      <p className="objective-desc">{description}</p>
    </div>
  );
}