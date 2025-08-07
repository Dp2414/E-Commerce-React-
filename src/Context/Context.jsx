import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
const [count, setCount] = useState(() => {
  try {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    const total = cart.reduce((total, item) => total + (item.quantity || 0), 0);
    return isNaN(total) ? 0 : total;
  } catch (error) {
    return 0;
  }
});

  const [quantities, setQuantities] = useState(() => {
    // Initialize quantities from localStorage
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    const initialQuantities = {};
    cart.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    return initialQuantities;
  });

  const updateCart = (product, newQty) => {
     if (!product || !product.id || isNaN(newQty)) {
       console.error("Invalid parameters:", { product, newQty });
       return;
     }
    let cart = JSON.parse(localStorage.getItem("products")) || [];
    console.log("updateCart called with:", product, newQty);

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
    setQuantities((prev) => ({ ...prev, [product.id]: newQty }));
    setCount(cart.reduce((total, item) => total + item.quantity, 0));
      const newCount = cart.reduce(
        (total, item) => total + (item.quantity || 0),
        0
      );
      setCount(isNaN(newCount) ? 0 : newCount);
  };

  const clearCart = () => {
    localStorage.setItem("products", JSON.stringify([]));
    setQuantities({});
    setCount(0);
  };

  return (
    <CartContext.Provider
      value={{
        count,
        setCount,
        quantities,
        setQuantities,
        updateCart,
        clearCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
