import React from 'react'
import './LoginOtp.css'
import LogoBack from '../../../Components/LogoBack'
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../../Components/OTP';
import Button from '../../../Components/Button';

const LoginOtp = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className='login-otp-container'>
            <div className='login-otp-leftside'>
                <LogoBack onClick={handleBack} />

                <h1 className='continue-account-text'>Continue with your<br />Account</h1>
                <p className='enter-verification-text'>Enter the verification code we have sent<br />you to <span className='login-otp-email-text'>ahmednimra95@gmail.com</span> to login</p>

                <div className='login-otp-field'>
                    <OTPInput length={4} />
                </div>

                <Button className='login-otp-button'>Log In</Button>

                <p className='login-otp-didnt-text'>Didn’t receive OTP?<span className='login-otp-resend-text'>Resend</span></p>
            </div>

            <div className='login-otp-rightside'>
                <img src="/assets/LoginOtp.png" alt="OtpIlustration" className='login-otp-image' />
            </div>
        </div>
    )
}

export default LoginOtp