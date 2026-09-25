import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function TrackCard({ id, code, title, tagline, topics, chair, onSelectTrackForSubmit }) {
  const [expanded, setExpanded] = useState(false);

  const displayedTopics = expanded ? topics : topics.slice(0, 4);

  return (
    <div className="track-card-v2">
      <div className="track-card-top-row">
        <span className="track-code-badge">{code || `TRACK 0${id}`}</span>
        <span className="track-topic-count">{topics.length} Sub-Domains</span>
      </div>

      <h3 className="track-title">{title}</h3>
      {tagline && <p className="track-tagline">{tagline}</p>}

      {chair && (
        <div className="track-chair-info">
          <small>Track Convener:</small>
          <span>{chair}</span>
        </div>
      )}

      <div className="track-topics-container">
        <span className="topics-heading">Key Research Areas:</span>
        <ul className="track-topic-pills">
          {displayedTopics.map((topic, i) => (
            <li key={topic}>
              <span className="topic-bullet">✦</span>
              <span>{topic}</span>
            </li>
          ))}
        </ul>

        {topics.length > 4 && (
          <button
            type="button"
            className="toggle-topics-btn"
            onClick={() => setExpanded(!expanded)}
          >
            {expanded ? "Show Less ↑" : `+ View ${topics.length - 4} more topics ↓`}
          </button>
        )}
      </div>

      <div className="track-card-actions">
        <button
          type="button"
          className="primary-btn btn-sm"
          onClick={() => {
            if (onSelectTrackForSubmit) onSelectTrackForSubmit(id);
          }}
        >
          Submit Paper in Track 0{id} →
        </button>
        <Link to="/call-for-papers" className="btn-link-sm">
          Guidelines & Details
        </Link>
      </div>
    </div>
  );
}