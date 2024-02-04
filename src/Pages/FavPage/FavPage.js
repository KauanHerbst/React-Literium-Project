import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import FavComponent from '../../components/FavComponent/FavComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';

function FavPage() {
  return (
    <>
      <MenuComponent />
      <FavComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default FavPage;
