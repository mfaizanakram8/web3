import React, { useState } from 'react';
import './slidebar.css'; 
import { Link, useLocation } from 'react-router-dom'; // Import useLocation

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/profile"
            className={`sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <img src="/assets/contact.png" alt="Right Icon" className="icon-image7" />
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/preferences"
            className={`sidebar-link ${location.pathname.startsWith('/preferences') ? 'active' : ''}`}
          >
            <img src="/assets/set.png" alt="Right Icon" className="icon-image2" />
            Preferences
          </Link>
       
        </li>
        <li>
          <Link
            to="/addpayment"
            className={`sidebar-link ${location.pathname === '/payment' ? 'active' : ''}`}
          >
            <img src="/assets/message.png" alt="Right Icon" className="icon-image2" />
            Payment
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className={`sidebar-link ${location.pathname === '/notifications' ? 'active' : ''}`}
          >
            <img src="/assets/notifications.png" alt="Right Icon" className="icon-image2" />
            Notifications
          </Link>
        </li>
        <li>
          <Link
            to="/language"
            className={`sidebar-link ${location.pathname === '/language' ? 'active' : ''}`}
          >
            <img src="/assets/Vector.png" alt="Right Icon" className="icon-image2" />
            Language
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
