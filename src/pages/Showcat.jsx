import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import defaultProducts from './data'


export default function Showcat({ products = [] }) {
    const { category } = useParams();

    // Filter static array
    const filteredDefault = defaultProducts.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );

    // Filter localStorage / App.js products
    const filteredLocal = products.filter(
        (item) => item.category.toLowerCase() === category.toLowerCase()
    );
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/detail/${id}`);
    };
    const handleCardClick2 = (id) => {
        navigate(`/adetail/${id}`);
    };
    return (
        <div className="px-4 my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {/* LocalStorage / Added products cards */}
            {filteredLocal.map((p) => (
                <div
                    key={`local-${p.id}`}
                    onClick={() => handleCardClick(p.id)}
                    className="cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500"
                >
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                            src={p.image || "/placeholder.jpg"} // fallback if user added image is empty
                            alt={p.name}
                        />
                        <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
                            {p.category}
                        </span>
                    </div>
                    <div className="p-3 text-white">
                        <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
                        <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
                        <p className="text-xs text-gray-200 mt-[4px]">
                            <i className="fa-solid fa-location-dot"></i> {p.location}
                        </p>
                    </div>
                </div>
            ))}


            {/* Static array cards */}
            {filteredDefault.map((p) => (
                <div
                    key={`default-${p.id}`}
                    onClick={() => handleCardClick2(p.id)}
                    className="cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500"
                >
                    <div className="relative overflow-hidden">
                        <img
                            className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
                            src={p.image}
                            alt={p.name}
                        />
                        <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
                            {p.category}
                        </span>
                    </div>
                    <div className="p-3 text-white">
                        <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
                        <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
                        <p className="text-xs text-gray-200 mt-[4px]">
                            <i className="fa-solid fa-location-dot"></i> {p.location}
                        </p>
                    </div>
                </div>
            ))}


            {/* Show message if no products */}
            {filteredDefault.length === 0 && filteredLocal.length === 0 && (
                <p className="text-white text-center col-span-full">
                    No products found in "{category}"
                </p>
            )}
        </div>
    );
}