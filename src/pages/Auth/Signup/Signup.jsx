import React, { useState } from 'react';
import './Signup.css';
import Button from '../../../Components/Button';
import { useNavigate } from 'react-router-dom';
import LogoBack from '../../../Components/LogoBack';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [isFocused, setIsFocused] = useState(false); 
  const [isChecked, setIsChecked] = useState(false); // Checkbox state

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignUp = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (emailRegex.test(email)) {
      setEmailError('');
      navigate('/signupotp');
    } else {
      setEmailError('Please enter a valid email address.');
    }
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  // Toggle function for checkbox
  const handleCheckboxClick = () => {
    setIsChecked(!isChecked);
  };

  return (
    <div>
      <LogoBack />
      <h1 className='getstarted-text'>Getting Started</h1>
      <p className='getstarted-subtitle'>xxxxxxxxxxxxxxxxxxxxxxx</p>

      <div className='email-container'>
        <input
          type="email"
          placeholder='Enter your email'
          className={`email-input ${emailError ? 'error' : ''} ${isFocused ? 'focused' : ''}`}
          value={email}
          onChange={handleEmailChange}
          onFocus={() => setIsFocused(true)}  
          onBlur={() => setIsFocused(false)}  
        />
      </div>
      {emailError && <div className='get-emailerror-text'>{emailError}</div>}

      <div className='button-container'>
        <Button onClick={handleSignUp}>Let's Start!</Button>
      </div>

      <div className='or-line-container'>
        <div className='line-style' />
        <h5 className='or-text'>or</h5>
        <div className='line-style' />
      </div>

      <div className='img-container'>
        <img src="/assets/Google.png" alt="Google" width={65} className='google-apple-img' />
        <img src="/assets/Apple.png" alt="Apple" width={65} className='google-apple-img' />
      </div>

      <div className='checkbox-term-container'>
        <img 
          src={isChecked ? "/assets/tick1.png" : "/assets/tick-1.png"} 
          alt="checkbox"  
          className='checkbox'
          onClick={handleCheckboxClick} // Call toggle function on click
        />
        <p className='by-register-text'>
          By registering you accept our <span className='term-privacy-text'>terms and Conditions</span> and <span className='term-privacy-text'>Privacy policy</span>
        </p>
      </div>

      <p className='already-text'>
        Already have an Account <span onClick={handleLogin} className='signin-text'>Sign In</span>
      </p>
    </div>
  );
};

export default SignUp;
