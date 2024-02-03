import React from 'react';

function IconCartSvg({ children, className, width, height }) {
  width = width || 55;
  height = height || 44;
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 55 53"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.9046 49.9996C22.1407 49.9996 23.1427 48.9976 23.1427 47.7615C23.1427 46.5255 22.1407 45.5234 20.9046 45.5234C19.6685 45.5234 18.6665 46.5255 18.6665 47.7615C18.6665 48.9976 19.6685 49.9996 20.9046 49.9996Z"
        stroke="#F7F6F6"
        strokeWidth="4.47619"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.5237 49.9996C46.7598 49.9996 47.7618 48.9976 47.7618 47.7615C47.7618 46.5255 46.7598 45.5234 45.5237 45.5234C44.2877 45.5234 43.2856 46.5255 43.2856 47.7615C43.2856 48.9976 44.2877 49.9996 45.5237 49.9996Z"
        stroke="#F7F6F6"
        strokeWidth="4.47619"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3H11.9524L17.9505 32.9681C18.1551 33.9985 18.7157 34.9241 19.534 35.5829C20.3524 36.2416 21.3763 36.5916 22.4267 36.5714H44.181C45.2313 36.5916 46.2553 36.2416 47.0736 35.5829C47.8919 34.9241 48.4525 33.9985 48.6571 32.9681L52.2381 14.1905H14.1905"
        stroke="#F7F6F6"
        strokeWidth="4.47619"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default IconCartSvg;
