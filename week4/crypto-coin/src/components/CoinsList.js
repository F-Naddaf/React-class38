import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import './CoinsList.css';

const CoinsList = () => {
  const { currency } = useContext(CryptoContext);
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${currency}&order=market_cap_desc&per_page=100&page=1&sparkline=true`,
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

  // const handleSearch = () => {
  //   return coins.filter(
  //     (coin) =>
  //       coin.name.toLowerCase().includes(search) ||
  //       coin.symbol.toLowerCase().includes(search),
  //   );
  // };

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
      (
      <table className="table">
        <th className="coins-table">
          <tr>Coin</tr>
          <tr>Price</tr>
          <tr>24h Change</tr>
          <tr>Market Cap</tr>
        </th>
        {coins.map((coin) => {
          return (
            <td>
              <Link>
                <tr>{coin.symbol}</tr>
              </Link>
            </td>
          );
        })}
      </table>
      )
    </div>
  );
};

export default CoinsList;
