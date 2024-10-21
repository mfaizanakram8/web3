import React from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/SlideBar/indexx";
import "./preferences.css";

const Preferences = () => {
  return (
    <div>
      <Navbar />
      <div className="preferences-page">
        {/* Navbar */}

        {/* Main Layout */}
        <div className="preferences-layout">
          {/* Sidebar */}
          <Sidebar />

          {/* Preferences Content */}
          <div className="preferences-content">
            <h2 className="preferences-title">Preferences</h2>

            <div className="preference-card active">
              <div
                className="preference-icon"
                style={{ backgroundColor: "#eceaff" }}
              >
                <img
                  src="/assets/alif-1.png"
                  alt="Right Icon"
                  className="icon-image6"
                />
              </div>
              <div className="preference-text">
                <h3 style={{ backgroundColor: "#eceaff" }}>
                  Origin preferences
                </h3>
                <p style={{ backgroundColor: "#eceaff" }}>
                  Lorem ipsum dolor sit amet, consectetur
                </p>
              </div>
              <div
                className="preference-arrow"
                style={{ backgroundColor: "#eceaff" }}
              >
                <img
                  src="/assets/vactor1.png"
                  alt="Right Icon"
                  className="icon-image9"
                  style={{ backgroundColor: "#eceaff" }}
                />
              </div>
            </div>

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

            <div className="preference-card">
              <div className="preference-icon">
                <img
                  src="/assets/vac3.png"
                  alt="Right Icon"
                  className="icon-imagel"
                />
              </div>
              <div className="preference-text">
                <h3>Destination preferences</h3>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
