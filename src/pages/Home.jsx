import React from 'react';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <div className="min-h-screen bg-gray-100">
    
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
                  <Link to="/Products" className="hover:text-gray-200 font-bold">
                    Products
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="hover:text-gray-200 font-bold">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <Link to="/shop">
            <button className="bg-white text-blue-400 px-4 py-2 rounded-full shadow-md hover:bg-gray-100">
              Shop Now
            </button>
          </Link>
          </div>
        </header>
    
      
      <header className="text-blue-400 h-[2xl] py-12 px-6 text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Blossom Blooms</h1>
        <p className="text-lg">Fresh flowers for every occasion!</p>
      </header>

      
      <section className="py-12 px-6">
        <h2 className="text-3xl font-bold text-blue-400 text-center mb-8">Best Sellers</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {/* Flower Card 1 */}
          <div className="bg-blue-200 p-6 rounded-lg shadow text-center">
            <img
              src="/images/huhu.jpg"
              alt="Sunflower Delight"
              className="w-full max-h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl">Rose Bouquet</h3>
            <p className="text-gray-600 mt-2">Elegant and timeless red roses</p>
            <p className="text-black font-bold mt-2">₱1,500</p>
            <Link to="/product/1">
              <button className="mt-4 bg-blue-300 text-white px-4 py-2 rounded-full hover:bg-green-600">
                View Details
              </button>
            </Link>
          </div>

          {/* Flower Card 2 */}
          <div className="bg-blue-200 p-6 rounded-lg shadow text-center">
            <img
              src="/images/haha.jpg"
              alt="Sunflower Delight"
              className="w-full max-h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl">Sunflower Delight</h3>
            <p className="text-gray-600 mt-2">Brighten anyone's day with sunflowers</p>
            <p className="text-black font-bold mt-2">₱1,200</p>
            <Link to="/product/2">
              <button className="mt-4 bg-blue-300 text-white px-4 py-2 rounded-full hover:bg-green-600">
                View Details
              </button>
            </Link>
          </div>

          {/* Flower Card 3 */}
          <div className="bg-blue-200 p-6 rounded-lg shadow text-center">
            <img
              src="/images/hehe.jpg"
              alt="Sunflower Delight"
              className="w-full max-h-80 object-cover rounded-lg mb-4"
            />
            <h3 className="font-bold text-xl">Whispers of Love</h3>
            <p className="text-gray-600 mt-2">Colors that speak louder than words</p>
            <p className="text-black font-bold mt-2">₱1,200</p>
            <Link to="/product/3">
              <button className="mt-4 bg-blue-300 text-white px-4 py-2 rounded-full hover:bg-green-500">
                View Details
              </button>
            </Link>
          </div>
        </div>
      </section>

        {/* Features Section */}
        <section className="py-12 px-6">
        <h2 className="text-2xl font-bold text-blue-400 text-center mb-8">Why Choose Us?</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-pink-100 p-6 shadow rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">Fresh Flowers</h3>
            <p>Our blooms are sourced daily to ensure freshness and quality.</p>
          </div>
          <div className="bg-pink-100 p-6 shadow rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">Affordable Prices</h3>
            <p>Beautiful arrangements for every budget.</p>
          </div>
          <div className="bg-pink-100 p-6 shadow rounded-lg text-center">
            <h3 className="font-bold text-xl mb-2">Fast Delivery</h3>
            <p>We deliver your flowers on time, every time.</p>
          </div>
        </div>
      </section>

       {/* Footer Section */}
       <footer className="bg-blue-300 text-white py-4 text-center">
        <p>&copy; 2024 Blossom Blooms. All Rights Reserved.</p>
      </footer>
    </div>
  
  );
};

export default Home;
