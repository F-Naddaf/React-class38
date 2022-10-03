import React, { useEffect, useState, createContext } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = (props) => {
  let url = 'https://fakestoreapi.com/products';
  const [products, setProducts] = useState([url]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);

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
    <ProductsContext.Provider value={[products, isLoading, error]}>
      {props.children}
    </ProductsContext.Provider>
  );
};
