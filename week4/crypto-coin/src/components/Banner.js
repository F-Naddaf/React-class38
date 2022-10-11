import React from 'react';
import bannerLogo from '../image/banner-logo.png';
import '../style/Banner.css';
import TrendingCoins from './TrendingCoins';

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="container-top">
        <div className="banner-details">
          <img className="Banner-logo" src={bannerLogo} alt="Logo" />
          <div className="paragraph-container">
            <p className="paragraph">
              Get All Info Regarding Your Favorite Crypto Currency
            </p>
          </div>
        </div>
      </div>
      <div className="container-bottom">
        <div className="moved-coins-container">
          <p className="moved-coins">
            The most <span className="coin-number">5</span> coins moved in last
            24h
          </p>
        </div>
        <TrendingCoins />
      </div>
    </div>
  );
};

export default Banner;
