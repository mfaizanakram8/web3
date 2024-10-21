import React from 'react'
import './PaymentHeader.css'

const PaymentHeader = ({ onClick }) => {
    return (
        <div>

            <div className='payment-header-container'>
                <h1 className='header-logo-text' >Logo</h1>
                <div className='header-button-container'>
                    <span className='name-button-text'>Nimra Nisar</span>
                    <img src="/assets/ArrowDown.png" alt="ArrowDown" className='arrow-down-icon' />
                </div>
            </div>

            <div onClick={onClick} className='back-circle-arrow-container'>
                <img src="/assets/BackLogoCircle.png" alt="CircleBackArrow" className='circle-back-arrow' />
                <h2 className='primary-back-text' >Back</h2>
            </div>

        </div>
    )
}

export default PaymentHeader