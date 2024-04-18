import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import pic from "../../assets/stdDashboard/WhatsApp Image 2024-02-26 at 00.13.47_cc9ce5b8.jpg";
import "./Profile.css";
import ToDo from "../ToDo/ToDo";
function Profile() {
  const [check,setcheck]=useState(false);
  const handleResize = () => {
    if (window.innerWidth > 685) {
      setcheck(true);
    }
    else{
      setcheck(false);
    }
  }; 
  window.addEventListener("resize", handleResize);
  useEffect(()=>{
    handleResize();
  },[]);
  return (
    <>
      <div className={`${check?"col-sm-3 offset-sm-9":"col-5 offset-7"} position-fixed position-relative`} style={{ display: check ? 'block' : 'none' }}>
        <div className="d-flex justify-content-between align-items-center top-0">
          <b>Profile</b>
          <Link className="text-decoration-none text-black">
            <i className="fa-solid fa-pen-to-square" />
          </Link>
        </div>
        <div className="text-center w-100 mt-5">
          <div className="profile mt-4 mx-auto"><img className="imag" src={pic} alt="" /></div>
          <div className="mt-2">
            <b>good Morning Prashant</b>
          </div>
          <div className="opacity-75 im-txt">
            continue your journey and achieve Your Target
          </div>
          <div className="position-relative mt-3">
            <Link className="text-decoration-none text-black position-relative">
            <i className="fa-regular fa-bell "></i>
              <div className="noti position-absolute badge p-1 mb-3">5</div>
            </Link>
          </div>
        </div>
        <div className="mt-3 align-content-center justify-content-center"><ToDo/></div>
        
      </div>
    </>
  );
}

export default Profile;
