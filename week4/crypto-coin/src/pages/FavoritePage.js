import React, { useContext } from 'react';
import ReactHtmlParser from 'react-html-parser';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import { CryptoContext } from '../context/CryptoContext';
import { FavoriteContext } from '../context/FavoriteContext';
import '../style/FavoritePage.css';

const FavoritePage = () => {
  const { currency, symbol } = useContext(CryptoContext);
  const { favoriteCoins, removeFromFavorite } = useContext(FavoriteContext);
  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
  return (
    <>
      <Header />
      <div className="favorite-coins-container">
        {favoriteCoins.length > 0 ? (
          favoriteCoins.map((coin) => {
            return (
              <div className="container" key={coin.id}>
                <Link to={`/coin/${coin.id}`}>
                  <div className="favorite-coin-details">
                    <img
                      className="favorite-coin-image"
                      src={coin.image.large}
                      alt={coin.id}
                    />
                    <h3 className="favorite-coin-name">{coin.id}</h3>
                    <p className="favorite-coin-info">
                      Current Price: {symbol}{' '}
                      {coin.market_data.current_price[currency.toLowerCase()]}
                    </p>
                    <p className="favorite-coin-info">
                      Market Cap: {symbol}{' '}
                      {numberWithCommas(
                        coin.market_data.market_cap[currency.toLowerCase()]
                          .toString()
                          .slice(0, -6),
                      )}
                      M
                    </p>
                    <p className="favorite-coin-desc">
                      Descriptions:{' '}
                      {ReactHtmlParser(coin.description.en.split('. ')[0])}
                    </p>
                  </div>
                </Link>
                <button
                  className="favorite-page-remove-btn"
                  onClick={() => removeFromFavorite(coin.id)}
                >
                  Remove from favorite
                </button>
              </div>
            );
          })
        ) : (
          <div>
            <h2 className="favorite-message">
              You don't Have any coin in your favorite!
            </h2>
          </div>
        )}
      </div>
    </>
  );
};

export default FavoritePage;
