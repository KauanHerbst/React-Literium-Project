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
        <InputComponent type="text" association="nome">
          Nome
        </InputComponent>
        <InputComponent type="email" association="email">
          Email
        </InputComponent>
        <InputComponent type="password" association="senha">
          Senha
        </InputComponent>
        <InputComponent type="password" association="senha-repeat">
          Repetir Senha
        </InputComponent>
        <div className="mg-4">
          <ButtonAccountComponent />
        </div>
      </div>
    </section>
  );
}

export default SectionEight;
