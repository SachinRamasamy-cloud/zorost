import './App.css';
import Nav from './components/Nav';
import Nave from './components/Nave';
import Hcards from './pages/Hcards';
import Detail from './pages/Detail';
import Add from './pages/Add';
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Topcat from './pages/Topcat';
import Acard from './pages/Acard';
import Hhcard from './pages/Hhcard';
import Showcat from './pages/Showcat';
import Allcat from './pages/Allcat';
import Myads from './pages/Myads';
import Login from './pages/Login';
import Adetail from './pages/Adetail';
import Topland from './pages/Topland';
import Elec from './pages/Elec';
import Profile from './pages/Profile';
import Hero from './components/Hero';
import Cart from './pages/Cart';
import Login1 from './pages/Login1';
import Botom from './pages/Botom';

function App() {
  const [products, setProducts] = useState(() => {
    const saved = localStorage.getItem("products");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(products));
  }, [products]);

  const addProduct = (productData) => {
    const newProduct = { id: Date.now(), ...productData };
    setProducts((prev) => [...prev, newProduct]);
    return newProduct.id;
  };

  const deleteProduct = (id) => {
    setProducts((prev) => prev.filter((p) => p.id !== id));
  };

  const editProduct = (id, updatedProduct) => {
    setProducts((prev) =>
      prev.map((p) => (p.id === id ? { ...p, ...updatedProduct } : p))
    );
  };

  return (
    <Router>
      <Nav />
      <Nave />
      <div className="mt-8"></div>

      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route
          path="/home"
          element={
            <>
              <Hero />
              <Topcat />
              <Acard />
              <Hcards products={products} />
              <Hhcard products={products} />
              <Topland products={products} />
              <Elec products={products} />
              <Botom />
            </>
          }
        />

        <Route path="/add" element={<Add addProduct={addProduct} />} />
        <Route path="/edit/:id" element={<Add products={products} editProduct={editProduct} />} />
        <Route path="/register" element={<Login />} />
        <Route path="/login" element={<Login1 />} />
        <Route path="/detail/:id" element={<Detail products={products} />} />
        <Route path="/category/:category" element={<Showcat products={products} />} />
        <Route path="/categories" element={<Allcat />} />
        <Route path="/adetail/:id" element={<Adetail />} />
        <Route path="/Myproduct" element={<Myads products={products} deleteProduct={deleteProduct} />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Navigate to="/home" replace />} />
      </Routes>

      <div className="p-20"></div>
    </Router>
  );
}

export default App;

