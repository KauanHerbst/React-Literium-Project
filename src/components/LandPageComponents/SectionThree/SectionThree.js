import React from 'react';
import DetailComponent from '../DetailComponent/DetailComponent';
import MapComSetaSvg from '../SvgComponents/MapComSetaSvg/MapComSetaSvg';

function SectionThree() {
  return (
    <section className="container section-three flex-no-center section-three">
      <div className="flex-item-2 position-relative mg-2">
        <MapComSetaSvg />
      </div>
      <div className="flex-item-1 mg-2">
        <h4>Rapidez</h4>
        <h2>Entregamos em todo o País</h2>
        <div className="text-sub-bar width-sub-bar-2" />
        <DetailComponent>Rápida entrega</DetailComponent>
        <DetailComponent>Embalagem própria</DetailComponent>
        <DetailComponent>Ganhe brindes</DetailComponent>
      </div>
    </section>
  );
}

export default SectionThree;
