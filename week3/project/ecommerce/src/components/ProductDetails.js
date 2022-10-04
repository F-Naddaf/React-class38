import React from 'react';
import { Link, useParams } from 'react-router-dom';
// import { ProductsContext } from './ProductContext';
import useFetch from './useFetch';

const ProductDetails = () => {
  const { products, isLoading, error } = useFetch(
    'https://fakestoreapi.com/products',
  );
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  return (
    <>
      {error && (
        <p className="error-message">{`Something went wrong ${error}!`}</p>
      )}
      {isLoading && <p className="loading">Loading ...</p>}
      {product && (
        <div className="item-container" key={product.id}>
          <h1 className="item-title">{product.title}</h1>
          <div className="item-container-child">
            <img
              className="item-image"
              src={product.image}
              alt={product.title}
            />
            <div className="description-container">
              <p className="item-description">{product.description}</p>
              <p className="product-price">Price: €{product.price}</p>
            </div>
            <Link className="back-btn" to={'/'}>
              <p className="btn">HOME</p>
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetails;
