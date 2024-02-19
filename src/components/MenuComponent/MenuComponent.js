import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import LogoSvg from '../LandPageComponents/SvgComponents/Logo2Svg/Logo2Svg';
import BarsSvg from '../LandPageComponents/SvgComponents/BarsSvg/BarsSvg';
import GlassSvg from '../LandPageComponents/SvgComponents/GlassSvg/GlassSvg';
import IconFavSvg from '../LandPageComponents/SvgComponents/IconFavSvg/IconFavSvg';
import IconCartSvg from '../LandPageComponents/SvgComponents/IconCartSvg/IconCartSvg';
import IconProfileSvg from '../LandPageComponents/SvgComponents/IconProfileSvg/IconProfileSvg';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import CloseSvg from '../LandPageComponents/SvgComponents/CloseSvg/CloseSvg';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import MenuComponentLandingPage from '../LandPageComponents/MenuComponent/MenuComponent';

function MenuComponent() {
  const [stateCategoriesMenuMobile, setCategoriesMenuMobile] =
    React.useState(false);
  const [stateCategoriesMenuDesktop, setCategoriesMenuDesktop] =
    React.useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [valueSearch, setValueSearch] = React.useState('');
  const { globalState } = useGlobalContext();

  function handleSearch() {
    const inputSearchDesktop = document.querySelector('.inputSearchDesktop');
    const inputSearchMobile = document.querySelector('.inputSearchMobile');
    if (inputSearchDesktop.value !== '') {
      navigate(`/search/${inputSearchDesktop.value}`);
    }
    if (inputSearchMobile.value !== '') {
      navigate(`/search/${inputSearchMobile.value}`);
    }
    inputSearchMobile.value = '';
    inputSearchDesktop.value = '';
    setValueSearch('');
  }

  function handleSearchEnter(e) {
    if (e.key === 'Enter') {
      handleSearch();
    }
  }

  React.useEffect(() => {
    const barMenuMobile = document.querySelector('.bar-menu-mobile');
    const barMenuDesktop = document.querySelector('.container-categories');
    const closeIcon = document.querySelector('.close-icon');
    const searchIconDesktop = document.querySelector('.searchIconDesktop');
    const searchIconMobile = document.querySelector('.searchIconMobile');
    const inputSearchDesktop = document.querySelector('.inputSearchDesktop');
    const inputSearchMobile = document.querySelector('.inputSearchMobile');

    function changeStateMenuMobile() {
      setCategoriesMenuMobile((prevState) => !prevState);
    }

    function changeStateMenuDesktop() {
      setCategoriesMenuDesktop((prevState) => !prevState);
    }

    if (pathname !== '/') {
      barMenuMobile.addEventListener('click', changeStateMenuMobile);
      barMenuDesktop.addEventListener('click', changeStateMenuDesktop);
      closeIcon.addEventListener('click', changeStateMenuMobile);
      searchIconDesktop.addEventListener('click', handleSearch);
      searchIconMobile.addEventListener('click', handleSearch);
      inputSearchDesktop.addEventListener('keydown', handleSearchEnter);
      inputSearchMobile.addEventListener('keydown', handleSearchEnter);
    }

    return () => {
      if (pathname !== '/') {
        barMenuMobile.removeEventListener('click', changeStateMenuMobile);
        barMenuDesktop.removeEventListener('click', changeStateMenuDesktop);
        closeIcon.removeEventListener('click', changeStateMenuMobile);
        searchIconDesktop.removeEventListener('click', handleSearch);
        searchIconMobile.removeEventListener('click', handleSearch);
        inputSearchDesktop.removeEventListener('kewdown', handleSearchEnter);
        inputSearchMobile.removeEventListener('kewdown', handleSearchEnter);
      }
    };
  }, [pathname]);

  React.useEffect(() => {
    const menuDesktop = document.querySelector('.categories');
    const menuMobile = document.querySelector('.container-categories-mobile');
    function handleStateCategories() {
      if (stateCategoriesMenuDesktop) {
        menuDesktop.style.opacity = '1';
        menuDesktop.style.pointerEvents = 'auto';
      } else {
        menuDesktop.style.opacity = '0';
        menuDesktop.style.pointerEvents = 'none';
      }

      if (stateCategoriesMenuMobile) {
        menuMobile.style.opacity = '1';
        menuMobile.style.pointerEvents = 'auto';
      } else {
        menuMobile.style.opacity = '0';
        menuMobile.style.pointerEvents = 'none';
      }
    }

    if (pathname !== '/') handleStateCategories();
  }, [stateCategoriesMenuDesktop, stateCategoriesMenuMobile, pathname]);

  React.useEffect(() => {
    setCategoriesMenuDesktop(false);
    setCategoriesMenuMobile(false);
  }, [pathname]);

  return (
    <>
      {pathname !== '/' ? (
        <>
          <header className="container-menu">
            <div className="menu-home-desktop flex-start ">
              <div>
                <Link to="/home">
                  <LogoSvg width="90" />
                </Link>
              </div>
              <div className="flex-start">
                <div className="flex-start container-categories">
                  <BarsSvg width="35" />
                  <h2 className="mg-2">Categorias</h2>
                </div>
              </div>
              <div className="searchBarMenu flex-start">
                <label htmlFor="search">
                  <GlassSvg
                    height="30"
                    width=""
                    className="searchIconDesktop"
                  />
                </label>
                <input
                  className="inputSearchDesktop"
                  type="search"
                  name="search"
                  id="search"
                  value={valueSearch}
                  onChange={(e) => setValueSearch(e.target.value)}
                />
              </div>
              <div className="flex-start icons-menu-desktop">
                <div className="mt-1 element-icon-menu">
                  <Link to="/favorites">
                    <IconFavSvg width="30" height="32" />
                    <h3 className="mg-1">Favoritos</h3>
                  </Link>
                </div>
                <div className="mt-1 element-icon-menu">
                  <Link to="/cart">
                    <IconCartSvg width="30" height="32" />
                    <h3 className="mg-1">Carrinho</h3>
                  </Link>
                </div>
                <div className="mt-1 element-icon-menu">
                  <Link to="/profile">
                    <IconProfileSvg width="30" height="32" />
                    <h3 className="mg-1">Perfil</h3>
                  </Link>
                </div>
              </div>
            </div>
            <div className="">
              <div className="container-menu-small">
                <div className="flex-between">
                  <div className="bar-menu-mobile">
                    <BarsSvg width="22" height="22" className="mr-2 " />
                  </div>
                  <div className="ml-3">
                    <Link to="/home">
                      <LogoSvg width="50" height="50" className="mr-3" />
                    </Link>
                  </div>
                  <div className="flex-start icons-menu-mobile">
                    <Link to="/favorites">
                      <IconFavSvg className="mr-2 element-icon-menu" />
                    </Link>
                    <Link to="/cart">
                      <IconCartSvg className="mr-2 element-icon-menu" />
                    </Link>
                    <Link to="/profile">
                      <IconProfileSvg className="mr-2 element-icon-menu" />
                    </Link>
                  </div>
                </div>
                <div className="mg-2 flex-start">
                  <div className="searchBarMenu flex-start">
                    <label htmlFor="search_Mobile" id="search_Mobile">
                      <GlassSvg
                        height="30"
                        width="30"
                        className="searchIconMobile"
                      />
                    </label>
                    <input
                      className="inputSearchMobile"
                      type="search"
                      name="search_Mobile"
                      id="search_Mobile"
                      value={valueSearch}
                      onChange={(e) => setValueSearch(e.target.value)}
                    />
                  </div>
                </div>
              </div>
            </div>
          </header>
          <nav className="container-categories-mobile">
            <div className="categories-menu-login flex-start">
              <IconProfileSvg width="30" height="30" className="mr-2" />
              <h5>
                {globalState.userData ? (
                  <Link to="/profile">Perfil</Link>
                ) : (
                  <Link to="/account">Login/Cadastro</Link>
                )}
              </h5>
              <CloseSvg width="30" height="30" className="close-icon ml-2" />
            </div>
            <div>
              <CategoriesMenu className="categories-mobile flex-warp" />
            </div>
          </nav>
          <nav>
            <div className="flex-start">
              <CategoriesMenu className="categories" />
            </div>
          </nav>
        </>
      ) : null}

      {pathname === '/' ? <MenuComponentLandingPage /> : null}
    </>
  );
}

export default MenuComponent;
