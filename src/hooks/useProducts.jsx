import React, { useEffect, useState } from 'react';

function useProducts(param) {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://dummyjson.com/products/search?q=${param}`)
      .then((response) => response.json())
      .then((data) => {
        setIsLoading(false);
        setProducts(data.products);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      });
  }, [param]);

  return [products, isLoading, error];
}

export default useProducts;
