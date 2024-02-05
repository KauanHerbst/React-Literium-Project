import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import App from './App';
import Test from './Test';
import LandingPage from './Pages/LandingPage/LandingPage';
import HomePage from './Pages/HomePage/HomePage';
import ProductPage from './Pages/ProductPage/ProductPage';
import CartPage from './Pages/CartPage/CartPage';
import FavPage from './Pages/FavPage/FavPage';
import AccountPage from './Pages/AccountPage/AccountPage';
import LoginPage from './Pages/LoginPage/LoginPage';
import ProfilePage from './Pages/ProfilePage/ProfilePage';
import BookManagComponent from './components/BookManagComponent/BookManagComponent';
import CreateBookPage from './Pages/CreateBookPage/CreateBookPage';
import EditBookPage from './Pages/EditBookPage/EditBookPage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <EditBookPage />
  </React.StrictMode>
);
