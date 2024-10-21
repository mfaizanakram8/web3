import React from 'react'
import { useNavigate } from 'react-router-dom';
import PaymentHeader from '../../Components/PaymentHeader'
import './CheckoutPayment.css'
import Button from '../../Components/Button';

const CheckoutPayment = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };
    const handlePayNow = () => {
        navigate('/profile');
    };

    return (
        <div>

            <PaymentHeader onClick={handleBack} />
            <h2 className='checkout-payment-text'>
                Checkout
            </h2>
            <h3 className='checkout-your-payment-method'>Your payment method</h3>

            <div className='checkout-card-details-box' >
                <img src="/assets/cardimage.png" alt="cardimage" className='checkout-card-image' />
                <div className='checkout-card-holder-section'>
                    <span className='checkout-card-holder-name'>James Stw</span>
                    <span className='checkout-card-holder-number'>****64656</span>
                </div>
            </div>
            <h3 className='checkout-your-payment-method'>Payment summary</h3>

            <div className='checkout-list-container'>
                <span className='checkout-list-title'>Plan Purchased</span>
                <span className='checkout-list-subtitle'>Elite</span>
            </div>

            <div className='checkout-list-container'>
                <span className='checkout-list-title'>Sub total</span>
                <span className='checkout-list-subtitle'>$600</span>
            </div>

            <div className='checkout-list-container'>
                <span className='checkout-list-title'>Tax</span>
                <span className='checkout-list-subtitle'>$0</span>
            </div>

            <h3 className='checkout-your-payment-method'>Apply promo code</h3>
            <div className='checkout-apply-promo-box'>
                <input type="text" placeholder='Enter your promo code' className='checkout-apply-promo-input' />
                <span className='checkout-apply-text'>Apply</span>
            </div>

            <div className='checkout-list-total-price'>
                <span className='checkout-list-total-text'>Total</span>
                <span className='checkout-list-price-text'>$600</span>
            </div>

            <Button onClick={handlePayNow} className='checkout-pay-now-button'>Pay now</Button>

        </div>
    )
}

export default CheckoutPayment