
import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

export default function TopNav() {
    const navigate = useNavigate();
    const [count, setcount] = useState(0)
    useEffect(() => {
        const updateCartCount = () => {
            try {
                const cartData = JSON.parse(localStorage.getItem("cart")) || [];
                const cart = Array.isArray(cartData) ? cartData : [];
                const total = cart.reduce((acc, item) => acc + (item.quantity || 1), 0);
                setcount(total);
            } catch (error) {
                console.error("Invalid cart data in localStorage", error);
                setcount(0);
            }
        };

        updateCartCount();
        window.addEventListener("storage", updateCartCount);
        return () => window.removeEventListener("storage", updateCartCount);
    }, []);

    return (
        <>
            {/* Navbar */}
            <div className="fixed top-0 left-0 w-full z-50 bg-black/70 backdrop-blur-md shadow-lg border-b border-gray-700/50">
                <div className="max-w-7xl mx-auto py-4 px-6 flex items-center justify-between">
                    <div className="flex justify-center gap-6">
                        {/* Logo */}
                        <div className="text-3xl md:text-4xl font-extrabold text-white tracking-wide cursor-pointer">
                            Zoho
                        </div>

                        {/* Menu Items */}
                        <div className="hidden md:flex gap-8 mt-[7px] text-gray-300 text-[18px] font-medium">
                            <button
                                onClick={() => navigate("/home")}
                                className="relative overflow-hidden px-2 py-1 hover:text-purple-400 transition"
                            >
                                Home
                            </button>

                            <button
                                onClick={() => navigate("/add")}
                                className="relative overflow-hidden px-2 py-1 hover:text-purple-400 transition"
                            >
                                Sell
                            </button>

                            <button
                                onClick={() => navigate("/Myproduct")}
                                className="relative overflow-hidden px-2 py-1 hover:text-purple-400 transition"
                            >
                                My Ads
                            </button>

                            <button
                                onClick={() => navigate("/categories")}
                                className="relative overflow-hidden px-2 py-1 hover:text-purple-400 transition"
                            >
                                Category
                            </button>
                        </div>

                    </div>
                    {/* Icons */}
                    <div className="hidden md:flex items-center space-x-5 text-white text-xl">
                        <button className="hover:text-yellow-400 transition">
                            <i className="fas fa-moon"></i>
                        </button>
                        <button
                            onClick={() => navigate("/profile")}
                            className="hover:text-purple-400 transition">
                            <i className="fas fa-user"></i>
                        </button>
                        <button
                            onClick={() => navigate("/cart")}
                            className="relative pt-1 pr-2 hover:bg-white/20 transition-all duration-300 text-white shadow-md flex items-center justify-center"
                        >
                            <i className="fas fa-shopping-cart text-xl"></i>

                            {/* Badge */}
                            {count > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse shadow-lg">
                                    {count}
                                </span>
                            )}
                        </button>

                    </div>
                   <div className="sm:hidden block m-2">
                        <button
                            onClick={() => navigate("/cart")}
                            className="relative pt-1 pr-2 hover:bg-white/20 transition-all duration-300 text-white shadow-md flex items-center justify-center"
                        >
                            <i className="fas fa-shopping-cart text-xl"></i>

                            {/* Badge */}
                            {count > 0 && (
                                <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold w-5 h-5 flex items-center justify-center rounded-full animate-pulse shadow-lg">
                                    {count}
                                </span>
                            )}
                        </button>
                   </div>
            </div>
        </div >
        </>
    );
}
