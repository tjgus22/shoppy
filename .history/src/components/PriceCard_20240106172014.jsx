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
      </div>
    </li>
  );
}
