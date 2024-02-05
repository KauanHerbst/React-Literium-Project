import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import BookBlue from '../../images/BookBlue.webp';
import BookRed from '../../images/BookRed.webp';
import BookYellow from '../../images/BookYellow.webp';
import CardBuyComponent from '../CardBuyComponent/CardBuyComponent';

function CategoryComponent({ children, category }) {
  const [sliderPerView, setSliderPewView] = useState(3);

  useEffect(() => {
    function handleWindowSize() {
      if (window.innerWidth > 960) {
        setSliderPewView(4);
      } else if (window.innerWidth < 960 && window.innerWidth > 720) {
        setSliderPewView(2);
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

  const dadosCategoryMock = [
    { name: 'Livro #1', price: '9999', img: BookBlue },
    { name: 'Livro #2', price: '9999', img: BookRed },
    { name: 'Livro #3', price: '9999', img: BookYellow },
    { name: 'Livro #4', price: '9999', img: BookBlue },
    { name: 'Livro #5', price: '9999', img: BookRed },
    { name: 'Livro #6', price: '9999', img: BookYellow },
  ];
  return (
    <section className="container container-slider-home flex-start flex-column ">
      <div className="flex-start flex-no-center">
        <div className="flex-start flex-column ">
          <h2>{category}</h2>
          <div className="text-sub-bar width-sub-bar-100" />
        </div>
        <div className="mg-1">
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
          {dadosCategoryMock.map((item) => (
            <SwiperSlide key={item.name}>
              <CardBuyComponent
                name={item.name}
                price={item.price}
                img={item.img}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default CategoryComponent;
