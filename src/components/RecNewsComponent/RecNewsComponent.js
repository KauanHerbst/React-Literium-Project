import React from 'react';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';

function RecNewsComponent() {
  return (
    <section className="container flex-start flex-column  flex-responsive-start-center">
      <div>
        <h2>Receba Novidades</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div className="container-recnews">
        <InputComponent
          type="text"
          association="name"
          className="mg-2 flex-start flex-column flex-no-center"
        >
          Nome
        </InputComponent>
        <InputComponent
          type="email"
          association="email"
          className="mg-2 flex-start flex-column flex-no-center"
        >
          Email
        </InputComponent>
        <button type="submit" className="btn-recnews mt-3">
          Receber Novidades
        </button>
      </div>
    </section>
  );
}

export default RecNewsComponent;
