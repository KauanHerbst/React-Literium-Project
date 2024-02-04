import React from 'react';
import OrderComponent from '../OrderComponent/OrderComponent';
import InputComponent from '../LandPageComponents/InputsComponents/InputComponent';

function CartComponent() {
  return (
    <section className="fle-start container flex-responsive-start-center">
      <div className="flex-item-2 ">
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
        <OrderComponent />
      </div>
      <div className="flex-item-1 flex-start pre-container-payment">
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
