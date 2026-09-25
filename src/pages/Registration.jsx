import React, { useState } from "react";
import { useRegistration } from "../components/SiteLayout";
// import PaperSubmissionModal from "../components/PaperSubmissionModal";
// import PaperStatusModal from "../components/PaperStatusModal.jsx";
import { conferenceData } from "../data/conferenceData";

export default function Registration() {
  const { openRegistration } = useRegistration();
  const [openFaq, setOpenFaq] = useState(null);

  const handleOpenPlan = (planId) => {
    openRegistration(planId);
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const faqs = [
    {
      q: "Is registration mandatory for all co-authors?",
      a: "At least one author must register under the appropriate category (Faculty / Research Scholar / Student) to present the paper and receive the official presentation certificate and publication recommendation. Co-authors who wish to attend or receive individual certificates may register separately as delegates."
    },
    {
      q: "What is included in the registration fee?",
      a: "The registration fee (inclusive of GST) includes entry to all 5 General Tracks, Keynote Addresses, presentation slot, official conference kit, delegate badge, buffet lunch & high tea vouchers on conference days, and Scopus/UGC CARE journal consideration for selected papers."
    },
    {
      q: "Can I present virtually if I cannot travel to the Panvel campus?",
      a: "Yes! Pillai PRISM 2026 offers a Hybrid Track allowing registered authors outside Mumbai/Maharashtra or international scholars to present virtually via high-definition video stream."
    },
    {
      q: "How do I verify that my payment and registration are confirmed?",
      a: "Complete the secure Razorpay checkout and retain the payment receipt. The organizing team will use the Razorpay confirmation to process your registration."
    }
  ];

  return (
    <>

      {/* Page Hero */}
      <section className="univ-inner-hero">
        <div className="container">
          <span className="univ-sub-badge">OFFICIAL DELEGATE PORTAL</span>
          <h1>Conference Registration & Fee Structure</h1>
          <p className="inner-hero-desc">
            Pillai PRISM 2026 welcomes students, research scholars, academicians, industry leaders, and international delegates. Secure your presentation slot and delegate pass today.
          </p>
        </div>
      </section>

      {/* Registration Process Steps */}
      <section className="univ-section bg-light-alt" style={{ padding: "40px 0" }}>
        <div className="container">
          <div className="reg-steps-flow-grid">
            <div className="reg-flow-step">
              <span className="flow-num">1</span>
              <h4>Choose Category</h4>
              <p>Select Student, Scholar, Faculty, or Industry delegate tier.</p>
            </div>
            <div className="reg-flow-step">
              <span className="flow-num">2</span>
              <h4>Secure Payment</h4>
              <p>Continue to the official Razorpay checkout using the single registration link.</p>
            </div>
            <div className="reg-flow-step">
              <span className="flow-num">3</span>
              <h4>Receive Receipt</h4>
              <p>Razorpay provides your payment confirmation and receipt after a successful payment.</p>
            </div>
            <div className="reg-flow-step">
              <span className="flow-num">4</span>
              <h4>Registration Processing</h4>
              <p>The organizing team will confirm your registration using the Razorpay payment record.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Main Registration Section */}
      <section className="univ-section" id="registration-details">
        <div className="container">
          <div className="reg-official-wrapper">
            {/* Table of Registration Fees */}
            <div className="reg-table-card">
              <div className="reg-table-header">
                <div>
                  <h3>The registration fees are as given below:</h3>
                  <span className="badge-tag">GST INCLUSIVE</span>
                  
                </div>
                {/* <button
                  type="button"
                  className="quick-reg-cta"
                  onClick={() => openRegistration()}
                >
                  Launch Registration Portal →
                </button> */}
              </div>

              <table className="official-fee-table">
                <thead>
                  <tr>
                    <th>Participants Category</th>
                    <th> Participation & Presentation Fee</th>
                    {/* <th>Action</th> */}
                  </tr>
                </thead>
                <tbody>
                  {conferenceData.fees.map((fee) => (
                    <tr key={fee.id}>
                      <td className="fee-part-col">
                        <strong>{fee.category}</strong>
                        <small>{fee.description || "Includes full track access, kit, high tea & lunch, certificate"}</small>
                      </td>
                      <td className="fee-amt-col">
                        <span className="amt-badge">{fee.amount}</span>
                      </td>
                      {/* <td className="fee-action-col">
                        <button
                          type="button"
                          className="table-register-btn"
                          onClick={() => handleOpenPlan(fee.id)}
                        >
                          Register ({fee.amount})
                        </button>
                      </td> */}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mode of Payment Official Box */}
            <div className="payment-official-card">
              <div className="payment-card-top">
                <div>
                  <span className="online-tag">RAZORPAY</span>
                  <h3>Secure Online Payment</h3>
                </div>
              </div>
              <p className="pay-note">All registration categories use one secure hosted Razorpay payment link.</p>

              <div className="official-bank-table-wrap">
                <table className="official-bank-table">
                  <tbody>
                    <tr>
                      <td><strong>Payment Provider</strong></td>
                      <td>Razorpay</td>
                    </tr>
                    <tr>
                      <td><strong>Payment Method</strong></td>
                      <td>Secure hosted payment link</td>
                    </tr>
                    <tr>
                      <td><strong>Accepted Modes</strong></td>
                      <td><strong>UPI, cards, net banking and wallets</strong></td>
                    </tr>
                    <tr>
                      <td><strong>Registration Link</strong></td>
                      <td><span className="acc-number-highlight">Available in the registration portal</span></td>
                    </tr>
                    <tr>
                      <td><strong>Payment Confirmation</strong></td>
                      <td><span className="ifsc-highlight">Razorpay receipt</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="payment-action-row">
                <a
                  className="open-reg-modal-btn"
                  href="https://pages.razorpay.com/pillai-prism-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Choose your plan and pay securely →
                </a>
              </div>
            </div>
          </div>

          {/* Important Deadline Reminder */}
          <div className="reg-deadline-notice-card">
        
            <div>
              <h4>Important Registration Deadline</h4>
              <p>
                Last date for Registration is <strong>20 November 2026</strong>. Complete the Razorpay payment before the deadline to ensure inclusion in the official conference proceedings and schedule.
              </p>
            </div>
          </div>
        </div>
      </section>

    </>
  );
}
