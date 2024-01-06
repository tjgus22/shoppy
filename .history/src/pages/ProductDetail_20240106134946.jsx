import React from 'react';

export default function ProductDetail() {
  const {
    state: {
      product: { id, image, title, description, category, price, option },
    },
  } = useLocation();
  return (
    <section>
      <p>{category}</p>
    </section>
  );
}
