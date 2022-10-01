import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <Link className="header-container" to="/">
        <h1 className="page-title, blue-color">
          <span className="pink-color">Pro</span>ducts
        </h1>
      </Link>
    </div>
  );
}

export default Header;
