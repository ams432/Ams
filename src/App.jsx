import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';  
import About from './pages/About';  
import Products from './pages/Products';


const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} /> 
        <Route path="/products" element={<Products />} />
       
       
      </Routes>
    </Router>
  );
};

export default App;
