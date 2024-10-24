import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import PaymentHeader from '../../Components/PaymentHeader'
import './EnterCardDetail.css'
import Button from '../../Components/Button';
import PaymentPopup from '../../Components/PaymentPopup';

const EnterCardDetail = () => {
    const navigate = useNavigate();
    const [ showPopUp, setShowPopUp] = useState(false)

    const handleBack = () => {
        navigate(-1);
    };

    const handleContinue = () => {
        setShowPopUp(true);
    };

    const handleOkay = () => {
        navigate('/checkoutpayment');
        setShowPopUp(false);
    };
    const handleCVVKeyPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    };
    const handleCardNumberKeyPress = (event) => {
        if (!/[0-9]/.test(event.key)) {
            event.preventDefault();
        }
    };
    const handleExpiryDateKeyPress = (event) => {
        if (!/[0-9/]/.test(event.key)) {
            event.preventDefault();
        }
    };
 



    return (
        <div>
            <PaymentHeader onClick={handleBack} />
            <h2 className='enter-card-detail-text'>
                Enter your card details
            </h2>

            <div style={{ paddingLeft: '7vw', paddingTop: '5vh' }}>
                <div className='enter-card-detail-field-title'>Card number</div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '1vh' }}>
                    <input type="text" placeholder='****************' pattern="[0-9]*" maxLength={16}  // Assuming 16 digits for card number
                        onKeyPress={handleCardNumberKeyPress}  inputMode="numeric"  className='enter-card-number-field' />

                    <div className='enter-card-logo-box'>
                        <img src="/assets/CardLogo.png" alt="CardLogo" className='enter-card-detail-logo' />
                    </div>
                </div>
            </div>


            <div style={{ paddingLeft: '7vw', paddingTop: '4vh' }}>
                <div className='enter-card-detail-field-title'>Card Holder Name</div>
                <input type="text" placeholder='XYZ' className='enter-card-holder-field' />
            </div>

            <div style={{ paddingLeft: '7vw', paddingTop: '4vh', display: 'flex', gap: '20px' }}>

                <div>
                    <div className='enter-card-detail-field-title'>Expiry Date</div>
                    <input type="text" placeholder='DD/MM/YY' pattern="[0-9]*"  inputMode="numeric"  maxLength={7} 
                        onKeyPress={handleExpiryDateKeyPress}   className='enter-card-expiry-date-field' />
                </div>
                <div>
                    <div className='enter-card-detail-field-title'>CVV</div>
                    <input type="text"  pattern="[0-9]*"  placeholder='***' inputMode="numeric" 
                        maxLength={3}  onKeyPress={handleCVVKeyPress}  className='enter-card-cvv-field' />
                </div>

            </div>



            <PaymentPopup isVisible={showPopUp} onClick={handleOkay} onCrossClick={() => setShowPopUp(false)} />
          
            <Button onClick={handleContinue} className='enter-card-detail-button'>Continue</Button>

        </div>
    )
}

export default EnterCardDetail