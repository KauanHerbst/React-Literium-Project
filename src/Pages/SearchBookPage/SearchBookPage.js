import React from 'react';
import MenuComponent from '../../components/MenuComponent/MenuComponent';
import FooterCompoenent from '../../components/LandPageComponents/FooterComponent/FooterComponent';
import RecNewsComponent from '../../components/RecNewsComponent/RecNewsComponent';
import SearchBook from '../../components/SearchBook/SearchBook';

function SearchBookPage() {
  return (
    <>
      <MenuComponent />
      <SearchBook />
      <RecNewsComponent />
      <FooterCompoenent />
    </>
  );
}

export default SearchBookPage;
