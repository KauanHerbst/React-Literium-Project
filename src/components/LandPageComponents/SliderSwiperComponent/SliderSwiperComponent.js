import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import React, { useEffect, useState } from 'react';
import CardFeedBackComponent from '../CardFeedBackComponent/CardFeedBackComponent';
import ImagePeopleOne from '../../../images/Image-people-1.webp';
import ImagePeopleTwo from '../../../images/Image-people-2.webp';
import ImagePeopleThree from '../../../images/Image-people-3.webp';

function SliderSwiperComponent() {
  const [sliderPerView, setSliderPewView] = useState(3);

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth < 960 && window.innerWidth > 720) {
        setSliderPewView(2);
      } else if (window.innerWidth > 960) {
        setSliderPewView(3);
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

  const dados = [
    {
      name: 'Pedro',
      img: ImagePeopleOne,
    },
    {
      name: 'Sarah',
      img: ImagePeopleTwo,
    },
    {
      name: 'Lara',
      img: ImagePeopleThree,
    },
    {
      name: 'Ingrid',
      img: ImagePeopleTwo,
    },
  ];

  const text =
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do .';

  return (
    <div className="container-slider">
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
        {dados.map((item) => (
          <SwiperSlide key={item.name}>
            <CardFeedBackComponent name={item.name} img={item.img}>
              {text}
            </CardFeedBackComponent>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default SliderSwiperComponent;
