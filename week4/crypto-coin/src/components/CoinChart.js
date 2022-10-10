import React, { useContext, useEffect, useState } from 'react';
import { Line } from 'react-chartjs-2';
import { CryptoContext } from '../context/CryptoContext';

const CoinChart = ({ coin }) => {
  const url = (id, days = 365, currency) =>
    `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${currency}&days=${days}`;
  const { currency } = useContext(CryptoContext);
  const [dataHistory, setDataHistory] = useState();
  const [days, setdays] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const response = await fetch(url(coin.id, days, currency));
        const data = await response.json();
        // console.log('data', data);
        setDataHistory(data.prices);
        setIsLoading(false);
        // console.log('data', data);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [days]);
  // const labels = dataHistory[0];
  // console.log('labels', labels);
  // console.log('dataHistory', dataHistory);
  return (
    <>
      {/* {error && (
        <div div className="error-container">
          <p className="error-message">Server responds with error 404!</p>
        </div>
      )}
      {isLoading && (
        <div className="loading-container">
          <p className="loading">Loading ...</p>
        </div>
      )}
      {dataHistory && (
        <Line
          data={{
            labels: dataHistory.map((coin) => {
              let date = new Date(coin[0]);
              let time =
                date.getHours() > 12
                  ? `${date.getHours() - 12}:${date.getMinutes()} PM`
                  : `${date.getHours()}:${date.getMinutes()} AM`;
              return days === 1 ? time : date.toLocaleDateString();
            }),
          }}
        ></Line>
      )} */}
    </>
  );
};

export default CoinChart;
