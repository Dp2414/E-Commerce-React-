import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ product, count, setCount }) => {
  const [qty, setQty] = useState(0);

  // Load quantity from localStorage
  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    const found = stored.find((item) => item.id === product.id);
    setQty(found ? found.quantity : 0);
  }, [product.id]);

  // Update localStorage cart and count
  const updateCart = (newQty) => {
    let cart = JSON.parse(localStorage.getItem("products")) || [];

    if (newQty <= 0) {
      cart = cart.filter((item) => item.id !== product.id);
    } else {
      const exists = cart.find((item) => item.id === product.id);
      if (exists) {
        cart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        cart.push({ ...product, quantity: newQty });
      }
    }

    localStorage.setItem("products", JSON.stringify(cart));
    setQty(newQty);
    setCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  const increase = () => updateCart(qty + 1);
  const decrease = () => updateCart(qty - 1);
  const delitem = () => updateCart(0);

  return (
    <div className="card" style={{ width: "18rem", margin: "1rem" }}>
      <Link
        to={`/Mobiles/${product.id}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={product.image}
          alt={product.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5>{product.title}</h5>
          <p className="card-text">
            {product.description.length > 80
              ? product.description.slice(0, 80) + "...."
              : product.description}
          </p>
          <p>₹{product.price}</p>
          <p>⭐ {product.rating} / 5</p>
        </div>
      </Link>

      {qty === 0 ? (
        <button className="btn btn-primary" onClick={increase}>
          Add to Cart
        </button>
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

export default ProductCard;
