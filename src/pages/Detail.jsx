import React from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Detail({ products = [] }) {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id?.toString() === id);
  const addToCart = (product) => {
    // Safely get existing cart
    let cart = [];
    try {
      const saved = JSON.parse(localStorage.getItem("cart"));
      if (Array.isArray(saved)) {
        cart = saved;
      } else {
        cart = [];
      }
    } catch (error) {
      cart = [];
    }

    const exists = cart.find((item) => item.id === product.id);

    if (exists) {
      alert("Product already in cart!");
    } else {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      alert(`${product.name} added to cart!`);
      localStorage.setItem("cart", JSON.stringify(cart));
      window.dispatchEvent(new Event("storage"));
    }
  };


  if (!product)
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
        <p className="text-center text-red-400 text-2xl font-semibold animate-pulse">
          Product not found.
          <button
            onClick={() => navigate(-1)}
            className="underline ml-2 hover:text-red-300"
          >
            Go Back
          </button>
        </p>
      </div>
    );

  return (
    <div className="min-h-screen text-white px-4 py-8 max-w-7xl mx-auto space-y-12">
      {/* Main Product Section */}
      <div className="flex flex-col lg:flex-row gap-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/10 overflow-hidden">
        {/* Image */}
        <div className="lg:w-1/2 relative group">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 lg:h-full object-cover rounded-2xl lg:rounded-l-3xl transition-transform duration-700 group-hover:scale-105 shadow-2xl"
            loading="lazy"
          />
          <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center gap-1.5">
            <i className="fa-solid fa-tag text-xs"></i> {product.category}
          </span>
        </div>

        {/* Info */}
        <div className="p-8 flex flex-col justify-between space-y-6 bg-white/10 backdrop-blur-md rounded-3xl lg:rounded-r-3xl shadow-inner border border-white/20">
          <div className="space-y-6">
            <div>
              <h1 className="text-4xl lg:text-5xl font-black text-white drop-shadow-2xl mb-2 leading-tight">
                {product.name}
              </h1>
            </div>

            {/* Price */}
            <div className="bg-gradient-to-r from-green-600 to-emerald-600 p-4 rounded-2xl shadow-lg">
              <p className="text-3xl font-bold flex items-center gap-2">
                <i className="fa-solid fa-indian-rupee-sign text-2xl"></i>
                {product.price}
              </p>
            </div>

            {/* Key Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-lg">
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <i className="fa-solid fa-location-dot text-yellow-400 text-xl"></i>
                <div>
                  <span className="font-semibold block">Location</span>
                  <span className="text-gray-300">{product.location}</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <i className="fa-solid fa-clock text-blue-400 text-xl"></i>
                <div>
                  <span className="font-semibold block">Availability</span>
                  <span className="text-gray-300">In Stock</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <i className="fa-solid fa-shipping-fast text-purple-400 text-xl"></i>
                <div>
                  <span className="font-semibold block">Shipping</span>
                  <span className="text-gray-300">Free over ₹500</span>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 bg-white/5 rounded-xl">
                <i className="fa-solid fa-box text-indigo-400 text-xl"></i>
                <div>
                  <span className="font-semibold block">Category</span>
                  <span className="text-gray-300">{product.category}</span>
                </div>
              </div>
            </div>

            {/* Product Details */}
            {product.details && (
              <div className="p-4 bg-white/5 rounded-2xl border border-white/20 shadow-inner">
                <h3 className="font-bold text-xl mb-3 flex items-center gap-2">
                  <i className="fa-solid fa-info-circle text-blue-400"></i>
                  Details
                </h3>
                <p className="text-gray-200 leading-relaxed max-h-32 overflow-y-auto prose prose-invert max-w-none">
                  {product.details}
                </p>
              </div>
            )}
          </div>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/20">
            <button
              onClick={() => addToCart(product)}
              className="flex items-center justify-center gap-3 flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300">
              <i className="fa-solid fa-cart-shopping text-lg"></i> Add to Cart
            </button>
            <button
              onClick={() => alert('Thanks for Buying the product will reach in 1 sec')}
              className="flex items-center justify-center gap-3 flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
            >
              <i className="fa-solid fa-bolt text-lg"></i> Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
