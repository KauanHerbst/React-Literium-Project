import React from 'react';
import { Link } from 'react-router-dom';
import LogoSvg from '../SvgComponents/LogoSvg/LogoSvg';
import ButtonCta from '../ButtonsComponents/ButtonCta/ButtonCta';
import LiteirumSvg from '../SvgComponents/LiteriumSvg/LiteirumSvg';

function MenuComponent() {
  return (
    <header>
      <div className="">
        <div className="menu-desktop">
          <Link to="/">Sobre</Link>
          <LogoSvg />
          <ButtonCta>Ver Acervo</ButtonCta>
        </div>
        <div className="menu-mobile">
          <Link to="/">Sobre</Link>
          <LiteirumSvg />
          <ButtonCta className="ButtonCtaHeader">Ver Acervo</ButtonCta>
        </div>
        <div className="menu-small">
          <Link to="/">Sobre</Link>
          <LiteirumSvg className="ml-4 " />
          <Link to="/home" className="link-cta-mobile">
            Ver Acervo
          </Link>
        </div>
      </div>
    </header>
  );
}

export default MenuComponent;
