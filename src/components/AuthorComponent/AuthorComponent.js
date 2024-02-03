import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import ImagePeopleOne from '../../images/Image-people-1.webp';
import ImagePeopleTwo from '../../images/Image-people-2.webp';
import ImagePeopleThree from '../../images/Image-people-3.webp';
import AuthorCard from '../AuthorCard/AuthorCard';

function AuthorComponent() {
  const [sliderPerView, setSliderPewView] = useState(3);

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth < 960 && window.innerWidth > 720) {
        setSliderPewView(2);
      } else if (window.innerWidth > 960) {
        setSliderPewView(4);
      } else {
        setSliderPewView(1);
      }
    }

    handleWindowSize();

    window.addEventListener('resize', handleWindowSize);

    return () => {
      window.removeEventListener('resize', handleWindowSize);
    };
  }, []);

  const dadosAuthorMock = [
    { name: 'Author #1', img: ImagePeopleOne },
    { name: 'Author #2', img: ImagePeopleTwo },
    { name: 'Author #3', img: ImagePeopleThree },
    { name: 'Author #4', img: ImagePeopleTwo },
    { name: 'Author #5', img: ImagePeopleOne },
    { name: 'Author #6', img: ImagePeopleTwo },
  ];

  return (
    <section className="container container-slider-home flex-column">
      <div className="flex-start container-slider-home">
        <div>
          <h2>Principais Autores</h2>
          <div className="text-sub-bar width-sub-bar-4" />
        </div>
        <div className="mg-2">
          <a href="/" className="color-black">
            Ver mais
          </a>
        </div>
      </div>
      <div className="container-slider-cardsbuy">
        <Swiper
          style={{
            '--swiper-pagination-color': '#800020 ',
          }}
          modules={[Navigation, Pagination]}
          slidesPerView={sliderPerView}
          loop
          direction="horizontal"
          pagination={{ clickable: true }}
          navigation
        >
          {dadosAuthorMock.map((item) => (
            <SwiperSlide key={item.name}>
              <AuthorCard name={item.name} img={item.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default AuthorComponent;
