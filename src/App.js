import AuthorComponent from './components/AuthorComponent/AuthorComponent';
import CategoryComponent from './components/CategoryComponent/CategoryComponent';
import ImagePromotion from './components/ImagePromotion/ImagePromotion';
import MenuComponent from './components/MenuComponent/MenuComponent';
import FooterCompoenent from './components/LandPageComponents/FooterComponent/FooterComponent';
import RecNewsComponent from './components/RecNewsComponent/RecNewsComponent';

function App() {
  return (
    <>
      <MenuComponent />
      <ImagePromotion />
      <CategoryComponent category="Categoria #1" />
      <CategoryComponent category="Categoria #2" />
      <CategoryComponent category="Categoria #3" />
      <AuthorComponent />
      <CategoryComponent category="Categoria #4" />
      <RecNewsComponent />
      <FooterCompoenent />
    </>
  );
}

export default App;
