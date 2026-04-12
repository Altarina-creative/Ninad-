import React, { useState } from "react";
import Swal from "sweetalert2";

const Contact = () => {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
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

      const res = await fetch("https://ninad.onrender.com/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();

      Swal.fire({
        title: "Message Sent 📩",
        text: data.message || "We will contact you soon!",
        icon: "success",
        confirmButtonColor: "#16a34a"
      });

      setFormData({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      console.log(error);

      Swal.fire({
        title: "Error ❌",
        text: "Failed to send message!",
        icon: "error",
        confirmButtonColor: "#ef4444"
      });
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-[#0f172a] text-white py-16 text-center px-6">
        <h1 className="text-3xl md:text-5xl font-bold mb-4">
          Contact Us
        </h1>
        <p className="max-w-2xl mx-auto text-gray-300">
          We'd love to hear from you. Reach out to us for collaboration,
          support or any queries related to our NGO initiatives.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-12">

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
            Get In Touch
          </h2>

          <div className="space-y-5 text-gray-600">
            <p>
              📍<span className="font-medium">Location:</span><br />
              Gairsain, <br />
              Pin: 246431 , Chamoli <br />
              Uttarakhand, India.
            </p>

            <p>
              📞 <span className="font-medium">Phone:</span><br />
              +91-9870997070
            </p>

            <p>
              📧 <span className="font-medium">Email:</span><br />
              ninaduttarakhand@gmail.com
            </p>

            <p>
              🕒 <span className="font-medium">Working Hours:</span><br />
              Monday – Sunday | 9:00 AM – 6:00 PM
            </p>
          </div>
        </div>

        <div className="bg-white shadow-lg rounded-xl p-8">
          <h2 className="text-2xl font-bold text-[#0f172a] mb-6">
            Send Message
          </h2>

          <form className="space-y-5" onSubmit={handleSubmit}>

            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-400"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-600 text-white py-3 rounded-lg hover:bg-green-700 transition"
            >
              Send Message
            </button>

          </form>
        </div>

      </section>
    </div>
  );
};

export default Contact;
