import React, { useContext, useEffect, useState } from 'react';

import { CryptoContext } from '../context/CryptoContext';
import '../style/CoinChart.css';

const CoinChart = ({ coin }) => {
  const { id } = coin;
  const { currency } = useContext(CryptoContext);
  const [dataHistory, setDataHistory] = useState();
  const [days, setdays] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`,
        );
        const data = await response.json();
        setDataHistory(data.prices);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [days]);

  return (
    <div className="chart">
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
      {dataHistory &&
        dataHistory.map((price) => {
          const [timeStamp, p] = price;
          return {
            Date: timeStamp,
            price: p,
          };
        })}
    </div>
  );
};

export default CoinChart;
