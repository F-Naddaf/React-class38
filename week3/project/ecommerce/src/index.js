import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './components/ProductDetails';
import ProductCategory from './components/ProductCategory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Favorites from './components/Favorites';
import { FavoriteProvider } from './context/FavoriteContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <FavoriteProvider>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="/:category" element={<ProductCategory />} />
        </Route>
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </FavoriteProvider>
  </Router>,
);

reportWebVitals();