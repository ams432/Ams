import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white flex flex-col justify-between">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <nav className="max-w-7xl mx-auto flex justify-between items-center">
          <h1 className="text-2xl font-bold">Blossom Blooms</h1>
          <ul className="flex space-x-6">
            <li>
              <Link to="/" className="hover:text-gray-200">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-gray-200">
                About
              </Link>
            </li>
            <Link to="/about" className="hover:text-gray-200">
                Products
              </Link>
              <Link to="/about" className="hover:text-gray-200">
                Contact
              </Link>
        
              
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="flex-grow py-12 px-6 max-w-4xl mx-auto text-center">
        <h1 className="text-5xl font-extrabold mb-6 text-blue-600 drop-shadow-md">About Us</h1>
        <p className="text-xl font-medium mb-12 leading-relaxed text-gray-700">
          Learn more about Blossom Blooms and our mission to bring beautiful flowers to your doorsteps!
        </p>

        <section className="mb-12">
          <h2 className="text-4xl font-bold text-blue-500 mb-4 drop-shadow-md">Our Story</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Blossom Blooms started as a small floral shop with a big vision – to offer fresh, beautiful flowers to everyone, 
            no matter the occasion. Our team is passionate about spreading joy with every bouquet we deliver. 
            We believe in providing quality, handpicked flowers that brighten any day.
          </p>
        </section>

        <section>
          <h2 className="text-4xl font-bold text-blue-500 mb-4 drop-shadow-md">Our Mission</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            Our mission is simple – to make your life bloom with beautiful flowers for every occasion. Whether you're 
            celebrating a special event or just want to brighten someone's day, we're here to deliver the best floral arrangements.
          </p>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-blue-600 text-white py-4 text-center">
        <p>&copy; 2024 Blossom Blooms. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default About;
