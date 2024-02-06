import React from 'react';
import { Link } from 'react-router-dom';

function ButtonCta({ children }) {
  return (
    <Link to="/home" className="ButtonCta">
      {children}
    </Link>
  );
}

export default ButtonCta;
