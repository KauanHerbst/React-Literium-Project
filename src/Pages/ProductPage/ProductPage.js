import React from 'react';
import ProductComponent from '../../components/ProductComponent/ProductComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';

function ProductPage() {
  return (
    <>
      <ProductComponent />
      <CategoryComponent category="Veja Também" idCategory="5" />
    </>
  );
}

export default ProductPage;
