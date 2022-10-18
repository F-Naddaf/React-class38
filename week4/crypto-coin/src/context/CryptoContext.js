import React, { useState, createContext } from 'react';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  return (
    <CryptoContext.Provider
      value={{ currency, setCurrency, symbol: currency === 'EUR' ? '€' : '$'}} 
    >
      {children}
    </CryptoContext.Provider>
  );
};

