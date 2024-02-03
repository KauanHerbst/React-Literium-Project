import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import CartComponent from '../../components/CartComponent/CartComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';

function CartPage() {
  return (
    <>
      <MenuComponent />
      <CartComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default CartPage;
