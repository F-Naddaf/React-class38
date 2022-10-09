import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import './Coin.css';
import Header from './Header';

const Coin = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const { currency, symbol } = useContext(CryptoContext);

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
        <>
          <img src={coin.image.large} alt={coin.name} />
          <div className="para">{coin.symbol}</div>
          <div className="para">{}{coin.description.en}</div>
        </>
      )}
      {/* <div className="para">{coin.localization.en}</div> */}
      {/* <p className="para">Coin</p> */}
    </>
  );
};

export default Coin;
