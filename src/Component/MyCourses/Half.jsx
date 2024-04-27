import { useState } from "react";
import video from "./img&videos/moveis.mp4";
import ASSIGNMENTS from "./ASSIGNMENTS";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes, faUser } from "@fortawesome/free-solid-svg-icons";
import "./MyCourses.css"
import Lift from "./Lift";
import Right from "./Right";

export default function Half() {

  const [dashMenu, setdashMenu] = useState(false);
  const [courseMenu, setCourseMenu] = useState(false);

  const toggle = () => {
    setdashMenu(!dashMenu);
  };

  const toggleCourse = () => {
    setCourseMenu(!courseMenu);
  };

  return (
    <>
      <div className="top d-flex align-items-center gap-3">
        <div className="burger-k iconOne">
          <FontAwesomeIcon icon={dashMenu ? faTimes : faBars} className="burgerIcon-k" onClick={toggle} />
        </div>
        <input
          style={{ background: "#F6F7F9", maxWidth: "100%" }}
          type="text"
          className="form-control my-3"
          id="textInput"
          placeholder="Search your course here...."
        />
        <div className="burger-k iconTwo">
          <FontAwesomeIcon icon={courseMenu ? faTimes : faUser} className="burgerIcon-k" onClick={toggleCourse} />
        </div>
      </div>
      {dashMenu ? <Lift /> : courseMenu ? <Right /> : (
        <div>
          <video src={video} className="w-100" controls />
      <h5 className="heading-font-l">Introduction to Product Design</h5>
      <p
        style={{ display: "inline", color: "#696974", marginRight: "10px" }}
        className="font-two-l"
      >
        John Smith
      </p>
      <p style={{ display: "inline", color: "#7B8392", marginRight: "10px" }}>
        {" "}
        Sr. Product Designer{" "}
      </p>
      <p style={{ color: "#702DFF", display: "inline" }}> + Follow Mentor </p>
      <div className="container my-4">
        <div className="row">
          <div className="col" style={{ padding: 0 }}>
            <div className="underline font-two-b">ASSIGNMENTS</div>
            <div
              style={{ color: "#1F2029", background: "#1F2029", marginBottom: "5px", height: "5px" }}
              className="border w-100"
            ></div>
          </div>
        </div>
      </div>
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
        </div>
      )}
      {/* {courseMenu ? <Right /> : (
        <div>
          <video src={video} className="w-100" controls />
      <h5 className="heading-font-l">Introduction to Product Design</h5>
      <p
        style={{ display: "inline", color: "#696974", marginRight: "10px" }}
        className="font-two-l"
      >
        John Smith
      </p>
      <p style={{ display: "inline", color: "#7B8392", marginRight: "10px" }}>
        {" "}
        Sr. Product Designer{" "}
      </p>
      <p style={{ color: "#702DFF", display: "inline" }}> + Follow Mentor </p>
      <div className="container my-4">
        <div className="row">
          <div className="col" style={{ padding: 0 }}>
            <div className="underline font-two-b">ASSIGNMENTS</div>
            <div
              style={{ color: "#1F2029", background: "#1F2029", marginBottom: "5px", height: "5px" }}
              className="border w-100"
            ></div>
          </div>
        </div>
      </div>
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
      <ASSIGNMENTS
        nameOfAssignments={"Collecting Moodboard from Dribbble.com"}
        content={"Let’s return to design thinking. Over time designers have built up their own body of approaches to solving classes of problems."}
        numberOfStudents={"32 Students Collected"}
        numberOfDays={"1 Day Left"}
      />
        </div>
      )} */}
    </>
  );
}
