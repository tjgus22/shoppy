import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button className='bg-brand text-white py-w px-4' onClick={onClick}>
      {text}
    </button>
  );
}
