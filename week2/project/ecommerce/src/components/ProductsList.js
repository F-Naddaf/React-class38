import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const ProductsList = () => {
  let url = '';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const { category } = useParams();

  if (category === undefined) {
    url = 'https://fakestoreapi.com/products';
  } else {
    url = `https://fakestoreapi.com/products/category/${category}`;
  }
  useEffect(() => {
    (async () => {
      try {
        const data = await fetch(url);
        const products = await data.json();
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        setError(true);
        setIsLoading(true);
      }
    })();
  }, [url]);

  return (
    <>
      <ul className="main">
        <div className="products">
          {error ? (
            <p className="error-message">Server responds with error 404!</p>
          ) : isLoading ? (
            <p className="loading">Loading ...</p>
          ) : (
            products.map((product) => (
              <Link
                className="product-card"
                to={`/product/${product.id}`}
                key={product.id}
              >
                <li>
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
                </li>
              </Link>
            ))
          )}
        </div>
      </ul>
    </>
  );
};

export default ProductsList;
