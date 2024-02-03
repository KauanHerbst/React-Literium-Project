import React from 'react';

function InputComponent({ children, type, association, className }) {
  className = className || 'flex-start flex-column flex-no-center mt-1';
  return (
    <div className={className}>
      <label htmlFor={association}>{children}</label>
      <input type={type} name={association} className="inputComponent" />
    </div>
  );
}

export default InputComponent;
