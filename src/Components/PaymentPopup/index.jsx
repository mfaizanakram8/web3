import React from 'react';
import './popup.css';

const PaymentPopup = ({ isVisible, onClick, onCrossClick }) => {
  return (
    isVisible && (
      <div className="popup-overlay">
        <div className="popup-content">
          <div onClick={onCrossClick} className="popup-header">
            <img src="/assets/crossicon.png" alt="cross" className="popup-cross-icon" />
          </div>
          <h2 className='payment-method-add-success-text'>Payment Method added Successfully!</h2>
          <div className="popup-animation">
            <img src="/assets/PaymentPopup.png" alt="Celebration" />
          </div>
          <button className="popup-button" onClick={onClick}>
            Okay
          </button>
        </div>
      </div>
    )
  );
};

export default PaymentPopup;
