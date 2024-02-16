import React from 'react';
import BookInfoComponent from '../BookInfoComponent/BookInfoComponent';
import BookService from '../../services/BookService/BookService';

function BookManagComponent() {
  const [numberPage, setNumberPage] = React.useState(0);
  const [booksData, setBooksData] = React.useState([]);
  const bookService = new BookService();

  async function handleBooks() {
    const response = await bookService.findBookByPage(numberPage);
    console.log(response);
    if (response.content.length > 0) {
      setBooksData((prevBooksData) => [...prevBooksData, ...response.content]);
      setNumberPage(numberPage + 1);
    }
    if (response.content.length < 9) {
      const btnMore = document.querySelector('.btn-more');
      btnMore.style.display = 'none';
    }
  }

  React.useEffect(() => {
    handleBooks();
  }, []);

  return (
    <section className="container flex-start flex-column ">
      <div className="mb-3 mt-3">
        <h2>Gerenciamento de Livros</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      <div>
        {booksData.length > 0 ? (
          booksData.flatMap((book) => (
            <BookInfoComponent key={book.id} book={book} />
          ))
        ) : (
          <p>carregando..</p>
        )}
      </div>
      <div>
        <button
          type="button"
          className="buttonPattern btn-more"
          onClick={() => {
            handleBooks();
          }}
        >
          Ver mais
        </button>
      </div>
    </section>
  );
}

export default BookManagComponent;
