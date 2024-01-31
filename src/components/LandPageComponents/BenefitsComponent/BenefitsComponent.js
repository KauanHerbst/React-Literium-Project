import React from 'react';

function BenefitsComponent({ children, Icon }) {
  return (
    <div className="benefit-box">
      <div className="icon-box">
        <Icon />
      </div>
      <span>{children}</span>
    </div>
  );
}

export default BenefitsComponent;
