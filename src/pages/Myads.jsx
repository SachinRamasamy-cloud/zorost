import { useNavigate } from "react-router-dom";
import { getproduct, delproduct } from "../server/allAPI";
import { useEffect, useState } from "react";

export default function Myads() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);

  const getpro = async () => {
    try {
      const result = await getproduct();
      setProducts(result);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getpro(); // fetch products on mount
  }, []);

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      try {
        await delproduct(id);
        alert("Product deleted!");
        getpro(); // refresh list
      } catch (err) {
        console.error(err);
        alert("Failed to delete product.");
      }
    }
  };

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
          <div
            className="cursor-pointer relative overflow-hidden"
            onClick={() => navigate(`/edit/${p.id}`)}
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

          <div className="p-4 flex flex-col justify-between text-white">
            <h2 className="text-lg font-bold drop-shadow-md">{p.name}</h2>
            <p className="text-sm font-semibold drop-shadow-md">₹ {p.price}</p>
            <p className="text-xs text-gray-200 mt-1 flex items-center gap-1">
              <i className="fa-solid fa-location-dot"></i> {p.location || "N/A"}
            </p>

            <div className="mt-4 flex justify-between gap-2">
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => navigate(`/edit/${p.id}`)}
              >
                <i className="fa-solid fa-pen-to-square"></i> Edit
              </button>
              <button
                className="flex-1 flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 rounded-xl shadow-md transition-transform duration-300 hover:scale-105"
                onClick={() => handleDelete(p.id)}
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
