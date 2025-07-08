import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("cartCount");
    return saved ? parseInt(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("cartCount", count);
  }, [count]);

  return (
    <CartContext.Provider value={{ count, setCount }}>
      {children}
    </CartContext.Provider>
  );
};
