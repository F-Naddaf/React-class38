import React, { useContext } from 'react';
import { Link, useParams } from 'react-router-dom';
import { MdOutlineFavoriteBorder } from 'react-icons/md';
import { ProductsContext } from './ProductContext';

const ProductsList = () => {
  const [products, error, isLoading] = useContext(ProductsContext);
  const { category } = useParams();
  if (category === undefined) {
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
                    <MdOutlineFavoriteBorder className="fav-icon" />
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
  }
};

export default ProductsList;
