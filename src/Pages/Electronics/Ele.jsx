
// import React, { useContext, useEffect, useState } from "react";

// // import db from "./db.json";
// import EleCard from './EleCard';
// import axios from "axios";
// import { CartContext } from "../../Context/Context";
// const Ele = () => {
//    const { count, setCount } = useContext(CartContext);
//   const [electronics, setEle] = useState([]);

//   async function jsonele() {
//     let response = await axios.get("http://localhost:8000/Electronics");
//     try {
//       setEle(response.data);
//     } catch (err) {
//       console.error("❌ Error fetching mobiles:", err);
//     }
//   }

//   useEffect(() => {
//     jsonele();
//   }, []);
//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       {electronics.map((Ele) => (
//         <EleCard key={Ele.id} Ele={Ele} count={count} setCount={setCount} />
//       ))}
//     </div>
//   );
// };

// export default Ele




import React, { useContext, useEffect, useState } from "react";

// import db from "./db.json";
import EleCard from "./EleCard";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const Ele = () => {
  const { count, setCount } = useContext(CartContext);
  const [electronics, setEle] = useState([]);

  async function jsonele() {
    let response = await axios.get("http://localhost:8000/Electronics");
    try {
      setEle(response.data);
    } catch (err) {
      console.error("❌ Error fetching mobiles:", err);
    }
  }

  useEffect(() => {
    jsonele();
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
      {electronics.map((Ele) => (
        <ProductCard
          key={Ele.id}
          product={Ele}
          count={count}
          setCount={setCount}
          increase={increase}
          decrease={decrease}
          delitem={delitem}
          category="Electronics"
        />
      ))}
    </div>
  );
};

export default Ele;
