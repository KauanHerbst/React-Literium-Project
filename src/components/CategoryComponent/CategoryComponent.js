import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from 'react-router-dom';
import CardBuyComponent from '../CardBuyComponent/CardBuyComponent';
import BookService from '../../services/BookService/BookService';

function CategoryComponent({ children, category, idCategory }) {
  const [sliderPerView, setSliderPewView] = useState(3);
  const [booksData, setBooksData] = useState();
  const bookService = new BookService();

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

  React.useEffect(() => {
    async function handleBooksDatas() {
      const response = await bookService.findBooksByCategory(idCategory, 0, 6);
      setBooksData(response.content);
    }

    handleBooksDatas();
  }, []);

  return (
    <section className="container container-slider-home flex-start flex-column ">
      <div className="flex-start flex-no-center">
        <div className="flex-start flex-column ">
          <h2>{category}</h2>
          <div className="text-sub-bar width-sub-bar-100" />
        </div>
        <div className="mg-1">
          <Link to={`/categories/${idCategory}`} className="color-black">
            Ver mais
          </Link>
        </div>
      </div>
      {booksData ? (
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
            {booksData.length > 0 ? (
              booksData.map((book) => (
                <SwiperSlide key={book.id}>
                  <CardBuyComponent
                    name={book.name}
                    price={book.price}
                    img={book.imageUrl}
                    id={book.id}
                  />
                </SwiperSlide>
              ))
            ) : (
              <p>Categoria sem Livros</p>
            )}
          </Swiper>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
}

export default CategoryComponent;
