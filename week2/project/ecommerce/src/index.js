import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
  </Router>,
);

reportWebVitals();

function ProductDetails(e) {
  const image = e.target.image;
  console.log(image);
  return (
    <div>
      <p>Hello</p>
      <img src={image}/>
    </div>
  );
}
