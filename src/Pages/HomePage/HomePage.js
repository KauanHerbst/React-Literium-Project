import React from 'react';
import ImagePromotion from '../../components/ImagePromotion/ImagePromotion';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import AuthorComponent from '../../components/AuthorComponent/AuthorComponent';
import RecNewsComponent from '../../components/RecNewsComponent/RecNewsComponent';

function HomePage() {
  return (
    <>
      <ImagePromotion />
      <CategoryComponent category="Ação" idCategory="7" />
      <CategoryComponent category="Aventura" idCategory="4" />
      <CategoryComponent category="Romance" idCategory="5" />
      <AuthorComponent />
      <CategoryComponent category="Drama" idCategory="6" />
      <RecNewsComponent />
    </>
  );
}

export default HomePage;
