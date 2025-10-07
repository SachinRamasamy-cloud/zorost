import React from 'react'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Cart() {
  const [cart, setCart] = useState([]);
  const [user,setuser] = useState(null);
  const navigate = useNavigate();
  // Load cart on mount
  useEffect(() => {
    const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(Array.isArray(savedCart) ? savedCart : []);
  }, []);
  useEffect(() => {
    const log = JSON.parse(localStorage.getItem("loguser"));
    if (!log) {
      navigate("/login");
    }else{
      setuser(log)
    }
  }, [navigate]);

  const remove2 = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Product removed from cart");
  };
  const remove = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    if (user) {
      alert(`Product will be delivered to ${user.loc}`);
    }
  };

  return (
    <div className="p-6 text-white">
      <h2 className="text-3xl font-bold mb-4">My Cart</h2>
      <div className="grid sm:grid-cols-2 gap-4 md:grid-cols-4 px-4 sm:px-0">
        {cart.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          cart.map((p) => (
            <div
              key={`local-${p.id}`}
              className="relative cursor-pointer flex-shrink-0 w-72 md:w-auto rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500 group"
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img
                  className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                  src={p.image}
                  alt={p.name}
                />
                <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
                  {p.category}
                </span>

              </div>

              {/* Card Content */}
              <div className="relative p-3 text-white relative z-10">
                <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
                <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
                <p className="text-xs text-gray-200 mt-[4px]">
                  <i className="fa-solid fa-location-dot"></i> {p.location}
                </p>
              </div>
              <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <button
                  onClick={() => remove(p.id)}
                  className='p-3 border rounded-lg m-2 hover:scale-110 transition-transform duration-500'><i class="fa-solid fa-money-bill mr-2"></i>Check Out</button>
                <button
                  onClick={() => remove2(p.id)}
                  className='p-3 border rounded-lg m-2 hover:scale-110 transition-transform duration-500'><i class="fa-solid fa-trash mr-2"></i>Remove</button>
              </div>
            </div>
          ))
        )
        }
      </div>
    </div >
  );
}
