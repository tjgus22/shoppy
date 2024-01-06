import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { getCart } from '../api/firebase';
import { useAuthContext } from '../context/AuthContext';

export default function CartStatus() {
  const { uid } = useAuthContext();
  const { data: products } = useQuery({
    queryKey: ['carts'],
    queryFn: () => getCart,
  });
  return (
    <div className='relative'>
      <AiOutlineShoppingCart className='text-4xl' />
      {products && (
        <p className='w-6 h-6 bg-brand text-white text-center font-bold rounded-full absolute -top-2 -right-2'>
          {products.length}
        </p>
      )}
    </div>
  );
}
