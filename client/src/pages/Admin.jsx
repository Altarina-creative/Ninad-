import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const BASE_URL = "https://ninad.onrender.com";

export default function Admin() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    price: "",
    img: [],
    discount: ""
  });

  const [preview, setPreview] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) navigate("/admin-login");
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios.get(`${BASE_URL}/api/products`)
      .then(res => {
        console.log("API DATA:", res.data);

        // ✅ FIX (consistent response)
        setProducts(res.data.products);
      })
      .catch(() => setProducts([]));
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImage = async (e) => {
    const files = Array.from(e.target.files);

    const promises = files.map(file => {
      return new Promise((resolve) => {
        const reader = new FileReader();
        reader.onloadend = () => resolve(reader.result);
        reader.readAsDataURL(file);
      });
    });

    const newImages = await Promise.all(promises);

    let updatedImages = [...form.img, ...newImages];
    if (updatedImages.length > 5) {
      updatedImages = updatedImages.slice(0, 5);
    }

    setForm({ ...form, img: updatedImages });
    setPreview(updatedImages);
  };

  const addProduct = async () => {
    if (form.img.length === 0) {
      return Swal.fire("Error ❌", "Upload at least 1 image", "error");
    }

    try {
      const res = await axios.post(`${BASE_URL}/api/products`, form);

      console.log("SERVER RESPONSE:", res.data);

      Swal.fire("Product Added ✅", "Success", "success");

      setForm({ name: "", price: "", img: [], discount: "" });
      setPreview([]);
      fetchProducts();

    } catch (err) {
      console.log("ERROR:", err.response?.data);
      Swal.fire("Error ❌", "Failed to add product", "error");
    }
  };

  const deleteProduct = async (id) => {
    try {
      await axios.delete(`${BASE_URL}/api/products/${id}`);
      fetchProducts();
    } catch (err) {
      console.log("DELETE ERROR:", err.response?.data);
    }
  };

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/admin-login");
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">

      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <button onClick={logout} className="bg-red-500 text-white px-4 py-2 rounded-lg">
          Logout
        </button>
      </div>

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
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className="input"
          />

          <input
            name="discount"
            placeholder="Discount (optional e.g. 20% OFF)"
            value={form.discount}
            onChange={handleChange}
            className="input"
          />

          <input
            type="file"
            multiple
            onChange={handleImage}
            className="input"
          />
        </div>

        <div className="flex gap-2 mt-4 flex-wrap">
          {preview.map((img, i) => (
            <img key={i} src={img} className="h-20 w-20 object-cover rounded" />
          ))}
        </div>

        <button
          onClick={addProduct}
          className="mt-4 bg-black text-white px-6 py-2 rounded-lg"
        >
          Add Product
        </button>
      </div>

      <div className="grid md:grid-cols-4 gap-6">
        {Array.isArray(products) && products.map(p => (
          <div key={p._id} className="bg-white rounded-xl shadow p-4">

            <img src={p.img[0]} className="h-40 w-full object-cover rounded-lg" />

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
