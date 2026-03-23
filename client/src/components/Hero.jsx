import React from "react";

const Hero = () => {
  return (
    <section className="h-screen bg-gradient-to-r from-purple-600 via-indigo-600 to-blue-600 text-white flex flex-col justify-center items-center text-center px-6">
      <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
        Welcome to <span className="text-yellow-300">NINAD</span> Project
      </h1>

      <p className="text-lg md:text-xl max-w-2xl mb-8">
        Explore interactive 3D views and modern web experiences built using MERN Stack.
      </p>

      <button className="bg-white text-black px-8 py-3 rounded-lg text-lg font-semibold hover:scale-105 transition duration-300">
        Get Started
      </button>
    </section>
  );
};

export default Hero;