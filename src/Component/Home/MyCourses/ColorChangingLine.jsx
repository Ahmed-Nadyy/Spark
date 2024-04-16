import React from 'react';

const ColorChangingLine = ({ percentage }) => {
  const color = percentage > 0 ? 'purple' : 'red'; 

  const lineStyle = {
    width: `${Math.abs(percentage)}%`, 
    height: '100%', 
    backgroundColor: color, 
  };

  return (
    <div className="progress my-2" style={{height:"5px"}}>
      <div className="progress-bar" role="progressbar" style={lineStyle}></div>
    </div>
  );
};

export default ColorChangingLine;
