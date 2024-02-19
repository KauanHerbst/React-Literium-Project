import React from 'react';
import Aos from 'aos';
import SuporteImage1 from '../../../images/SuporteImage1.webp';
import SuporteImage2 from '../../../images/SuporteImage2.webp';
import 'aos/dist/aos.css';

function SectionSix() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="container flex-responsive-start-center">
      <div
        className="flex-item-1 flex-start flex-responsive-start-center flex-column"
        data-aos="fade-right"
      >
        <h2>Suporte 24 Horas</h2>
        <div className="text-sub-bar width-sub-bar-4" />
        <div className="mt-4">
          <p>
            Lorem ipsum dolor sit amet consectetur. Est nulla ipsum lacus
            viverra accumsan vulputate ut eget. Suscipit pretium nibh in sit
            elit iaculis diam id
          </p>
        </div>
      </div>
      <div className="flex-item-4 position-relative ">
        <div className="container-image-section-six" data-aos="fade-left">
          <img
            src={SuporteImage1}
            className="image-secton-six"
            alt="Imagem da equipe de suporte"
          />
        </div>
        <div
          className="container-image-section-six position-relative"
          id="image-section-six-1"
          data-aos="fade-right"
        >
          <img
            src={SuporteImage2}
            className="image-secton-six "
            alt="Imagem da equipe de suporte"
          />
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
