import React, { useState } from 'react'
import './Login.css'
import Button from '../../../Components/Button'
import { useNavigate } from 'react-router-dom';
import LogoBack from '../../../Components/LogoBack';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleBack = () => {
    navigate(-1);
  };

  const handleSignup = () => {
    navigate('/');
  };

  const handleOtp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
      navigate('/loginotp');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div className='login-container'>

      <div className='login-left-side'>

        <LogoBack onClick={handleBack} />

        <h1 className='login-text'>Log In</h1>
        <p className='login-subtitle'>Lorem ipsum dolor sit amet, consectetuer<br />adipiscing elit Lorem ipsum </p>

        <div className='login-email-container'>
          {/* <input type="email" placeholder='Enter your email' className='login-email-input' /> */}
          <input
            type="email"
            placeholder='Enter your email'
            className={`login-email-input ${emailError ? 'error' : ''} ${isFocused ? 'focused' : ''}`}
            value={email}
            onChange={handleEmailChange}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
          />
        </div>
        {emailError && <div className='login-emailerror-text'>{emailError}</div>}

        <div className='login-button-container'>
          <Button className='login-letstart-button' onClick={handleOtp}>Lets Start!</Button>
        </div>

        <p className='dont-have-text'>Don’t  have an account?<span className='signup-text' onClick={handleSignup}>Sign Up</span></p>

      </div>

      <div className='login-right-side'>
        <img src="/assets/LoginImg.png" alt="LoginIlustration" className='login-image-style' />
      </div>

    </div>
  )
}

export default Login