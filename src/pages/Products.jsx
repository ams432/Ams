import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        console.log("Fetching products...");
        const data = await response.json();
        console.log("Fetched Products:", data); // Logs the products to the console
        setProducts(data); // Set the fetched data into the state
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts(); // Fetch products when the component mounts
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-blue-600 text-white py-4 px-6">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            <Link to="/" className="hover:text-gray-200">Blossom Blooms</Link>
          </h1>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="hover:text-gray-200 font-bold">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-gray-200 font-bold">About</Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-gray-200 font-bold">Products</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-gray-200 font-bold">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Products Section */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Our Products</h1>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <Link key={product.id} to={`/product/${product.id}`}>
              <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow transform hover:scale-105">
                <img
                  src={product.images[0]} // Displaying the first image of each product
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-blue-600">{product.title}</h3>
                  <p className="mt-2 text-gray-600">{product.description.slice(0, 100)}...</p>
                  <p className="mt-4 text-lg font-bold text-gray-800">₱{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
    </div>
  );
};

export default Products;
