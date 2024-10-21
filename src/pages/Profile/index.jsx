import React from 'react';
import './profile.css';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SlideBar/indexx';

const Profile = () => {
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
                <input type="text" placeholder="Your name" />
              </div>
              <div className="input-box">
                <label>Last Name</label>
                <input type="text" placeholder="Your name" />
              </div>
            </div>
            <div className="input-group">
              <div className="input-box">
                <label>Nationality</label>
                <select>
                  <option value="">Select</option>
                  <option value="pakistan">Pakistan</option>
                  <option value="india">India</option>
                </select>
              </div>
            </div>
          </div>

          <div className="contact-details">
            <h3 className='contact-details-text'>Contact Details</h3>
            <div className="input-group">
              <div className="input-box">
                <label>Email Address</label>
                <input type="email" placeholder="Your email address" />
              </div>
              <div className="input-box">
                <label>Phone Number</label>
                <input type="text" placeholder="Your phone number" />
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
