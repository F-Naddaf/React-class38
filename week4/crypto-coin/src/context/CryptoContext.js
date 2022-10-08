import React, { useEffect, useState, createContext } from 'react';

export const CryptoContext = createContext();

export const CryptoProvider = ({ children }) => {
  const [currency, setCurrency] = useState('USD');
  const [symbol, setSymbol] = useState('$');

  useEffect(() => {
    if (currency === 'EUR') setSymbol('€');
    else if (currency === 'USD') setSymbol('$');
  }, [currency]);

  return (
    <CryptoContext.Provider value={{ currency, setCurrency, symbol }}>
      {children}
    </CryptoContext.Provider>
  );
};
