import React from 'react';
import FavComponent from '../../components/FavComponent/FavComponent';
import CategoryComponent from '../../components/CategoryComponent/CategoryComponent';

function FavPage() {
  return (
    <>
      <FavComponent />
      <CategoryComponent category="Veja Também" idCategory="1" />
    </>
  );
}

export default FavPage;
