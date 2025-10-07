import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [showRePassword, setShowRePassword] = useState(false);

  const [email, setemail] = useState("")
  const [pass, setpass] = useState("")
  const [nm,setnm]=useState("")
  const navigate=useNavigate();

  const handle=(e)=>{
    e.preventDefault();
    if(!email || !pass || !nm){
      alert("enter all feild")
      return
    }
    const users=JSON.parse(localStorage.getItem("users"))||[];
    const exist =users.find((u)=>u.email===email)
    if(exist){
      alert("user already")
    }else{
      users.push({email,pass,nm})
      localStorage.setItem("users",JSON.stringify(users))
      navigate("/login")
    }
  }

  return (
    <div className="w-full h-screen flex justify-center items-center px-4 bg-black">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-xl">

        {/* Heading */}
        <h1
          className="text-center mb-8 text-3xl font-bold text-white drop-shadow-md"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Sign In
        </h1>

        {/* Username */}
        <div className="mb-4 relative">
          <i className="fas fa-user absolute top-3 left-3 text-gray-200"></i>
          <input
            type="text"
            value={nm}
            onChange={(e)=>setnm(e.target.value)}
            placeholder="Username"
            className="w-full pl-10 rounded-xl p-3 text-white bg-white/20 placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </div>

        {/* Email */}
        <div className="mb-4 relative">
          <i className="fas fa-envelope absolute top-3 left-3 text-gray-200"></i>
          <input
            type="email"
            value={email}
            onChange={(e)=>setemail(e.target.value)}
            placeholder="Email"
            className="w-full pl-10 rounded-xl p-3 text-white bg-white/20 placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
        </div>

        {/* Password */}
        <div className="mb-4 relative">
          <i className="fas fa-lock absolute top-3 left-3 text-gray-200"></i>
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            value={pass}
            onChange={(e)=>setpass(e.target.value)}
            className="w-full pl-10 pr-10 rounded-xl p-3 text-white bg-white/20 placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-3 right-3 text-gray-200"
          >
            <i className={showPassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>

        {/* Re-Password */}
        <div className="mb-6 relative">
          <i className="fas fa-lock absolute top-3 left-3 text-gray-200"></i>
          <input
            type={showRePassword ? "text" : "password"}
            placeholder="Re-Password"
            className="w-full pl-10 pr-10 rounded-xl p-3 text-white bg-white/20 placeholder-gray-200 border border-white/30 focus:outline-none focus:ring-2 focus:ring-white/50"
            style={{ fontFamily: "'Roboto', sans-serif" }}
          />
          <button
            type="button"
            onClick={() => setShowRePassword(!showRePassword)}
            className="absolute top-3 right-3 text-gray-200"
          >
            <i className={showRePassword ? "fas fa-eye-slash" : "fas fa-eye"}></i>
          </button>
        </div>

        {/* Login Button */}
        <button
          type="button"
          onClick={handle}
          className="w-full py-3 px-6 bg-white/20 hover:bg-white/30 text-white font-bold rounded-xl shadow-lg transition-transform duration-300 hover:scale-105"
          style={{ fontFamily: "'Poppins', sans-serif" }}
        >
          Sign Up
        </button>

        {/* Signup link */}
        <div className="mt-4 text-center text-sm text-gray-200">
          Already have an account?{" "}
          <a
            onClick={()=>navigate("/login")}
            className="text-white hover:underline font-semibold"
            style={{ fontFamily: "'Poppins', sans-serif" }}
          >
            Login
          </a>
        </div>

        {/* Social Login */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <button className="flex items-center justify-center w-12 h-12 bg-blue-600 hover:bg-blue-700 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-red-500 hover:bg-red-600 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <i className="fab fa-google"></i>
          </button>
          <button className="flex items-center justify-center w-12 h-12 bg-blue-400 hover:bg-blue-500 rounded-full text-white shadow-lg transition-transform duration-300 hover:scale-105">
            <i className="fab fa-twitter"></i>
          </button>
        </div>
      </div>
    </div>
  );
}
