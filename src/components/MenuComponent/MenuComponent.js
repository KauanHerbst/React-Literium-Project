import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../LandPageComponents/SvgComponents/Logo2Svg/Logo2Svg';
import BarsSvg from '../LandPageComponents/SvgComponents/BarsSvg/BarsSvg';
import GlassSvg from '../LandPageComponents/SvgComponents/GlassSvg/GlassSvg';
import IconFavSvg from '../LandPageComponents/SvgComponents/IconFavSvg/IconFavSvg';
import IconCartSvg from '../LandPageComponents/SvgComponents/IconCartSvg/IconCartSvg';
import IconProfileSvg from '../LandPageComponents/SvgComponents/IconProfileSvg/IconProfileSvg';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';
import CategoriesMenu from '../CategoriesMenu/CategoriesMenu';
import CloseSvg from '../LandPageComponents/SvgComponents/CloseSvg/CloseSvg';

function MenuComponent() {
  const [stateCategoriesMenuMobile, setCategoriesMenuMobile] =
    React.useState(false);

  React.useEffect(() => {
    const barMenuMobile = document.querySelector('.bar-menu-mobile');
    const closeIcon = document.querySelector('.close-icon');

    function changeStateMenu() {
      setCategoriesMenuMobile((prevState) => !prevState);
    }

    barMenuMobile.addEventListener('click', changeStateMenu);
    closeIcon.addEventListener('click', changeStateMenu);

    return () => {
      barMenuMobile.removeEventListener('click', changeStateMenu);
      closeIcon.removeEventListener('click', changeStateMenu);
    };
  }, []);

  React.useEffect(() => {
    const menuMobile = document.querySelector('.container-categories-mobile');

    function handleStateCategories() {
      if (stateCategoriesMenuMobile) {
        menuMobile.style.opacity = '1';
        menuMobile.style.pointerEvents = 'auto';
      } else {
        menuMobile.style.opacity = '0';
        menuMobile.style.pointerEvents = 'none';
      }
    }

    handleStateCategories();
  }, [stateCategoriesMenuMobile]);

  const [stateCategoriesMenuDesktop, setCategoriesMenuDesktop] =
    React.useState(false);

  React.useEffect(() => {
    const barMenuDesktop = document.querySelector('.container-categories');

    function changeStateMenu() {
      setCategoriesMenuDesktop((prevState) => !prevState);
    }

    barMenuDesktop.addEventListener('click', changeStateMenu);
    return () => {
      barMenuDesktop.removeEventListener('click', changeStateMenu);
    };
  }, []);

  React.useEffect(() => {
    const menuDesktop = document.querySelector('.categories');

    function handleStateCategories() {
      if (stateCategoriesMenuDesktop) {
        menuDesktop.style.opacity = '1';
        menuDesktop.style.pointerEvents = 'auto';
      } else {
        menuDesktop.style.opacity = '0';
        menuDesktop.style.pointerEvents = 'none';
      }
    }

    handleStateCategories();
  }, [stateCategoriesMenuDesktop]);

  return (
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
            <InputComponent
              className="flex-start"
              type="search"
              association="search"
            >
              <GlassSvg height="30" width="" />
            </InputComponent>
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
                  <IconFavSvg className="ml-1 element-icon-menu" />
                </Link>
                <Link to="/cart">
                  <IconCartSvg className="ml-1 element-icon-menu" />
                </Link>
                <Link to="/profile">
                  <IconProfileSvg className="ml-1 element-icon-menu" />
                </Link>
              </div>
            </div>
            <div className="mg-2 flex-start">
              <div className="searchBarMenu flex-start">
                <InputComponent
                  className="flex-start"
                  type="search"
                  association="search"
                >
                  <GlassSvg height="30" width="" />
                </InputComponent>
              </div>
            </div>
          </div>
        </div>
      </header>
      <nav className="container-categories-mobile">
        <div className="categories-menu-login flex-start">
          <IconProfileSvg width="30" height="30" className="mr-2" />
          <h5>
            <Link to="/account">Login/Cadastro</Link>
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
  );
}

export default MenuComponent;
