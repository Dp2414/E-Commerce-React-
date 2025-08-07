import React, { useState, useEffect } from "react";
import axios from "axios";
import Edit from "./Edit";
import { useParams } from "react-router-dom";

const Admin = () => {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Mobiles");
  const [showForm, setShowForm] = useState(false);
    const [editingProduct, setEditingProduct] = useState(null);
    


  const categories = [
    "Mobiles",
    "Laptops",
    "TVs",
    "ACs",
    "Electronics",
    "Clothing",
  ];

  useEffect(() => {
    fetchProducts();
  }, [category]);

  const fetchProducts = async () => {
      const response = await axios.get(`http://localhost:8000/${category}`);
    setProducts(response.data);
  };

  const deleteProduct = async (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
        await axios.delete(`http://localhost:8000/${category}/${id}`);
        await reorderIds();
      fetchProducts();
    }
  };

  const handleAddNew = () => {
    setEditingProduct(null);
    setShowForm(true);
  };

  const handleEdit = (product) => {
    setEditingProduct(product);
    setShowForm(true);
  };

  const handleSave = async () => {
    setShowForm(false);
      setEditingProduct(null);
       await reorderIds();
    fetchProducts();
    };
const reorderIds = async () => {
  try {
    const response = await axios.get(`http://localhost:8000/${category}`);
    const products = response.data;

    products.sort((a, b) => Number(a.id) - Number(b.id));

    for (let i = 0; i < products.length; i++) {
      const newId = String(i + 1); // Convert to string
      if (products[i].id !== newId) {
        const updatedProduct = { ...products[i], id: newId }; // Assign as string
        await axios.put(
          `http://localhost:8000/${category}/${products[i].id}`,
          updatedProduct
        );
      }
    }
  } catch (error) {
    console.error("Error reordering IDs:", error);
  }
};
  return (
    <div className="container mt-4">
      <h2>Admin Dashboard</h2>

      <select
        className="form-select d-inline-block w-auto me-2"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
      >
        {categories.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>

      <button className="btn btn-success ms-2" onClick={handleAddNew}>
        Add New Product
      </button>

      <table className="table mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td>{product.title}</td>
              <td>₹{product.price}</td>
              <td>
                <button
                  className="btn btn-primary btn-sm me-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger btn-sm"
                  onClick={() => deleteProduct(product.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {showForm && (
        <div className="mt-4">
          <h3>{editingProduct ? "Edit Product" : "Add New Product"}</h3>
          <Edit
            category={category}
            product={editingProduct}
            onSave={handleSave}
          />
          <button
            className="btn btn-secondary mt-2"
            onClick={() => setShowForm(false)}
          >
            Cancel
          </button>
        </div>
      )}
    </div>
  );
};

export default Admin;
