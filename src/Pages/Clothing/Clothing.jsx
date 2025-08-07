//


import React, { useContext, useEffect, useState } from "react";
import ClothingCard from "./ClothingCard";
// import db from './db.json'
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const Clothing = () => {

  const [clothing, setCloth] = useState([]);

  async function jsoncloth() {
    let response = await axios.get("http://localhost:8000/Clothing");
    try {
      setCloth(response.data);
    } catch (err) {
      console.error("❌ Error fetching mobiles:", err);
    }
  }

  useEffect(() => {
    jsoncloth();
  }, []);
 
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {clothing.map((cloth) => (
        <ProductCard
          key={cloth.id}
          product={cloth}
         
          category="Clothing"
        />
      ))}
    </div>
  );
};

export default Clothing;
