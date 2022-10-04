import React, { useState, createContext } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
  const [favoriteProducts, setFavoriteProducts] = useState([]);
  const addFavorite = (product) => {
    const filteredProduct = favoriteProducts.filter((p) => product.id === p.id);
    if (filteredProduct.length === 0) {
      setFavoriteProducts([...favoriteProducts, product]);
    }
  };
  const removeFavorite = (id) => {
    setFavoriteProducts(
      favoriteProducts.filter((product) => product.id !== id),
    );
  };
  return (
    <FavoriteContext.Provider
      value={{
        favoriteProducts,
        setFavoriteProducts,
        addFavorite,
        removeFavorite,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};
