import React from "react";
import qrImg from "../assets/WhatsApp Image 2024-04-04 at 7.20.32 PM (1).jpeg";

const Donate = () => {
  return (
    <div className="bg-gradient-to-br from-green-50 via-white to-green-100 min-h-screen px-4 md:px-10 py-12">

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

      {/* MAIN GRID */}
      <div className="grid md:grid-cols-2 gap-10 max-w-6xl mx-auto">

        {/* LEFT SIDE */}
        <div className="space-y-8">

          {/* EMOTIONAL CARD */}
          <div className="bg-white shadow-lg rounded-3xl p-6 border border-green-100 hover:shadow-xl transition">
            <h2 className="text-xl font-semibold text-green-700 mb-3">
              Why Your Help Matters ❤️
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Many people still struggle for basic needs like food, education and healthcare.
              Your donation helps us bring hope, dignity and opportunities to those in need.
            </p>
          </div>

          {/* IMPACT CARDS */}
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

          {/* FINAL MESSAGE */}
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

          {/* QR CARD */}
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
              UPI ID:{" "}
              <span className="font-semibold text-green-700">
                yourupi@bank
              </span>
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

              <div className="flex flex-col md:flex-row md:justify-between">
                <span className="font-medium">Branch</span>
                <span className="break-words md:text-right">
                   Mehal Chori District-Chamoli Uttarakhand 246431
                </span>
                 </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Donate;
