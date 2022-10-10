import React from 'react';
import Banner from '../components/Banner';
import CoinsList from '../components/CoinsList';
import Header from '../components/Header';
import './HomePage.css';

const HomePage = () => {
  return (
    <>
      <Header />
      <Banner />
      <CoinsList />
    </>
  );
};

export default HomePage;
