import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import BookService from '../../services/BookService/BookService';

function BookInfoComponent({ book }) {
  const [onDelete, setOnDelete] = React.useState(false);
  const [isVisible, setIsVisible] = React.useState(true);
  const containerDeleteRef = React.useRef(null);
  const bookService = new BookService();
  const navigate = useNavigate();

  function deleteButtton() {
    setOnDelete((prevValue) => !prevValue);
  }

  async function deleteBook() {
    const response = await bookService.deleteBook(book.id);
    if (response) {
      setIsVisible(false);
      navigate('/management', { replace: true });
      toast.success('Livro Deletado!');
      console.log(response);
    }
  }

  React.useEffect(() => {
    const containerDelete = containerDeleteRef.current;
    containerDelete.style.display = onDelete ? 'flex' : 'none';
  }, [onDelete]);

  return (
    <>
      {isVisible ? (
        <>
          <div className="flex-start container-book-info mb-3 flex-responsive">
            <div className="flex-item-1 flex-start container-info flex-no-center">
              <div className="image-product flex-start mt-1">
                <img src={book.imageUrl} />
              </div>
              <div className="mg-1">
                <h2 className="ml-1 mb-1">{book.name}</h2>
                <h5 className="ml-1 mb-1">{book.author}</h5>
                <h5 className="ml-1 mb-1">R$: {book.price}</h5>
              </div>
            </div>
            <div className="flex-item-1 flex-start buttons flex-column">
              <Link to={`/editbook/${book.id}`}>
                <button type="button" className="buttonAddCart btn-addFav mt-2">
                  Editar
                </button>
              </Link>
              <button
                type="button"
                className="buttonAddCart btn-addFav mt-2 btn-delete"
                onClick={deleteButtton}
              >
                Deletar
              </button>
            </div>
          </div>
          <div
            ref={containerDeleteRef}
            className="delete-container flex-start mt-2 mb-2"
          >
            <div className="sub-container flex-start flex-column">
              <h2>Deseja Apagar esse livro?</h2>
              <div className="mg-2">
                <button
                  type="button"
                  className="buttonPattern mg-1 btn-delete"
                  onClick={deleteBook}
                >
                  Deletar
                </button>
                <button
                  type="button"
                  className="buttonPattern mg-1"
                  onClick={deleteButtton}
                >
                  Cancelar
                </button>
              </div>
            </div>
          </div>
        </>
      ) : null}
    </>
  );
}

export default BookInfoComponent;
