import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Coin from './components/Coin';
import { CryptoProvider } from './context/CryptoContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <CryptoProvider>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/coin/:id" element={<Coin />} />
      </Routes>
    </CryptoProvider>
  </Router>,
);
