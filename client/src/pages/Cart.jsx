import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Cart() {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    country: "India",
    pincode: ""
  });

  // Load cart
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("cart")) || [];
    const withQty = saved.map((item) => ({ ...item, qty: 1 }));
    setCart(withQty);
  }, []);

  // Quantity
  const increaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id ? { ...item, qty: item.qty + 1 } : item
    ));
  };

  const decreaseQty = (id) => {
    setCart(cart.map(item =>
      item.id === id && item.qty > 1
        ? { ...item, qty: item.qty - 1 }
        : item
    ));
  };

  // Remove
  const removeItem = (id) => {
    const updated = cart.filter(item => item.id !== id);
    setCart(updated);
    localStorage.setItem("cart", JSON.stringify(updated));
  };

  // Clear
  const clearCart = () => {
    localStorage.removeItem("cart");
    setCart([]);
  };

  // ✅ ORIGINAL TOTAL
  const originalTotal = cart.reduce(
    (sum, item) => sum + parseFloat(item.price) * item.qty,
    0
  );

  // ✅ DISCOUNT AMOUNT
  const discountAmount = cart.reduce((sum, item) => {
    let price = parseFloat(item.price);
    let discount = 0;

    if (item.discount) {
      const match = item.discount.match(/\d+/);
      if (match) {
        discount = parseInt(match[0]);
      }
    }

    return sum + (price * discount / 100) * item.qty;
  }, 0);

  // ✅ FINAL TOTAL
  const total = originalTotal - discountAmount;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ORDER
  const handleOrder = async () => {
    try {
      const fullAddress = `
        ${form.address1},
        ${form.address2},
        ${form.city},
        ${form.state},
        ${form.country} - ${form.pincode}
      `;

      await axios.post("http://localhost:5000/api/order", {
        cart,
        total,
        email: form.email,
        phone: form.phone,
        pincode: form.pincode,
        address: fullAddress
      });

      Swal.fire({
        title: "Order Placed 🎉",
        text: "Your order has been placed successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1",
        confirmButtonText: "OK"
      }).then(() => {
        clearCart();
      });

    } catch (err) {
      console.log(err);

      Swal.fire({
        title: "Error ❌",
        text: "Failed to place order. Try again!",
        icon: "error",
        confirmButtonColor: "#ef4444"
      });
    }
  };

  return (
    <div className="bg-gray-100 min-h-screen">

      {/* HEADER */}
      <div className="bg-white shadow p-4 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate("/products")} className="text-xl font-bold">
            ←
          </button>
          <h1 className="text-xl font-semibold">Your Cart</h1>
        </div>

        <button onClick={clearCart} className="text-red-500 font-semibold">
          Clear Cart
        </button>
      </div>

      <div className="p-6 grid md:grid-cols-3 gap-6">

        {/* LEFT */}
        <div className="md:col-span-2 space-y-4">
          {cart.length === 0 ? (
            <div className="bg-white p-6 rounded-xl text-center shadow">
              <p className="text-gray-500 mb-4">Your cart is empty</p>
              <button
                onClick={() => navigate("/products")}
                className="bg-black text-white px-6 py-2 rounded-lg"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            cart.map(item => (
              <div key={item.id} className="bg-white p-4 rounded-xl shadow flex justify-between items-center">
                <div className="flex gap-4 items-center">
                  <img
                    src={item.img?.[0] || item.img || "https://via.placeholder.com/100"}
                    className="w-20 h-20 rounded-lg object-cover"
                  />
                  <div>
                    <h2 className="font-semibold">{item.name}</h2>
                    <p className="text-green-600">₹{item.price}</p>

                    {item.discount && (
                      <p className="text-red-500 text-sm font-semibold">
                        🔥 {item.discount}
                      </p>
                    )}

                    <div className="flex gap-3 mt-2">
                      <button onClick={() => decreaseQty(item.id)} className="px-2 bg-gray-200">-</button>
                      <span>{item.qty}</span>
                      <button onClick={() => increaseQty(item.id)} className="px-2 bg-gray-200">+</button>
                    </div>
                  </div>
                </div>

                <button onClick={() => removeItem(item.id)} className="text-red-500">
                  Remove
                </button>
              </div>
            ))
          )}
        </div>

        {/* RIGHT */}
        <div className="bg-white p-5 rounded-xl shadow sticky top-5 h-fit">
          <h2 className="text-xl font-bold mb-4">Price Details</h2>

          <div className="flex justify-between">
            <span>Items</span>
            <span>{cart.length}</span>
          </div>

          <div className="flex justify-between">
            <span>Total Price</span>
            <span>₹{originalTotal}</span>
          </div>

          <div className="flex justify-between text-red-500 font-semibold">
            <span>Discount</span>
            <span>- ₹{discountAmount}</span>
          </div>

          <hr className="my-3" />

          <div className="flex justify-between font-bold text-lg">
            <span>Amount</span>
            <span>₹{total}</span>
          </div>

          {/* FORM */}
          <div className="mt-4">
            <h2 className="font-semibold mb-3">Delivery Details</h2>

            <input name="name" placeholder="Full Name" onChange={handleChange} className="input" />
            <input name="email" placeholder="Email" onChange={handleChange} className="input" />
            <input name="phone" placeholder="Phone" onChange={handleChange} className="input" />
            <input name="address1" placeholder="Address Line 1" onChange={handleChange} className="input" />
            <input name="address2" placeholder="Address Line 2" onChange={handleChange} className="input" />

            <div className="flex gap-2">
              <input name="city" placeholder="City" onChange={handleChange} className="input w-1/2" />

              <select name="state" onChange={handleChange} className="input w-1/2">
                <option value="">Select State</option>

                <optgroup label="States">
                  <option>Andhra Pradesh</option>
                  <option>Arunachal Pradesh</option>
                  <option>Assam</option>
                  <option>Bihar</option>
                  <option>Chhattisgarh</option>
                  <option>Goa</option>
                  <option>Gujarat</option>
                  <option>Haryana</option>
                  <option>Himachal Pradesh</option>
                  <option>Jharkhand</option>
                  <option>Karnataka</option>
                  <option>Kerala</option>
                  <option>Madhya Pradesh</option>
                  <option>Maharashtra</option>
                  <option>Manipur</option>
                  <option>Meghalaya</option>
                  <option>Mizoram</option>
                  <option>Nagaland</option>
                  <option>Odisha</option>
                  <option>Punjab</option>
                  <option>Rajasthan</option>
                  <option>Sikkim</option>
                  <option>Tamil Nadu</option>
                  <option>Telangana</option>
                  <option>Tripura</option>
                  <option>Uttar Pradesh</option>
                  <option>Uttarakhand</option>
                  <option>West Bengal</option>
                </optgroup>

                <optgroup label="Union Territories">
                  <option>Andaman and Nicobar Islands</option>
                  <option>Chandigarh</option>
                  <option>Dadra and Nagar Haveli and Daman and Diu</option>
                  <option>Delhi</option>
                  <option>Jammu and Kashmir</option>
                  <option>Ladakh</option>
                  <option>Lakshadweep</option>
                  <option>Puducherry</option>
                </optgroup>
              </select>
            </div>

            <div className="flex gap-2">
              <select name="country" onChange={handleChange} className="input w-1/2" defaultValue="India">
                <option>India</option>
                <option>USA</option>
              </select>

              <input name="pincode" placeholder="Postal Code" onChange={handleChange} className="input w-1/2" />
            </div>
          </div>

          <button
            onClick={handleOrder}
            className="mt-4 w-full bg-black text-white py-3 rounded-lg"
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  );
}
