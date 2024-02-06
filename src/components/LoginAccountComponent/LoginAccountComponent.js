import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';

function LoginAccountComponent() {
  return (
    <section className="container container-create-login-account flex-start flex-column">
      <div className="title">
        <h2>Faça Login</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div>
        <form method="post" className="flex-start flex-column">
          <InputComponent type="email" association="email">
            Email
          </InputComponent>
          <InputComponent type="password" association="password">
            Senha
          </InputComponent>
          <p className="mg-1">
            Ainda não possui uma conta? <Link to="/account">Clique Aqui</Link>
          </p>
          <button
            type="submit"
            className="buttonPattern btn-create-account mg-3"
            onClick={(e) => {
              e.preventDefault();
            }}
          >
            Login
          </button>
        </form>
      </div>
    </section>
  );
}

export default LoginAccountComponent;
