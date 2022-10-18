import React, { useContext, useEffect, useState } from 'react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts';
import { CryptoContext } from '../context/CryptoContext';
import ChartDaysData from './ChartDaysData';
import '../style/CoinChart.css';
import CustomTooltip from './CustomTooltip';

const CoinChart = ({ coin }) => {
  const { id } = coin;
  const { currency, symbol } = useContext(CryptoContext);
  const [dataHistory, setDataHistory] = useState();
  const [days, setDays] = useState(1);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [days]);

  const chartData =
    dataHistory == null
      ? []
      : dataHistory.map((price) => {
          let [timeStamp, p] = price;
          return {
            time: timeStamp,
            price: p,
          };
        });
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
      {chartData && (
        <ResponsiveContainer width="100%" height="80%" >
          <AreaChart
            data={chartData}
            options={{
              maintainAspectRatio: false,
            }}
          >
            <defs>
              <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f5c518" stopOpacity={0.4} />
                <stop offset="75%" stopColor="#f5c518" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <Area
              dataKey={'price'}
              stroke="#f5c518"
              fill="url(#color)"
            />
            <XAxis
              dataKey={'time'}
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickFormatter={(t) => {
                let date = new Date(t);
                let time =
                  date.getHours() > 12
                    ? `${date.getHours() - 12} : ${date.getMinutes()} pm`
                    : `${date.getHours()} : ${date.getMinutes()} am`;
                return days === 1 ? time : date.toLocaleDateString();
              }}
            />
            <YAxis
              tick={{ fontSize: 12 }}
              axisLine={false}
              tickLine={false}
              tickCount={8}
              tickFormatter={(num) => `${symbol}${num.toFixed(2)}`}
            />
            <Tooltip content={<CustomTooltip />} />
            <CartesianGrid opacity={0.1} vertical={false} />
          </AreaChart>
        </ResponsiveContainer>
      )}
      <div className="days-button-container">
        {ChartDaysData.map((day) => (
          <button
            type="button"
            className="day-button"
            key={day.value}
            onClick={() => {
              setDays(day.value);
            }}
            selected={day.value === days}
          >
            {day.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CoinChart;
