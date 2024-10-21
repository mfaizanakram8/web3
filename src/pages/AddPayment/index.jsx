import React from 'react'
import './AddPaymnet.css'
import PaymentHeader from '../../Components/PaymentHeader'
import { useNavigate } from 'react-router-dom';

const AddPayment = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handlePayment = () => {
        navigate('/choosepayment');
    };

    return (
        <div>
            <PaymentHeader onClick={handleBack} />

            <h2 className='add-payment-method-text'>Add payment methods</h2>
            <img src="/assets/AddPaymentLogo.png" alt="AddPaymentLogo" className='add-payment-image' />

            <h3 onClick={handlePayment} className='add-payment-method-text-plus'>+ Add  payment method</h3>
            <p className='when-choosing-payment-text'>
                When Choosing payment method Check Accurancy of<br />your account Information.
            </p>
        </div>
    )
}

export default AddPayment