import React, { useState } from 'react'
import './Language.css'
import Sidebar from '../../Components/SlideBar/indexx'
import Navbar from '../../Components/Navbar'

const Language = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [selectedLanguage, setSelectedLanguage] = useState('English');

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    const handleLanguageSelect = (language) => {
        setSelectedLanguage(language);
        setIsOpen(false);
    };
    return (
        <div>
            <Navbar />

            {/* Container for Sidebar and Profile Form */}

            <div className="profile-container">

                {/* Sidebar */}
                <div className="sidebar">
                    <Sidebar />
                </div>

                {/* Notification Form */}
                <div className="notification-form">
                    <h2 className="profile-heading">Language</h2>
                    <h3 className='subtitle'>Select your language</h3>

                    {/* For Language dropdown */}
                    <div className="dropdown-container">
                        <div className="dropdown-header" onClick={toggleDropdown}>
                            <span>{selectedLanguage}</span>
                            <span className={`arrow ${isOpen ? 'open' : ''}`}><img src='/assets/Vector 44.svg' height={15} width={15} /></span>
                        </div>
                        {isOpen && (
                            <div className="dropdown-list">
                                <div
                                    className={`dropdown-item ${selectedLanguage === 'English' ? 'active' : ''}`}
                                    onClick={() => handleLanguageSelect('English')}
                                >
                                    English
                                </div>
                                <div
                                    className={`dropdown-item ${selectedLanguage === 'Spanish' ? 'active' : ''}`}
                                    onClick={() => handleLanguageSelect('Spanish')}
                                >
                                    Spanish
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="language-button-container">
                        <button className="language-continue-btn">Continue</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Language