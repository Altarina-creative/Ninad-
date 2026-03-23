import { useEffect, useState } from "react";
import img1 from "../assets/slider_image_one.jpg";
import img2 from "../assets/slider_image_4.jpg";
import img3 from "../assets/slider_image_3.jpg";
import img4 from "../assets/slider_image_1.jpg";

const images = [img1, img2, img3, img4];

const Slider = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[480px] overflow-hidden rounded-2xl shadow-xl">

      {/* Images */}
      {images.map((img, index) => (
        <img
          key={index}
          src={img}
          alt="slide"
          className={`absolute w-full h-full object-cover transition-all duration-1000 ${
            index === current
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
        />
      ))}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent"></div>

      {/* Text Content */}
      <div className="absolute bottom-8 left-6 text-white max-w-md">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">
          Empowering Rural India 🌱
        </h2>
        <p className="text-sm md:text-base text-gray-200">
          Education, Women Empowerment & Sustainable Growth
        </p>
      </div>

      {/* Dots Navigation */}
      <div className="absolute bottom-4 right-6 flex gap-2">
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full cursor-pointer transition ${
              index === current ? "bg-[#ff7a00] scale-110" : "bg-white/50"
            }`}
          ></div>
        ))}
      </div>

    </div>
  );
};

export default Slider;