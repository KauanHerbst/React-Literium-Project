import React from 'react';
import ImagePromotion from '../../components/ImagePromotion/ImagePromotion';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import AuthorComponent from '../../components/AuthorComponent/AuthorComponent';
import RecNewsComponent from '../../components/RecNewsComponent/RecNewsComponent';

function HomePage() {
  return (
    <>
      <ImagePromotion />
      <CategoryComponent category="Ação" idCategory="1" />
      <CategoryComponent category="Aventura" idCategory="2" />
      <CategoryComponent category="Romance" idCategory="3" />
      <AuthorComponent />
      <CategoryComponent category="Drama" idCategory="4" />
      <RecNewsComponent />
    </>
  );
}

export default HomePage;
