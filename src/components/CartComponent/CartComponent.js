import React from 'react';
import { toast } from 'react-toastify';
import OrderComponent from '../OrderComponent/OrderComponent';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';

function CartComponent() {
  const { globalState } = useGlobalContext();
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [cupom, setCupom] = React.useState('');
  const [orders, setOrders] = React.useState([]);
  const { orderData } = globalState;

  function applyCupom() {
    if (cupom === '') toast.error('Cupom Vazio!');
    if (cupom === 'LITERIUMFREE') {
      setTotalPrice(0);
      toast.success(`Cupom ${cupom} aplicado com sucesso!`);
      setCupom('');
    } else {
      toast.error('Cupom Inválido!');
    }
  }

  function purchase() {
    if (orders.length > 0) {
      toast.success('Compra Realizada com Sucesso!');
    } else {
      toast.error('Adicione Livros no carrinho!');
    }
  }

  React.useEffect(() => {
    function handleOrders() {
      if (orderData) {
        setOrders(orderData);
      }
    }

    handleOrders();
  }, [orderData]);

  React.useEffect(() => {
    function userTotalPriceOrders() {
      if (orders) {
        setTotalPrice(0);
        orders.map((book) =>
          setTotalPrice((prevTotal) => prevTotal + Number(book.price))
        );
      }
    }
    userTotalPriceOrders();
  }, [orders]);
  return (
    <section className="fle-start container flex-responsive-start-center">
      <div className="flex-item-2 ">
        {orders && orders.length > 0 ? (
          orders.map((order) => (
            <OrderComponent
              bookId={order.bookId}
              userId={order.userId}
              amount={order.amount}
              key={order.id}
            />
          ))
        ) : (
          <p className="flex-start mt-4">Nenhum Livro Encontrado</p>
        )}
      </div>
      <div className="flex-item-1 flex-start pre-container-payment flex-column">
        <div className="container-payment ">
          <h2 className="flex-start">Resumo do Pedido</h2>
          <div className="flex-between mg-1">
            <h5>Itens:</h5>
            <h5>
              {orders.length > 0
                ? `R$: ${totalPrice.toFixed(2)}`
                : 'Nenhum Livro'}
            </h5>
          </div>
          <div className="flex-between mg-1">
            <h5>Frete:</h5>
            <h5>Gratis</h5>
          </div>
          <div className="flex-between mg-1">
            <h5>Total:</h5>
            <h5>
              {orders.length > 0
                ? `R$: ${totalPrice.toFixed(2)}`
                : 'Nenhum Livro'}
            </h5>
          </div>
          <div className="flex-start">
            <div className="flex-start flex-column flex-no-center mt-1">
              <label htmlFor="cupom">Cupom</label>
              <input
                required
                type="text"
                name="cupom"
                value={cupom}
                onChange={(e) => {
                  setCupom(e.target.value);
                }}
              />
            </div>
            <button
              type="submit"
              className="buttonAddCart ml-2 mt-3"
              onClick={applyCupom}
            >
              Aplicar
            </button>
          </div>
          <div className="flex-start">
            <button
              type="submit"
              className="buttonAddCart mt-2"
              onClick={purchase}
            >
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartComponent;
