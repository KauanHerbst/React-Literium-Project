import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';
import UserService from '../../services/UserService/UserService';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';

function LoginAccountComponent() {
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const userService = new UserService();
  const navigate = useNavigate();
  const { dispatch } = useGlobalContext();

  async function login() {
    const [isLoggin, erros] = await userService.sendLogin(email, senha);
    if (erros.length > 0) erros.map((error) => toast.error(error));
    if (isLoggin) {
      dispatch({ type: 'LOAD_SESSION' });
      dispatch({ type: 'RELOAD_COMPONENT' });
      navigate('/profile');
      toast.success('Login Realizado!');
    }
  }

  return (
    <section className="container container-create-login-account flex-start flex-column">
      <div className="title">
        <h2>Faça Login</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div>
        <form method="post" className="flex-start flex-column">
          <InputComponent
            type="email"
            association="email"
            state={email}
            funcState={setEmail}
          >
            Email
          </InputComponent>
          <InputComponent
            type="password"
            association="password"
            state={senha}
            funcState={setSenha}
          >
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
              login();
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
