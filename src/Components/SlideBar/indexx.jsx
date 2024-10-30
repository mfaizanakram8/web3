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
             <span className='size'><img src="/assets/contact1.png" alt="Right Icon" className="icon-image7" /></span>
            <span className='spano'>Account</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/preferences' ? 'active' : ''}`}>
          <Link
            to="/preferences"
            className={`sidebar-link ${location.pathname.startsWith('/preferences') ? 'active' : ''}`}
          >
             <span className='size'> <img src="/assets/set.png" alt="Right Icon" className="icon-image2" /></span>
            <span className='spano'> Preferences</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/addpayment' ? 'active' : ''}`}>
          <Link
            to="/addpayment"
            className={`sidebar-link ${location.pathname === '/addpayment' ? 'active' : ''}`}
          >
              <span className='size'><img src="/assets/message.png" alt="Right Icon" className="icon-image8" /></span>
           <span className='spano'>  Payment</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/notifications' ? 'active' : ''}`}>
          <Link
            to="/notifications"
            className={`sidebar-link ${location.pathname === '/notifications' ? 'active' : ''}`}
          >
          <span className='size'><img src="/assets/notifications.png" alt="Right Icon" className="icon-image4" /></span>
            <span className='spano'> Notifications </span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/language' ? 'active' : ''}`}>
      
          <Link
            to="/language"
            className={`sidebar-link ${location.pathname === '/language' ? 'active' : ''}`}
          >
            
            <span className='size'><img src="/assets/Vector.png" alt="Right Icon" className="icon-image5" /></span>
            <span className='spano'>Language</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
