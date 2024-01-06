import React from 'react';
import { getProducts } from '../api/firebase';

export default function products() {
  const {
    isLoading,
    error,
    data: products,
  } = useQuery(['products'], getProducts);
  return <div></div>;
}
