import React from 'react';
import SliderSwiperComponent from '../SliderSwiperComponent/SliderSwiperComponent';

function SectionFive() {
  return (
    <section className="container flex-start flex-column flex-responsive-start-center">
      <div className="flex-item-1-100">
        <h4>Feedback</h4>
        <h2>Resenhas e Avaliações</h2>
        <div className="text-sub-bar" />
      </div>
      <div className="flex-item-1 sliderItem">
        <SliderSwiperComponent />
      </div>
    </section>
  );
}

export default SectionFive;
