import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import CartComponent from './components/CartComponent/CartComponent';
import FavComponent from './components/FavComponent/FavComponent';
import CreateAccountComponent from './components/CreateAccountComponent/CreateAccountComponent';
import LoginAccountComponent from './components/LoginAccountComponent/LoginAccountComponent';
import ProfileComponent from './components/ProfileComponent/ProfileComponent';
import BookManagComponent from './components/BookManagComponent/BookManagComponent';

function App() {
  return (
    <>
      <MenuComponent />
      <BookManagComponent />
      <FooterCompoenent />
    </>
  );
}

export default App;
