import React, { useState } from "react";

/**
 * ExpandableText
 * Provides an accessible, sleek "Read more" / "Show less" toggle for large walls of text.
 * By default with `mobileOnly={true}`, it truncates only on mobile viewports (<=768px),
 * keeping desktop layout, proportions, and look 100% intact.
 */
export default function ExpandableText({
  text,
  children,
  limit = 160,
  className = "",
  wrapperClassName = "",
  mobileOnly = true,
  as = "p",
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const content = text || children;

  const Component = as;

  if (!content || typeof content !== "string") {
    return <Component className={className}>{content}</Component>;
  }

  // If text is short, no need for toggle
  if (content.length <= limit) {
    return <Component className={className}>{content}</Component>;
  }

  return (
    <div className={`expandable-text-wrapper ${mobileOnly ? "mobile-only-expander" : ""} ${wrapperClassName}`}>
      <Component
        className={`expandable-text-content ${className} ${
          !isExpanded ? "is-collapsed" : "is-expanded"
        }`}
      >
        {isExpanded ? content : `${content.slice(0, limit).trim()}…`}
      </Component>

      {/* Desktop full text view when mobileOnly is enabled */}
      {mobileOnly && (
        <Component className={`expandable-text-desktop-full ${className}`}>
          {content}
        </Component>
      )}

      <button
        type="button"
        className={`expandable-toggle-btn ${mobileOnly ? "mobile-only-btn" : ""}`}
        onClick={() => setIsExpanded(!isExpanded)}
        aria-expanded={isExpanded}
        aria-label={isExpanded ? "Collapse expanded text" : "Expand full text"}
      >
        <span>{isExpanded ? "Show less" : "Read more"}</span>
        <span className="expandable-chevron" aria-hidden="true">
          {isExpanded ? "▴" : "▾"}
        </span>
      </button>
    </div>
  );
}
