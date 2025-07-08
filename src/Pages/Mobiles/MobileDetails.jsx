// src/Pages/Mobiles/MobileDetails.jsx
import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/Context"; // ✅ import context
import "./MobileDetails.css";

const MobileDetails = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState(null);
  const [qty, setQty] = useState(0);

  const { setCount } = useContext(CartContext); // ✅ get setCount

  // Fetch product by ID
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(`http://localhost:8000/Mobiles/${id}`);
        setMobile(response.data);

        const saved = JSON.parse(localStorage.getItem("products")) || [];
        const found = saved.find((item) => item.id === response.data.id);
        setQty(found ? found.quantity : 0);
      } catch (error) {
        console.error("Failed to fetch mobile details", error);
      }
    }

    fetchData();
  }, [id]);

  // Update localStorage and cart count
  const updateCart = (newQty) => {
    let items = JSON.parse(localStorage.getItem("products")) || [];

    if (newQty <= 0) {
      items = items.filter((item) => item.id !== mobile.id);
    } else {
      const exists = items.find((item) => item.id === mobile.id);
      if (exists) {
        items = items.map((item) =>
          item.id === mobile.id ? { ...item, quantity: newQty } : item
        );
      } else {
        items.push({ ...mobile, quantity: newQty });
      }
    }

    localStorage.setItem("products", JSON.stringify(items));

    // ✅ update the cart count in context
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalCount);
  };

  const increase = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateCart(newQty);
  };

  const decrease = () => {
    const newQty = qty - 1;
    setQty(newQty);
    updateCart(newQty);
  };

  const delitem = () => {
    setQty(0);
    updateCart(0);
  };

  if (!mobile) return <p>Loading...</p>;

  return (
    <div className="container mt-5 mobiledetails">
      <div>
        <h2>{mobile.title}</h2>
        <img
          src={mobile.image}
          alt={mobile.title}
          style={{ height: "300px" }}
        />
      </div>
      <div>
        <h4>
          Description: {mobile.description || "No description available."}
        </h4>
        <p>Rating: ⭐ {mobile.rating} / 5</p>
        <h5>Brand: {mobile.brand}</h5>
        <h5>Price: ₹{mobile.price}</h5>
      </div>

      {qty === 0 ? (
        <div>
          <button className="btn btn-primary" onClick={increase}>
            Add to Cart
          </button>
        </div>
      ) : (
        <div className="d-flex align-items-center justify-content-between">
          <div className="flexitems">
            <button className="btn btn-secondary" onClick={decrease}>
              –
            </button>
            <span className="mx-2">{qty}</span>
            <button className="btn btn-secondary" onClick={increase}>
              +
            </button>
          </div>
          <button className="btn btn-danger" onClick={delitem}>
            Remove
          </button>
        </div>
      )}
    </div>
  );
};

export default MobileDetails;
