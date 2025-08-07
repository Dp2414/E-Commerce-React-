


import React, { useContext, useEffect, useState } from "react";

// import db from "./db.json";
import EleCard from "./EleCard";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const Ele = () => {

  const [electronics, setEle] = useState([]);

  async function jsonele() {
    try {
      let response = await axios.get("/data.json");
      setEle(response.data.Electronics);
    } catch (err) {
      console.error("❌ Error fetching Electronics:", err);
    }
  }

  useEffect(() => {
    jsonele();
  }, []);
  
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {electronics.map((Ele) => (
        <ProductCard
          key={Ele.id}
          product={Ele}
         
          category="Electronics"
        />
      ))}
    </div>
  );
};

export default Ele;
