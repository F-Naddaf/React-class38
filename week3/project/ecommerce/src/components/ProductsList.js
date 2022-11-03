import React from 'react';
import { Link } from 'react-router-dom';
import FavoriteIcon from './FavoriteIcon';

const ProductsList = ({ products, error, isLoading }) => {
  return (
    <>
      <ul className="main">
        <div className="products">
          {error && (
            <p className="error-message">Server responds with error 404!</p>
          )}
          {isLoading && <p className="loading">Loading ...</p>}
          {products &&
            products.map((product) => {
              return (
                <li className="product-card" key={product.id}>
                  {FavoriteIcon(product)}
                  <Link to={`/product/${product.id}`}>
                    <div className="product">
                      <img
                        className="product-image"
                        src={product.image}
                        alt={product.title}
                      />
                      <div className="title-container">
                        <p className="product-title">
                          <strong>More about:</strong> {product.title}
                        </p>
                      </div>
                    </div>
                  </Link>
                </li>
              );
            })}
        </div>
      </ul>
    </>
  );
};

export default ProductsList;
