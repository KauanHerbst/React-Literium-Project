import React from 'react';
import ImagePromotion from '../../components/ImagePromotion/ImagePromotion';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import AuthorComponent from '../../components/AuthorComponent/AuthorComponent';
import RecNewsComponent from '../../components/RecNewsComponent/RecNewsComponent';

function HomePage() {
  return (
    <>
      <ImagePromotion />
      <CategoryComponent category="Categoria #1" />
      <CategoryComponent category="Categoria #2" />
      <CategoryComponent category="Categoria #3" />
      <AuthorComponent />
      <CategoryComponent category="Categoria #4" />
      <RecNewsComponent />
    </>
  );
}

export default HomePage;
