import React from 'react';
import { useAuthContext } from '../context/AuthContext';
import { useQuery } from '@tanstack/react-query';
import { getCart } from '../api/firebase';
import CartItem from '../components/CartItem';
import { BsFillPlusCircleFill } from 'react-icons/bs';
import { FaEquals } from 'react-icons/fa';
import PriceCard from '../components/PriceCard';
import Button from '../components/ui/Button';
import useCart from '../hooks/useCart';

const SHIPPING = 3000; // 배송비
export default function MyCart() {
  const { uid } = useAuthContext();
  const { isLoading, data: products } = useCart({
    queryKey: ['carts'],
    queryFn: () => getCart(uid),
  });

  if (isLoading) return <p>Loading...</p>;

  const hasProducts = products && products.length > 0;
  const totalPrice =
    products &&
    products.reduce(
      (prev, current) => prev + parseInt(current.price) * current.quantity,
      0 // 초기값
    );
  return (
    <section className='p-8 flex flex-col'>
      <p className='text-2xl text-center font-bold pb-4 border-b border-gray-300'>
        내 장바구니
      </p>
      {!hasProducts && <p>장바구니에 상품이 없습니다. 상품을 담아보세요 !</p>}
      {hasProducts && (
        <>
          <ul className='border-b border-gray-300 mb-8 p-4 px-8'>
            {products &&
              products.map((product) => (
                <CartItem key={product.id} product={product} uid={uid} />
              ))}
          </ul>
          <div className='flex justify-between items-center mb-4 p-4 md:px-8 lg:px-16 '>
            <PriceCard text='상품 총액' price={totalPrice} />
            <BsFillPlusCircleFill className='shrink-0' />
            <PriceCard text='배송비' price={SHIPPING} />
            <FaEquals className='shrink-0' />
            <PriceCard text='총 가격' price={totalPrice + SHIPPING} />
          </div>
          <Button text='주문하기' />
        </>
      )}
    </section>
  );
}
