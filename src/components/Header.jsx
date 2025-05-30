import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link, useLocation } from 'react-router-dom';
import { user } from '../static/index';

const navLinks = [
  { name: 'Products', href: '/products' },
  { name: 'Users', href: '/users' },
  { name: 'Wishlist', href: '/wishlist' }, // <-- Qo‘shildi
];

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <header className="bg-white shadow-md mb-2">
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold text-blue-600">MyProfile</div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8 text-lg font-medium">
            {navLinks.map((link, index) => (
              <Link
                key={index}
                to={link.href}
                className={`transition ${
                  isActive(link.href)
                    ? 'text-blue-600 font-bold'
                    : 'text-gray-600 hover:text-blue-600'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center space-x-3">
            <img
              src={user.avatar}
              alt="User Avatar"
              className="w-10 h-10 object-cover border-2 border-blue-500 cursor-pointer"
              style={{ borderRadius: '40%' }}
              onClick={() => setModalOpen(true)}
            />
            <span className="text-gray-800 font-semibold hidden sm:inline-block">
              {user.name}
            </span>
            <button
              className="md:hidden text-2xl text-gray-700 ml-3"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <FiX /> : <FiMenu />}
            </button>
          </div>
        </div>

        {/* Mobile nav */}
        {menuOpen && (
          <div className="md:hidden px-6 pb-4">
            <nav className="flex flex-col space-y-2 text-lg font-medium">
              {navLinks.map((link, index) => (
                <Link
                  key={index}
                  to={link.href}
                  onClick={() => setMenuOpen(false)}
                  className={`transition ${
                    isActive(link.href)
                      ? 'text-blue-600 font-bold'
                      : 'text-gray-600 hover:text-blue-600'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>
        )}
      </header>

      {/* Modal for avatar */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setModalOpen(false)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={user.avatar}
              alt="Large Avatar"
              className="w-[500px] h-[600px] object-cover rounded-lg"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default React.memo(Header);
