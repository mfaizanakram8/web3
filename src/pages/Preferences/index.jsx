import React, { useEffect }  from "react";
import Navbar from "../../Components/Navbar";
import Sidebar from "../../Components/SlideBar/indexx";
import { Navigate,Outlet } from "react-router-dom";
import "./preferences.css";
import { Link } from "react-router-dom"; // Link component import karna hai

const Preferences = () => {
   // Use effect to redirect to the origin page
   useEffect(() => {
    // Redirect to origin when preferences are loaded
    <Navigate to="origin" />
  }, []);
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
            <Link to="/origin" className="link-wrapper">
              <div className="preference-card ">
                <div
                  className="preference-icon"
                  
                >
                  <span className="size1"><img
                    src="/assets/alif-2.png"
                    alt="Right Icon"
                    className="icon-image6"
                  /></span>
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
                <span className="size1"><img
                    src="/assets/vac.png"
                    alt="Right Icon"
                    className="icon-imagep"
                  /> </span>
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
                <span className="size1"> <img
                    src="/assets/vac3.png"
                    alt="Right Icon"
                    className="icon-image3"
                  /> </span>
                </div>
                <div className="preference-text">
                  <h3 className="dar">Destination preferences</h3>
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
                <span className="size1"> <img
                    src="/assets/vac4.png"
                    alt="Right Icon"
                    className="icon-imagel"
                  /> </span>
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
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Preferences;
