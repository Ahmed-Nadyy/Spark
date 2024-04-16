import React from "react";
import Circle from "./Circle";
import videoIcon from "./img&videos/video.png";

const OneVideo = (props) => {
  const { percentage, nameOfVideo, timeOfVideo } = props;

  return (
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-4">
          <div className="d-flex align-items-center justify-content-center">
            <Circle percentage={percentage} />
          </div>
        </div>
        <div className="col-md-8">
          <div className="d-flex align-items-center">
            <img
              src={videoIcon}
              alt="Video Icon"
              style={{ width: "15px", marginRight: "10px" }}
            />
            <p className="font-weight-bold mb-0">{nameOfVideo}</p>
          </div>

          <p className="my-0 py-0">({props.timeOFVideo})</p>
        </div>
      </div>
    </div>
  );
};

export default OneVideo;
