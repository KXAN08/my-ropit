import React from 'react';
import { FaArrowLeft, FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';

const UserDetail = ({ user, onBack }) => {
  return (
    <div className="p-6 container mx-auto">
      <button
        onClick={onBack}
        className="mb-4 text-blue-600 flex items-center text-sm font-medium hover:underline"
      >
        <FaArrowLeft className="mr-2" /> Orqaga
      </button>
      <div className="border p-6 rounded shadow-md flex items-start space-x-6 bg-white">
        <FaUserCircle className="w-20 h-20 text-gray-400" />
        <div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">
            {user.name.firstname} {user.name.lastname}
          </h2>
          <p className="text-gray-700 mb-1 flex items-center">
            <FaEnvelope className="inline mr-2" /> {user.email}
          </p>
          <p className="text-gray-700 mb-1 flex items-center">
            <FaPhone className="inline mr-2" /> {user.phone}
          </p>
          <p className="text-gray-700 flex items-center">
            <FaMapMarkerAlt className="inline mr-2" /> {user.address?.city}, {user.address?.street}
          </p>
        </div>
      </div>
    </div>
  );
};

export default React.memo(UserDetail);
