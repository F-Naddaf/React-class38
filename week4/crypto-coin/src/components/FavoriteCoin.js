import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoriteCoin = (coin) => {
  const { favoriteCoins, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  const filteredCoin = favoriteCoins.filter((e) => coin.id === e.id);
  console.log(filteredCoin);
  return filteredCoin.length > 0 ? (
    <div className="coin-page-favorite-link">
      <button className="remove-from-favorite-btn" onClick={removeFromFavorite}>
        Remove from favorite
      </button>
    </div>
  ) : (
    <div className="coin-page-favorite-link">
      <button className="add-to-favorite-btn" onClick={addToFavorite}>
        Add to favorite
      </button>
    </div>
  );
};

export default FavoriteCoin;
