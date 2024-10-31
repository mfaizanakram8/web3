import React, { useState } from 'react';
import './profile.css';
import Navbar from '../../Components/Navbar';
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css'; 
import Sidebar from '../../Components/SlideBar/indexx';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [selectedNationality, setSelectedNationality] = useState('Select');
  const [errorMessage, setErrorMessage] = useState('');

  // Toggle nationality dropdown
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Handle nationality selection
  const handleNationalitySelect = (nationality) => {
    setSelectedNationality(nationality);
    setIsOpen(false);
  };

  // Validate phone number
  const validatePhoneNumber = () => {
    const phoneRegex = /^[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      setErrorMessage('Please enter a valid 10-digit phone number.');
    } else {
      alert('Phone number is valid.');
      setErrorMessage('');
      // Form submission logic can be added here
    }
  };

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        {/* Sidebar */}
        <div className="sidebar">
          <Sidebar />
        </div>

        {/* Profile Form */}
        <div className="profile-form">
          <div className="profile-heading">Profile</div>

          <div className="personal-details-section">
            <h3 className='personal-details-text'>Personal details</h3>
            <div className="input-group">
              <div className="input-box">
                <label>First Name</label>
                <input type="text" placeholder="Your name" className='input-se' />
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input type="text" placeholder="Your name" className='input-se' />
              </div>
            </div>
          </div>

          {/* Nationality Dropdown */}
          <div className="input-group">
            <div className='input-box'>
              <h3 className="profile-heading1">Nationality</h3>
              <div className="dropdown-container1">
                <div className="dropdown-header1" onClick={toggleDropdown}>
                  <span className={selectedNationality === 'Select' ? 'placeholder' : ''}>
                    {selectedNationality}
                  </span>
                  <span className={`arrow ${isOpen ? 'open' : ''}`}>
                    <img src='/assets/als.png' height={7} width={7} alt="arrow" />
                  </span>
                </div>
                {isOpen && (
                  <div className="dropdown-list1">
                    {['Select', 'India', 'Pakistan'].map((nationality) => (
                      <div
                        key={nationality}
                        className={`dropdown-item1 ${selectedNationality === nationality ? 'active' : ''}`}
                        onClick={() => handleNationalitySelect(nationality)}
                      >
                        {nationality}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="contact-details">
            <h3 className='contact-details-text'>Contact Details</h3>
            <div className="input-group">
              <div className="input-box">
                <label>Email Address</label>
                <input type="email" placeholder="Your email address" className='input-se' />
              </div>
              <div className="input-box">
                <label>Phone Number</label>
                <PhoneInput
                  country={'pk'} 
                  value={phone}
                  onChange={setPhone}
                  inputStyle={{
                    width: '100%',
                    height: '40px',
                    borderRadius: '8px',
                    border: '1px solid #ccc',
                    padding: '10px 10px 10px 60px', 
                  }}
                  containerStyle={{
                    marginBottom: '15px',
                  }}
                />
              </div>
            </div>
          </div>

          <div className="profile-button-container">
            <button className="continue-btn" onClick={validatePhoneNumber}>Continue</button>
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
