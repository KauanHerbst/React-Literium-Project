import React from 'react';
import OrderComponent from '../OrderComponent/OrderComponent';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';

function CartComponent() {
  const { globalState } = useGlobalContext();
  const [amountOrders, setAmountOrders] = React.useState(0);
  const [totalPrice, setTotalPrice] = React.useState(0);
  const [orders, setOrders] = React.useState([]);
  const { orderData } = globalState;

  React.useEffect(() => {
    function handleOrders() {
      if (orderData) {
        setOrders(orderData);
      }
    }

    handleOrders();
  }, [orderData]);
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
          <p className="flex-start mt-4">Nenhum Item Encontrado</p>
        )}
      </div>
      <div className="flex-item-1 flex-start pre-container-payment flex-column">
        <div className="container-payment ">
          <h2 className="flex-start">Resumo do Pedido</h2>
          <div className="flex-between mg-1">
            <h5>Itens:</h5>
            <h5>R$ 999</h5>
          </div>
          <div className="flex-between mg-1">
            <h5>Frete:</h5>
            <h5>R$ 999</h5>
          </div>
          <div className="flex-between mg-1">
            <h5>Total:</h5>
            <h5>R$ 999</h5>
          </div>
          <div className="flex-start">
            <InputComponent type="text" association="cupom">
              Cupom
            </InputComponent>
            <button type="submit" className="buttonAddCart  ml-2 mt-3">
              Aplicar
            </button>
          </div>
          <div className="flex-start">
            <button type="submit" className="buttonAddCart mt-2">
              Comprar
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CartComponent;
