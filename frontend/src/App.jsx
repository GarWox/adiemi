import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home/HomePage';
import Blog from './pages/blog/blog'
import Product from './pages/Product/Product';
import TestProduct from './pages/Product/TestProduct';

export default function App() {
  return (
    <BrowserRouter> 
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Product" element={<Product />} />
        <Route path="/TestProduct" element={<TestProduct />} />
        
      </Routes>
    </BrowserRouter>
  );
}