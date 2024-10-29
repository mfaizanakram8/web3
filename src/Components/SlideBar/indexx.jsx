import React from 'react';
import './slidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Get the current location

  return (
    <div className="sidebar">
      <ul>
        <li className={`li4 ${location.pathname === '/profile' ? 'active' : ''}`}>
          <Link
            to="/profile"
            className={`sidebar-link ${location.pathname === '/profile' ? 'active' : ''}`}
          >
            <img src="/assets/contact1.png" alt="Right Icon" className="icon-image7" />
            <span className='spano'>Account</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/preferences' ? 'active' : ''}`}>
          <Link
            to="/preferences"
            className={`sidebar-link ${location.pathname.startsWith('/preferences') ? 'active' : ''}`}
          >
            <img src="/assets/set.png" alt="Right Icon" className="icon-image2" />
            <span className='spano'> Preferences</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/addpayment' ? 'active' : ''}`}>
          <Link
            to="/addpayment"
            className={`sidebar-link ${location.pathname === '/addpayment' ? 'active' : ''}`}
          >
            <img src="/assets/message.png" alt="Right Icon" className="icon-image3" />
           <span className='spano'>  Payment</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/notifications' ? 'active' : ''}`}>
          <Link
            to="/notifications"
            className={`sidebar-link ${location.pathname === '/notifications' ? 'active' : ''}`}
          >
            <img src="/assets/notifications.png" alt="Right Icon" className="icon-image4" />
            <span className='spano'> Notifications </span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/language' ? 'active' : ''}`}>
      
          <Link
            to="/language"
            className={`sidebar-link ${location.pathname === '/language' ? 'active' : ''}`}
          >
            
            <img src="/assets/Vector.png" alt="Right Icon" className="icon-image5" />
            <span className='spano'>Language</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
