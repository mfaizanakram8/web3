import React, { useState } from 'react';
import './slidebar.css'; 
import { Link } from 'react-router-dom';

const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleItemClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link
            to="/profile"
            className={`sidebar-link ${activeIndex === 0 ? 'active' : ''}`}
            onClick={() => handleItemClick(0)}
          >
            <img src="/assets/contact.png" alt="Right Icon" className="icon-image7" />
            Account
          </Link>
        </li>
        <li>
          <Link
            to="/preferences"
            className={`sidebar-link ${activeIndex === 1 ? 'active' : ''}`}
            onClick={() => handleItemClick(1)}
          >
            <img src="/assets/set.png" alt="Right Icon" className="icon-image2" />
            Preferences
          </Link>
        </li>
        <li>
          <Link
            to="/payment"
            className={`sidebar-link ${activeIndex === 2 ? 'active' : ''}`}
            onClick={() => handleItemClick(2)}
          >
            <img src="/assets/message.png" alt="Right Icon" className="icon-image2" />
            Payment
          </Link>
        </li>
        <li>
          <Link
            to="/notifications"
            className={`sidebar-link ${activeIndex === 3 ? 'active' : ''}`}
            onClick={() => handleItemClick(3)}
          >
            <img src="/assets/notifications.png" alt="Right Icon" className="icon-image2" />
            Notifications
          </Link>
        </li>
        <li>
          <Link
            to="/language"
            className={`sidebar-link ${activeIndex === 4 ? 'active' : ''}`}
            onClick={() => handleItemClick(4)}
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
