import React from 'react';

function DetailComponent({ children }) {
  return (
    <div className="box-detail flex mt-3 ml-3">
      <div className="circle-detail" />
      <span>{children}</span>
    </div>
  );
}

export default DetailComponent;
