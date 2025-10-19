import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Profile() {
  const [count, setCount] = useState(0);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const total = cart.reduce((acc, num) => acc + (num.quantity || 1), 0);
    setCount(total);
  }, []);

  useEffect(() => {
    const log = JSON.parse(localStorage.getItem("loguser"));
    if (!log) {
      navigate("/login");
    } else {
      setUser(log);
    }
  }, [navigate]);

  const logout = () => {
    localStorage.removeItem("loguser");
    navigate("/login");
  };

  if (!user)
    return (
      <div className="min-h-screen flex justify-center items-center text-white bg-black">
        Loading...
      </div>
    );

  return (
    <div className="min-h-screen bg-black text-white px-6 sm:px-10 py-20">
      {/* Profile Glass Card */}
      <section className="max-w-4xl mx-auto bg-white/10 backdrop-blur-xl rounded-2xl p-8 sm:p-12 border border-white/20 shadow-2xl">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start text-center sm:text-left gap-8">
          {/* Profile Image */}
          <div className="relative">
            <img
              src="data:image/jpeg;base64,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"
              alt="Profile"
              className="w-32 h-32 object-cover rounded-full shadow-lg"
            />
            <div className="absolute inset-0 rounded-full bg-purple-500/30 blur-xl opacity-40"></div>
          </div>

          {/* Name & Info */}
          <div className="flex flex-col items-center sm:items-start pt-4">
            <h1
              className="text-4xl font-bold"
              style={{ fontFamily: "'Great Vibes', cursive" }}
            >
              {user.nm}
              <span className="ml-2 text-yellow-400">{user.nm2}</span>
            </h1>
            <p className="text-gray-300 mt-1">MERN Stack Developer</p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* Profile Details */}
        <div className="space-y-4 text-gray-300">
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Email</span>
            <span className="font-semibold">{user.email}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Phone</span>
            <span className="font-semibold">+91 {user.ph}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-gray-400">Location</span>
            <span className="font-semibold">{user.loc}, India</span>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/20 my-8"></div>

        {/* More Options */}
        <div className="grid sm:grid-cols-2 gap-4 mt-4">
          <button className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-xl text-left transition">
            <i className="fa-solid fa-bell text-yellow-400 mr-3"></i>
            Notifications
          </button>

          <button className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-xl text-left transition">
            <i className="fa-solid fa-gear text-purple-400 mr-3"></i>
            Account Settings
          </button>

          <button
            onClick={() => navigate("/cart")}
            className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-xl text-left transition"
          >
            <i className="fa-solid fa-shopping-cart text-yellow-400 mr-3"></i>
            My Cart ({count})
          </button>

          <button
            onClick={logout}
            className="bg-white/10 hover:bg-white/20 border border-white/20 p-3 rounded-xl text-left transition"
          >
            <i className="fa-solid fa-right-from-bracket text-purple-400 mr-3"></i>
            Logout
          </button>
        </div>
      </section>
    </div>
  );
}