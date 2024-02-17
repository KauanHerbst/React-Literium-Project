import React from 'react';
import Aos from 'aos';
import SliderSwiperComponent from '../SliderSwiperComponent/SliderSwiperComponent';
import 'aos/dist/aos.css';

function SectionFive() {
  React.useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);
  return (
    <section className="container flex-start flex-column flex-responsive-start-center ">
      <div className="flex-item-1-100" data-aos="fade-right">
        <h4>Feedback</h4>
        <h2>Resenhas e Avaliações</h2>
        <div className="text-sub-bar" />
      </div>
      <div
        className="flex-item-1 sliderItem"
        data-aos="zoom-in-up"
        data-aos-duration="2000"
      >
        <SliderSwiperComponent />
      </div>
    </section>
  );
}

export default SectionFive;
