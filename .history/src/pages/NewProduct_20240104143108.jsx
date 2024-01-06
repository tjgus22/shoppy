import React, { useState } from 'react';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  return (
    <section>
      <form onClick={handleSubmit}>
        <input
          type='file'
          accept='image/*'
          name='file'
          required
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
