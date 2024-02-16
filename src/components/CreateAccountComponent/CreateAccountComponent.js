import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import UserService from '../../services/UserService/UserService';

function CreateAccountComponent() {
  const navigate = useNavigate();
  const userService = new UserService();
  const [accountData, setAccountData] = React.useState({
    name: '',
    email: '',
    password: '',
  });

  function handleChange(e) {
    const { name, value } = e.target;
    setAccountData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  }

  async function createAccount(data) {
    const [success, errors] = await userService.createaAccount(data);
    if (success) {
      navigate('/login');
      toast.success('Conta Criada Com Sucesso!');
    }
    if (errors) errors.map((erro) => toast.error(erro));
  }

  return (
    <section className="container container-create-login-account flex-start flex-column ">
      <div className="title">
        <h2>Crie sua conta</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div>
        <form method="post" className="flex-start flex-column">
          <div className="flex-start flex-column flex-no-center mt-1">
            <label htmlFor="name">Nome</label>
            <input type="name" name="name" onChange={handleChange} />
          </div>
          <div className="flex-start flex-column flex-no-center mt-1">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" onChange={handleChange} />
          </div>
          <div className="flex-start flex-column flex-no-center mt-1">
            <label htmlFor="password">Senha</label>
            <input type="password" name="password" onChange={handleChange} />
          </div>
          <p className="mg-1">
            Já possui uma conta? <Link to="/login">Clique Aqui</Link>
          </p>
          <button
            type="submit"
            className="buttonPattern btn-create-account mg-3"
            onClick={(e) => {
              e.preventDefault();
              createAccount(accountData);
            }}
          >
            Criar Conta
          </button>
        </form>
      </div>
    </section>
  );
}

export default CreateAccountComponent;
