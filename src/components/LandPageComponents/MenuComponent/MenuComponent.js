import React from 'react';
import LogoSvg from '../SvgComponents/LogoSvg/LogoSvg';
import ButtonCta from '../ButtonsComponents/ButtonCta/ButtonCta';
import LiteirumSvg from '../SvgComponents/LiteriumSvg/LiteirumSvg';

function MenuComponent() {
  return (
    <header>
      <div className="">
        <div className="menu-desktop">
          <a href="/">Sobre</a>
          <LogoSvg />
          <ButtonCta>Ver Acervo</ButtonCta>
        </div>
        <div className="menu-mobile">
          <a href="/">Sobre</a>
          <LiteirumSvg />
          <ButtonCta className="ButtonCtaHeader">Ver Acervo</ButtonCta>
        </div>
        <div className="menu-small">
          <a href="/">Sobre</a>
          <LiteirumSvg className="ml-2" />
          <a href="/" className="link-cta-mobile">
            Ver Acervo
          </a>
        </div>
      </div>
    </header>
  );
}

export default MenuComponent;
