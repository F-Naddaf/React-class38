import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import '../style/TrendingCoins.css';

const TrendingCoins = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [trending, setTrending] = useState([]);
  const { currency, symbol } = useContext(CryptoContext);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        );
        const coins = await response.json();
        const sortedCoins = coins.sort((a, b) => {
          return b.price_change_percentage_24h - a.price_change_percentage_24h;
        });
        setTrending(sortedCoins.slice(0, 5));
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [currency]);
  return (
    <div className="coin-details">
      {error && (
        <div div className="error-container">
          <p className="error-message">Server responds with error 404!</p>
        </div>
      )}
      {isLoading && (
        <div className="loading-container">
          <p className="loading">Loading ...</p>
        </div>
      )}
      {trending.map((coin) => {
        const profit = coin.price_change_percentage_24h >= 0;
        return (
          <Link className="coin-card" to={`/coin/${coin.id}`} key={coin.id}>
            <img className="trending-image" src={coin.image} alt={coin.name} />
            <div className="coin-info">
              <p className="coin-symbol">
                {coin.symbol}
                <span
                  className="coin-percentage"
                  style={{
                    color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
                  }}
                >
                  {profit && '+'}
                  {coin.price_change_percentage_24h.toFixed(2)}%
                </span>
              </p>
              <p className="coin-price">
                {symbol} {coin.current_price.toFixed(6)}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default TrendingCoins;
