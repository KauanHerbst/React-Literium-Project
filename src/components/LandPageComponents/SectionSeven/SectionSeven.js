import React from 'react';
import Aos from 'aos';
import DetailComponent from '../DetailComponent/DetailComponent';
import BarSearchSvg from '../SvgComponents/BarSearchSvg/BarSearchSvg';
import 'aos/dist/aos.css';

function SectionSeven() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="container flex-startoverflow-hidden ">
      <div className="flex-item-1 position-relative" data-aos="fade-right">
        <h2>Busca Avançada</h2>
        <div className="text-sub-bar width-sub-bar-5" />
        <div id="box-seven-1" className="box-float-big position-absolute">
          Romance
        </div>
        <div id="box-seven-2" className="box-float-big position-absolute">
          Fantasia
        </div>
        <div id="box-seven-3" className="box-float-big position-absolute">
          Aventura
        </div>
        <BarSearchSvg className="mt-5" />
      </div>
      <div className="flex-item-2" data-aos="fade-left">
        <DetailComponent>Filtre o que deseja</DetailComponent>
        <DetailComponent>Sempre encontre o que quer aqui</DetailComponent>
        <DetailComponent>Alto desempenho nas buscas</DetailComponent>
      </div>
    </section>
  );
}

export default SectionSeven;
