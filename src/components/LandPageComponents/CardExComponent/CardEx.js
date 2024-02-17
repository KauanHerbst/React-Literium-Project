import React from 'react';
import CardButton from '../ButtonsComponents/CartButtonComponent/CardButton';

function CardEx({ children, img, id, className }) {
  className += ' card-image';
  return (
    <div
      className="container-card mg-2 position-relative perspective-200"
      id={id}
    >
      <div className={className}>
        <img src={img} />
      </div>
      <CardButton>Adicionar ao Carrinho</CardButton>
    </div>
  );
}

export default CardEx;
