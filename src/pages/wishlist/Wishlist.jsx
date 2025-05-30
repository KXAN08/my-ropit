import React from 'react';
import { useStateValue } from '../../context';
import { FaRegHeart } from 'react-icons/fa';

const Wishlist = () => {
  const [{ wishlist }, dispatch] = useStateValue();

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Yoqtirilgan Mahsulotlar</h2>
      {wishlist.length === 0 ? (
        <p className="text-center">Yoqtirilgan mahsulotlar mavjud emas.</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {wishlist.map(item => (
            <div
              key={item.id}
              className="border p-4 rounded shadow hover:shadow-lg transition cursor-pointer relative"
            >
              <img src={item.image} alt={item.title} className="h-40 mx-auto mb-2 object-contain" />
              <h3 className="text-sm font-semibold line-clamp-2">{item.title}</h3>
              <p className="text-green-600 font-bold">${item.price}</p>
              <button
                onClick={() => dispatch({ type: 'LIKED', payload: item })}
                className="absolute top-2 right-2 text-red-500 hover:text-gray-500 transition"
              >
                <FaRegHeart />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Wishlist;
