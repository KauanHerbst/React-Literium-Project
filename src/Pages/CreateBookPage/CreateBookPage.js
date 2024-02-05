import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';
import CreateBookComponent from '../../components/CreateBookComponent/CreateBookComponent';

function CreateBookPage() {
  return (
    <>
      <MenuComponent />
      <CreateBookComponent />
      <FooterCompoenent />
    </>
  );
}

export default CreateBookPage;
