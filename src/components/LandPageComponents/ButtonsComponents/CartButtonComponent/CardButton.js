import React from 'react';

function CardButton({ children }) {
  return (
    <button type="submit" className="card-button">
      {children}
    </button>
  );
}

export default CardButton;
