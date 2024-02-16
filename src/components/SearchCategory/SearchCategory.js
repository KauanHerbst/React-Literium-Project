import React, { useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardBuyComponent from '../CardBuyComponent/CardBuyComponent';
import BookService from '../../services/BookService/BookService';

function SearchCategory() {
  const bookService = new BookService();
  const { id } = useParams();
  const { pathname } = useLocation();
  const isMounted = React.useRef(false);

  const initialState = {
    categoryName: '',
    categoryBooks: [],
    showButtonMore: false,
    numberPage: 0,
  };

  const reducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_CATEGORY_NAME': {
        return { ...state, categoryName: action.categoryName };
      }
      case 'LOAD_CATEGORY_BOOKS': {
        return {
          ...state,
          categoryBooks: [...state.categoryBooks, ...action.booksData.content],
          showButtonMore:
            action.booksData.content.length >= 9 &&
            action.booksData.totalPages > 1,
        };
      }
      case 'CHANGE_NUMBER_PAGE': {
        return { ...state, numberPage: state.numberPage + 1 };
      }
      case 'RELOAD_CATEGORY': {
        return initialState;
      }
      default: {
        return state;
      }
    }
  };

  const [states, dispatch] = useReducer(reducer, initialState);

  const { categoryBooks, showButtonMore, categoryName, numberPage } = states;

  async function handleBooks(page) {
    page = page || 0;
    if (id) {
      const response = await bookService.findBooksByCategory(id, page, 9);
      console.log(numberPage);
      console.log(response);
      if (response.content.length > 0) {
        dispatch({ type: 'CHANGE_NUMBER_PAGE' });
        dispatch({
          type: 'LOAD_CATEGORY_NAME',
          categoryName: response.content[0].categories[0].name,
        });
        dispatch({ type: 'LOAD_CATEGORY_BOOKS', booksData: response });
      }
    }
  }

  React.useEffect(() => {
    if (isMounted.current) {
      handleBooks();
      isMounted.current = false;
    } else {
      dispatch({ type: 'RELOAD_CATEGORY' });
      handleBooks();
    }
  }, [pathname]);

  return (
    <section className="container flex-start flex-column">
      <div className="mt-2 mb-2">
        <h2>{categoryName}</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div className="flex-start container-cards flex-warp">
        {categoryBooks ? (
          categoryBooks.length > 0 ? (
            categoryBooks.map((book) => (
              <CardBuyComponent
                key={book.id}
                id={book.id}
                name={book.name}
                price={book.price}
                img={book.imageUrl}
              />
            ))
          ) : (
            <p>Nenhum Livro Encontrado</p>
          )
        ) : (
          <p>Carregando...</p>
        )}
      </div>
      {showButtonMore ? (
        <div className="flex-start">
          <button
            type="button"
            className="buttonPattern"
            onClick={() => {
              handleBooks(numberPage);
            }}
          >
            Ver mais
          </button>
        </div>
      ) : null}
    </section>
  );
}

export default SearchCategory;
