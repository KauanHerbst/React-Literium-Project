import React, { useReducer } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import CardBuyComponent from '../CardBuyComponent/CardBuyComponent';
import BookService from '../../services/BookService/BookService';

function SearchBook() {
  const bookService = new BookService();
  const { name } = useParams();
  const { pathname } = useLocation();
  const isMounted = React.useRef(true);

  const initialState = {
    searchName: '',
    numberPage: 0,
    booksData: [],
    showMoreButton: true,
  };

  const searchReducer = (state, action) => {
    switch (action.type) {
      case 'RELOAD_SEARCH':
        return initialState;
      case 'CHANGE_NUMBER_PAGE':
        return { ...state, numberPage: state.numberPage + 1 };
      case 'CHANGE_SEARCH_NAME':
        return { ...state, searchName: action.searchName };
      case 'LOAD_BOOK_DATA':
        return {
          ...state,
          booksData: [...state.booksData, ...action.booksData.content],
          showMoreButton:
            action.booksData.content.length >= 9 &&
            action.booksData.totalPages > 1,
        };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(searchReducer, initialState);

  const { searchName, numberPage, booksData, showMoreButton } = state;

  async function handleBooksByName(number) {
    number = number || 0;
    dispatch({ type: 'CHANGE_SEARCH_NAME', searchName: name });
    const response = await bookService.findByName(name, number);
    console.log(response);
    if (response.content.length > 0) {
      dispatch({ type: 'LOAD_BOOK_DATA', booksData: response });
      dispatch({ type: 'CHANGE_NUMBER_PAGE' });
    } else {
      dispatch({ type: 'RELOAD_SEARCH' });
    }
  }

  async function moreBooks() {
    const response = await bookService.findByName(name, numberPage);
    if (response.content.length > 0) {
      dispatch({ type: 'LOAD_BOOK_DATA', booksData: response });
    } else {
      dispatch({ type: 'RELOAD_SEARCH' });
    }
  }

  React.useEffect(() => {
    if (isMounted.current) {
      handleBooksByName();
      isMounted.current = false;
    } else {
      dispatch({ type: 'RELOAD_SEARCH' });
      handleBooksByName();
    }
  }, [pathname]);

  return (
    <>
      <section className="container flex-start flex-column">
        <div className="mt-2 mb-2">
          <h2>
            Resultado Da Pesquisa: <span>{searchName}</span>
          </h2>
          <div className="text-sub-bar width-sub-bar-100" />
        </div>
        <div className="flex-start container-cards flex-warp">
          {booksData.length > 0 ? (
            booksData.map((book) => (
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
          )}
        </div>
        <div className="flex-start">
          {showMoreButton && booksData.length > 0 && (
            <button
              type="button"
              className="buttonPattern btnMore"
              onClick={() => {
                moreBooks();
              }}
            >
              Ver mais
            </button>
          )}
        </div>
      </section>
    </>
  );
}

export default SearchBook;
