import React, { useContext } from 'react';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoriteButton = ({ coin }) => {
  const { favoriteCoins, addToFavorite, removeFromFavorite } =
    useContext(FavoriteContext);

  const filteredCoin = favoriteCoins.filter((e) => coin.id === e.id);
  return filteredCoin.length > 0 ? (
    <div className="coin-page-favorite-link">
      <button
        className="remove-from-favorite-btn"
        onClick={() => removeFromFavorite(coin.id)}
      >
        Remove from favorite
      </button>
    </div>
  ) : (
    <div className="coin-page-favorite-link">
      <button
        className="add-to-favorite-btn"
        onClick={() => addToFavorite(coin)}
      >
        Add to favorite
      </button>
    </div>
  );
};

export default FavoriteButton;
