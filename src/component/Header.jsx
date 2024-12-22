import React from 'react';
import { Link } from 'react-router-dom';  // Import Link here

const Header = () => {
  return (
    <header className="bg-blue-300 text-white py-4 px-6">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Blossom Blooms</h1>
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200 font-bold">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200 font-bold">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-gray-200 font-bold">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="hover:text-gray-200 font-bold">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <button className="bg-white text-blue-400 px-4 py-2 rounded-full shadow-md hover:bg-gray-100">
          Shop Now
        </button>
      </div>
    </header>
  );
};

export default Header;
