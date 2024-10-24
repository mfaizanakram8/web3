import React, { useState } from 'react';
import './profile.css';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SlideBar/indexx';

const Profile = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedNationality, setSelectedNationality] = useState('Select');

  const toggleDropdown = () => {
      setIsOpen(!isOpen);
  };

  const handleNationalitySelect = (nationality) => {
      setSelectedNationality(nationality);
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

        {/* Profile Form */}
        <div className="profile-form">
          <div className="profile-heading">Profile</div>

          <div className="personal-details-section">
            <h3 className='personal-details-text'>Personal details</h3>
            <div className="input-group">
              <div className="input-box">
                <label>First Name</label>
                <input type="text" placeholder="Your name" className='input-se'/>
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input type="text" placeholder="Your name"  className='input-se' />
              </div>
            </div>
          </div>

          {/* Notification Form for Nationality */}
          <div className="input-group">
            <div className='input-box'>
              <h3 className="profile-heading1">Nationality</h3>
             

              {/* Nationality dropdown */}
              <div className="dropdown-container1">
                  <div className="dropdown-header1" onClick={toggleDropdown}>
                      <span className={selectedNationality === 'Select' ? 'placeholder' : ''}>{selectedNationality}</span>
                      <span className={`arrow ${isOpen ? 'open' : ''}`}>
                          <img src='/assets/als.png' height={10} width={10} alt="arrow" />
                      </span>
                  </div>
                  {isOpen && (
                      <div className="dropdown-list1">
                          <div
                              className={`dropdown-item1 ${selectedNationality === 'Pakistan' ? 'active' : ''}`}
                              onClick={() => handleNationalitySelect('Pakistan')}
                          >
                              Pakistan
                          </div>
                          <div
                              className={`dropdown-item1 ${selectedNationality === 'India' ? 'active' : ''}`}
                              onClick={() => handleNationalitySelect('India')}
                          >
                              India
                          </div>
                          <div
                              className={`dropdown-item1 ${selectedNationality === 'Select' ? 'active' : ''}`}
                              onClick={() => handleNationalitySelect('Select')}
                          >
                              Select
                          </div>
                        
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
                <input type="email" placeholder="Your email address"  className='input-se'/>
              </div>
              <div className="input-box">
                <label>Phone Number</label>
                <input type="text" placeholder="Your phone number"  className='input-se' />
              </div>
            </div>
          </div>

          <div className="profile-button-container">
            <button className="continue-btn">Continue</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
