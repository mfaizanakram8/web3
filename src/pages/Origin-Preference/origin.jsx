import React from 'react';
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SlideBar/indexx';
import PaymentHeader from '../../Components/Backbutton';
import { FaSearch } from 'react-icons/fa'; 
import { useNavigate } from 'react-router-dom';
import './origin.css'; // Make sure you import the relevant CSS file

function Index() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

    return (
        <div className="container">
            <Navbar />
            <div className="content">
                <Sidebar />
                <div className='prefer'>
                    <div className='backbottom'>
                        <PaymentHeader onClick={handleBack} />
                    </div>
                    <div className="preferences-section">
                        <h2>Origin Preferences</h2>
                        <p>Add your airport preferences</p>
                        <div className="search-input-container">
                            <FaSearch className="search-icon" />
                            <input type="text" placeholder="Search" className="search-input" />
                        </div>
                        <div className="image-container">
                           <div><img src="/assets/t-1.png" alt="images" className='image-1' /> <p className='abc'>Tree house</p></div>
                           <div><img src="/assets/t-1.png" alt="images" className='image-1' /> <p className='abc'>Tree house</p></div>
                           <div><img src="/assets/t-1.png" alt="images" className='image-1' /> <p className='abc'>Tree house</p></div>
                        </div>
                        <button className="save-button">Save</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Index;
