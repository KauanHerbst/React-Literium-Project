import React from 'react';
import { Link } from 'react-router-dom';
import CategoryService from '../../services/CategoryService/CategoryService';

function CategoriesMenu({ children, className }) {
  const [categories, setCategories] = React.useState(null);
  const categoryService = new CategoryService();

  React.useEffect(() => {
    async function fetchData() {
      try {
        const dataCategories = await categoryService.findCategories();
        setCategories(dataCategories);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <ul className={className}>
      {categories ? (
        categories.content && categories.content.length > 0 ? (
          categories.content.map((categoria) => (
            <li className="mg-1" key={categoria.id}>
              <Link to={`/categories/${categoria.id}`}>{categoria.name}</Link>
            </li>
          ))
        ) : (
          <li>Nenhuma categoria disponível</li>
        )
      ) : (
        <li>Carregando...</li>
      )}
    </ul>
  );
}

export default CategoriesMenu;
