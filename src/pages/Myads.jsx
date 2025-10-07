// // import React from 'react';
// // import { useNavigate } from 'react-router-dom';

// // export default function Myads({ products = [], deleteProduct, editProduct }) {
// //     const navigate = useNavigate();

// //     const handleCardClick = (id) => {
// //         navigate(`/detail/${id}`);
// //     };

// //     if (products.length === 0) {
// //         return <p className="text-gray-300">No products added yet.</p>;
// //     }

// //     return (
// //         <div className="px-4 my-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
// //             {products.map((p) => (
// //                 <div
// //                     key={p.id}
// //                     className="relative rounded-2xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-500"
// //                 >
// //                     <div
// //                         className="cursor-pointer relative overflow-hidden"
// //                         onClick={() => handleCardClick(p.id)}
// //                     >
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

// //                         {/* Edit and Delete Buttons */}
// //                         <div className="mt-2 flex justify-between">
// //                             <button
// //                                 className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600 text-black text-sm"
// //                                 onClick={() => {
// //                                     const updatedName = prompt("Enter new name", p.name);
// //                                     const updatedPrice = prompt("Enter new price", p.price);
// //                                     if (updatedName && updatedPrice) {
// //                                         editProduct(p.id, { name: updatedName, price: Number(updatedPrice) });
// //                                     }
// //                                 }}
// //                             >
// //                                 Edit
// //                             </button>
// //                             <button
// //                                 className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white text-sm"
// //                                 onClick={() => deleteProduct(p.id)}
// //                             >
// //                                 Delete
// //                             </button>
// //                         </div>
// //                     </div>
// //                 </div>
// //             ))}
// //         </div>
// //     );
// // }
// import { useNavigate } from "react-router-dom";

// export default function Myads({ products = [], deleteProduct }) {
//     const navigate = useNavigate();

//     return (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//             {products.map((p) => (
//                 <div key={p.id} className="relative rounded-2xl overflow-hidden ...">
//                     <div
//                         className="cursor-pointer relative overflow-hidden"
//                         onClick={() => navigate(`/detail/${p.id}`)}
//                     >
//                         <img src={p.image} alt={p.name} className="w-full h-40 object-cover" />
//                     </div>
//                     <div className="p-3 text-white">
//                         <h2>{p.name}</h2>
//                         <p>₹ {p.price}</p>
//                         <div className="mt-2 flex justify-between">
//                             <button
//                                 className="bg-yellow-500 px-2 py-1 rounded hover:bg-yellow-600 text-black text-sm"
//                                 onClick={() => navigate(`/edit/${p.id}`)}
//                             >
//                                 Edit
//                             </button>
//                             <button
//                                 className="bg-red-500 px-2 py-1 rounded hover:bg-red-600 text-white text-sm"
//                                 onClick={() => deleteProduct(p.id)}
//                             >
//                                 Delete
//                             </button>
//                         </div>
//                     </div>
//                 </div>
//             ))}
//         </div>
//     );
// }
import { useNavigate } from "react-router-dom";

export default function Myads({ products = [], deleteProduct }) {
  const navigate = useNavigate();

  if (products.length === 0) {
    return (
      <p className="text-center text-gray-300 text-xl mt-10">
        No products added yet.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {products.map((p) => (
        <div
          key={p.id}
          className="relative rounded-3xl overflow-hidden backdrop-blur-md bg-white/20 border border-white/30 shadow-lg hover:scale-105 transition-transform duration-300"
        >
          {/* Product Image */}
          <div
            className="cursor-pointer relative overflow-hidden"
            onClick={() => navigate(`/detail/${p.id}`)}
          >
            <img
              src={p.image || "/placeholder.jpg"}
              alt={p.name}
              className="w-full h-48 object-cover rounded-t-3xl transition-transform duration-500 hover:scale-110"
            />
            <span className="absolute top-3 right-3 px-3 py-1 text-xs font-semibold rounded-full bg-purple-600/80 text-white shadow flex items-center gap-1">
              <i className="fa-solid fa-tag"></i> {p.category}
            </span>
          </div>

          {/* Product Info */}
          <div className="p-4 flex flex-col justify-between text-white">
            <h2 className="text-lg font-bold drop-shadow-md">{p.name}</h2>
            <p className="text-sm font-semibold drop-shadow-md">₹ {p.price}</p>
            <p className="text-xs text-gray-200 mt-1 flex items-center gap-1">
              <i className="fa-solid fa-location-dot"></i> {p.location || "N/A"}
            </p>

            {/* Action Buttons */}
            <div className="mt-4 flex justify-between gap-2">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => navigate(`/edit/${p.id}`)}
              >
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => deleteProduct(p.id)}
              >
                <i className="fa-solid fa-trash"></i> Delete
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
