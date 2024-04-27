import React, { useState } from 'react';
import './EditProfile.css';
import { Link } from 'react-router-dom';

function EditProfile() {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleUploadButtonClick = () => {
    document.getElementById('fileInput').click();
  };

  return (
    <>
      <div className="wrapper bg-white mt-sm-5 my-5">
        <h4 className="pb-4 border-bottom">Account settings</h4>
        <div className="d-flex align-items-start py-3 border-bottom">
          <img
            src={selectedImage ? URL.createObjectURL(selectedImage) : 'https://images.pexels.com/photos/1037995/pexels-photo-1037995.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'}
            className="img mx-5"
            alt=""
          />
          <div className="pl-sm-4 pl-2" id="img-section">
            <b>Profile Photo</b>
            <p>Accepted file type .png & .jpg Less than 1MB</p>
            <input
              type="file"
              id="fileInput"
              style={{ display: 'none' }}
              onChange={handleImageUpload}
            />
            <button
              className="btn btn-primary"
              onClick={handleUploadButtonClick}
            >
              <b>Upload</b>
            </button>
          </div>
        </div>
        <div className="py-2">
    <div className="row py-2">
      <div className="col-md-6">
        <label htmlFor="firstname">First Name</label>
        <input type="text" className="bg-light form-control" placeholder="ahmed" />
      </div>
      <div className="col-md-6 pt-md-0 pt-3">
        <label htmlFor="lastname">Last Name</label>
        <input type="text" className="bg-light form-control" placeholder="nady" />
      </div>
    </div>
    <div className="row py-2">
      <div className="col-md-6">
        <label htmlFor="email">Email Address</label>
        <input type="text" className="bg-light form-control" placeholder="nady_@email.com" />
      </div>
      <div className="col-md-6">
        <label htmlFor="country">Country</label>
        <select name="country" id="country" className="bg-light">
        <option value="india" selected>Egypt</option>
          <option value="india" >India</option>
          <option value="usa">USA</option>
          <option value="uk">UK</option>
          <option value="uae">UAE</option>
        </select>
      </div>
    </div>
    <div className="row py-2">
      
      {/* <div className="col-md-6 pt-md-0 pt-3" id="lang">
       
      </div> */}
    </div>
    <div className="py-3 pb-4 border-bottom d-flex justify-content-between">
      <button className="btn btn-primary mr-3">Save Changes</button>
      <Link to='/Dashboard'><button className="btn btn-primary">Cancel</button></Link>
    </div>
    
  </div>
      </div>
    </>
  );
}

export default EditProfile;
