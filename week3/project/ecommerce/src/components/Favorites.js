import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavoriteContext } from '../context/FavoriteContext';
import FavoriteIcon from './FavoriteIcon';
import Header from './Header';

const Favorites = () => {
  const { favoriteProducts } = useContext(FavoriteContext);
  return (
    <>
      <Header />
      <ul className="favorite-products">
        {favoriteProducts.length > 0 ? (
          favoriteProducts.map((product) => (
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
          ))
        ) : (
          <h2 className='favorite-message'>You didn't add product in your favorites!</h2>
        )}
      </ul>
    </>
  );
};

export default Favorites;
