import React from 'react';
import InputComponent from '../InputsComponents/InputComponent';
import ButtonAccountComponent from '../ButtonsComponents/ButtonAccountComponent/ButtonAccountComponent';

function SectionEight() {
  return (
    <section className="container flex-start flex-column">
      <div className="">
        <h2>Crie Sua Conta Agora</h2>
        <div className="text-sub-bar width-sub-bar-6" />
      </div>
      <div className="mt-4">
        <div className="flex-start flex-column flex-no-center mt-1">
          <label htmlFor="name">Nome</label>
          <input required type="text" name="name" />
        </div>

        <div className="flex-start flex-column flex-no-center mt-1">
          <label htmlFor="email">Email</label>
          <input required type="email" name="email" />
        </div>

        <div className="flex-start flex-column flex-no-center mt-1">
          <label htmlFor="senha">Senha</label>
          <input required type="password" name="senha" />
        </div>

        <div className="flex-start flex-column flex-no-center mt-1">
          <label htmlFor="senha-repeat">Repetir Senha</label>
          <input required type="password" name="senha-repeat" />
        </div>
        <div className="mg-4">
          <ButtonAccountComponent />
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
