import React from 'react';
import { Link } from 'react-router-dom';
import BookBlue from '../../images/BookBlue.webp';

function BookInfoComponent() {
  return (
    <div className="flex-start container-book-info mb-3 flex-responsive">
      <div className="flex-item-1 flex-start container-info flex-no-center">
        <div className="image-product flex-start">
          <img src={BookBlue} />
        </div>
        <div className="mg-1">
          <h2 className="ml-1 mb-1">Livro</h2>
          <h5 className="ml-1 mb-1">Autor</h5>
          <h5 className="ml-1 mb-1">R$: 999</h5>
        </div>
      </div>
      <div className="flex-item-1 flex-start buttons flex-column">
        <Link to="/editBook">
          <button type="button" className="buttonAddCart btn-addFav mt-2">
            Editar
          </button>
        </Link>
        <button
          type="button"
          className="buttonAddCart btn-addFav mt-2 btn-delete"
        >
          Deletar
        </button>
      </div>
    </div>
  );
}

export default BookInfoComponent;
