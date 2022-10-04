import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { MdOutlineFavorite } from 'react-icons/md';
import { FavoriteContext } from '../context/FavoriteContext';

function Header() {
  const { favoriteProducts } = useContext(FavoriteContext);
  return (
    <div className="header">
      <Link className="header-container" to="/">
        <h1 className="page-title, blue-color">
          <span className="pink-color">Pro</span>ducts
        </h1>
      </Link>
      <Link className="favorite-link" to="/favorites">
        <MdOutlineFavorite className="favorite-link-icon" />
        {favoriteProducts.length > 0 ? (
          <p className="fav-num">{favoriteProducts.length}</p>
        ) : (
          <p className="fav-num-dis"></p>
        )}
        <h3 className="favorite-btn">Favorites</h3>
      </Link>
    </div>
  );
}

export default Header;
