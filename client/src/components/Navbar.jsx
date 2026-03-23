import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <>
      {/* ================= NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white shadow-sm">

        {/* TOP */}
        <div className="max-w-7xl mx-auto px-5 py-3 flex justify-between items-center">

          <div className="flex items-center gap-2">
            <img src={logo} alt="logo" className="h-11 md:h-16" />
            <span className="text-lg md:text-2xl font-semibold">
              NINAD-बदलाव का स्वर
            </span>
          </div>

          {/* NAV LINKS */}
          <nav className="hidden md:flex items-center gap-8 font-semibold text-gray-800">

            <NavLink to="/" className="hover:text-green-700 transition">
              Home
            </NavLink>

            <NavLink to="/about" className="hover:text-green-700 transition">
              About
            </NavLink>

            <NavLink to="/projects" className="hover:text-green-700 transition">
              Our Project
            </NavLink>

            <NavLink to="/products" className="hover:text-green-700 transition">
              Products
            </NavLink>

            <NavLink to="/contact" className="hover:text-green-700 transition">
              Contact
            </NavLink>

            <NavLink to="/admin-login" className="hover:text-green-700 transition">
              Admin
            </NavLink>

            <NavLink to="/donate">
              <button className="bg-green-700 text-white px-5 py-2 rounded-full">
                Donate
              </button>
            </NavLink>

          </nav>

          {/* Mobile Button */}
          <button onClick={() => setOpen(true)} className="md:hidden text-3xl">
            ☰
          </button>
        </div>

        {/* LINE */}
        <div className="w-full h-[3px] bg-black"></div>

        {/* TICKER */}
        <div className="bg-[#1b4332] text-white py-2 overflow-hidden">
          <div className="ticker-track">

            {[1, 2].map((_, i) => (
              <div key={i} className="ticker-content">
                🌟 Shri Suresh Kumar Bisht leading our mission &nbsp; | &nbsp;
                Nitish Singh Bisht Contribution &nbsp; | &nbsp;

                <span
                  onClick={() => window.location.href = "/donate"}
                  className="text-yellow-400 cursor-pointer"
                >
                  ❤️ Donate Now →
                </span>
              </div>
            ))}

          </div>
        </div>

      </header>

      {/* OVERLAY */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/40 z-40 ${
          open ? "block" : "hidden"
        }`}
      ></div>

      {/* ================= STYLISH DRAWER ================= */}
      <div
        className={`fixed top-0 left-0 h-full w-72 bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          open ? "translate-x-0" : "-translate-x-full"
        } shadow-2xl`}
      >

        {/* TOP WITH CLOSE BUTTON */}
        <div className="p-6 border-b bg-gray-50 flex items-center gap-3">
          
          {/* BACK BUTTON (PROFESSIONAL CLOSE) */}
          <button
            onClick={() => setOpen(false)}
            className="text-2xl text-gray-700 hover:text-green-700"
          >
            ←
          </button>

          <div>
            <h2 className="text-lg font-bold text-green-700">
              NINAD
            </h2>
            <p className="text-xs text-gray-500">
              बदलाव का स्वर
            </p>
          </div>
        </div>

        {/* MENU */}
        <div className="p-6 flex flex-col gap-5 text-gray-800 font-medium">

          <NavLink to="/" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            Home
          </NavLink>

          <NavLink to="/about" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            About
          </NavLink>

          <NavLink to="/projects" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            Projects
          </NavLink>

          <NavLink to="/products" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            Products
          </NavLink>

          <NavLink to="/contact" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            Contact
          </NavLink>

          
          <NavLink to="/Admin" onClick={() => setOpen(false)} className="hover:text-green-700 transition">
            Admin
          </NavLink>

          {/* DIVIDER */}
          <div className="border-t my-2"></div>

          {/* DONATE BUTTON */}
          <NavLink to="/donate" onClick={() => setOpen(false)}>
            <button className="bg-green-700 hover:bg-green-800 transition text-white py-3 rounded-full w-full shadow-md">
              ❤️ Donate Now
            </button>
          </NavLink>

        </div>

      </div>
    </>
  );
};

export default Navbar;