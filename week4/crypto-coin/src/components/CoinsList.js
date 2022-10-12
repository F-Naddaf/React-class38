import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import '../style/CoinsList.css';

const CoinsList = () => {
  const { currency, symbol } = useContext(CryptoContext);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        setError(false);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=false`,
        );
        const coins = await response.json();
        setCoins(coins);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [currency]);

  const handleSearch = () => {
    return coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(search) ||
        coin.symbol.toLowerCase().includes(search),
    );
  };

  return (
    <div className="CoinsList">
      {error && (
        <p className="error-message">Server responds with error 404!</p>
      )}
      {isLoading && <p className="loading">Loading ...</p>}
      <h3 className="type-graph">Cryptocurrency Prices by Market Cap</h3>
      <input
        className="search-field"
        type={'text'}
        placeholder={'Search For a Crypto Currency..'}
        onChange={(e) => setSearch(e.target.value)}
      />
      {error && (
        <div div className="error-container">
          <p className="error-message">Server responds with error 404!</p>
        </div>
      )}
      {isLoading && (
        <div className="loading-coins-table">
          <p className="loading">Loading ...</p>
        </div>
      )}
      <div className="table-head">
        <div className="head-title">Coin</div>
        <div className="head-title">Price</div>
        <div className="head-title">24h Change</div>
        <div className="head-title">Market CaP</div>
      </div>
      {handleSearch().map((coin) => {
        const profit = coin.price_change_percentage_24h >= 0;
        return (
          <Link className="coin-desc" to={`/coin/${coin.id}`} key={coin.id}>
            <div className="row" id="row-style">
              <div className="coin-logo">
                <img className="table-image" src={coin.image} alt={coin.name} />
                <div className="coin-name-container">
                  <span className="coin-table-symbol">{coin.symbol}</span>
                  {coin.name}
                </div>
              </div>
            </div>
            <div className="row">
              {symbol} {numberWithCommas(coin.current_price.toFixed(2))}
            </div>
            <div
              className="row"
              style={{
                color: profit > 0 ? 'rgb(14, 203, 129)' : 'red',
              }}
            >
              {profit && '+'} {coin.price_change_percentage_24h.toFixed(2)}%
            </div>
            <div className="row">
              {symbol}{' '}
              {numberWithCommas(coin.market_cap.toString().slice(0, -6))} M
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CoinsList;
