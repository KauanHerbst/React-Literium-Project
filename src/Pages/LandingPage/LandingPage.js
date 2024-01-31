import React from 'react';
import MenuComponent from '../../components/LandPageComponents/MenuComponent/MenuComponent';
import HeroComponent from '../../components/LandPageComponents/HeroComponent/HeroComponent';
import SectionOneComponent from '../../components/LandPageComponents/SectionOne/SectionOne';
import SectionTwoComponent from '../../components/LandPageComponents/SectionTwo/SectionTwo';
import SectionThreeComponent from '../../components/LandPageComponents/SectionThree/SectionThree';
import SectionFourComponent from '../../components/LandPageComponents/SectionFour/SectionFour';
import SectionFiveComponent from '../../components/LandPageComponents/SectionFive/SectionFive';
import SectionSixComponent from '../../components/LandPageComponents/SectionSix/SectionSix';
import SectionSevenComponent from '../../components/LandPageComponents/SectionSeven/SectionSeven';
import SectionEightComponent from '../../components/LandPageComponents/SectionEight/SectionEight';
import FooterComponent from '../../components/LandPageComponents/FooterComponent/FooterComponent';

function LandingPage() {
  return (
    <>
      <MenuComponent />
      <HeroComponent />
      <SectionOneComponent />
      <SectionTwoComponent />
      <SectionThreeComponent />
      <SectionFourComponent />
      <SectionFiveComponent />
      <SectionSixComponent />
      <SectionSevenComponent />
      <SectionEightComponent />
      <FooterComponent />
    </>
  );
}

export default LandingPage;
