import React from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarsSvg from '../LandPageComponents/SvgComponents/StarsSvg/StarsSvg';
import BookService from '../../services/BookService/BookService';
import HeartNoFillSvg from '../LandPageComponents/SvgComponents/HeartNoFillSvg/HeartNoFillSvg';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import FavoriteService from '../../services/FavoriteService/FavoriteService';
import OrderService from '../../services/OrderService/OrderService';

function ProductComponent() {
  const bookService = new BookService();
  const favoriteService = new FavoriteService();
  const orderService = new OrderService();

  const { id } = useParams();
  const { globalState, dispatch } = useGlobalContext();
  const { favoriteData, userData, orderData } = globalState;

  const [currentProductAmount, setCurrentProductAmount] = React.useState(1);
  const [productData, setProductData] = React.useState();
  const [productAmount, setProductAmount] = React.useState();
  const [isOnCart, setIsOnCart] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);
  const [isUpdate, setIsUpdate] = React.useState(false);

  const heartRef = React.useRef(null);
  const btnSubRef = React.useRef(null);
  const btnSumRef = React.useRef(null);
  let heartSvg = heartRef.current;

  async function addFavorite() {
    if (userData) {
      const response = await favoriteService.addFavorite(id, userData.id);
      if (response.status === 200) {
        heartSvg.classList.add('heart-active');
        heartSvg.removeEventListener('click', addFavorite);
        heartSvg.addEventListener('click', removeFavorite);
        setIsFavorite(true);
        dispatch({ type: 'LOAD_FAVORITE' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Adicionado aos Favoritos');
      }
    } else {
      toast.error('Necessita de Login');
    }
  }

  async function removeFavorite() {
    if (userData) {
      const response = await favoriteService.removeFavorite(id, userData.id);
      if (response.status === 204) {
        heartSvg.classList.remove('heart-active');
        heartSvg.addEventListener('click', addFavorite);
        heartSvg.removeEventListener('click', removeFavorite);
        setIsFavorite(false);
        dispatch({ type: 'LOAD_FAVORITE' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Removido dos Favoritos');
      }
    }
  }

  async function addToCart() {
    if (userData) {
      const response = await orderService.addOrder(
        id,
        userData.id,
        currentProductAmount
      );
      if (response.status === 200) {
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        setIsUpdate(false);
        setIsOnCart(true);
        toast.success('Adicionado ao Carrinho');
      }
    } else {
      toast.error('Necessita de Login');
    }
  }

  async function removeCart() {
    if (userData) {
      const response = await orderService.removeOrder(id, userData.id);
      if (response.status === 204) {
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        setIsUpdate(false);
        setIsOnCart(false);
        toast.success('Removido do Carrinho');
      }
    }
  }

  async function updateOrder() {
    if (userData) {
      const response = await orderService.updateOrder(
        id,
        userData.id,
        currentProductAmount
      );
      console.log(response);
      if (response.status === 202) {
        setIsUpdate(false);
        setProductAmount(currentProductAmount);
        dispatch({ type: 'LOAD_ORDER' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Livro Salvo');
      }
    }
  }

  React.useEffect(() => {
    const btnSub = btnSubRef.current;
    const btnSum = btnSumRef.current;
    heartSvg = heartRef.current;

    function addProduct() {
      setCurrentProductAmount((prevAmount) => prevAmount + 1);
    }
    function subProduct() {
      if (currentProductAmount > 1) {
        setCurrentProductAmount((prevAmount) => prevAmount - 1);
      }
    }

    if (btnSub && btnSum) {
      btnSub.addEventListener('click', subProduct);
      btnSum.addEventListener('click', addProduct);
    }

    if (heartSvg) {
      if (!isFavorite) {
        heartSvg.addEventListener('click', addFavorite);
      }
      if (isFavorite) {
        heartSvg.addEventListener('click', removeFavorite);
      }
    }

    return () => {
      if (btnSub && btnSum) {
        btnSub.removeEventListener('click', subProduct);
        btnSum.removeEventListener('click', addProduct);
        heartSvg.removeEventListener('click', addFavorite);
        heartSvg.removeEventListener('click', removeFavorite);
      }
    };
  }, [currentProductAmount, productData]);

  React.useEffect(() => {
    async function handleBookDataById() {
      try {
        const response = await bookService.findBookById(id);
        setProductData(response);
      } catch (e) {
        console.log(e);
      }
    }

    handleBookDataById();
  }, [isOnCart]);

  React.useEffect(() => {
    function handleIsFavorite() {
      if (favoriteData) {
        favoriteData.map((favorite) => {
          if (favorite.bookId === Number(id)) {
            setIsFavorite(true);
          }
        });
      }
    }

    function handleIsOnCart() {
      if (orderData) {
        orderData.map((order) => {
          if (order.bookId === Number(id)) {
            productData.amount = order.amount;
            setIsOnCart(true);
            setCurrentProductAmount(order.amount);
            setProductAmount(order.amount);
          }
        });
      }
    }

    function setFavoriteClass() {
      heartSvg = heartRef.current;
      if (isFavorite) {
        heartSvg.classList.add('heart-active');
      }
    }

    handleIsFavorite();
    handleIsOnCart();
    setFavoriteClass();
  }, [favoriteData, isFavorite, isOnCart, orderData]);

  React.useEffect(() => {
    function updateButton() {
      if (!isOnCart) return null;
      if (currentProductAmount !== 1 && productAmount !== 1) {
        if (productAmount !== currentProductAmount) {
          setIsUpdate(true);
        } else {
          setIsUpdate(false);
        }
      }
      return null;
    }
    updateButton();
  }, [currentProductAmount]);

  return (
    <section className="container container-product flex-column">
      {productData ? (
        <>
          <div className="flex-start flex-no-center">
            <div className="image-product flex-start">
              <img src={productData.imageUrl} />
            </div>
            <div className="product-info">
              <div className="info flex-start flex-column flex-no-center">
                <div className="flex-start">
                  <div className="small-img flex-start">
                    <img src={productData.imageUrl} />
                  </div>
                  <div className="mg-2 position-relative">
                    <HeartNoFillSvg
                      className="position-absolute heartSvg mg-1 ml-3 mb-1 heart"
                      isRef={heartRef}
                    />
                    <h2 className="mg-1">{productData.name}</h2>
                    <h5 className="mg-1">{productData.categories[0].name}</h5>
                    <h5 className="mg-1">{productData.author}</h5>
                    <h5 className="mg-1">R$: {productData.price}</h5>
                  </div>
                </div>
                <div className="flex-start flex-column flex-no-center mg-2">
                  <div className="flex-start">
                    <h5 className="calc-frete">Calcular Frete</h5>
                    <StarsSvg />
                  </div>
                  <div className="flex-start mt-2">
                    <div className="flex-start container-add-product">
                      <div className="mg-1 btn-sub" ref={btnSubRef}>
                        -
                      </div>
                      <div className="mg-1">{currentProductAmount}</div>
                      <div className="mg-1 btn-sum" ref={btnSumRef}>
                        +
                      </div>
                    </div>
                    <div>
                      {isOnCart ? (
                        <button
                          type="button"
                          onClick={removeCart}
                          className="buttonAddCart ml-2"
                        >
                          Remover do Carrinho
                        </button>
                      ) : (
                        <button
                          type="button"
                          onClick={addToCart}
                          className="buttonAddCart ml-2"
                        >
                          Adicionar ao Carrinho
                        </button>
                      )}
                      {isUpdate ? (
                        <button
                          type="button"
                          onClick={updateOrder}
                          className="buttonAddCart ml-2 mt-1"
                        >
                          Salvar Quantidade
                        </button>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex-start product-desc flex-column flex-no-center">
            <div className="mg-2">
              <h2>Descrição</h2>
            </div>
            <div className="mg-3">
              <p>{productData.description}</p>
            </div>
          </div>
        </>
      ) : (
        <p>Carregando...</p>
      )}
    </section>
  );
}

export default ProductComponent;
