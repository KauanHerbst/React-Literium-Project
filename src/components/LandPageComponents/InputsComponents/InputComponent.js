import React from 'react';

function InputComponent({
  children,
  type,
  association,
  className,
  disable,
  state,
  funcState,
}) {
  className = className || 'flex-start flex-column flex-no-center mt-1';
  state = state || '';
  disable = disable || false;
  return (
    <div className={className}>
      <label htmlFor={association}>{children}</label>
      <input
        type={type}
        name={association}
        className="inputComponent"
        value={state}
        disabled={disable}
        onChange={(e) => {
          funcState(e.target.value);
        }}
      />
    </div>
  );
}

export default InputComponent;
