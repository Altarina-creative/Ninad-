import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Admin from "./pages/Admin";
import AdminLogin from "./pages/AdminLogin";
import Donate from "./pages/Donate";   // ✅ ADD THIS

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />

        <Route path="/products" element={<Product />} />
        <Route path="/cart" element={<Cart />} />

        {/* 🔐 ADMIN */}
        <Route path="/admin-login" element={<AdminLogin />} />
        <Route path="/admin" element={<Admin />} />

        {/* ✅ DONATE ROUTE */}
        <Route path="/donate" element={<Donate />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;