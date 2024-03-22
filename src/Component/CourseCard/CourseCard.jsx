import React from "react";
import pic from "../../assets/stdDashboard/WhatsApp Image 2024-02-26 at 00.13.47_cc9ce5b8.jpg";
import "./CourceCard.css";
import { Link } from "react-router-dom";
function CourseCard() {
  return (
    <>
      <Link className="text-black" to="#">
        <div className="product-card mb-3">
          <img src={pic} alt="" />
          <div className="product-details">
            <div className="std">6489 student</div>
            <div className="desc mt-2">
              Education Software and PHP and JS System Script
            </div>
            <div className="d-flex justify-content-between price mt-2">
              <span>$45.99</span>
              <span>
                <i className="fas fa-shopping-cart"></i>
              </span>
            </div>
          </div>
        </div>
        </Link>
    </>
  );
}

export default CourseCard;
