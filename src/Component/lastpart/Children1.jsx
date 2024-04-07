import React from "react";
import img1 from "./IMG&ICN/1.png";
export default function Children1() {
  return (
    <>
        <div className="container">
          <div className="row d-flex justify-content-center align-items-center mb-5 ">
            <div className="col-4">
              <img src={img1} className="w-75" />
            </div>

            <div className="col-6">
              <h1 className="heading-font-r">
                <span style={{ color: "#1D1D45" }}>
                  We are Always Ensure Best
                </span>{" "}
                <br />{" "}
                <span style={{ color: "#2AAA94" }}>
                  Course for your learning
                </span>
              </h1>
              <p className="font-two-l" style={{ color: "#7E7EAA" }}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum.
              </p>
              <button
                className="btn text-white "
                style={{ background: "linear-gradient(to right, #083F9B, #7F56D9)" }}
              >
                Learn More
              </button>
            </div>
          </div>
        </div>
    </>
  );
}
