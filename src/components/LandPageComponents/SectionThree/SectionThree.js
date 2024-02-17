import React from 'react';
import Aos from 'aos';
import DetailComponent from '../DetailComponent/DetailComponent';
import MapComSetaSvg from '../SvgComponents/MapComSetaSvg/MapComSetaSvg';
import 'aos/dist/aos.css';

function SectionThree() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="container section-three flex-no-center section-three ">
      <div className="flex-item-2 position-relative mg-2" data-aos="fade-right">
        <MapComSetaSvg />
      </div>
      <div className="flex-item-1 mg-2" data-aos="fade-left">
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
