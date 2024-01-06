import React from 'react';

export default function PriceCard({
  text,
  price: { id, image, title, option, price },
}) {
  return (
    <li>
      <img src={image} alt={title} />
      <div>
        <p>{title}</p>
        <p>{option}</p>
        <div>
          <AiOutLineMinusSquare />
          <span>{quantity}</span>
          <AiOutLinePlusSquare />
          <RiDeleteBin5Fill />
        </div>
      </div>
    </li>
  );
}
