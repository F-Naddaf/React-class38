import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import HomePage from './pages/HomePage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coin from './components/CoinDetails';
import { CryptoProvider } from './context/CryptoContext';
import About from './pages/AboutPage';
import { FavoriteProvider } from './context/FavoriteContext';
import FavoritePage from './pages/FavoritePage';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CryptoProvider>
      <FavoriteProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/favorite" element={<FavoritePage />} />
          <Route path="/coin/:id" element={<Coin />} />
        </Routes>
      </FavoriteProvider>
    </CryptoProvider>
  </Router>,
);
