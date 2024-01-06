import React from 'react';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';

export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart,
  });

  if (isLoading) return <p>Loading ...</p>;

  const hasProducts = products && products.lengh > 0;
  return (
    <section>
      {' '}
      <p>내 장바구니</p>
    </section>
  );
}
