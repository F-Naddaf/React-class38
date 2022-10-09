import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import ReactHtmlParser from 'react-html-parser';
import './Coin.css';
import Header from './Header';

const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const { currency, symbol } = useContext(CryptoContext);

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`,
        );
        const data = await response.json();
        setCoin(data);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currency]);
  return (
    <>
      <Header />
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
      {coin && (
        <div className="page-container">
          <div className="coin-detail">
            <img
              className="coin-page-image"
              src={coin.image.large}
              alt={coin.name}
            />
            <h3 className="coin-page-name">{coin.id}</h3>
            <p className="coin-page-desc">
              {ReactHtmlParser(coin.description.en.split('. ')[0])}
            </p>
            <div className="coin-page-info">
              <h4>Rank: {coin.market_cap_rank}</h4>
              <h4>
                Current Price: {symbol}{' '}
                {coin.market_data.current_price[currency.toLowerCase()]}
              </h4>
              <h4>
                Market Cap: {symbol}{' '}
                {numberWithCommas(
                  coin.market_data.market_cap[currency.toLowerCase()]
                    .toString()
                    .slice(0, -6),
                )}
                M
              </h4>
            </div>
            <Link className="coin-page-favorite-link" to='/'>
              <button className="coin-page-favorite-btn">Add to favorite</button>
            </Link>
            <Link className="coin-page-back-link" to="/">
              <button className="coin-page-back-btn">Back to home</button>
            </Link>
          </div>
          <div className="chart">
            <img
              className="coin-page-image"
              src={coin.image.large}
              alt={coin.name}
            />
            <div className="para">{coin.symbol}</div>
            <div className="para"></div>
          </div>
        </div>
      )}
      {/* <div className="para">{coin.localization.en}</div> */}
      {/* <p className="para">Coin</p> */}
    </>
  );
};

export default Coin;
