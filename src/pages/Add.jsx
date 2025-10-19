import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { addproduct, updproduct, getproductid } from "../server/allAPI";

export default function Add() {
  const navigate = useNavigate();
  const { id } = useParams(); // edit mode
  const [form, setForm] = useState({
    name: "",
    price: "",
    image: "",
    location: "",
    category: "",
    details: ""
  });

  const categories = [
    "Cars", "Mobiles", "Fashion", "Electronics", "Houses", 
    "Furniture", "Pets", "Books", "Sports", "LandMark"
  ];

  // prefill form if editing
  useEffect(() => {
    if (id) {
      const fetchProduct = async () => {
        try {
          const data = await getproductid(id);
          if (data) setForm(data);
        } catch (err) {
          console.error(err);
        }
      };
      fetchProduct();
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.name || !form.price || !form.category) {
      return alert("Name, Price, and Category are required");
    }

    try {
      if (id) {
        await updproduct(id, form);
        alert("Product updated successfully!");
      } else {
        await addproduct(form);
        alert("Product added successfully!");
      }
      navigate("/Myproduct");
    } catch (err) {
      console.error(err);
      alert("Failed to save product.");
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white/10 backdrop-blur-md p-8 rounded-3xl shadow-xl border border-white/30 text-white"
      >
        <h2 className="text-2xl font-bold mb-6 text-center">
          {id ? "Edit Product" : "Add New Product"}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Product Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
          />
          <input
            type="number"
            placeholder="Price"
            value={form.price}
            onChange={(e) => setForm({ ...form, price: e.target.value })}
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <input
            type="text"
            placeholder="Image URL (optional)"
            value={form.image}
            onChange={(e) => setForm({ ...form, image: e.target.value })}
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
          />
          <input
            type="text"
            placeholder="Location (optional)"
            value={form.location}
            onChange={(e) => setForm({ ...form, location: e.target.value })}
            className="p-3 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
          />
        </div>

        <select
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
          className="w-full p-3 mb-4 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white"
          required
        >
          <option value="" className="text-gray-400">Select Category</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>

        <textarea
          placeholder="Add product details..."
          value={form.details}
          onChange={(e) => setForm({ ...form, details: e.target.value })}
          className="w-full p-3 mb-6 rounded-lg bg-white/20 backdrop-blur-sm border border-white/30 focus:outline-none focus:ring-2 focus:ring-purple-500 placeholder-white h-28 resize-none"
        />

        <button
          type="submit"
          className="w-full py-3 bg-purple-600 hover:bg-purple-700 rounded-xl text-white font-semibold shadow-lg transition-all duration-300"
        >
          {id ? "Save Changes" : "Add Product"}
        </button>
      </form>
    </div>
  );
}
