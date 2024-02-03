import React from 'react';

function CloseSvg({ children, width, height, className }) {
  width = width || 58;
  height = height || 58;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 58 58"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M53.5871 4.54297L4.2334 52.9669"
        stroke="#BC6365"
        strokeWidth="8.10369"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M4.2334 4.54297L53.5871 52.9669"
        stroke="#BC6365"
        strokeWidth="8.10369"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default CloseSvg;
