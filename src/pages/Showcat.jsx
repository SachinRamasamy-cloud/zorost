// // import React from "react";
// // import { useParams, useNavigate } from "react-router-dom";
// // import defaultProducts from './data'


// // export default function Showcat({ products = [] }) {
// //     const { category } = useParams();

// //     // Filter static array
// //     const filteredDefault = defaultProducts.filter(
// //         (item) => item.category.toLowerCase() === category.toLowerCase()
// //     );

// //     // Filter localStorage / App.js products
// //     const filteredLocal = products.filter(
// //         (item) => item.category.toLowerCase() === category.toLowerCase()
// //     );
// //     const navigate = useNavigate();

// //     const handleCardClick = (id) => {
// //         navigate(`/detail/${id}`);
// //     };
// //     const handleCardClick2 = (id) => {
// //         navigate(`/adetail/${id}`);
// //     };
// //     return (
// //         <div className="px-4 my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //             {/* LocalStorage / Added products cards */}
// //             {filteredLocal.map((p) => (
// //                 <div
// //                     key={`local-${p.id}`}
// //                     onClick={() => handleCardClick(p.id)}
// //                     className="cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500"
// //                 >
// //                     <div className="relative overflow-hidden">
// //                         <img
// //                             className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
// //                             src={p.image || "/placeholder.jpg"} // fallback if user added image is empty
// //                             alt={p.name}
// //                         />
// //                         <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
// //                             {p.category}
// //                         </span>
// //                     </div>
// //                     <div className="p-3 text-white">
// //                         <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
// //                         <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
// //                         <p className="text-xs text-gray-200 mt-[4px]">
// //                             <i className="fa-solid fa-location-dot"></i> {p.location}
// //                         </p>
// //                     </div>
// //                 </div>
// //             ))}


// //             {/* Static array cards */}
// //             {filteredDefault.map((p) => (
// //                 <div
// //                     key={`default-${p.id}`}
// //                     onClick={() => handleCardClick2(p.id)}
// //                     className="cursor-pointer rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500"
// //                 >
// //                     <div className="relative overflow-hidden">
// //                         <img
// //                             className="w-full h-40 object-cover hover:scale-110 transition-transform duration-500"
// //                             src={p.image}
// //                             alt={p.name}
// //                         />
// //                         <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
// //                             {p.category}
// //                         </span>
// //                     </div>
// //                     <div className="p-3 text-white">
// //                         <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
// //                         <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
// //                         <p className="text-xs text-gray-200 mt-[4px]">
// //                             <i className="fa-solid fa-location-dot"></i> {p.location}
// //                         </p>
// //                     </div>
// //                 </div>
// //             ))}


// //             {/* Show message if no products */}
// //             {filteredDefault.length === 0 && filteredLocal.length === 0 && (
// //                 <p className="text-white text-center col-span-full">
// //                     No products found in "{category}"
// //                 </p>
// //             )}
// //         </div>
// //     );
// // }
// import React, { useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { getproduct } from '../server/allAPI';

// export default function Showcat() {
//     const navigate = useNavigate();
//     const [product, setProduct] = useState([]); // initialize as empty array
//     const  category  = useParams();
//     const getpro = async () => {
//         try {
//             const result = await getproduct();
//             setProduct(result);
//         } catch (err) {
//             console.error(err);
//         }
//     };

//     useEffect(() => {
//         getpro(); // call the function directly
//     }, []);

//     const handleCardClick = (id) => {
//         navigate(`/adetail/${id}`);
//     };

//     const filterpro = product.filter(p => p.category.toLowerCase() === category)

//     return (
//         <div className="my-6">
//             <h1
//                 className="px-4 text-3xl font-semibold"
//                 style={{ fontFamily: "'Poppins', 'sans-serif'" }}
//             >
//                 For You
//             </h1>
//             <div className="px-5 md:grid md:grid-cols-4 gap-4 overflow-x-auto md:overflow-visible flex md:flex-none space-x-4 md:space-x-0 my-4">
//                 {filterpro
//                     .sort(() => 0.8 - Math.random())
//                     .slice(0, 8)
//                     .map((p) => (
//                         <div
//                             key={`local-${p.id}`}
//                             onClick={() => handleCardClick(p.id)}
//                             className="relative cursor-pointer flex-shrink-0 w-72 md:w-auto rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500 group"
//                         >
//                             {/* Image */}
//                             <div className="relative overflow-hidden">
//                                 <img
//                                     className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
//                                     src={p.image}
//                                     alt={p.name}
//                                 />
//                                 <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
//                                     {p.category}
//                                 </span>
//                             </div>

//                             {/* Card Content */}
//                             <div className="relative p-3 text-white z-10">
//                                 <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
//                                 <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
//                                 <p className="text-xs text-gray-200 mt-[4px]">
//                                     <i className="fa-solid fa-location-dot"></i> {p.location}
//                                 </p>
//                             </div>

//                             {/* Hover Blur Overlay */}
//                             <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
//                                 <p className="text-white font-semibold text-lg flex items-center gap-2">
//                                     <i className="fa-solid fa-eye"></i> View Details
//                                 </p>
//                             </div>
//                         </div>
//                     ))}
//             </div>
//         </div>
//     );
// }
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getproduct } from '../server/allAPI';

export default function Showcat() {
    const navigate = useNavigate();
    const [product, setProduct] = useState([]);
    const { category } = useParams();

    const getpro = async () => {
        try {
            const result = await getproduct();
            setProduct(result);
        } catch (err) {
            console.error("API Error:", err);
        }
    };

    useEffect(() => {
        getpro();
    }, []);

    const filterpro = product.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
    );

    const handleCardClick = (id) => {
        navigate(`/adetail/${id}`);
    };

    if (!product.length) return <p className="text-white text-center my-6">Loading...</p>;
    if (!filterpro.length) return <p className="text-white text-center my-6">No products found in "{category}"</p>;

    return (
        <div className="my-6">
            <h1 className="px-4 text-3xl font-semibold" style={{ fontFamily: "'Poppins', 'sans-serif'" }}>
                For You
            </h1>
            <div className="px-5 pt-5 grid grid-cols-1 md:grid-cols-4 gap-4">
                {filterpro.map((p) => (
                    <div
                        key={`local-${p.id}`}
                        onClick={() => handleCardClick(p.id)}
                        className="relative cursor-pointer flex-shrink-0 w-72 md:w-auto rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500 group"
                    >
                        <div className="relative overflow-hidden">
                            <img
                                className="w-full h-40 object-cover group-hover:scale-110 transition-transform duration-500"
                                src={p.image || "/placeholder.jpg"}
                                alt={p.name}
                            />
                            <span className="absolute top-2 right-2 px-2 py-0.5 text-xs font-medium rounded-full bg-purple-600/70 text-white backdrop-blur-sm shadow">
                                {p.category}
                            </span>
                        </div>
                        <div className="relative p-3 text-white z-10">
                            <h2 className="text-[20px] font-bold drop-shadow-md">{p.name}</h2>
                            <p className="font-semibold text-base drop-shadow-md">₹ {p.price}</p>
                            <p className="text-xs text-gray-200 mt-[4px]">
                                <i className="fa-solid fa-location-dot"></i> {p.location}
                            </p>
                        </div>
                        <div className="absolute inset-0 bg-black/40 backdrop-blur-md opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                            <p className="text-white font-semibold text-lg flex items-center gap-2">
                                <i className="fa-solid fa-eye"></i> View Details
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
