import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import ImagePromotion from '../../components/ImagePromotion/ImagePromotion';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import AuthorComponent from '../../components/AuthorComponent/AuthorComponent';
import RecNewsComponent from '../../components/RecNewsComponent/RecNewsComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';

function HomePage() {
  return (
    <>
      <MenuComponent />
      <ImagePromotion />
      <CategoryComponent category="Categoria #1" />
      <CategoryComponent category="Categoria #2" />
      <CategoryComponent category="Categoria #3" />
      <AuthorComponent />
      <CategoryComponent category="Categoria #4" />
      <RecNewsComponent />
      <FooterCompoenent />
    </>
  );
}

export default HomePage;
