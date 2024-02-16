import React from 'react';
import { toast } from 'react-toastify';
import BookService from '../../services/BookService/BookService';
import FavoriteService from '../../services/FavoriteService/FavoriteService';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import OrderService from '../../services/OrderService/OrderService';

function FavCardComponent({ bookId, userId }) {
  const { dispatch, globalState } = useGlobalContext();
  const { orderData, userData } = globalState;
  const [bookData, setBookData] = React.useState();
  const [isVisible, setIsVisible] = React.useState(true);
  const [isOnCart, setIsOnCart] = React.useState(false);
  const bookService = new BookService();
  const favoriteService = new FavoriteService();
  const orderService = new OrderService();

  React.useEffect(() => {
    async function handleBookData() {
      if (bookId) {
        const response = await bookService.findBookById(bookId);
        setBookData(response);
      }
    }

    function handleOnIsCart() {
      if (orderData) {
        orderData.map((order) => {
          if (order.bookId === bookId) {
            setIsOnCart(true);
          }
        });
      }
    }

    handleBookData();
    handleOnIsCart();
  }, [bookId, isOnCart]);

  async function removeFavorite() {
    await favoriteService.removeFavorite(bookId, userId);
    dispatch({ type: 'RELOAD_COMPONENT' });
    setIsVisible(false);
    toast.success('Removido dos Favoritos');
  }

  async function addToCart() {
    if (userData) {
      const response = await orderService.addOrder(bookId, userData.id, 1);
      if (response.status === 200) {
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        setIsOnCart(true);
        toast.success('Adicionado ao Carrinho');
      }
    }
  }

  async function removeCart() {
    if (userData) {
      const response = await orderService.removeOrder(bookId, userData.id);
      if (response.status === 204) {
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        setIsOnCart(false);
        toast.success('Removido do Carrinho');
      }
    }
  }

  return (
    <>
      {isVisible && (
        <div className="flex-start container-fav mb-3">
          {bookData ? (
            <>
              <div className="flex-item-1 flex-start container-info flex-no-center">
                <div className="image-product-fav flex-start">
                  <img src={bookData.imageUrl} />
                </div>
                <div className="mg-1">
                  <h2 className="ml-1 mb-1">{bookData.name}</h2>
                  <h5 className="ml-1 mb-1">{bookData.author}</h5>
                  <h5 className="ml-1 mb-1">R$: {bookData.price}</h5>
                </div>
              </div>
              <div className="flex-item-1 flex-start buttons flex-column">
                {isOnCart ? (
                  <button
                    type="button"
                    className="buttonAddCart btn-addFav mt-2"
                    onClick={removeCart}
                  >
                    Remover do Carrinho
                  </button>
                ) : (
                  <button
                    type="button"
                    className="buttonAddCart btn-addFav mt-2"
                    onClick={addToCart}
                  >
                    Adicionar ao Carrinho
                  </button>
                )}
                <button
                  type="button"
                  className="buttonAddCart btn-addFav mt-2"
                  onClick={removeFavorite}
                >
                  Remover dos Favoritos
                </button>
              </div>
            </>
          ) : (
            <p>carregando...</p>
          )}
        </div>
      )}
    </>
  );
}

export default FavCardComponent;
