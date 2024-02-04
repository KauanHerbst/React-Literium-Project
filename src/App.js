import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import CartComponent from './components/CartComponent/CartComponent';
import FavComponent from './components/FavComponent/FavComponent';

function App() {
  return (
    <>
      <MenuComponent />
      <FavComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default App;
