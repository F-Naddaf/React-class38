import React, { useContext } from 'react';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { MdOutlineFavorite } from 'react-icons/md';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoriteIcon = (product) => {
  const { addFavorite, favoriteProducts, removeFavorite } =
    useContext(FavoriteContext);

  const filteredProduct = favoriteProducts.filter((p) => product.id === p.id);
  return filteredProduct.length > 0 ? (
    <MdOutlineFavorite
      className="fav-icon"
      onClick={() => removeFavorite(product.id)}
    />
  ) : (
    <MdOutlineFavoriteBorder
      className="fav-icon"
      onClick={() => addFavorite(product)}
    />
  );
};

export default FavoriteIcon;
