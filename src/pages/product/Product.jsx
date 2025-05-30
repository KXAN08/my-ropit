import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import ProductDetail from './ProductDetail';
import { useStateValue } from '@/context';
import { FaRegHeart } from "react-icons/fa";

const Product = () => {
  const [data, setData] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [, dispatch] = useStateValue();

  useEffect(() => {
    api.get('/products')
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p className="text-center mt-4">Yuklanmoqda...</p>;
  if (error) return <p className="text-red-500">Xatolik: {error}</p>;

  if (selectedProduct) {
    return <ProductDetail product={selectedProduct} onBack={() => setSelectedProduct(null)} />;
  }

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Mahsulotlar</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {data?.map(item => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer relative"
          >
            <img src={item.image} alt={item.title} className="h-40 mx-auto mb-2 object-contain" />
            <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
            <p className="text-green-600 font-bold">${item.price}</p>
            <button
              onClick={(e) => {
                e.stopPropagation();
                dispatch({ type: "LIKED", payload: item });
              }}
              className="absolute top-2 right-2 text-gray-500 hover:text-red-500"
            >
              <FaRegHeart />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
