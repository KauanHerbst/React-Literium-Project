import React from 'react';

function InputComponent({ children, type, association }) {
  return (
    <div className="flex-start flex-column flex-no-center mt-1">
      <label htmlFor={association}>{children}</label>
      <input type={type} name={association} className="inputComponent" />
    </div>
  );
}

export default InputComponent;
