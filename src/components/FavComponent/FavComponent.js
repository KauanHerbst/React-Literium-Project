import React from 'react';
import FavCardComponent from '../FavCardComponent/FavCardComponent';

function FavComponent() {
  return (
    <section className="container flex-start flex-column">
      <FavCardComponent />
      <FavCardComponent />
      <FavCardComponent />
      <FavCardComponent />
      <FavCardComponent />
    </section>
  );
}

export default FavComponent;
