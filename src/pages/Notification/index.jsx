import React, { useState } from 'react'
import Navbar from '../../Components/Navbar'
import Sidebar from '../../Components/SlideBar/indexx'
import "./Notification.css"

const Notification = () => {
    const [flight, setFlight] = useState(false);
    const [acoo, setAcco] = useState(false);
    const [activity, setActivity] = useState(false);
    const [email, setEmail] = useState(false);
    const [app, setAApp] = useState(false);


    return (
        <div>
            <Navbar />

            {/* Container for Sidebar and Profile Form */}
            <div className="profile-container">

                {/* Sidebar */}
                <div className="sidebar">
                    <Sidebar />
                </div>

                {/* Notification Form */}
                <div className="notification-form">
                    <h2 className="profile-heading">Notification</h2>
                    <h3 className='subtitle'>Upcomig deals notifications</h3>
                    <div className="flight-deals-container">
                        <div className="flight-deals-content">
                            <h3 className="flight-deals-title">Flight Deals</h3>
                            <p className="flight-deals-description">Lorem ipsum dolor sit amet, consectetue</p>
                        </div>
                        <div className={`notification-toggle-switch ${flight ? 'active' : ''}`} onClick={() => setFlight(!flight)}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>

                    <div className="flight-deals-container">
                        <div className="flight-deals-content">
                            <h3 className="flight-deals-title">Accomodation Deals</h3>
                            <p className="flight-deals-description">Lorem ipsum dolor sit amet, consectetue</p>
                        </div>
                        <div className={`notification-toggle-switch ${acoo ? 'active' : ''}`} onClick={() => setAcco(!acoo)}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>
                    <div className="flight-deals-container">
                        <div className="flight-deals-content">
                            <h3 className="flight-deals-title">Activity Deals</h3>
                            <p className="flight-deals-description">Lorem ipsum dolor sit amet, consectetue</p>
                        </div>
                        <div className={`notification-toggle-switch ${activity ? 'active' : ''}`} onClick={() => setActivity(!activity)}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>
                    <h3 className='subtitle'>Notification Preferences</h3>

                    <div className="flight-deals-container">
                        <div className="flight-deals-content">
                            <h3 className="flight-deals-title">Email</h3>
                            <p className="flight-deals-description">Lorem ipsum dolor sit amet, consectetue</p>
                        </div>
                        <div className={`notification-toggle-switch ${email ? 'active' : ''}`} onClick={() => setEmail(!email)}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>
                    <div className="flight-deals-container">
                        <div className="flight-deals-content">
                            <h3 className="flight-deals-title">In app push notification</h3>
                            <p className="flight-deals-description">cxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</p>
                        </div>
                        <div className={`notification-toggle-switch ${app ? 'active' : ''}`} onClick={() => setAApp(!app)}>
                            <div className="toggle-knob"></div>
                        </div>
                    </div>


                </div>
            </div>
        </div>

    )
}

export default Notification