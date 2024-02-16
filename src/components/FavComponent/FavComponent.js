import React from 'react';
import FavCardComponent from '../FavCardComponent/FavCardComponent';
import { useGlobalContext } from '../../Context/GlobalContext/GlobalContext';

function FavComponent() {
  const { globalState } = useGlobalContext();
  const [favorites, setFavorites] = React.useState([]);
  const { favoriteData } = globalState;
  React.useEffect(() => {
    function handleFavorites() {
      if (favoriteData) {
        setFavorites(favoriteData);
      }
    }

    handleFavorites();
  }, [favoriteData]);

  return (
    <section className="container flex-start flex-column">
      <div className="mb-2 mt-2">
        <h2>Favoritos</h2>
        <div className="text-sub-bar width-sub-bar-100" />
      </div>
      {favorites && favorites.length > 0 ? (
        favorites.map((favorite) => (
          <FavCardComponent
            bookId={favorite.bookId}
            userId={favorite.userId}
            key={favorite.id}
          />
        ))
      ) : (
        <p>Nenhum Favorito Encontrado</p>
      )}
    </section>
  );
}

export default FavComponent;
