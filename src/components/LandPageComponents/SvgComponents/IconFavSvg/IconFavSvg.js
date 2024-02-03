import React from 'react';

function IconFav({ children, className, width, height }) {
  width = width || 43;
  height = height || 44;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 43 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M39.5556 50L21.2778 36.9444L3 50V8.22222C3 6.8372 3.5502 5.50891 4.52955 4.52955C5.50891 3.5502 6.8372 3 8.22222 3H34.3333C35.7184 3 37.0466 3.5502 38.026 4.52955C39.0054 5.50891 39.5556 6.8372 39.5556 8.22222V50Z"
        stroke="#F7F6F6"
        strokeWidth="5.22222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconFav;
