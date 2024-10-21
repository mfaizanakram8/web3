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



    return (
        <div>
            <PaymentHeader onClick={handleBack} />
            <h2 className='enter-card-detail-text'>
                Enter your card details
            </h2>

            <div style={{ paddingLeft: '7vw', paddingTop: '5vh' }}>
                <div className='enter-card-detail-field-title'>Card number</div>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', marginTop: '1vh' }}>
                    <input type="text" placeholder='****************' className='enter-card-number-field' />

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
                    <input type="text" placeholder='DD/MM/YY' className='enter-card-expiry-date-field' />
                </div>
                <div>
                    <div className='enter-card-detail-field-title'>CVV</div>
                    <input type="text" placeholder='***' className='enter-card-cvv-field' />
                </div>

            </div>



            <PaymentPopup isVisible={showPopUp} onClick={handleOkay} onCrossClick={() => setShowPopUp(false)} />
          
            <Button onClick={handleContinue} className='enter-card-detail-button'>Continue</Button>

        </div>
    )
}

export default EnterCardDetail