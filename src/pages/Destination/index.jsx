import React, { useState } from "react";
import "./des.css";
import Navbar from '../../Components/Navbar';
import Sidebar from '../../Components/SlideBar/indexx';
import PaymentHeader from '../../Components/Backbutton';
import { useNavigate } from 'react-router-dom';
function Accommodation() {
    const navigate = useNavigate();

    const handleBack = () => {
        navigate(-1);
    };

  const [selectedImages, setSelectedImages] = useState([]); // State for selected images

  const images = [
    { id: 1, src: "/assets/t-1.png", alt: "Tree House 1", title: "Tree House" },
    { id: 2, src: "/assets/t-2.png", alt: "Tree House 2", title: "Tree House" },
    { id: 3, src: "/assets/t-3.png", alt: "Tree House 3", title: "Tree House" },
    { id: 4, src: "/assets/t-4.png", alt: "Tree House 4", title: "Tree House" },
    { id: 5, src: "/assets/t-1.png", alt: "Tree House 5", title: "Tree House" },
    { id: 6, src: "/assets/t-3.png", alt: "Tree House 6", title: "Tree House" },
    { id: 7, src: "/assets/t-4.png", alt: "Tree House 7", title: "Tree House" },
    { id: 8, src: "/assets/t-3.png", alt: "Tree House 8", title: "Tree House" },
    { id: 9, src: "/assets/t-2.png", alt: "Tree House 9", title: "Tree House" },
  ];

  const toggleImageSelection = (imageId) => {
    if (selectedImages.includes(imageId)) {
      setSelectedImages(selectedImages.filter((id) => id !== imageId));
    } else {
      setSelectedImages([...selectedImages, imageId]);
    }
  };

  return (
    <div className="accommodation-page1">
        <div>
            <Navbar/>
            <div>
                <Sidebar/>
                <div><div className='backbottom2'>
                        <PaymentHeader onClick={handleBack} />
                    </div>
       <div className="ops1">
            <h1 className="opa4">Destination Preferences</h1>
            <h4 className="opa7">Where do you want to go?</h4>
            <p className="opa5">Unlock accommodation you love.

            </p>
            
      
      <div className="main-content1">
      
        <div className="right-side1">
          <div className="image-gallery1">
            {images.map((image) => (
              <div
                key={image.id}
                className="image-item1"
                onClick={() => toggleImageSelection(image.id)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className={`image-item-style1 ${selectedImages.includes(image.id) ? "selected" : ""
                    }`}
                />
                <p>{image.title}</p>
              </div>
            ))}
          </div>
        </div>
        </div>
        </div>
       
        </div>
        </div>
        <button className="save-button1">Save</button>
     </div>
      </div>
   
  );
}

export default Accommodation;
