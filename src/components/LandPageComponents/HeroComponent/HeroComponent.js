import React from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import ButtonCta from '../ButtonsComponents/ButtonCta/ButtonCta';
import BookWebp from '../../../images/BookImage.webp';
import LoveSvg from '../SvgComponents/LoveSvg/LoveSvg';
import LikeSvg from '../SvgComponents/LikeSvg/LikeSvg';

function HeroComponent() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <main className="container">
      <div className="flex-item-1 mt-5 " data-aos="zoom-in-up">
        <div className="position-relative hero-title">
          <h1 className="mg-1">LITERIUM</h1>
          <p className="mg-1">O maior acervo de livros do Brasil</p>
          <ButtonCta className="mg-1">Ver Acervo</ButtonCta>
        </div>
      </div>
      <div className="flex-item-3 position-relative" data-aos="zoom-in-up">
        <img
          src={BookWebp}
          className="image-hero overflow-hidden"
          alt="Livro Literium"
        />
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
