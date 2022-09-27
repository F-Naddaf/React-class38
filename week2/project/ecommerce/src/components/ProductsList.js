import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductsList = ({ category }) => {
  let url = '';
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  if (category === '') {
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
        console.log(error);
      }
    })();
  }, [url]);

  return (
    <main className="main">
      <ul className="products">
        {isLoading ? (
          <p className="loading">Loading ...</p>
        ) : (
          products.map((product) => (
            <Link className="product-card" to="/product:id" key={product.id}>
              <li key={product.id}>
                <div className="product">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.title}
                  />
                  <div className="title-container">
                    <p className="product-title">{product.title}</p>
                  </div>
                </div>
              </li>
            </Link>
          ))
        )}
      </ul>
    </main>
  );
};

export default ProductsList;
