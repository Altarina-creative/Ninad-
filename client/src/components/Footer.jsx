import React from "react";
import { Link } from "react-router-dom";

// ✅ IMPORTS
import fb from "../assets/fbb.png";
import instagram from "../assets/insta.png";
import twitter from "../assets/twitter.png";
import youtube from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="bg-[#0f172a] text-gray-300">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 
                      grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 
                      gap-10 text-center sm:text-left">

        {/* ABOUT */}
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
            NINAD
          </h2>
          <p className="text-sm leading-relaxed text-gray-400">
            NINAD Uttarakhand is dedicated to empowering rural communities
            through women empowerment, sustainable agriculture and education initiatives.
          </p>
        </div>

        {/* LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Quick Links
          </h3>
          <ul className="space-y-2 sm:space-y-3">
            <li><Link to="/" className="hover:text-green-400">Home</Link></li>
            <li><Link to="/about" className="hover:text-green-400">About</Link></li>
            <li><Link to="/projects" className="hover:text-green-400">Projects</Link></li>
            <li><Link to="/products" className="hover:text-green-400">Products</Link></li>
            <li><Link to="/contact" className="hover:text-green-400">Contact</Link></li>

            {/* ✅ DONATE BUTTON */}
            <li>
              <Link 
                to="/donate"
                className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition inline-block"
              >
                Donate ❤️
              </Link>
            </li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-gray-400 text-sm">

            <div className="flex items-start justify-center sm:justify-start gap-2">
              <span>📍</span>
              <p>
                MehalChori, District Chamoli,<br />
                Uttarakhand - 246431
              </p>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span>📞</span>
              <a href="tel:+91-9870997070" className="hover:text-green-400">
               +91-9870997070
              </a>
            </div>

            <div className="flex items-center justify-center sm:justify-start gap-2">
              <span>📧</span>
              <a 
                href="mailto:ninaduttarakhand643@gmail.com"
                className="hover:text-green-400 break-all"
              >
                ninaduttarakhand643@gmail.com
              </a>
            </div>

          </div>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">
            Follow Us
          </h3>

          <div className="flex justify-center sm:justify-start gap-4">

            <a href="https://www.facebook.com/100081293411810/posts/334248829294895/?app=fbl" target="_blank" rel="noreferrer">
              <img src={fb} className="w-7 sm:w-8 hover:scale-110 transition" />
            </a>

            <a href="https://www.instagram.com/ninaduttarakhand?igsh=MTdlODQ4dXl2dGNyOA==" target="_blank" rel="noreferrer">
              <img src={instagram} className="w-7 sm:w-8 hover:scale-110 transition" />
            </a>

            <a href="https://x.com/ninad_ngo" target="_blank" rel="noreferrer">
              <img src={twitter} className="w-7 sm:w-8 hover:scale-110 transition" />
            </a>

            <a href="https://youtube.com" target="_blank" rel="noreferrer">
              <img src={youtube} className="w-7 sm:w-8 hover:scale-110 transition" />
            </a>

          </div>
        </div>

      </div>

      {/* BOTTOM */}
      <div className="border-t border-gray-700 text-center py-4 text-xs sm:text-sm text-gray-500 px-4">
        © {new Date().getFullYear()} NINAD Uttarakhand. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;