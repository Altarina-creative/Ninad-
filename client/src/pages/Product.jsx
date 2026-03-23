import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  }, []);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(saved);
  }, []);

  const addToCart = (item) => {
    const updated = [...cart, item];
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  const buyNow = (item) => {
    const updated = [...cart, item];
    localStorage.setItem("cart", JSON.stringify(updated));
    navigate("/cart");
  };

  return (
    <div className="min-h-screen p-6 bg-gradient-to-br from-[#eef2ff] via-[#fdf2f8] to-[#ecfeff]">
      
      {/* TITLE */}
      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
        ✨ Our Services
      </h1>

      {/* GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group"
          >
            {/* IMAGE FIXED (NO CROP) */}
            <div className="w-full bg-white flex items-center justify-center p-3">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-auto max-h-72 object-contain transition duration-500 group-hover:scale-105"
              />
            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {p.name}
              </h2>

              <p className="text-xl font-bold mt-1 bg-gradient-to-r from-green-500 to-emerald-600 text-transparent bg-clip-text">
                ₹{p.price}
              </p>

              {/* BUTTONS */}
              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => addToCart(p)}
                  className="w-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 hover:from-yellow-500 hover:to-orange-500 text-black py-2 rounded-xl font-semibold shadow-md transition"
                >
                  Add
                </button>

                <button
                  onClick={() => buyNow(p)}
                  className="w-1/2 bg-gradient-to-r from-black to-gray-800 hover:from-gray-900 hover:to-black text-white py-2 rounded-xl font-semibold shadow-md transition"
                >
                  Buy
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* FLOATING CART BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => navigate("/cart")}
          className="bg-gradient-to-r from-black to-gray-800 text-white px-6 py-3 rounded-full shadow-xl hover:scale-105 transition flex items-center gap-2"
        >
          🛒 Cart ({cart.length})
        </button>
      </div>
    </div>
  );
}