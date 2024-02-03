import React from 'react';

function BarsSvg({ children, className, width, height }) {
  width = width || 63;
  height = height || 45;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 63 45"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M59.5 16.333H4"
        stroke="#F7F6F6"
        strokeWidth="6.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.5 4H4"
        stroke="#F7F6F6"
        strokeWidth="6.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.5 28.667H4"
        stroke="#F7F6F6"
        strokeWidth="6.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M59.5 41H4"
        stroke="#F7F6F6"
        strokeWidth="6.16667"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default BarsSvg;
