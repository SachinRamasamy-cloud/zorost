import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getproductid, getproduct } from "../server/allAPI";

export default function Detail() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [product, setProduct] = useState(null);
    const [allProducts, setAllProducts] = useState([]);

    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const data = await getproductid(id); // single product
                setProduct(data);
            } catch (err) {
                console.error("Product fetch error:", err);
            }
        };

        const fetchAll = async () => {
            try {
                const data = await getproduct(); // all products for related
                setAllProducts(data);
            } catch (err) {
                console.error("All products fetch error:", err);
            }
        };

        fetchProduct();
        fetchAll();
    }, [id]);

    if (!product) {
        return (
            <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800">
                <p className="text-center text-red-400 text-2xl font-semibold animate-pulse">
                    Product not found.{" "}
                    <button onClick={() => navigate(-1)} className="underline hover:text-red-300">
                        Go Back
                    </button>
                </p>
            </div>
        );
    }

    const handleCardClick = (id) => navigate(`/adetail/${id}`);

    // Filter related products
    const related = allProducts.filter(
        (p) => p.category.toLowerCase() === product.category.toLowerCase() && p.id !== product.id
    );

    const addToCart = (product) => {
        const cart = JSON.parse(localStorage.getItem("cart")) || [];
        if (cart.find((item) => item.id === product.id)) {
            alert("Product already in cart!");
        } else {
            cart.push(product);
            localStorage.setItem("cart", JSON.stringify(cart));
            alert(`${product.name} added to cart!`);
            window.dispatchEvent(new Event("storage"));
        }
    };
    return (
        <div className="min-h-screen text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">

                <nav className="flex items-center space-x-2 text-sm text-gray-300 mb-6">
                    <button
                        onClick={() => navigate(-1)}
                        className="flex items-center gap-1 hover:text-white transition-colors"
                        aria-label="Go back"
                    >
                        <i className="fa-solid fa-arrow-left"></i>
                        Back to Products
                    </button>
                </nav>

                {/* Main Detail Card */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl overflow-hidden border border-white/10">

                    {/* Image Section */}
                    <div className="relative group">
                        <img
                            src={product.image}
                            alt={`${product.name} - ${product.category}`}
                            className="w-full h-96 lg:h-full object-cover rounded-2xl lg:rounded-l-3xl transition-transform duration-700 group-hover:scale-105 shadow-2xl"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl lg:rounded-l-3xl"></div>
                        <span className="absolute top-4 left-4 px-3 py-1.5 text-xs font-bold bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg flex items-center gap-1.5">
                            <i className="fa-solid fa-tag text-xs"></i>
                            {product.category}
                        </span>
                        {/* Quick Actions Overlay */}
                        <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm shadow-lg transition-colors">
                                <i className="fa-solid fa-expand text-white text-sm"></i>
                            </button>
                            <button className="p-2 bg-white/20 hover:bg-white/30 rounded-full backdrop-blur-sm shadow-lg transition-colors">
                                <i className="fa-solid fa-heart text-white text-sm"></i>
                            </button>
                        </div>
                    </div>

                    {/* Info Section */}
                    <div className="p-8 flex flex-col justify-between space-y-6 bg-white/10 backdrop-blur-md rounded-3xl lg:rounded-r-3xl shadow-inner border border-white/20">
                        <div className="space-y-6">
                            <div>
                                <h1 className="text-4xl lg:text-5xl font-black text-white drop-shadow-2xl mb-2 leading-tight">
                                    {product.name}
                                </h1>
                            </div>

                            {/* Price - Prominent */}
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

                        {/* Action Buttons */}
                        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-white/20">
                            <button
                                onClick={() => addToCart(product)}
                                className="flex items-center justify-center gap-3 flex-1 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                aria-label="Add to cart"
                            >
                                <i className="fa-solid fa-cart-shopping text-lg"></i>
                                Add to Cart
                            </button>
                            <button
                                className="flex items-center justify-center gap-3 flex-1 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-bold py-4 px-6 rounded-2xl shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300"
                                aria-label="Buy now"
                                onClick={() => alert(`product will reach in 1 sec`)}
                            >
                                <i className="fa-solid fa-bolt text-lg"></i>
                                Buy Now
                            </button>
                        </div>
                    </div>
                </div>

                {/* Related Products Section */}
                {related.length > 0 && (
                    <section className="space-y-6">
                        <h2 className="text-3xl font-bold flex items-center gap-3">
                            <i className="fa-solid fa-th-large text-purple-400"></i>
                            Related Products
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4 sm:px-0">
                            {related.map((p) => (
                                <div
                                    key={p.id}
                                    onClick={() => handleCardClick(p.id)}
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

                                    {/* Hover Blur Overlay */}
                                    <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                                        <p className="text-white font-semibold text-lg flex items-center gap-2">
                                            <i className="fa-solid fa-eye"></i> {/* 👈 Font Awesome icon */}
                                            View Details
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </section>
                )}
            </div>
        </div>
    );
}
