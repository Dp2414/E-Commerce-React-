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
    try {
      let response = await axios.get("/data.json");
      setCloth(response.data.Clothing);
    } catch (err) {
      console.error("❌ Error fetching Clothing:", err);
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
