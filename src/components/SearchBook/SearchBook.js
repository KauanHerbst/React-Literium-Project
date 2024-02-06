import React from 'react';
import CardBuyComponent from '../CardBuyComponent/CardBuyComponent';
import ImageBookBlue from '../../images/BookBlue.webp';

function SearchBook() {
  return (
    <section className="container flex-start flex-column">
      <div className="">
        <h2>Categoria #1</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div className="flex-start container-cards flex-warp">
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
        <CardBuyComponent name="Livro #1" price="999" img={ImageBookBlue} />
      </div>
      <div className="flex-start">
        <button type="button" className="buttonPattern">
          Ver mais
        </button>
      </div>
    </section>
  );
}

export default SearchBook;
