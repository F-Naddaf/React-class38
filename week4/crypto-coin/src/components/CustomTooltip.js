import React, { useContext } from 'react';
import { CryptoContext } from '../context/CryptoContext';

const CustomTooltip = ({ active, payload, label }) => {
  const { symbol } = useContext(CryptoContext);
  const dateObj = new Date(label);
  const formatDate = dateObj.toLocaleString('en-GB', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
  let time =
    dateObj.getHours() > 12
      ? `${dateObj.getHours() - 12} : ${dateObj.getMinutes()} pm`
      : `${dateObj.getHours()} : ${dateObj.getMinutes()} am`;
  if (active) {
    return (
      <div className="tooltip">
        <p>
          {symbol}
          {payload[0].value.toFixed(3)}
        </p>
        <p>{formatDate}</p>
        <p>{time}</p>
      </div>
    );
  }
  return null;
};

export default CustomTooltip;
