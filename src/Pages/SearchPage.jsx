import React, { useState } from 'react';
import useProducts from '../hooks/useProducts';

function SearchPage() {
  const [searchValue, setSearchValue] = useState('');
  const [products, isLoading, error] = useProducts(searchValue);

  return (
    <div>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />

      {isLoading ? (
        <h1>Is loading...</h1>
      ) : (
        <ul>
          {products.map((product) => {
            return <li key={product.id}>{product.title}</li>;
          })}
        </ul>
      )}
      {error && <h1>Error</h1>}
    </div>
  );
}

export default SearchPage;
