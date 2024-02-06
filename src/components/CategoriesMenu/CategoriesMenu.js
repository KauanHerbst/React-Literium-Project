import React from 'react';
import { Link } from 'react-router-dom';

function CategoriesMenu({ children, className }) {
  const mockCategories = [
    'Categoria #1',
    'Categoria #2',
    'Categoria #3',
    'Categoria #4',
    'Categoria #5',
    'Categoria #6',
    'Categoria #7',
  ];

  return (
    <ul className={className}>
      {mockCategories.map((categoria) => (
        <Link key={categoria} to="/search">
          <li className="mg-1">{categoria}</li>
        </Link>
      ))}
    </ul>
  );
}

export default CategoriesMenu;
