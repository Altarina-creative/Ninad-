import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Product() {
  const navigate = useNavigate();

  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentImg, setCurrentImg] = useState({});

  // ✅ ZOOM STATE (NEW ADD)
  const [zoomImg, setZoomImg] = useState(null);

 useEffect(() => {
  axios.get("https://ninad.onrender.com/api/products")
    .then(res => {
      setProducts(res.data);
      console.log(res.data);
    })
    .catch(err => console.log(err));
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

      <h1 className="text-4xl font-extrabold mb-10 text-center text-gray-800 tracking-wide">
        ✨ Our Services
      </h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {products.map((p) => (
          <div
            key={p._id}
            className="backdrop-blur-lg bg-white/70 border border-white/40 rounded-2xl shadow-lg hover:shadow-2xl transition duration-500 overflow-hidden group"
          >

            {/* IMAGE SECTION */}
            <div
              className="w-full relative bg-white flex flex-col items-center justify-center p-3 cursor-pointer"

              onTouchStart={(e) => (p.startX = e.touches[0].clientX)}
              onTouchEnd={(e) => {
                let endX = e.changedTouches[0].clientX;

                if (p.startX - endX > 50) {
                  setCurrentImg(prev => ({
                    ...prev,
                    [p._id]:
                      (prev[p._id] || 0) === p.img.length - 1
                        ? 0
                        : (prev[p._id] || 0) + 1
                  }));
                }

                if (endX - p.startX > 50) {
                  setCurrentImg(prev => ({
                    ...prev,
                    [p._id]:
                      (prev[p._id] || 0) === 0
                        ? p.img.length - 1
                        : (prev[p._id] || 0) - 1
                  }));
                }
              }}

              onClick={(e) => {
                const width = e.currentTarget.clientWidth;
                const clickX = e.nativeEvent.offsetX;

                // 👉 RIGHT CLICK → NEXT
                if (clickX > width / 2) {
                  setCurrentImg(prev => ({
                    ...prev,
                    [p._id]:
                      (prev[p._id] || 0) === p.img.length - 1
                        ? 0
                        : (prev[p._id] || 0) + 1
                  }));
                } 
                // 👉 LEFT CLICK → PREV
                else {
                  setCurrentImg(prev => ({
                    ...prev,
                    [p._id]:
                      (prev[p._id] || 0) === 0
                        ? p.img.length - 1
                        : (prev[p._id] || 0) - 1
                  }));
                }
              }}
            >

              {/* DISCOUNT BADGE */}
              {p.discount && (
                <div className="absolute top-2 left-2 bg-gradient-to-r from-red-500 to-pink-500 text-white text-sm px-4 py-1 rounded-full shadow-lg font-bold">
                  🔥 {p.discount}
                </div>
              )}

              {/* 🔍 CLICK IMAGE TO ZOOM */}
              <img
                src={p.img[currentImg[p._id] || 0]}
                alt={p.name}
                onDoubleClick={() =>
                  setZoomImg(p.img[currentImg[p._id] || 0])
                }
                className="w-full h-auto max-h-72 object-contain transition duration-500"
              />

              {/* DOTS */}
              <div className="flex gap-2 mt-3">
                {p.img.map((_, i) => (
                  <div
                    key={i}
                    className={`w-2.5 h-2.5 rounded-full ${
                      (currentImg[p._id] || 0) === i
                        ? "bg-black"
                        : "bg-gray-300"
                    }`}
                  />
                ))}
              </div>

            </div>

            {/* CONTENT */}
            <div className="p-4">
              <h2 className="font-semibold text-lg text-gray-800">
                {p.name}
              </h2>

              {/* PRICE + DISCOUNT SIDE BY SIDE */}
              <div className="flex justify-between items-center mt-2">

                <p className="text-2xl font-extrabold text-green-600">
                  ₹{p.price}
                </p>

                {p.discount && (
                  <span className="text-lg font-bold text-red-500 bg-red-100 px-3 py-1 rounded-full">
                    {p.discount}
                  </span>
                )}

              </div>

              <div className="flex gap-2 mt-4">
                <button
                  onClick={() => addToCart(p)}
                  className="w-1/2 bg-gradient-to-r from-yellow-400 to-orange-400 text-black py-2 rounded-xl font-semibold"
                >
                  Add
                </button>

                <button
                  onClick={() => buyNow(p)}
                  className="w-1/2 bg-gradient-to-r from-black to-gray-800 text-white py-2 rounded-xl font-semibold"
                >
                  Buy
                </button>
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CART BUTTON */}
      <div className="fixed bottom-6 right-6 z-50">
        <button
          onClick={() => navigate("/cart")}
          className="bg-black text-white px-6 py-3 rounded-full shadow-xl"
        >
          🛒 Cart ({cart.length})
        </button>
      </div>

      {/* 🔍 ZOOM MODAL */}
      {zoomImg && (
        <div
          onClick={() => setZoomImg(null)}
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
        >
          <img
            src={zoomImg}
            className="max-h-[90%] max-w-[90%] rounded-lg shadow-lg"
          />
        </div>
      )}

    </div>
  );
}
