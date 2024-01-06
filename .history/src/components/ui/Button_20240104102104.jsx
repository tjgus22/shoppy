import React from 'react';

export default function Button({ text, onClick }) {
  return (
    <button
      className='bg-brand text-white rounded-sm py-w px-4 hover:brightness-50'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
