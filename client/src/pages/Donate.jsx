import React, { useState } from "react";
import qrImg from "../assets/upi.jpeg";
import axios from "axios";
import Swal from "sweetalert2";

const Donate = () => {

  // ✅ UPDATED STATE
  const [form, setForm] = useState({
    name: "",
    address: "",
    pan: "",
    phone: "",
    amount: "",
    reason: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.name || !form.phone || !form.amount || !form.reason) {
      Swal.fire("Error", "Please fill all fields", "error");
      return;
    }

    try {
      await axios.post("https://ninad.onrender.com/api/donate", form);

      Swal.fire("Success 🎉", "Thank you for your donation!", "success");

      setForm({
        name: "",
        address: "",
        pan: "",
        phone: "",
        amount: "",
        reason: ""
      });

    } catch (error) {
      Swal.fire("Error", "Something went wrong!", "error");
    }
  };

  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen px-4 md:px-10 py-12">

      {/* 80G BANNER */}
      <div className="bg-green-700 text-white text-center py-6 px-4 rounded-2xl mb-10 shadow-md">
        <h2 className="text-2xl md:text-3xl font-bold">
           Exemption On Your Donation
        </h2>
        <p className="mt-2 text-sm opacity-90">
          Under Section 80G Of Income Tax Act 1961
        </p>
      </div>

      {/* HERO SECTION */}
      <div className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-bold text-green-700 mb-4">
          Support Our Mission 😊✨
        </h1>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          A small contribution from you can create a big impact in someone's life.
          Help us empower women, educate children and uplift rural communities.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          <div className="bg-white shadow-lg rounded-3xl p-6 border border-green-100 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Why Your Help Matters ❤️
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Many people still struggle for basic needs like food, education and healthcare.
              Your donation helps us bring hope, dignity and opportunities to those in need.
            </p>
          </div>

          <div className="bg-white shadow-lg rounded-3xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Your Contribution Impact 🌱
            </h2>

            <div className="grid grid-cols-2 gap-4 text-center">

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-bold text-green-700">₹500</p>
                <p className="text-sm text-gray-600">Books for a child</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-bold text-green-700">₹1000</p>
                <p className="text-sm text-gray-600">Food for family</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-bold text-green-700">₹2000</p>
                <p className="text-sm text-gray-600">Women training</p>
              </div>

              <div className="bg-green-50 p-4 rounded-xl">
                <p className="font-bold text-green-700">₹5000</p>
                <p className="text-sm text-gray-600">Education program</p>
              </div>

            </div>
          </div>

          <div className="bg-gradient-to-r from-green-600 to-green-500 text-white p-6 rounded-3xl shadow-lg">
            <h2 className="text-xl font-semibold mb-2">
              Be the Reason Someone Smiles 😊
            </h2>
            <p className="text-sm opacity-90">
              Your kindness can transform lives. Every contribution matters.
            </p>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="space-y-8">

          {/* QR */}
          <div className="bg-white shadow-lg rounded-3xl p-6 text-center border border-green-100 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Scan & Donate 📲
            </h2>

            <div className="flex justify-center">
              <img
                src={qrImg}
                alt="QR Code"
                className="w-56 h-56 md:w-72 md:h-72 object-contain rounded-xl border-4 border-green-100 shadow-md"
              />
            </div>

            <p className="mt-4 text-gray-600">
              UPI ID: <span className="font-semibold text-green-700">ninaabadlav@sbi</span>
            </p>
          </div>

          {/* BANK DETAILS */}
          <div className="bg-white shadow-lg rounded-3xl p-6 border border-green-100">
            <h2 className="text-xl font-semibold text-green-700 mb-4">
              Bank Details 🏦
            </h2>

            <div className="grid grid-cols-1 gap-3 text-gray-600 text-sm">

              <div className="flex justify-between">
                <span className="font-medium">Account Name</span>
                <span>Ninad Badlav Ka Swar</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Account No.</span>
                <span>40844056783</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">IFSC</span>
                <span>SBIN0007419</span>
              </div>

              <div className="flex justify-between">
                <span className="font-medium">Bank</span>
                <span>State Bank of India</span>
              </div>

              <div className="flex justify-between gap-4">
                <span className="font-medium w-[120px]">Branch</span>
                <span className="text-right flex-1">
                  Mehal Chori District-Chamoli Uttarakhand
                  <br />
                  <span className="block mt-1">246431</span>
                </span>
              </div>
            </div>
          </div>

          {/* ✅ UPDATED FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-3xl p-6 border border-green-100 space-y-4"
          >
            <h2 className="text-xl font-semibold text-green-700">
              Personal Info
            </h2>

            <input type="text" name="name" placeholder="Name" value={form.name} onChange={handleChange} className="w-full p-4 border rounded-2xl" />

            <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} className="w-full p-4 border rounded-2xl" />

            <input type="text" name="pan" placeholder="Pancard / Aadhaar" value={form.pan} onChange={handleChange} className="w-full p-4 border rounded-2xl" />

            <input type="number" name="phone" placeholder="Phone" value={form.phone} onChange={handleChange} className="w-full p-4 border rounded-2xl" />

            <input type="number" name="amount" placeholder="Donation Amount (₹)" value={form.amount} onChange={handleChange} className="w-full p-4 border rounded-2xl" />

            <select name="reason" value={form.reason} onChange={handleChange} className="w-full p-4 border rounded-2xl text-gray-600">
              <option value="">What inspired you to give</option>
              <option value="Education Support">Education Support</option>
              <option value="Food Donation">Food Donation</option>
              <option value="Women Empowerment">Women Empowerment</option>
              <option value="Healthcare Support">Healthcare Support</option>
              <option value="General Charity">General Charity</option>
            </select>

            <button type="submit" className="w-full bg-green-600 text-white py-3 rounded-2xl hover:bg-green-700">
              Donate Now ❤️
            </button>

          </form>

        </div>
      </div>
    </div>
  );
};

export default Donate;
