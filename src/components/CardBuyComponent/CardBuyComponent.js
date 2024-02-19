import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import StarsSvg from '../LandPageComponents/SvgComponents/StarsSvg/StarsSvg';
import HeartNoFillSvg from '../LandPageComponents/SvgComponents/HeartNoFillSvg/HeartNoFillSvg';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';
import FavoriteService from '../../services/FavoriteService/FavoriteService';

function CardBuyComponent({ name, price, img, id }) {
  const [isFavorite, setIsFavorite] = React.useState(false);
  const heartRef = React.useRef(null);
  const { globalState, dispatch } = useGlobalContext();
  const favoriteService = new FavoriteService();
  let heartSvg = heartRef.current;
  const { userData, favoriteData } = globalState;

  async function addFavorite() {
    if (userData) {
      const response = await favoriteService.addFavorite(id, userData.id);
      if (response.status === 200) {
        heartSvg.classList.add('heart-active');
        console.log('classe adicionada');
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
        console.log('classe removida');
        heartSvg.addEventListener('click', addFavorite);
        heartSvg.removeEventListener('click', removeFavorite);
        setIsFavorite(false);
        dispatch({ type: 'LOAD_FAVORITE' });
        dispatch({ type: 'RELOAD_COMPONENT' });
        toast.success('Removido dos Favoritos');
      }
    }
  }

  React.useEffect(() => {
    heartSvg = heartRef.current;
    function handleIsFavorite() {
      if (favoriteData) {
        favoriteData.map((favorite) => {
          if (favorite.bookId === id) {
            setIsFavorite(true);
          }
        });
      }
    }

    function setFavoriteClass() {
      if (isFavorite) {
        heartSvg.classList.add('heart-active');
      }
    }

    setFavoriteClass();
    handleIsFavorite();

    if (heartSvg) {
      if (!isFavorite) {
        heartSvg.addEventListener('click', addFavorite);
      }
      if (isFavorite) {
        heartSvg.addEventListener('click', removeFavorite);
      }
    }

    return () => {
      heartSvg.removeEventListener('click', addFavorite);
      heartSvg.removeEventListener('click', removeFavorite);
    };
  }, [favoriteData, isFavorite]);

  return (
    <div className="flex-start flex-column flex-no-center container-cardBuy">
      <div className="container-image flex-start position-relative">
        <img src={img} className="image-book" alt="Imagem do Livro" />
        <HeartNoFillSvg
          className="position-absolute heartSvg mg-1"
          isRef={heartRef}
        />
      </div>
      <div className="flex-start">
        <div className="mg-1">
          <h5>{name}</h5>
        </div>
      </div>
      <div className="flex-between mg-1 flex-center">
        <h5>R${price}</h5>
        <div className="mr-3">
          <StarsSvg width={15} height={18} />
        </div>
      </div>
      <div className="ml-1 mt-1">
        <Link to={`/product/${id}`} target="_blank">
          <button type="submit" className="buttonAddCart mg-1">
            Ver Produto
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CardBuyComponent;
