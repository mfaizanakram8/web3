import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/SlideBar/indexx";
import "./preferences.css";
import { Link } from "react-router-dom"; // Link component import karna hai

const Preferences = () => {
  return (
    <div>
      <Navbar />
      <div className="preferences-page">
        {/* Main Layout */}
        <div className="preferences-layout">
          {/* Sidebar */}
          <Sidebar />

          {/* Preferences Content */}
          <div className="preferences-content">
            <h2 className="preferences-title">Preferences</h2>

            {/* Preference Card 1 */}
            <Link to="/origin-preferences" className="link-wrapper">
              <div className="preference-card ">
                <div
                  className="preference-icon"
                  
                >
                  <img
                    src="/assets/alif-1.png"
                    alt="Right Icon"
                    className="icon-image6"
                  />
                </div>
                <div className="preference-text">
                  <h3 >
                    Origin preferences
                  </h3>
                  <p >
                    Lorem ipsum dolor sit amet, consectet
                  </p>
                </div>
                <div
                  className="preference-arrow"
                 
                >
                  <img
                    src="/assets/vactor1.png"
                    alt="Right Icon"
                    className="icon-image9"
                   
                  />
                </div>
              </div>
            </Link>

            {/* Preference Card 2 */}
            <Link to="/travelers" className="link-wrapper">
              <div className="preference-card">
                <div className="preference-icon">
                  <img
                    src="/assets/vac.png"
                    alt="Right Icon"
                    className="icon-imagep"
                  />
                </div>
                <div className="preference-text">
                  <h3>Accommodation preferences</h3>
                  <p >Lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div className="preference-arrow">
                  <img
                    src="/assets/vactor1.png"
                    alt="Right Icon"
                    className="icon-image9"
                  />
                </div>
              </div>
            </Link>

            {/* Preference Card 3 */}
            <Link to="/destination" className="link-wrapper">
              <div className="preference-card">
                <div className="preference-icon">
                  <img
                    src="/assets/vac3.png"
                    alt="Right Icon"
                    className="icon-imagel"
                  />
                </div>
                <div className="preference-text">
                  <h3 >Destination preferences</h3>
                  <p >Lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div className="preference-arrow">
                  <img
                    src="/assets/vactor1.png"
                    alt="Right Icon"
                    className="icon-image9"
                  />
                </div>
              </div>
            </Link>

            {/* Preference Card 4 */}
            <Link to="/holiday-preferences" className="link-wrapper">
              <div className="preference-card">
                <div className="preference-icon">
                  <img
                    src="/assets/vac4.png"
                    alt="Right Icon"
                    className="icon-imagel"
                  />
                </div>
                <div className="preference-text">
                  <h3>My holidays preferences</h3>
                  <p>Lorem ipsum dolor sit amet, consectet</p>
                </div>
                <div className="preference-arrow">
                  <img
                    src="/assets/vactor1.png"
                    alt="Right Icon"
                    className="icon-image9"
                  />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
