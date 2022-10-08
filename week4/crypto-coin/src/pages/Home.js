import React from 'react';
import Banner from '../components/Banner';
import CoinsList from '../components/CoinsList';
import Header from '../components/Header';

const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <CoinsList />
    </>
  );
};

export default Home;
