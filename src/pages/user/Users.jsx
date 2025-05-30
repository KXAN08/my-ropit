import React, { useEffect, useState } from 'react';
import { api } from '../../api';
import Loader from '../../components/Loader';
import ErrorBox from '../../components/ErrorBox';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaUserCircle } from 'react-icons/fa';
import UserDetail from './UserDetail';

const Users = () => {
  const [data, setData] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    api.get('/users')
      .then(res => setData(res.data))
      .catch(err => setError(err.message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <Loader />;
  if (error) return <ErrorBox message={error} />;

  if (selectedUser) {
    return <UserDetail user={selectedUser} onBack={() => setSelectedUser(null)} />;
  }

  return (
    <div className="p-6 container mx-auto">
      <h2 className="text-2xl font-bold mb-4">Foydalanuvchilar</h2>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {data?.map(user => (
          <li
            key={user.id}
            className="border p-4 rounded shadow hover:shadow-md flex items-start space-x-4 cursor-pointer transition hover:bg-gray-50"
            onClick={() => setSelectedUser(user)}
          >
            <FaUserCircle className="w-16 h-16 text-gray-400" />
            <div className="flex-1">
              <p className="font-semibold text-lg text-gray-800">
                {user.name.firstname} {user.name.lastname}
              </p>
              <p className="text-gray-600 text-sm mt-1 flex items-center">
                <FaEnvelope className="inline mr-2" /> {user.email}
              </p>
              <p className="text-gray-600 text-sm mt-1 flex items-center">
                <FaPhone className="inline mr-2" /> {user.phone}
              </p>
              <p className="text-gray-600 text-sm mt-1 flex items-center">
                <FaMapMarkerAlt className="inline mr-2" /> {user.address?.city}
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default React.memo(Users);
