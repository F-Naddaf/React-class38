import { useEffect, useState } from 'react';

const useFetch = (url) => {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const data = await fetch(url);
        const products = await data.json();
        setProducts(products);
        setIsLoading(false);
      } catch (error) {
        setError(error);
        setIsLoading(false);
      }
    })();
  }, [url]);
  return { products, isLoading, error };
};

export default useFetch;
