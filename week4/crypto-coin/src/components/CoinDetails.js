import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import ReactHtmlParser from 'react-html-parser';
import './CoinDetails.css';
import Header from './Header';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import FavoriteCoin from './FavoriteButton';
import CoinChart from './CoinChart';
// import CoinChart from './CoinChart';

const data = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];
const CoinDetails = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [coin, setCoin] = useState(null);
  const { currency, symbol } = useContext(CryptoContext);
  // const store = CoinChart()

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
            <FavoriteCoin coin={coin} />
            <Link className="coin-page-back-link" to="/">
              <button className="coin-page-back-btn">Back to home</button>
            </Link>
          </div>
          <div className="chart">
            {/* <CoinChart coin={coin} /> */}
            <AreaChart
              width={1000}
              height={500}
              data={data}
              options={{
                maintainAspectRatio: false,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="Date" />
              <YAxis />
              <Tooltip />
              <Area
                type="monotone"
                dataKey="price"
                stroke="#8884d8"
                fill="#8884d8"
              />
            </AreaChart>
          </div>
        </div>
      )}
    </>
  );
};

export default CoinDetails;
