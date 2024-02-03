import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import ProductComponent from '../../components/ProductComponent/ProductComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';

function ProductPage() {
  return (
    <>
      <MenuComponent />
      <ProductComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default ProductPage;
