import React, { useContext, useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from 'recharts';

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
  console.log(dataHistory);

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
        dataHistory.map((price, index) => {
          const [timeStamp, p] = price;
          return (
            <ResponsiveContainer width="70%" height={500} key={index}>
              <AreaChart
                data={price}
                options={{
                  maintainAspectRatio: false,
                }}
              >
                <Area dataKey={timeStamp} stroke="#2451B7" />
                <XAxis dataKey={timeStamp} color="white" className="X-line"/>
                <YAxis dataKey={p} />
              </AreaChart>
            </ResponsiveContainer>
          );
        })}
    </div>
  );
};

export default CoinChart;
