import React from 'react'
import { useNavigate } from 'react-router-dom';
import cards from './data'
export default function Acard() {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/adetail/${id}`);
    };


    return (
        <div className="my-6">
            <h1 className='px-4 text-3xl font-semibold'
            style={{ fontFamily: "'Poppins', 'sans-serif'"}}>For You</h1>
            <div className="px-5 md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible flex md:flex-none space-x-4 md:space-x-0 my-4">
                {[...cards]
                    .sort(() => 0.5 - Math.random())
                    .slice(0, 8).map((p) => (
                        <div
                            key={`local-${p.id}`}
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

        </div>
    )
}
