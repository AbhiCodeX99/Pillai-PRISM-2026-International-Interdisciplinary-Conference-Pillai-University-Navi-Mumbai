import { useEffect, useState } from "react";
import { conferenceData } from "../data/conferenceData";

export default function RegistrationModal({ isOpen, onClose, preselectedCategory = "student" }) {
  const [category, setCategory] = useState(preselectedCategory);

  useEffect(() => {
    if (isOpen) setCategory(preselectedCategory);
  }, [isOpen, preselectedCategory]);

  if (!isOpen) return null;

  const currentFee = conferenceData.fees.find((fee) => fee.id === category) || conferenceData.fees[0];
  const paymentLink = conferenceData.razorpayPaymentLink;

  return (
    <div className="modal-overlay" onClick={onClose} role="presentation">
      <div className="modal-container registration-modal-container" onClick={(event) => event.stopPropagation()} role="dialog" aria-modal="true" aria-labelledby="registration-title">
        <div className="modal-header">
          <div className="modal-header-badge"><span className="dot-pulse" /> Pillai PRISM 2026 Official Registration Portal</div>
          <button className="modal-close-btn" onClick={onClose} aria-label="Close registration portal">✕</button>
        </div>

        <div className="modal-steps-bar">
          <div className="modal-step-pill active"><span>1</span> Registration Tier</div>
          <div className="modal-step-divider" />
          <div className="modal-step-pill active"><span>2</span> Secure Payment</div>
        </div>

        <div className="modal-body">
          <div className="modal-section-intro">
            <h3 id="registration-title">Select Delegate Participation Category</h3>
            <p>Choose your category, then complete your registration through our secure Razorpay payment page.</p>
          </div>

          <div className="modal-fees-grid">
            {conferenceData.fees.map((fee) => {
              const isSelected = category === fee.id;
              return (
                <button key={fee.id} type="button" className={`modal-fee-card ${isSelected ? "selected" : ""}`} onClick={() => setCategory(fee.id)} aria-pressed={isSelected}>
                  <div className="modal-fee-card-inner">
                    <div className="modal-fee-card-front">
                      <div className="modal-fee-card-content">
                        <div className="modal-fee-top"><span className="modal-fee-price">{fee.amount}</span></div>
                        <h4>{fee.category}</h4>
                        <p className="modal-fee-desc">{fee.description}</p>
                      </div>
                      <div className="modal-fee-front-actions"><span className="modal-fee-radio">{isSelected ? "Selected Plan" : "Choose this Category"}</span></div>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="selected-plan-banner" style={{ marginTop: "24px" }}>
            <div><strong>Selected Tier: {currentFee.category}</strong><span>Payable Amount: {currentFee.amount} (Inclusive of GST)</span></div>
          </div>

          <div className="modal-footer-actions">
            <button type="button" className="secondary-btn" onClick={onClose}>Cancel</button>
            {paymentLink ? <a className="primary-btn" href={paymentLink} target="_blank" rel="noopener noreferrer">Pay securely with Razorpay →</a> : <button type="button" className="primary-btn" disabled title="Set VITE_RAZORPAY_PAYMENT_LINK to enable checkout">Razorpay payment link coming soon</button>}
          </div>
          <p className="help-text" style={{ marginTop: "14px" }}>Payment is completed securely on Razorpay. Please retain the receipt for your records.</p>
        </div>
      </div>
    </div>
  );
}
