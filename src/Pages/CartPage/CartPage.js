import React from 'react';
import CartComponent from '../../components/CartComponent/CartComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';

function CartPage() {
  return (
    <>
      <CartComponent />
      <CategoryComponent category="Veja Também" idCategory="3" />
    </>
  );
}

export default CartPage;
