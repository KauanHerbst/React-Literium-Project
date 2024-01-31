import React from 'react';
import SuporteImage1 from '../../../images/SuporteImage1.webp';
import SuporteImage2 from '../../../images/SuporteImage2.webp';

function SectionSix() {
  return (
    <section className="container flex-responsive-start-center">
      <div className="flex-item-1 flex-start flex-responsive-start-center flex-column">
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
        <div className="container-image-section-six">
          <img src={SuporteImage1} className="image-secton-six" />
        </div>
        <div
          className="container-image-section-six position-relative"
          id="image-section-six-1"
        >
          <img src={SuporteImage2} className="image-secton-six " />
        </div>
      </div>
    </section>
  );
}

export default SectionSix;
