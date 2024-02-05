import React from 'react';
import LogoBook from '../SvgComponents/LogoBookSvg/LogoBook';
import CardEx from '../CardExComponent/CardEx';
import BookBlue from '../../../images/BookBlue.webp';
import BookRed from '../../../images/BookRed.webp';
import BookYellow from '../../../images/BookYellow.webp';

function Section() {
  return (
    <section className="container container-responsive-m">
      <div className="flex-item-2 flex-start flex-column sectionOne">
        <h2>Maior Acervo do Brasil</h2>
        <div className="text-sub-bar " />
        <LogoBook />
        <p className="mg-1">
          {' '}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ornare
          arcu odio ut sem nulla pharetra.{' '}
        </p>
      </div>
      <div className="flex-item-1 flex flex-row position-relative flex-responsive mg-3">
        <CardEx img={BookBlue} id="card-1" />
        <CardEx img={BookRed} id="card-2" />
        <CardEx img={BookYellow} id="card-3" />
      </div>
    </section>
  );
}

export default Section;
