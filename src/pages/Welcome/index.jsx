import React from 'react'
import './Welcome.css'
import { useNavigate } from 'react-router-dom';
import LogoBack from '../../Components/LogoBack';
import Button from '../../Components/Button';

const Welcome = () => {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    const handleContinue = () => {
        navigate('/preferredairports');
    };

    return (
        <div className='welcome-container'>
            <div className='welcome-leftside'>
                <LogoBack onClick={handleBack} />
                <h1 className='welcome-title-text'>WELCOME TO TRIPBOING!</h1>
                <p className='welcome-find-deals-text'>Find deals that match your travel<br />style!</p>
                <p className='welcome-subtitle-text'>Lorem ipsum dolor sit amet, consectetuer </p>
                <Button onClick={handleContinue} className='welcome-button'>Continue</Button>
            </div>

            <div className='welcome-rightside'>
                <img src="/assets/Welcome.png" alt="OtpIlustration" className='welcome-image' />
            </div>

        </div>
    )
}

export default Welcome