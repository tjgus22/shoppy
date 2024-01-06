import React, { useState } from 'react';

export default function NewProduct() {
  const [product, setProduct] = useState({});
  const [file, setFile] = useState();

  const handleChange = (e) => {};
  const { name, value, files } = e.target;
  if (name === 'file') {
    setFile(files && files[0]);
    return;
  }
  setProduct((product) => ({ ...product, [name]: value }));
  const handleSubmit = (e) => {};
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
        <input
          type='text'
          name='title'
          value={product.title ?? ''}
          placeholder='제품명'
          required
          onChange={handleChange}
        />
        <input
          type='number'
          name='price'
          value={product.price ?? ''}
          placeholder='가격'
          required
          onChange={handleChange}
        />
        <input
          type='text'
          name='category'
          value={product.category ?? ''}
          placeholder='카테고리'
          required
          onChange={handleChange}
        />
      </form>
    </section>
  );
}
