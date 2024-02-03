import React from 'react';
import BookBlue from '../../images/BookBlue.webp';

function OrderComponent() {
  const [productAmount, setProductAmount] = React.useState(0);

  React.useEffect(() => {
    const btnSub = document.querySelector('.btn-sub');
    const btnSum = document.querySelector('.btn-sum');

    function addProduct() {
      setProductAmount((prevAmount) => prevAmount + 1);
    }
    function subProduct() {
      if (productAmount > 0) {
        setProductAmount((prevAmount) => prevAmount - 1);
      }
    }

    btnSub.addEventListener('click', subProduct);
    btnSum.addEventListener('click', addProduct);

    return () => {
      btnSub.removeEventListener('click', subProduct);
      btnSum.removeEventListener('click', addProduct);
    };
  }, [productAmount]);
  return (
    <div className="flex-start container-order mb-3">
      <div className="flex-item-1 flex-start flex-no-center">
        <div className="image-product-cart flex-start">
          <img src={BookBlue} />
        </div>
        <div className="mg-1">
          <h2 className="ml-1 mb-1">Livro</h2>
          <h5 className="ml-1 mb-1">Autor</h5>
          <h5 className="ml-1 mb-1">R$: 999</h5>
        </div>
      </div>
      <div className="flex-item-1 flex-start flex-column ml-4">
        <div className="flex-start container-add-product">
          <div className="mg-1 btn-sub">-</div>
          <div className="mg-1">{productAmount}</div>
          <div className="mg-1 btn-sum">+</div>
        </div>
        <button type="button" className="buttonAddCart btn-remove-product mt-2">
          Remover
        </button>
      </div>
    </div>
  );
}

export default OrderComponent;
