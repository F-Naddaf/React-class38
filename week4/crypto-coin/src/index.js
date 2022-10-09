import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coin from './components/Coin';
import { CryptoProvider } from './context/CryptoContext';
import About from './components/About';
import Favorite from './components/Favorite';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CryptoProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/about" element={<About />} />
        <Route path="/favorite" element={<Favorite />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </CryptoProvider>
  </Router>,
);
