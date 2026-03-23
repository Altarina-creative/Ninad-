import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import sideImage from "../assets/loginadmin.png";

export default function AdminLogin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async () => {
    try {
      const res = await axios.post(
        "http://localhost:5000/api/admin/login",
        form
      );

      localStorage.setItem("token", res.data.token);
      navigate("/admin");
    } catch {
      alert("Invalid Credentials ❌");
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">

      {/* 🌾 LEFT SIDE */}
      <div className="flex flex-col items-center justify-center md:w-1/2 
                      bg-gradient-to-br from-[#1f3d2b] to-[#2f5d44] px-8 py-12 text-white">

        <img
          src={sideImage}
          alt="ngo"
          className="w-full max-w-[520px] h-auto object-contain rounded-2xl shadow-2xl border-4 border-white/20"
        />

        <h1 className="text-3xl md:text-4xl font-bold mt-6 text-center">
          Empowering Rural Women 🌿
        </h1>

        <p className="mt-4 text-center max-w-lg text-sm md:text-base text-gray-200">
          Supporting women through self-reliance, local entrepreneurship,
          and sustainable livelihoods. Every action creates impact.
        </p>
      </div>

      {/* 🌿 RIGHT SIDE */}
      <div className="flex items-center justify-center md:w-1/2 px-6 py-12 
                      bg-gradient-to-br from-[#3a7d5d] to-[#9fcf9f]">

        <div className="w-full max-w-xl">

          {/* GLASS CARD */}
          <div className="backdrop-blur-lg bg-white/10 border border-white/20 
                          rounded-2xl shadow-2xl p-10 md:p-12 text-white">

            <h2 className="text-3xl md:text-4xl font-bold text-center">
              Admin Login
            </h2>

            <p className="text-center mt-3 mb-8 text-sm md:text-base text-gray-200">
              Manage products, orders & impact
            </p>

            <input
              name="email"
              placeholder="Email Address"
              onChange={handleChange}
              className="w-full mb-5 px-4 py-3 rounded-lg 
                         bg-white/20 text-white placeholder-gray-200
                         border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              onChange={handleChange}
              className="w-full mb-6 px-4 py-3 rounded-lg 
                         bg-white/20 text-white placeholder-gray-200
                         border border-white/30 focus:outline-none focus:ring-2 focus:ring-white"
            />

            <button
              onClick={handleLogin}
              className="w-full bg-white text-[#2f5d44] py-3 rounded-lg font-semibold text-lg 
                         hover:bg-gray-200 transition duration-300"
            >
              Login
            </button>

            <p className="text-center text-sm mt-6 text-gray-200">
              Together we grow 🌱
            </p>

          </div>
        </div>
      </div>
    </div>
  );
}