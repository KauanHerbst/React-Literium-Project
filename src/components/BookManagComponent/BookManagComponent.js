import React from 'react';
import BookInfoComponent from '../BookInfoComponent/BookInfoComponent';

function BookManagComponent() {
  return (
    <section className="container flex-start flex-column ">
      <div className="mb-3 mt-3">
        <h2>Gerenciamento de Livros</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div>
        <BookInfoComponent />
        <BookInfoComponent />
        <BookInfoComponent />
        <BookInfoComponent />
        <BookInfoComponent />
      </div>
      <div>
        <button type="button" className="buttonPattern">
          Ver mais
        </button>
      </div>
    </section>
  );
}

export default BookManagComponent;
