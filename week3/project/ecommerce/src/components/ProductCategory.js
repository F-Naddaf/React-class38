import React from 'react';
import { Link, useParams } from 'react-router-dom';
import FavoriteIcon from './FavoriteIcon';
import useFetch from './useFetch';

const ProductCategory = () => {
  const { products, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products',
  );
  const { category } = useParams();
  const getProductByCategory = products
    .map((product) => product.category)
    .find((productCategory) => productCategory === category);

  const result = products.filter(
    (product) => product.category === getProductByCategory,
  );
  return (
    <>
      <ul className="main">
        <div className="products">
          {error && (
            <p className="error-message">Server responds with error 404!</p>
          )}
          {isLoading && <p className="loading">Loading ...</p>}
          {result.map((product) => (
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
          ))}
        </div>
      </ul>
    </>
  );
};

export default ProductCategory;
