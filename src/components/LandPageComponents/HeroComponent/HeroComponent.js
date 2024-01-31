import React from 'react';
import ButtonCta from '../ButtonsComponents/ButtonCta/ButtonCta';
import BookWebp from '../../../images/BookImage.webp';
import LoveSvg from '../SvgComponents/LoveSvg/LoveSvg';
import LikeSvg from '../SvgComponents/LikeSvg/LikeSvg';

function HeroComponent() {
  return (
    <main className="container">
      <div className="flex-item-1 mt-5">
        <div className="position-relative hero-title">
          <h1 className="mg-1">LITERIUM</h1>
          <p className="mg-1">O maior acervo de livros do Brasil</p>
          <ButtonCta className="mg-1">Ver Acervo</ButtonCta>
        </div>
      </div>
      <div className="flex-item-3 position-relative">
        <img src={BookWebp} className="image-hero overflow-hidden" />
        <div id="box-hero-1" className="box-float-big position-absolute">
          Amo Livros
        </div>
        <div id="box-hero-2" className="box-float-small position-absolute">
          <LikeSvg />
        </div>
        <div id="box-hero-3" className="box-float-small position-absolute">
          <LoveSvg />
        </div>
      </div>
    </main>
  );
}

export default HeroComponent;
