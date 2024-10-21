import React, { useEffect, useState } from 'react';
import './SignupOtp.css';
import LogoBack from '../../../Components/LogoBack';
import { useNavigate } from 'react-router-dom';
import OTPInput from '../../../Components/OTP';
import Button from '../../../Components/Button';

const SignupOtp = () => {
    const navigate = useNavigate();
    const [timer, setTimer] = useState(10);

    useEffect(() => {
        if (timer > 0) {
            const countdown = setInterval(() => {
                setTimer(prevTimer => prevTimer - 1);
            }, 1000);
            return () => clearInterval(countdown);
        }
    }, [timer]);

    const handleBack = () => {
        navigate(-1);
    };

    const handleSignup = () => {
        navigate('/welcome');
    };

    return (
        <div>
            <LogoBack onClick={handleBack} />
            <h1 className='signup-otp-continue-text'>Continue with your account</h1>
            <p className='signup-otp-verification-text'>Enter the verification code we have sent you<br />to <span className='signup-otp-email-text'>ahmednimra95@gmail.com</span> to login</p>

            <div className='signup-otp-field'>
                <OTPInput length={4} />
            </div>

            <div className='signup-otp-button-container'>
                <Button onClick={handleSignup}>Log In</Button>
            </div>

            <p className='signup-otp-didnt-text'>Didn’t receive OTP?<span className='signup-otp-resend-text'>Resend</span></p>

            {/* Conditionally render the timer if it's greater than 0 */}
            {timer > 0 && (
                <p className='signup-otp-request-text'>
                    Request for a new OTP available in<br />
                    {`00:${timer < 10 ? `0${timer}` : timer} Sec`}
                </p>
            )}

            {/* Show "Resend OTP via SMS" only after the timer reaches 0 */}
            {timer === 0 && (
                <p className='signup-otp-resend-sms-text'>Resend OTP via SMS</p>
            )}
        </div>
    );
};

export default SignupOtp;
