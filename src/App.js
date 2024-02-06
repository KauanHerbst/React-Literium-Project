import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import CartPage from './Pages/CartPage/CartPage';
import FavPage from './Pages/FavPage/FavPage';
import ProductPage from './Pages/ProductPage/ProductPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import AccountPage from './Pages/AccountPage/AccountPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import BookManagementPage from './Pages/BookManagementPage/BookManagementPage';
import CreateBookPage from './Pages/CreateBookPage/CreateBookPage';
import EditBookPage from './Pages/EditBookPage/EditBookPage';
import SearchBookPage from './Pages/SearchBookPage/SearchBookPage';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <>
      <MenuComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/favorites" element={<FavPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/account" element={<AccountPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/management" element={<BookManagementPage />} />
        <Route path="/createBook" element={<CreateBookPage />} />
        <Route path="/editBook" element={<EditBookPage />} />
        <Route path="/search" element={<SearchBookPage />} />
      </Routes>
      <FooterCompoenent />
    </>
  );
}

export default App;
