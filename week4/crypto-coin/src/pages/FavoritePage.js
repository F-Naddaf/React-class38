import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { FavoriteContext } from '../context/FavoriteContext';

const FavoritePage = () => {
  const { favoriteCoins } = useContext(FavoriteContext);
  return (
    <>
      <Header />
      <ul>
        {favoriteCoins.length > 0 ? (
          favoriteCoins.map((coin) => (
            <li className="coin-card" key={coin.id}>
              {favoriteCoins(coin)}
              <Link to={`/coin/${coin.id}`}>
                <div className="product">
                  <img
                    className="coin-image"
                    src={coin.image}
                    alt={coin.title}
                  />
                  <div className="title-container">
                    <p className="coin-title">
                      <strong>More about:</strong> {coin.title}
                    </p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <h2 className="favorite-message">
            You don't Have any coin in your favorites!
          </h2>
        )}
      </ul>
      <div>FavoritePage</div>
    </>
  );
};

export default FavoritePage;
