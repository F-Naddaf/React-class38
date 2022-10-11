import React, { useState, createContext, useEffect } from 'react';

export const FavoriteContext = createContext();

export const FavoriteProvider = (props) => {
  const [favoriteCoins, setFavoriteCoins] = useState(
    JSON.parse(localStorage.getItem('favoriteCoins')) || [],
  );
  useEffect(() => {
    localStorage.setItem('favoriteCoins', JSON.stringify(favoriteCoins));
  }, [favoriteCoins]);

  const addToFavorite = (coin) => {
    const filteredCoin = favoriteCoins.filter((e) => coin.id === e.id);
    if (filteredCoin.length === 0) {
      setFavoriteCoins([...favoriteCoins, coin]);
    }
  };
  const removeFromFavorite = (id) => {
    setFavoriteCoins(favoriteCoins.filter((coin) => coin.id !== id));
  };
  return (
    <FavoriteContext.Provider
      value={{
        favoriteCoins,
        setFavoriteCoins,
        addToFavorite,
        removeFromFavorite,
      }}
    >
      {props.children}
    </FavoriteContext.Provider>
  );
};
