import React, { useState } from "react";
import { conferenceData } from "../data/conferenceData";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState(0);
  const [queryName, setQueryName] = useState("");
  const [queryEmail, setQueryEmail] = useState("");
  const [queryQuestion, setQueryQuestion] = useState("");
  const [querySubmitted, setQuerySubmitted] = useState(false);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const handleQuerySubmit = (e) => {
    e.preventDefault();
    if (!queryName || !queryEmail || !queryQuestion) {
      alert("Please enter your name, email and question.");
      return;
    }
    setQuerySubmitted(true);
    setTimeout(() => {
      setQueryName("");
      setQueryEmail("");
      setQueryQuestion("");
    }, 1000);
  };

  return (
    <section className="section faq-section" id="faqs">
      <div className="container">
        <div className="section-heading text-center">
          <p className="section-label">FREQUENTLY ASKED QUESTIONS</p>
          <h2>Author & Delegate Helpdesk</h2>
          <p className="section-subtitle">
            Find immediate answers regarding paper submission guidelines, registration fees, hybrid modes, and proceedings.
          </p>
        </div>

        <div className="faq-layout-grid">
          {/* FAQ Accordion */}
          <div className="faq-accordion-column">
            {conferenceData.faqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.q}
                  className={`faq-item-card ${isOpen ? "active" : ""}`}
                  onClick={() => toggleFaq(index)}
                >
                  <div className="faq-item-header">
                    <span className="faq-q-number">Q{index + 1}</span>
                    <h3>{faq.q}</h3>
                    <span className="faq-toggle-icon">{isOpen ? "−" : "+"}</span>
                  </div>
                  {isOpen && (
                    <div className="faq-item-body">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Ask a Question Box */}
          <div className="faq-ask-column">
            <div className="ask-question-card">
              <div className="ask-header">
                <span className="ask-badge">✉ DIRECT HELPDESK</span>
                <h3>Have a Specific Query?</h3>
                <p>Submit your question directly to the PRISM 2026 Organizing Secretariat.</p>
              </div>

              {querySubmitted ? (
                <div className="query-success-box">
                  <span className="success-icon">✓</span>
                  <h4>Query Submitted Successfully!</h4>
                  <p>Our organizing team will respond to your registered email within 24 hours.</p>
                  <button
                    type="button"
                    className="secondary-btn btn-sm"
                    onClick={() => setQuerySubmitted(false)}
                  >
                    Send Another Query
                  </button>
                </div>
              ) : (
                <form onSubmit={handleQuerySubmit} className="ask-form">
                  <div className="form-group">
                    <label>Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Prof. Arvind Mehta"
                      value={queryName}
                      onChange={(e) => setQueryName(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="e.g. arvind@domain.edu"
                      value={queryEmail}
                      onChange={(e) => setQueryEmail(e.target.value)}
                    />
                  </div>

                  <div className="form-group">
                    <label>Your Question or Inquiry *</label>
                    <textarea
                      rows={3}
                      required
                      placeholder="Ask about submission status, registration receipt, hotel recommendations, or hybrid links..."
                      value={queryQuestion}
                      onChange={(e) => setQueryQuestion(e.target.value)}
                    ></textarea>
                  </div>

                  <button type="submit" className="primary-btn full-btn">
                    Submit Inquiry to Secretariat →
                  </button>
                </form>
              )}

              <div className="quick-contact-strip">
                <div>
                  <span>Direct Secretariat Email:</span>
                  <strong>{conferenceData.email}</strong>
                </div>
                <div>
                  <span>Helpline WhatsApp:</span>
                  <strong>{conferenceData.helpline}</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

