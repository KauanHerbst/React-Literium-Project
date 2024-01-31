import React from 'react';
import BenefitsComponent from '../BenefitsComponent/BenefitsComponent';
import DolarIconSvg from '../SvgComponents/IconDolarSvg/IconDolarSvg';
import SlackIconSvg from '../SvgComponents/IconSlackSvg/IconSlackSvg';
import UpdateIconSvg from '../SvgComponents/IconUpdateSvg/IconUpdateSvg';
import HighIconSvg from '../SvgComponents/IconHighSvg/IconHighSvg';
import HeartSvg from '../SvgComponents/HeartSvg/HeartSvg';
import HeartEyesSvg from '../SvgComponents/HeartEyesSvg/HeartEyesSvg';
import ImageContent from '../../../images/ImageContentBook.webp';

function SectionTwo() {
  return (
    <section className="container">
      <div className="flex-item-2 flex-wrap">
        <div>
          <h4>VANTAGENS</h4>
          <h2>Todos Compram</h2>
          <div className="text-sub-bar width-sub-bar-1" />
        </div>
        <div className="mt-4">
          <BenefitsComponent Icon={DolarIconSvg}>
            Promoção e Descontos
          </BenefitsComponent>
          <BenefitsComponent Icon={SlackIconSvg}>
            Variedade de Títulos
          </BenefitsComponent>
          <BenefitsComponent Icon={UpdateIconSvg}>
            Atualizações Semanais
          </BenefitsComponent>
          <BenefitsComponent Icon={HighIconSvg}>
            Sustentabilidade
          </BenefitsComponent>
        </div>
      </div>
      <div className="flex-item-3">
        <div className="container-image-section-two position-relative">
          <img src={ImageContent} className="image-section-two" />
          <div id="box-two-1" className="box-float-small position-absolute">
            <HeartEyesSvg />
          </div>
          <div id="box-two-2" className="box-float-small position-absolute">
            <HeartSvg />
          </div>
        </div>
      </div>
    </section>
  );
}

export default SectionTwo;
