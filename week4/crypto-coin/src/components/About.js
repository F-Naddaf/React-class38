import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../image/Logo.png';
import './About.css';

const About = () => {
  return (
      <div className="about-container">
        <div className="logo-container">
          <img className="Banner-logo" src={Logo} alt="Logo" />
        </div>
        <div className="info-container"></div>
        <h3 className="info-about">
          CryptoCoin is the world's most-referenced price-tracking website for
          cryptoassets in the rapidly growing cryptocurrency space, relying on
          the data provided by CoinMarketCap website. Its mission is to make
          crypto discoverable and efficient globally by empowering retail users
          with unbiased, high quality and accurate information for drawing their
          own informed conclusions.
        </h3>
        <h3 className="info-about">
          Founded by Fadi Naddaf in October 2022, CryptoCoin has quickly grown
          to become the most trusted source by users, institutions, and media
          for comparing thousands of cryptoassets and is commonly cited by
          Mr.Rob , other mentors and Hack your future.
        </h3>
        <h3 className="info-about">
          CryptoCoin stands firmly for accurate, timely and unbiased
          information.
        </h3>
        <h3 className="info-about">
          CryptoCoin continues to operate independently.
        </h3>
      <div className="about-btn-container">
        <Link to="/">
          <button className="about-back-btn">Back</button>
        </Link>
      </div>
      </div>
  );
};

export default About;
