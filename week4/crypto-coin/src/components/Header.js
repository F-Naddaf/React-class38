import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CryptoContext } from '../context/CryptoContext';
import Logo from '../image/Logo.png';
import './Header.css';

const Header = () => {
  const { currency, setCurrency } = useContext(CryptoContext);
  return (
    <nav className="nav">
      <div className="header-nav">
        <Link className="page-link" to="/">
          <img className="header-logo" src={Logo} alt="Logo" width={'180px'} />
        </Link>
        <select
          className="exchange-section"
          value={currency}
          id="currency"
          onChange={(e) => setCurrency(e.target.value)}
        >
          <option className="usd" value={'USD'}>
            $ USD
          </option>
          <option className="euro" value={'EUR'}>
            € EUR
          </option>
        </select>
      </div>
    </nav>
  );
};

export default Header;
