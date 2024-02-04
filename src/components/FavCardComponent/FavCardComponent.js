import React from 'react';
import BookBlue from '../../images/BookBlue.webp';

function FavCardComponent() {
  return (
    <div className="flex-start container-fav mb-3">
      <div className="flex-item-1 flex-start container-info flex-no-center">
        <div className="image-product-fav flex-start">
          <img src={BookBlue} />
        </div>
        <div className="mg-1">
          <h2 className="ml-1 mb-1">Livro</h2>
          <h5 className="ml-1 mb-1">Autor</h5>
          <h5 className="ml-1 mb-1">R$: 999</h5>
        </div>
      </div>
      <div className="flex-item-1 flex-start buttons flex-column">
        <button type="button" className="buttonAddCart btn-addFav mt-2">
          Adicionar ao Carrinho
        </button>
        <button type="button" className="buttonAddCart btn-addFav mt-2">
          Remover dos Favoritos
        </button>
      </div>
    </div>
  );
}

export default FavCardComponent;
