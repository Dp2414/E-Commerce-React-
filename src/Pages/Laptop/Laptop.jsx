// import React, { useContext, useEffect, useState } from 'react'
// // import db from "./db.json";
// import LaptopCard from './LaptopCard';
// import axios from 'axios'
// import { CartContext } from '../../Context/Context';
// const Laptop = () => {
//    const { count, setCount } = useContext(CartContext);

//   let [laptop, setLaptop] = useState([]);


//   async function jsonlaptop() {
//     let response = await axios.get("http://localhost:8000/Laptops");
    
//     try {
//       setLaptop(response.data)
//     }
//     catch (err) {
//       console.log(err.message)
//     }

    
//   }

//   useEffect(() => {
//     jsonlaptop();
//   },[])
//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       {laptop.map((laptop) => (
//         <LaptopCard
//           key={laptop.id}
//           Laptop={laptop}
//           count={count}
//           setCount={setCount}
//         />
//       ))}
//     </div>
//   );
// };

// export default Laptop



import React, { useContext, useEffect, useState } from "react";
// import db from "./db.json";
import LaptopCard from "./LaptopCard";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const Laptop = () => {
  const { count, setCount } = useContext(CartContext);

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

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {laptop.map((laptop) => (
        <ProductCard
          key={laptop.id}
          product={laptop}
          count={count}
       
          setCount={setCount}
          increase={increase}
          decrease={decrease}
          delitem={delitem}
          category="Laptops"
        />
      ))}
    </div>
  );
};

export default Laptop;
