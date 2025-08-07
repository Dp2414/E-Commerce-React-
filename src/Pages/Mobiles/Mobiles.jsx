


import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import MobileCard from "./MobileCard";
import "./Mobile.css";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";


const Mobiles = () => {
  const { count, setCount} = useContext(CartContext);
  const [mobiles, setMobiles] = useState([]);

  async function jsonmobile() {
    let response = await axios.get("http://localhost:8000/Mobiles");
    try {
      setMobiles(response.data);
    } catch (err) {
      console.error("❌ Error fetching mobiles:", err);
    }
  }

  useEffect(() => {
    jsonmobile();
  }, []);


  // const increase = () => {
  //   const newQty = qty + 1;
  //   setQty(newQty);
  //   updateCart(newQty);
  // };

  // const decrease = () => {
  //   const newQty = qty - 1;
  //   setQty(newQty);
  //   updateCart(newQty);
  // };

  // const delitem = () => {
  //   setQty(0);
  //   updateCart(0);
  // };

  return (
    <>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {mobiles.map((mobile) => (
          <ProductCard
            key={mobile.id}
            product={mobile}
         
          
            category="Mobiles"
          />
        ))}
       
      </div>
    </>
  );
};

export default Mobiles;