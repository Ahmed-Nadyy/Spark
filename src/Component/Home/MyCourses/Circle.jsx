import React from 'react';

const Circle = ({ percentage }) => {
  const radius = 10; 
  const diameter = radius * 2;

    const gradientPosition = `${percentage}%`;
    

    if (percentage === 100) {
        return (
          <div style={{ width: diameter, height: diameter, borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
            <svg width={diameter} height={diameter} style={{ position: 'absolute', top: 0, left: 0 }}>
              <circle
                cx={radius}
                cy={radius}
                r={radius - 5}
                fill="transparent"
                stroke="#8a2be2"
                strokeWidth="10"
              />
            </svg>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="white" viewBox="0 0 16 16" style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
              <path fillRule="evenodd" d="M6.25 10.795a.75.75 0 0 0 1.06 1.06l4.5-4.5a.75.75 0 1 0-1.06-1.06l-3.72 3.72-1.72-1.72a.75.75 0 0 0-1.06 1.06l2.25 2.25z" />
            </svg>
          </div>
        );
      }

  return (
    <div style={{ width: diameter, height: diameter, borderRadius: '50%', position: 'relative', overflow: 'hidden' }}>
      <div
        style={{
          width: '100%',
          height: '100%',
          borderRadius: '50%',
          background: `linear-gradient(to left, #8a2be2 ${gradientPosition}, transparent ${gradientPosition})`,
        }}
      />
    
      <svg width={diameter} height={diameter} style={{ position: 'absolute', top: 0, left: 0 }}>
        <circle
          cx={radius}
          cy={radius}
          r={radius - 1} 
          fill="transparent"
          stroke="#ccc" 
          strokeWidth="2" 
        />
      </svg>
    </div>
  );
};

export default Circle;
