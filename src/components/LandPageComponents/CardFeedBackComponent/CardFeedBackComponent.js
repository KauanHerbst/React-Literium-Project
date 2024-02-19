import React from 'react';
import StarsSvg from '../SvgComponents/StarsSvg/StarsSvg';

function CardFeedBackComponent({ children, name, img }) {
  return (
    <div className="container-card-feedback mg-3">
      <div className="flex-start">
        <img
          src={img}
          alt="Imagem de perfil de uma pessoa"
          className="card-feedback-image mr-1"
        />
        <span>{name}</span>
      </div>
      <div className="mg-4">
        <p>{children}</p>
      </div>
      <div className="mt-4">
        <StarsSvg />
      </div>
    </div>
  );
}

export default CardFeedBackComponent;
