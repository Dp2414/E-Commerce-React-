import React, { useState } from "react";
import axios from "axios";

const Edit = ({ category, product = null, onSave }) => {
  const [formData, setFormData] = useState({
    title: product?.title || "",
    brand: product?.brand || "",
    price: product?.price || "",
    rating: product?.rating || "",
    description: product?.description || "",
    image: product?.image || "",
    expectedDelivery: product?.expectedDelivery || "",
  });

const handleSubmit = async (e) => {
  e.preventDefault();

  const productData = {
    ...formData,
    price: Number(formData.price),
    rating: Number(formData.rating),
    category: category,
    reviews: product?.reviews || [],
  };

  if (product) {
    // Edit existing product
    await axios.put(
      `http://localhost:8000/${category}/${product.id}`,
      productData
    );
  } else {
    // Add new product - get highest ID from ALL categories
    const categories = [
      "Mobiles",
      "Laptops",
      "TVs",
      "ACs",
      "Electronics",
      "Clothing",
    ];
    let maxId = 0;

    // Check all categories to find the highest ID
    for (const cat of categories) {
      const response = await axios.get(`http://localhost:8000/${cat}`);
      const products = response.data;
      if (products.length > 0) {
        const categoryMaxId = Math.max(...products.map((p) => Number(p.id)));
        maxId = Math.max(maxId, categoryMaxId);
      }
    }

    const nextId = String(maxId + 1); // Convert to string
    const newProductData = { ...productData, id: nextId }; // Assign as string

    await axios.post(`http://localhost:8000/${category}`, newProductData);
  }

  onSave();
};
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={formData.title}
        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        required
      />
      <input
        type="text"
        placeholder="Brand"
        value={formData.brand}
        onChange={(e) => setFormData({ ...formData, brand: e.target.value })}
        required
      />
      <input
        type="number"
        placeholder="Price"
        value={formData.price}
        onChange={(e) => setFormData({ ...formData, price: e.target.value })}
        required
      />
      <button type="submit">{product ? "Update" : "Add"} Product</button>
    </form>
  );
};
export default Edit;