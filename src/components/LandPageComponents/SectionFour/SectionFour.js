import React from 'react';
import DetailComponent from '../DetailComponent/DetailComponent';
import ButtonAccountComponent from '../ButtonsComponents/ButtonAccountComponent/ButtonAccountComponent';
import LampshadeSvg from '../SvgComponents/LampshadeSvg/LampshadeSvg';
import BookCaseSvg from '../SvgComponents/BookCaseSvg/BookCaseSvg';

function SectionFour() {
  return (
    <section className="container flex-start">
      <div className="flex-item-2">
        <h2>Seja Literium</h2>
        <div className="text-sub-bar width-sub-bar-3" />
        <DetailComponent>Diversos benefícios</DetailComponent>
        <DetailComponent>Frete Grátis na primeira compra</DetailComponent>
        <DetailComponent>Receba Atualizações</DetailComponent>
      </div>
      <div className="flex-item-2 flex-start flex-column">
        <div className="flex-start mg-4">
          <div className="mg-3">
            <BookCaseSvg />
          </div>
          <div className="mg-3">
            <LampshadeSvg />
          </div>
        </div>
        <ButtonAccountComponent />
      </div>
    </section>
  );
}

export default SectionFour;
