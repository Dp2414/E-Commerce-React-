


import React, { useContext, useEffect, useState } from "react";
// import db from "./db.json";
import LaptopCard from "./LaptopCard";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const Laptop = () => {
  // const { count, setCount } = useContext(CartContext);

  let [laptop, setLaptop] = useState([]);

  async function jsonlaptop() {
    let response = await axios.get("http://localhost:8000/Laptops");

    try {
      setLaptop(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    jsonlaptop();
  }, []);


  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {laptop.map((laptop) => (
        <ProductCard
          key={laptop.id}
          product={laptop}
          
          category="Laptops"
        />
      ))}
    </div>
  );
};

export default Laptop;
