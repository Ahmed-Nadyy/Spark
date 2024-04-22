import React, { useEffect, useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import "./Progressbar.css";

function Progressbar(props) {
  const [animationValue, setAnimationValue] = useState(0);
  const [animationText, setAnimationText] = useState(0);

  useEffect(() => {
    setAnimationValue(props.value);
    const timer = setInterval(() => {
      setAnimationText((prevValue) => {
        const newValue = prevValue + 1;
        if (newValue > props.value) {
          clearInterval(timer);
          return props.value;
        }
        return newValue;
      });
    }, 20);
    return () => clearInterval(timer);
  }, []);

  
  return (
    <>
      <div className="col-md-3 col-6 text-center w-25">
        <CircularProgressbar
          className=" cpbar"
          value={animationValue}
          text={`${animationText}%`}
          styles={{
            path: {
              stroke: `${props.color}`,
              strokeLinecap: "butt",
              transition: "stroke-dashoffset 2s ease-in-out",
            },
            trail: {
              stroke: `${props.color}`,
              opacity: 0.3,
            },
            text: {
              fill: `${props.color}`,
              fontSize: '14px',
            },
          }}
        />
        <p className="pbdes">{props.text}</p>
      </div>
    </>
  );
}

export default Progressbar;
