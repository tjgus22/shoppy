import React from 'react';
import { getProducts } from '../api/firebase';
import { useQuery } from '@tanstack/react-query';

export default function products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProducts);
  return <>
  {isLoading && <p>Loading...</p>}
  {error && <p>{error}</p>}
  <ul>
    {products && products.map(product=> <productCard key={product.id}, product={product} />)}
  </ul>
  </>;
}
