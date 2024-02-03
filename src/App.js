import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import CartComponent from './components/CartComponent/CartComponent';

function App() {
  return (
    <>
      <MenuComponent />
      <CartComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default App;
