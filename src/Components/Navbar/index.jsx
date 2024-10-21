import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Left Icon (Image) */}
      <div className="navbar-icon left-icon">
        <img src="/assets/nav-left.png" alt="Left Icon" className="icon-image5" />
      </div>

      {/* Center Navigation Links */}
      <div className="navbar-center">
        <div className="navbar-links">
          <span className="span1">Flights</span>
          
          <span className="span1">Accommodation</span>
      
          <span  className="span1">Things To Do</span>
        </div>
        
      </div>

      {/* Right Icon (Image) */}
      <div className="navbar-icon right-icon">
        <img src="/assets/nav-right.png" alt="Right Icon" className="icon-image1" />
      </div>
    </nav>
  );
};

export default Navbar;
