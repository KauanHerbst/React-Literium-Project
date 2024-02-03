import React from 'react';
import StarsSvg from '../LandPageComponents/SvgComponents/StarsSvg/StarsSvg';

function CardBuyComponent({ children, name, price, img }) {
  return (
    <div className="flex-start flex-column flex-no-center container-cardBuy">
      <div className="container-image flex-start">
        <img src={img} className="image-book" />
      </div>
      <div className="flex-start">
        <div className="mg-1">
          <h5>{name}</h5>
        </div>
        <div className="">
          <StarsSvg width={15} height={18} />
        </div>
      </div>
      <div className="mg-1">
        <h5>R${price}</h5>
      </div>
      <div className="ml-1 mt-1">
        <button type="submit" className="buttonAddCart mg-1">
          Adicionar ao carrinho
        </button>
      </div>
    </div>
  );
}

export default CardBuyComponent;
