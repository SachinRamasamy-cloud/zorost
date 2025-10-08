import React from "react";
import { Link } from "react-router-dom";

export default function Nave() {
    return (
        <>
            <div className="sm:hidden fixed bottom-0 left-0 w-full bg-black/70 backdrop-blur-md border-t border-gray-700 flex justify-around items-center py-3 z-50 text-gray-200">

                <Link to="/home" className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-colors">
                    <i className="fa-solid fa-house"></i>
                    <span className="text-xs mt-1">Home</span>
                </Link>

                <Link to="/add" className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-colors">
                    <i className="fa-solid fa-plus"></i>
                    <span className="text-xs mt-1">Sell</span>
                </Link>

                <Link to="/categories" className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-colors">
                    <i className="fa-solid fa-layer-group"></i>
                    <span className="text-xs mt-1">Categories</span>
                </Link>

                <Link to="/Myproduct" className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-colors">
                    <i className="fa-solid fa-heart"></i>
                    <span className="text-xs mt-1">My Ads</span>
                </Link>

                <Link to="/profile" className="flex flex-col items-center cursor-pointer hover:text-purple-400 transition-colors">
                    <i className="fa-solid fa-user"></i>
                    <span className="text-xs mt-1">Profile</span>
                </Link>
            </div>

            <div className="h-20 md:h-16"></div>
        </>
    );
}
