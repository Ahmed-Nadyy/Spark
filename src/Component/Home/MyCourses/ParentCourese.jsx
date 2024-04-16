import React from "react";
import Lift from "./Lift";
import Half from "./Half";
import Right from "./Right";

export default function ParentCourses() {
  return (
    <>
      <div className="container ">
        <div className="row ">
                  <div className=" col-3">
                      <Lift/>
          </div>
                  <div className=" col-6">
                      <Half/>
          </div>
                  <div className=" col-3">
                      <Right/>
          </div>
        </div>
      </div>
    </>
  );
}
