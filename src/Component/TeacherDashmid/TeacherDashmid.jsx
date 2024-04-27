import React, { useState } from "react";
import { Link, useLocation  } from "react-router-dom";
import TeacherCourseCard from "../TeacherCourseCards/TeacherCourseCard";

function TeacherDashmid() {
  // const location = useLocation();
  const { courses } = location.state || { courses: [] };
  const [check, setcheck] = useState(true);

  const handleResize = () => {
    if (window.innerWidth > 685) {
      setcheck(true);
    } else {
      setcheck(false);
    }
  };

  window.addEventListener("resize", handleResize);

  return (
    <>
      <div className={`${check ? "col-9 " : "col-12"} `}>
        <div className="w-100 box">
          <p className="text-white ">ONLINE COURSES</p>
          <b>You want to add new courses ?</b>
          <div className="p-2 join">
            <Link to="/add-course" className="text-decoration-none text-white">
              <span>Add course &nbsp;</span>
            </Link>
          </div>
        </div>
        <div className="container mt-4">
          <div className="row">
            {/* Progress bars */}
          </div>
        </div>
        <hr></hr>
        <div className="d-flex flex-row ">
          <h3>Your Courses</h3>
          <div className="p-2 join-teacher">
            <Link to="/add-course" className="text-decoration-none text-white">
              <span>Add course &nbsp;</span>
            </Link>
          </div>
        </div>
        <div className="product-list mt-4 align-content-center text-center">
          {/* Render TeacherCourseCard for each course */}
          {courses.map((course, index) => (
            <TeacherCourseCard key={index} {...course} />
          ))}
        </div>
      </div>
    </>
  );
}

export default TeacherDashmid;
