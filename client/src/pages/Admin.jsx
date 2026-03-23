import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function Admin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    img: ""
  });

  const [preview, setPreview] = useState("");
  const [products, setProducts] = useState([]);

  // 🔐 Protect
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/admin-login");

    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get("http://localhost:5000/api/products")
      .then(res => setProducts(res.data));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 📸 IMAGE UPLOAD
  const handleImage = (e) => {
    const file = e.target.files[0];

    const reader = new FileReader();
    reader.onloadend = () => {
      setPreview(reader.result);
      setForm({ ...form, img: reader.result });
    };

    if (file) reader.readAsDataURL(file);
  };

  // ➕ ADD PRODUCT
  const addProduct = async () => {
    try {
      await axios.post(
        "http://localhost:5000/api/add-product",
        form,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );

      Swal.fire({
        title: "Product Added ✅",
        text: "New product added successfully!",
        icon: "success",
        confirmButtonColor: "#6366f1"
      });

      setForm({ name: "", price: "", img: "" });
      setPreview("");

      fetchProducts();

    } catch (err) {
      Swal.fire({
        title: "Error ❌",
        text: "Failed to add product!",
        icon: "error",
        confirmButtonColor: "#ef4444"
      });
    }
  };

  // ❌ DELETE
  const deleteProduct = async (id) => {
    try {
      await axios.delete(
        `http://localhost:5000/api/product/${id}`,
        {
          headers: {
            Authorization: localStorage.getItem("token")
          }
        }
      );

      Swal.fire({
        title: "Deleted 🗑️",
        text: "Product removed successfully!",
        icon: "success",
        confirmButtonColor: "#ef4444"
      });

      fetchProducts();

    } catch (err) {
      Swal.fire({
        title: "Error ❌",
        text: "Failed to delete product!",
        icon: "error"
      });
    }
  };

  const logout = () => {
    Swal.fire({
      title: "Logout?",
      text: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#6366f1",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes"
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem("token");
        navigate("/admin-login");
      }
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>

        <button
          onClick={logout}
          className="bg-red-500 text-white px-4 py-2 rounded-lg"
        >
          Logout
        </button>
      </div>

      {/* ADD PRODUCT CARD */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">

        <h2 className="text-xl font-semibold mb-4">Add Product</h2>

        <div className="grid md:grid-cols-2 gap-4">

          <input
            name="name"
            placeholder="Product Name"
            value={form.name}
            onChange={handleChange}
            className="input"
          />

          <input
            name="price"
            placeholder="Price (e.g. 200/kg)"
            value={form.price}
            onChange={handleChange}
            className="input"
          />

          <input
            type="file"
            onChange={handleImage}
            className="input"
          />

        </div>

        {preview && (
          <img
            src={preview}
            className="h-32 mt-4 rounded-lg object-cover"
          />
        )}

        <button
          onClick={addProduct}
          className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
        >
          Add Product
        </button>

      </div>

      {/* PRODUCT LIST */}
      <div className="grid md:grid-cols-4 gap-6">

        {products.map(p => (
          <div key={p._id} className="bg-white rounded-xl shadow p-4">

            <img
              src={p.img}
              className="h-40 w-full object-cover rounded-lg"
            />

            <h2 className="mt-2 font-semibold">{p.name}</h2>
            <p className="text-green-600">₹{p.price}</p>

            <button
              onClick={() => deleteProduct(p._id)}
              className="mt-2 w-full bg-red-500 text-white py-2 rounded-lg"
            >
              Delete
            </button>

          </div>
        ))}

      </div>
    </div>
  );
}