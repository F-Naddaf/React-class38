import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

export default function ProductDetails() {
  const [product, setProduct] = useState([]);
  const [error, setError] = useState(false);
  const [response, setResponse] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { id } = useParams();
  const url = `https://fakestoreapi.com/products/${id}`;
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(url);
        setResponse(response);
        const product = await response.json();
        setProduct(product);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [url]);
  return (
    <>
      {error ? (
        <p className="error-message">{`Something went wrong ${error} status: ${response.status}!`}</p>
      ) : isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="item-container">
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
}
