import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { MdShoppingCart } from 'react-icons/md';
import { getCart } from '../api/firebase';

export default function CartStatus() {
  const { data: products } = useQuery(['carts'], getCart);
  return (
    <div>
      <MdShoppingCart />
      {products && <p>{products.length}</p>}
    </div>
  );
}
