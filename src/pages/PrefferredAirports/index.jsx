import React, { useState } from 'react';
import './PrefferredAirports.css';
import LogoBack from '../../Components/LogoBack';
import { useNavigate } from 'react-router-dom';
import Button from '../../Components/Button';

const PrefferredAirports = () => {
    const navigate = useNavigate();
    const [isSearchBoxVisible, setIsSearchBoxVisible] = useState(true);

    const handleBack = () => {
        navigate(-1);
    };

    const handleContinue = () => {
        navigate('/accommodation');
    };

    const handleRemoveSearchBox = () => {
        setIsSearchBoxVisible(false);
    };

    return (
        <div>
            <div className='airports-back-steps-container'>
                <LogoBack onClick={handleBack} />
                <div className='airports-step-text'>Step 1 of 2</div>
            </div>

            <div className='airports-container'>
                <div className='airports-left-side'>

                    <h1 className='airports-add-preferences'>Add Your Airport<br />Preferences</h1>
                    <p className='airports-subtitle'>xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx<br />xxxxxxxxxxxxxxxxxxxx</p>

                    <div className='airports-search-container'>
                        <input type='text' placeholder='Search here' className='airports-search-input' />
                    </div>

                    {/* Conditionally render the search box */}
                    {isSearchBoxVisible && (
                        <div className='airports-search-box'>
                            <img
                                src="/assets/Cross.png"
                                alt="CrossIcon"
                                className='airports-cross-icon'
                                onClick={handleRemoveSearchBox}
                            />
                            <span className='airports-search-box-text'>KHI - Karachi</span>
                        </div>
                    )}

                    <Button onClick={handleContinue} className='airports-continue-button'>Continue</Button>
                </div>

                <div className='airports-right-side'>
                    <img src="/assets/PreferredAirpot.png" alt="PreferredAirpot" className='airports-prefferred-image' />
                </div>
            </div>
        </div>
    );
};

export default PrefferredAirports;
