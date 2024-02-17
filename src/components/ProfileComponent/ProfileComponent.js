import React from 'react';
import { Link } from 'react-router-dom';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';
import IconProfileSvg from '../LandPageComponents/SvgComponents/IconProfileSvg/IconProfileSvg';
import PadlockSvg from '../LandPageComponents/SvgComponents/PadlockSvg/PadlockSvg';
import UserService from '../../services/UserService/UserService';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import BookService from '../../services/BookService/BookService';

function ProfileComponent() {
  const { dispatch } = useGlobalContext();
  const [option, setOption] = React.useState(0);
  const [dadosUser, setDadosUser] = React.useState(null);
  const [isAdmin, setIsAdmin] = React.useState(false);
  const [totalBooks, setTotalBooks] = React.useState(0);

  function logout() {
    localStorage.removeItem('userData');
    dispatch({ type: 'LOUGOUT' });
  }

  React.useEffect(() => {
    const profile = document.querySelector('.container-profile');
    const admin = document.querySelector('.container-admin');
    const optionOne = document.querySelector('.option-item-1');
    const optionTwo = document.querySelector('.option-item-2');

    function handleOption() {
      if (option === 0) {
        profile.style.display = 'block';
        admin.style.display = 'none';
        optionOne.style.backgroundColor = '#450005';
        optionTwo.style.backgroundColor = '';
      } else {
        profile.style.display = 'none';
        admin.style.display = 'block';
        optionTwo.style.backgroundColor = '#450005';
        optionOne.style.backgroundColor = '';
      }
    }

    handleOption();
  }, [option]);

  React.useEffect(() => {
    const optionOne = document.querySelector('.option-item-1');
    const optionTwo = document.querySelector('.option-item-2');
    const userService = new UserService();
    const userData = JSON.parse(localStorage.getItem('userData'));
    const bookService = new BookService();

    async function handleTotalBooks() {
      const response = await bookService.totalBooks();
      setTotalBooks(response);
    }

    function changeOptionOne() {
      setOption(0);
    }

    function changeOptionTwo() {
      setOption(1);
    }

    optionOne.addEventListener('click', changeOptionOne);
    optionTwo.addEventListener('click', changeOptionTwo);
    function handleDados() {
      if (userData) {
        setDadosUser(userData);
      }
    }

    function handleRoles() {
      if (userData) {
        setIsAdmin(userService.isUserAdmin());
      }
    }

    handleDados();
    handleRoles();
    handleTotalBooks();

    return () => {
      optionOne.removeEventListener('click', changeOptionOne);
      optionTwo.removeEventListener('click', changeOptionTwo);
    };
  }, []);

  return (
    <section className="container flex-column ">
      <div className="container-profile-admin">
        <div className="options flex-start flex-no-center">
          <div className="flex-start option-item-1 mr-1">
            <IconProfileSvg className="mr-1" />
            <h2>Perfil</h2>
          </div>
          <div className="flex-start option-item-2">
            {isAdmin && (
              <>
                <PadlockSvg className="mr-2" />
                <h2>Administração</h2>
              </>
            )}
          </div>
        </div>
        <div className="container-profile mg-2">
          <div>
            <div className="flex-start flex-column flex-no-center flex-responsive-start-center">
              <h2>Informações Pessoais</h2>
              <div className="text-sub-bar width-sub-bar-7 " />
            </div>
            <div className="flex-start mg-2 flex-responsive">
              <InputComponent
                type="name"
                association="nome"
                className="mg-1 flex-start flex-column flex-no-center"
                disable
                state={dadosUser ? dadosUser.name : null}
              >
                Nome
              </InputComponent>
              <InputComponent
                type="email"
                association="email"
                className="mg-1 flex-start flex-column flex-no-center"
                disable
                state={dadosUser ? dadosUser.email : null}
              >
                Email
              </InputComponent>
              <InputComponent
                type="tel"
                association="contato"
                className="mg-1 flex-start flex-column flex-no-center"
                disable
              >
                Contato
              </InputComponent>
            </div>
          </div>
          <div>
            <div className="flex-start flex-column flex-no-center flex-responsive-start-center">
              <h2>Endereço</h2>
              <div className="text-sub-bar width-sub-bar-8" />
            </div>
            <div className="mg-2">
              <div className="flex-start flex-responsive">
                <InputComponent
                  type="text"
                  association="rua"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  Rua
                </InputComponent>
                <InputComponent
                  type="text"
                  association="bairro"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  Bairro
                </InputComponent>
                <InputComponent
                  type="text"
                  association="numero"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  Número
                </InputComponent>
              </div>
              <div className="flex-start flex-responsive">
                <InputComponent
                  type="text"
                  association="cidade"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  Cidade
                </InputComponent>
                <InputComponent
                  type="text"
                  association="estado"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  Estado
                </InputComponent>
                <InputComponent
                  type="text"
                  association="cep"
                  className="mg-1 flex-start flex-column flex-no-center"
                  disable
                >
                  CEP
                </InputComponent>
              </div>
            </div>
            <div className="flex-start">
              <Link to="/home">
                <button
                  type="button"
                  className="buttonPattern"
                  onClick={logout}
                >
                  Sair
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="container-admin mg-2">
          <div>
            <h2 className="flex-start flex-column flex-no-center  ">Livros</h2>
            <div className="text-sub-bar width-sub-bar-9" />
          </div>
          <div className="flex-between mg-4 ">
            <h5>Total de livros cadastrados:</h5>
            <h5>{totalBooks}</h5>
          </div>
          <div className="flex-start flex-responsive">
            <Link to="/management">
              <button type="button" className="buttonPattern mg-2">
                Gerenciar Livros
              </button>
            </Link>
            <Link to="/createbook">
              <button type="button" className="buttonPattern mg-2">
                Cadastrar Livro
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProfileComponent;
