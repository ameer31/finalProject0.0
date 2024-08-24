import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../../capistor/src/Pages/Home/Home';
import Products from '../../capistor/src/Pages/Home/Product/Product';
import Navbar from '../../capistor/src/Components/Navbar/Navbar'; // Adjust the path as needed
import Blogs from './Pages/Home/Blogs/Blogs';
import Blogsdetails from '../../capistor/src/Components/Blogsdetails/Blogsdetails';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/blogs/:id" element={<Blogsdetails />} /> {/* Ensure the path is /blogs/:id */}
      </Routes>
    </Router>
  );
}

export default App;
