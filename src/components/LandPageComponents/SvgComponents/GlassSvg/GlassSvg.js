import React from 'react';

function GlassSvg({ children, width, height, className }) {
  width = width || 43;
  height = height || 43;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 63 43"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M19.4443 35.8887C28.5263 35.8887 35.8887 28.5263 35.8887 19.4443C35.8887 10.3624 28.5263 3 19.4443 3C10.3624 3 3 10.3624 3 19.4443C3 28.5263 10.3624 35.8887 19.4443 35.8887Z"
        stroke="black"
        strokeWidth="4.11109"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0002 40.0002L31.0586 31.0586"
        stroke="black"
        strokeWidth="4.11109"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default GlassSvg;
