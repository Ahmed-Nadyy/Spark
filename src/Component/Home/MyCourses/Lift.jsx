import React from "react";
import OneCourse from "./OneCourse";

export default function Lift() {
  return (
    <>
      <div
        style={{
          border: "1px solid #E0E0E0",
          borderRadius: "5px",
          padding: "10px",
          boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="heading-font-r">My Courses</h2>
        <input
          style={{ background: "#F6F7F9" }}
          type="text"
          className="form-control"
          id="textInput"
          placeholder="Search course & class ..."
        />
        <div class="border border-white my-2 w-100"></div>
        <p className="font-two-l my-0">All Courses</p>
        <div
          style={{ color: "#F6F7F9", marginBottom: "10px" }}
          class="border "
        ></div>
        <div>
          <OneCourse
            nameofcourse={"Design Challenges Workbook"}
            img={
              "https://image.slidesharecdn.com/hasseb2teacher-141218043912-conversion-gate01/95/2-1-638.jpg?cb=1418877966"
            }
            percentage={40}
            detils={"40+ lessons , 4+ hours"}
          />
          <OneCourse
            nameofcourse={"Design Challenges Workbook"}
            img={
              "https://image.slidesharecdn.com/hasseb2teacher-141218043912-conversion-gate01/95/2-1-638.jpg?cb=1418877966"
            }
            percentage={90}
            detils={"40+ lessons , 4+ hours"}
          />
          <OneCourse
            nameofcourse={"Design Challenges Workbook"}
            img={
              "https://image.slidesharecdn.com/hasseb2teacher-141218043912-conversion-gate01/95/2-1-638.jpg?cb=1418877966"
            }
            percentage={2}
            detils={"40+ lessons , 4+ hours"}
          />
          <OneCourse
            nameofcourse={"Design Challenges Workbook"}
            img={
              "https://image.slidesharecdn.com/hasseb2teacher-141218043912-conversion-gate01/95/2-1-638.jpg?cb=1418877966"
            }
            percentage={10}
            detils={"40+ lessons , 4+ hours"}
          />
          <OneCourse
            nameofcourse={"Design Challenges Workbook"}
            img={
              "https://image.slidesharecdn.com/hasseb2teacher-141218043912-conversion-gate01/95/2-1-638.jpg?cb=1418877966"
            }
            percentage={40}
            detils={"40+ lessons , 4+ hours"}
          />
        </div>
      </div>
    </>
  );
}
