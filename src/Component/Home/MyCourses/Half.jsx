import React from "react";
import video from "./img&videos/moveis.mp4";
import ASSIGNMENTS from "./ASSIGNMENTS";

export default function Half() {
  return (
    <>
      <input
        style={{ background: "#F6F7F9" }}
        type="text"
        class="form-control my-3"
        id="textInput"
        placeholder="Search your course here...."
      />
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
      <div class="container my-4">
        <div class="row">
          <div class="col" style={{padding:0}}>
            <div class="underline font-two-b">ASSIGNMENTS</div>
            <div
              style={{ color: "#1F2029", background:"#1F2029" ,marginBottom: "5px" ,height: "5px" }}
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
    </>
  );
}
