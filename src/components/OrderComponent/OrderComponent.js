import React from 'react';
import { toast } from 'react-toastify';
import BookService from '../../services/BookService/BookService';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import OrderService from '../../services/OrderService/OrderService';

function OrderComponent({ bookId, userId, amount }) {
  const bookService = new BookService();
  const [productAmount, setProductAmount] = React.useState();
  const [isVisible, setIsVisible] = React.useState(true);
  const [isUpdate, setIsUpdate] = React.useState(false);
  const { globalState, dispatch } = useGlobalContext();
  const { userData } = globalState;
  const [bookData, setBookData] = React.useState();
  const btnSubRef = React.useRef(null);
  const btnSumRef = React.useRef(null);
  const orderService = new OrderService();

  async function removeCart() {
    if (userData) {
      const response = await orderService.removeOrder(bookId, userId);
      if (response.status === 204) {
        setIsVisible(false);
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Removido do Carrinho');
      }
    }
  }

  async function updateOrder() {
    if (userData) {
      const response = await orderService.updateOrder(
        bookId,
        userId,
        productAmount
      );
      if (response.status === 202) {
        setIsUpdate(false);
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Livro Salvo');
      }
    }
  }

  React.useEffect(() => {
    const btnSub = btnSubRef.current;
    const btnSum = btnSumRef.current;

    function addProduct() {
      setProductAmount((prevAmount) => prevAmount + 1);
    }
    function subProduct() {
      if (productAmount > 1) {
        setProductAmount((prevAmount) => prevAmount - 1);
      }
    }

    if (btnSub && btnSum) {
      btnSum.addEventListener('click', addProduct);
      btnSub.addEventListener('click', subProduct);
    }

    return () => {
      if (btnSub && btnSum) {
        btnSub.removeEventListener('click', subProduct);
        btnSum.removeEventListener('click', addProduct);
      }
    };
  }, [productAmount, bookId]);

  React.useEffect(() => {
    async function handleBook() {
      if (bookId) {
        const response = await bookService.findBookById(bookId);
        console.log();
        setProductAmount(amount);
        setBookData(response);
      }
    }
    handleBook();
  }, [bookId]);

  React.useEffect(() => {
    async function updateButton() {
      if (productAmount !== amount) {
        setIsUpdate(true);
      } else {
        setIsUpdate(false);
      }
    }
    updateButton();
  }, [productAmount]);
  return (
    <>
      {isVisible ? (
        <div className="flex-start container-order mb-3">
          {bookData ? (
            <>
              <div className="flex-item-1 flex-start flex-no-center">
                <div className="image-product-cart flex-start">
                  <img src={bookData.imageUrl} />
                </div>
                <div className="mg-1">
                  <h2 className="ml-1 mb-1">{bookData.name}</h2>
                  <h5 className="ml-1 mb-1">{bookData.author}</h5>
                  <h5 className="ml-1 mb-1">R$: {bookData.price}</h5>
                </div>
              </div>
              <div className="flex-item-1 flex-start flex-column">
                <div className="flex-start container-add-product">
                  <div className="mg-1 btn-sub" ref={btnSubRef}>
                    -
                  </div>
                  <div className="mg-1">{productAmount}</div>
                  <div className="mg-1 btn-sum" ref={btnSumRef}>
                    +
                  </div>
                </div>
                <button
                  type="button"
                  className="buttonAddCart btn-remove-product mt-2"
                  onClick={removeCart}
                >
                  Remover
                </button>
              </div>
            </>
          ) : (
            <p>carregando...</p>
          )}
        </div>
      ) : null}
      {isUpdate ? (
        <div className="flex-start mb-2 mt-2">
          <button type="button" className="buttonPattern" onClick={updateOrder}>
            Salvar Quantidade
          </button>
        </div>
      ) : null}
    </>
  );
}

export default OrderComponent;
