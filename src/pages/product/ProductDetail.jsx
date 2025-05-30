import React from 'react';
import { FaArrowLeft, FaRegHeart } from 'react-icons/fa';
import { useStateValue } from '@/context';


const ProductDetail = ({ product, onBack }) => {
  const [, dispatch] = useStateValue();

  return (
    <div className="p-6 container mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 flex items-center"
      >
        <FaArrowLeft className="mr-2" /> Orqaga
      </button>
      <div className="border p-6 rounded shadow relative">
        <img src={product.image} alt={product.title} className="h-60 mx-auto mb-4 object-contain" />
        <h2 className="text-2xl font-bold mb-2">{product.title}</h2>
        <p className="text-green-600 font-bold text-xl mb-2">${product.price}</p>
        <p className="text-gray-700">{product.description}</p>
        <button
          className="absolute top-4 right-4 text-red-500"
          onClick={() => dispatch({ type: "LIKED", payload: product })}
        >
          <FaRegHeart />
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
