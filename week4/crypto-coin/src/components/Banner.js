import React from 'react';
import banner from '../image/Banner-new.jpg';
import bannerLogo from '../image/banner-logo.png';
import './Banner.css';
import TrendingCoins from './TrendingCoins';
import CoinsList from './CoinsList';

const Banner = () => {
  return (
    <div className="banner-container">
      <img className="banner" src={banner} alt="banner" />
      <div className="container-top">
        <img className="Banner-logo" src={bannerLogo} alt="Logo" />
        <div className="paragraph-container">
          <p className="paragraph">
            Get All Info Regarding Your Favorite Crypto Currency
          </p>
        </div>
      </div>
      <div className="container-bottom">
        <TrendingCoins />
      </div>
        <CoinsList />
    </div>
  );
};

export default Banner;
