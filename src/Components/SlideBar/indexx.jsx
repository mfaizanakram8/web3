import React from 'react';
import './slidebar.css';
import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation(); // Current location get karte hain

  const getLinkClass = (path) => {
    // Checking multiple paths for Preferences
    if (path === '/preferences' && (location.pathname.startsWith('/preferences') || location.pathname.startsWith('/origin') || location.pathname.startsWith('/travelers')|| location.pathname.startsWith('/destination'))) {
      return 'sidebar-link active';
    }
    return `sidebar-link ${location.pathname.startsWith(path) ? 'active' : ''}`;
  };

  return (
    <div className="sidebar">
      <ul>
        <li className={`li4 ${location.pathname === '/profile' ? 'active' : ''}`}>
          <Link to="/profile" className={getLinkClass('/profile')}>
            <span className='size'><img src="/assets/contact1.png" alt="Right Icon" className="icon-image7" /></span>
            <span className='spano'>Account</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname.startsWith('/preferences') || location.pathname.startsWith('/origin') || location.pathname.startsWith('/travelers') || location.pathname.startsWith('/destination') ? 'active' : ''}`}>
          <Link to="/preferences" className={getLinkClass('/preferences')}>
            <span className='size'><img src="/assets/set.png" alt="Right Icon" className="icon-image2" /></span>
            <span className='spano'>Preferences</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/addpayment' ? 'active' : ''}`}>
          <Link to="/addpayment" className={getLinkClass('/addpayment')}>
            <span className='size'><img src="/assets/message.png" alt="Right Icon" className="icon-image8" /></span>
            <span className='spano'>Payment</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/notifications' ? 'active' : ''}`}>
          <Link to="/notifications" className={getLinkClass('/notifications')}>
            <span className='size'><img src="/assets/notifications.png" alt="Right Icon" className="icon-image4" /></span>
            <span className='spano'>Notifications</span>
          </Link>
        </li>
        <li className={`li4 ${location.pathname === '/language' ? 'active' : ''}`}>
          <Link to="/language" className={getLinkClass('/language')}>
            <span className='size'><img src="/assets/Vector.png" alt="Right Icon" className="icon-image5" /></span>
            <span className='spano'>Language</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
