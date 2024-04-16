import React from "react";
import img from "./img&videos/See Calendar ICON.png";

export default function ASSIGNMENTS(props) {
  return (
    <>
      <div
        style={{
            border: "1px solid #E0E0E0",
            borderRadius: "5px",
            padding: "10px",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  marginBottom:"10px"
            
        }}
      >
        <p className="font-two-l my-2">{props.nameOfAssignments}</p>

        <p style={{ color: "#92929C", margin: "5px" }}>{props.content}</p>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "10px",
          }}
        >
          <button
            className="w-25 my-2"
            style={{ border: "none", borderRadius: "5px" }}
          >
            <img src={img} alt="" className="w-100" />
          </button>

          <button
            className="btn primary w-25"
            style={{
              border: "none",
              borderRadius: "5px",
              background: "#702DFF",
              color: "white",
            }}
          >
            View Details
          </button>

          <p style={{ color: "#1F2029", margin: "0" }}>
            {props.numberOfStudents}
          </p>

          <p style={{ color: "#E61F57", margin: "0" }}>{props.numberOfDays}</p>
        </div>
      </div>
    </>
  );
}
