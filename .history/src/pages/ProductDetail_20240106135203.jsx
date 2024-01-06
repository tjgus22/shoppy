import React from 'react';

export default function ProductDetail() {
  const
  const {
    state: {
      product: { id, image, title, description, category, price, option },
    },
  } = useLocation();
  return (
    <section>
      <p>{category}</p>
      <img src={image} alt={title} />
      <div>
        <h2>{title}</h2>
        <p>₩{price}</p>
        <p>{description}</p>
        <p>옵션:</p>
<select
      </div>
    </section>
  );
}
