import React, { useState } from 'react'
import PaymentHeader from '../../Components/PaymentHeader'
import { useNavigate } from 'react-router-dom';
import './ChoosePayment.css'
import Button from '../../Components/Button';

const ChoosePayment = () => {
    const [selectedMethod, setSelectedMethod] = useState(1);

    const paymentMethods = [
        { id: 1, name: 'Credit / Debit card', icon: '/assets/creditdebitcard.png' },
        { id: 2, name: 'Paypal', icon: '/assets/PayPal.png' },
        { id: 3, name: 'Google Pay', icon: '/assets/GooglePay.png' },
        { id: 4, name: 'Amazon Pay', icon: '/assets/AmazonPay.png' },
    ];


    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const handleContinue = () => {
        navigate('/entercarddetail');
    };



    return (
        <div>
            <PaymentHeader onClick={handleBack} />
            <h2 className='choose-payment-new-method-text'>
                Add a new payment method
            </h2>
            <p className='choose-payment-method-subtitle'>Lorem ipsum dolor sit amet, consecte</p>


            <div className="payment-methods-container">
                {paymentMethods.map((method) => (
                    <div
                        key={method.id}
                        className="payment-item"
                        onClick={() => setSelectedMethod(method.id)}
                    >
                        <img src={method.icon} className={`payment-icon ${selectedMethod === method.id ? 'filled' : ''}`} />
                        <div className={`payment-name ${selectedMethod === method.id ? 'filled' : ''}`}>{method.name}</div>
                        <div className={`circle ${selectedMethod === method.id ? 'filled' : ''}`}></div>
                    </div>
                ))}
            </div>



            <Button onClick={handleContinue} className='choose-payment-button'>Continue</Button>

        </div>
    )
}

export default ChoosePayment