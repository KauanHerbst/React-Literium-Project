import React from 'react';

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
        <li key={categoria} className="mg-1">
          {categoria}
        </li>
      ))}
    </ul>
  );
}

export default CategoriesMenu;
