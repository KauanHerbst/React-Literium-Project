import React from 'react';

function IconProfileSvg({ children, className, width, height }) {
  width = width || 48;
  height = height || 44;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 48 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M44.7778 49.9997V44.7775C44.7778 42.0074 43.6774 39.3508 41.7187 37.3921C39.76 35.4334 37.1034 34.333 34.3333 34.333H13.4444C10.6744 34.333 8.01782 35.4334 6.05911 37.3921C4.10039 39.3508 3 42.0074 3 44.7775V49.9997"
        stroke="#F7F6F6"
        strokeWidth="5.22222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.8888 23.8889C29.6571 23.8889 34.3332 19.2128 34.3332 13.4444C34.3332 7.67614 29.6571 3 23.8888 3C18.1205 3 13.4443 7.67614 13.4443 13.4444C13.4443 19.2128 18.1205 23.8889 23.8888 23.8889Z"
        stroke="#F7F6F6"
        strokeWidth="5.22222"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconProfileSvg;
