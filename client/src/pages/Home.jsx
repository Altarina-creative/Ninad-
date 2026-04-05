import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Slider from "../components/Slider";
import aboutImg from "../assets/one.jpeg";
import { Link } from "react-router-dom";

// ✅ GALLERY IMAGES IMPORT
import g1 from "../assets/g1.jpeg";
import g2 from "../assets/g2.jpeg";
import g3 from "../assets/g3.jpeg";
import g4 from "../assets/g4.jpeg";
import g5 from "../assets/g5.jpeg";
import g6 from "../assets/g6.jpeg";
import g7 from "../assets/g7.jpeg";
import g8 from "../assets/g8.jpeg";

// ✅ REPORT IMPORT (NEW ADD ONLY)
import report1 from "../assets/Annual Report 21-22 ninad.pdf";
import report2 from "../assets/Annual Report 22-23 Ninad.pdf";
import report3 from "../assets/Annual Report 23-24 Ninad.pdf";

const Home = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/join", formData);

      Swal.fire({
        title: "Success!",
        text: "You have joined successfully 🎉",
        icon: "success",
        confirmButtonColor: "#1b4332"
      });

      setFormData({
        name: "",
        email: "",
        phone: "",
        message: ""
      });

    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "Something went wrong ❌",
        icon: "error",
        confirmButtonColor: "#ff7a00"
      });
    }
  };

  return (
    <div className="text-gray-800">

      {/* HERO */}
      <section className="pt-8 pb-16 px-6 bg-gradient-to-r from-[#e6f4ea] to-[#dff3e6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <Slider />
          </div>

          <div>
            <h1 className="text-4xl font-bold mb-6 text-[#1b4332]">
              Empowering Lives, Building Futures 🌿
            </h1>

            <p className="text-gray-600 mb-6">
              NINAD works to uplift rural communities through education,
              women empowerment and sustainable livelihoods.
            </p>

            <div className="flex gap-4 flex-wrap">

              <Link to="/about">
                <button className="bg-[#ff7a00] text-white px-6 py-3 rounded-xl">
                  Know More
                </button>
              </Link>

              <Link to="/contact">
                <button className="border border-[#1b4332] px-6 py-3 rounded-xl">
                  Contact Us
                </button>
              </Link>

              <button
                onClick={() =>
                  document.getElementById("join").scrollIntoView({ behavior: "smooth" })
                }
                className="bg-[#1b4332] text-white px-6 py-3 rounded-xl"
              >
                Join Us
              </button>

            </div>
          </div>

        </div>
      </section>

      {/* ABOUT */}
      <section className="py-20 px-6 bg-[#f3fbf6]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <img src={aboutImg} className="rounded-xl shadow-lg w-full" />

          <div>
            <h2 className="text-3xl font-bold mb-4 text-[#1b4332] text-center">
    Our Purpose
  </h2>

           <p className="text-gray-600 leading-relaxed text-lg space-y-4 text-justify">
  NINAD (Badlav ka Swar) is an NGO based in Uttarakhand working in the fields of
  education, women empowerment, and rural development. Our mission is to uplift
  poor and underprivileged communities and improve their quality of life.

  <br /><br />

  We provide free education, books, and uniforms to children in need, along with
  coaching and guidance for competitive exams and higher studies. The organization
  also supports women empowerment by helping rural women sell their handmade
  products at better market prices.

  <br /><br />

  In addition, NINAD offers financial support for the marriage of economically weak
  girls, conducts awareness campaigns against harmful social practices, and works
  actively to prevent drug addiction among youth.

  <br /><br />

  Through these initiatives, we aim to build an educated, strong, and healthy society.
</p>
          </div>

        </div>
      </section>

      {/* SCHOOL SUPPORT PROGRAMME */}
      <section className="py-20 px-6 bg-[#edf7f1] text-center">
        <div className="max-w-4xl mx-auto">

          <h2 className="text-3xl font-bold mb-4 text-[#1b4332]">
            School Support Programme
          </h2>

          <h3 className="text-lg font-semibold text-[#ff7a00] mb-4">
            Vidya Utkarsh Yojana
          </h3>

          <p className="text-gray-600 mb-4">
            Education is a fundamental right of every child. However, many schools,
            especially in rural and economically weaker areas, continue to face challenges.
          </p>

          <p className="text-gray-600 mb-4">
            Poor infrastructure, lack of learning materials and limited funding affect
            the quality of education.
          </p>

          <p className="text-gray-600">
            Through this initiative, we support schools and help create better
            learning environments for children.
          </p>

        </div>
      </section>

      {/* WHAT WE DO */}
      <section className="py-20 px-6 bg-[#f8fdf9]">
        <h2 className="text-3xl font-bold text-center mb-14 text-[#1b4332]">
          What We Do
        </h2>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { title: "Free Education & Books", icon: "📚" },
            { title: "Free Coaching for Students", icon: "🎓" },
            { title: "Women Empowerment", icon: "👩‍🌾" },
            { title: "Support for Poor Families", icon: "🤝" },
            { title: "Anti-Addiction Awareness", icon: "🚫" },
            { title: "Youth Development", icon: "⚡" }
          ].map((item, i) => (
            <div
              key={i}
              className="group relative bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition duration-300 border-t-4 border-[#ff7a00]"
            >
              <div className="text-4xl mb-4">{item.icon}</div>

              <h3 className="text-xl font-semibold text-[#1b4332] mb-2">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm">
                Empowering communities through meaningful initiatives.
              </p>

              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#1b4332] group-hover:w-full transition-all duration-300"></div>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL ENTERPRISE */}
      <section className="py-20 px-6 bg-[#edf7f1] text-center">
        <h2 className="text-3xl font-bold mb-6 text-[#1b4332]">
          Supporting Farmers & Women
        </h2>

        <p className="max-w-3xl mx-auto text-gray-600">
          NINAD connects farmers and rural women with markets, helping them
          earn better income and live with dignity.
        </p>
      </section>

      {/* DONATE */}
      <section className="py-24 px-6 bg-gradient-to-r from-[#1b4332] to-[#163d2b] text-white text-center relative overflow-hidden">

        <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-[#ff7a00] to-transparent"></div>

        <h2 className="text-4xl font-bold mb-4">
          Be The Reason Someone Smiles 😊
        </h2>

        <p className="mb-8 text-gray-200 max-w-xl mx-auto">
          Aapka chhota sa contribution kisi ki zindagi badal sakta hai.
          Join hands with us and create real impact.
        </p>

        <div className="flex justify-center gap-4 flex-wrap">

          <Link to="/donate">
            <button className="bg-[#ff7a00] hover:bg-[#ff8800] text-white px-8 py-3 rounded-xl font-semibold shadow-lg transition">
              Donate Now ❤️
            </button>
          </Link>

          <button
            onClick={() =>
              document.getElementById("join").scrollIntoView({ behavior: "smooth" })
            }
            className="border border-white px-8 py-3 rounded-xl hover:bg-white hover:text-[#1b4332] transition"
          >
            Become Volunteer
          </button>

        </div>

      </section>

      {/* ✅ GALLERY */}
      <section className="py-20 px-6 bg-[#f3fbf6] text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#1b4332]">
          Gallery
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {[g1, g2, g3, g4, g5, g6, g7, g8].map((img, i) => (
            <div key={i}>
              <img src={img} className="w-full h-56 object-cover rounded-xl" />
            </div>
          ))}
        </div>
      </section>

      {/* ✅ NEW: ANNUAL REPORTS (ONLY ADDED) */}
      <section className="py-20 px-6 bg-[#edf7f1] text-center">
        <h2 className="text-3xl font-bold mb-10 text-[#1b4332]">
          Annual Reports 📊
        </h2>

        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">

          <a href={report1} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            Annual Report 21-22 Ninad
          </a>

          <a href={report2} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            Annual Report 22-23 Ninad
          </a>

          <a href={report3} target="_blank" rel="noreferrer" className="bg-white p-6 rounded-xl shadow hover:shadow-xl">
            Annual Report 23-24 Ninad
          </a>

        </div>
      </section>

      {/* JOIN */}
      <section id="join" className="py-20 px-6 bg-[#edf7f1]">
        <h2 className="text-3xl text-center mb-10 text-[#1b4332]">
          Join Our Mission
        </h2>

        <form onSubmit={handleSubmit} className="max-w-3xl mx-auto bg-white p-8 rounded-xl shadow space-y-4">

          <input name="name" value={formData.name} onChange={handleChange} placeholder="Name" className="w-full border p-3 rounded" />
          <input name="email" value={formData.email} onChange={handleChange} placeholder="Email" className="w-full border p-3 rounded" />
          <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone" className="w-full border p-3 rounded" />
          <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Why join?" className="w-full border p-3 rounded" />

          <button type="submit" className="bg-[#1b4332] text-white w-full py-3 rounded-lg">
            Join Now
          </button>

        </form>
      </section>

    </div>
  );
};

export default Home;
