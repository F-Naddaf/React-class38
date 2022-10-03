import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ProductDetails from './components/ProductDetails';
import ProductsList from './components/ProductsList';
import ProductCategory from './components/ProductCategory';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<ProductsList />} />
        <Route path="/:category" element={<ProductCategory />} />
      </Route>
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>,
);

reportWebVitals();
