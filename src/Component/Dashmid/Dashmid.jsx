import React, { useEffect, useState } from "react";
import Search from "../Search/Search";
import "./Dashmid.css";
import { Link } from "react-router-dom";
import CourseCard from "../CourseCard/CourseCard";
import Progressbar from "../Progressbar/Progressbar";
function Dashmid() {
  const [check,setcheck]=useState(true)
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
      <div className={`${check?"col-6 col-lg-7 offset-3 offset-lg-2":"col-12"} `}>
        <div className="w-100 text-center">
          <Search />
        </div>
        <div className="w-100 box">
          <p className="text-white ">ONLINE COURSES</p>
          <b>Sharpen Your Skills With</b>
          <br />
          <b>Professional Online Courses</b>
          <div className="p-2 join">
            <Link to="#" className="text-decoration-none text-white">
              <span>join now &nbsp;</span>
              <i className="far fa-circle-play" />
            </Link>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            <Progressbar value={25} text="مساء الفل ع النايمين" color="orange"/>
            <Progressbar value={60} text="مساء الفل ع العشاق" color="black" />
            <Progressbar value={15} text="صباح الفل ع الصاحيين" color="red" />
            <Progressbar value={90} text="صباح الفل ع العشاق" color="blue" />
          </div>
        </div>
        <hr></hr>
        <h3>Your Courses</h3>
        <div className="product-list mt-4 align-content-center text-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
        <hr></hr>
        <h3>Courses For You</h3>
        <div className="product-list mt-4 align-content-center text-center">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <CourseCard />
        </div>
      </div>
    </>
  );
}

export default Dashmid;
