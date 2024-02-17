import React from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
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
import SearchCategoryPage from './Pages/SearchCategoryPage/SearchCategoryPage';
import PrivateRouteLogin from './routes/PrivateRouteLogin/PrivateRouteLogin';
import PrivateRouteAdmin from './routes/PrivateRouteAdmin/PrivateRouteAdmin';
import { GlobalProvider } from './Context/GlobalContext/GlobalContext';
import SearchBookPage from './Pages/SearchBookPage/SearchBookPage';

import 'react-toastify/dist/ReactToastify.min.css';
import NotFoundComponent from './components/NotFoundComponent/NotFoundComponent';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

function App() {
  return (
    <GlobalProvider>
      <ToastContainer
        position="bottom-right"
        autoClose={2000}
        theme="colored"
      />
      <MenuComponent />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route
          path="/cart"
          element={
            <PrivateRouteLogin element={<CartPage />}>
              <LoginPage />
            </PrivateRouteLogin>
          }
        />
        <Route
          path="/favorites"
          element={
            <PrivateRouteLogin element={<FavPage />}>
              <LoginPage />
            </PrivateRouteLogin>
          }
        />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route
          path="/profile"
          element={
            <PrivateRouteLogin element={<ProfilePage />}>
              <LoginPage />
            </PrivateRouteLogin>
          }
        />
        <Route path="/account" element={<AccountPage />} />
        <Route
          path="/login"
          element={
            <PrivateRouteLogin element={<ProfilePage />}>
              <LoginPage />
            </PrivateRouteLogin>
          }
        />
        <Route
          path="/management"
          element={
            <PrivateRouteAdmin element={<BookManagementPage />}>
              <HomePage />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/createbook"
          element={
            <PrivateRouteAdmin element={<CreateBookPage />}>
              <HomePage />
            </PrivateRouteAdmin>
          }
        />
        <Route
          path="/editbook/:id"
          element={
            <PrivateRouteAdmin element={<EditBookPage />}>
              <HomePage />
            </PrivateRouteAdmin>
          }
        />
        <Route path="/search/:name" element={<SearchBookPage />} />
        <Route path="/categories/:id" element={<SearchCategoryPage />} />
        <Route path="*" element={<NotFoundComponent />} />
      </Routes>
      <FooterCompoenent />
    </GlobalProvider>
  );
}

export default App;
