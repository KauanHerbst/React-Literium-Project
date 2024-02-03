import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import ProductComponent from './components/ProductComponent/ProductComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';

function App() {
  return (
    <>
      <MenuComponent />
      <ProductComponent />
      <CategoryComponent category="Veja Também" />
      <FooterCompoenent />
    </>
  );
}

export default App;
