// import React, { useContext, useEffect, useState } from 'react'
// import ACCard from './ACCard';
// // import db from "./db.json"
// import axios from 'axios'
// import { CartContext } from '../../Context/Context';
// const AC = () => {
//    const { count, setCount } = useContext(CartContext);
//   const [ac, setAc] = useState([]);

//   async function jsonac() {
//     let response = await axios.get("http://localhost:8000/ACs");
//     try {
//       setAc(response.data);
//     } catch (err) {
//       console.error("❌ Error fetching mobiles:", err);
//     }
//   }

//   useEffect(() => {
//     jsonac();
//   }, []);
//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       {ac.map((AC) => (
//         <ACCard
//           key={AC.id}
//           AC={AC}
//           count={count}
//           setCount={setCount}
//         />
//       ))}
//     </div>
//   );
// };

// export default AC






import React, { useContext, useEffect, useState } from "react";
import ACCard from "./ACCard";
// import db from "./db.json"
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const AC = () => {
  const { count, setCount } = useContext(CartContext);
  const [ac, setAc] = useState([]);

  async function jsonac() {
    let response = await axios.get("http://localhost:8000/ACs");
    try {
      setAc(response.data);
    } catch (err) {
      console.error("❌ Error fetching mobiles:", err);
    }
  }

  useEffect(() => {
    jsonac();
  }, []);
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
      {ac.map((AC) => (
        <ProductCard
          key={AC.id}
          product={AC}
          count={count}
          setCount={setCount}
          increase={increase}
          decrease={decrease}
          delitem={delitem}
          category="Acs"
        />
      ))}
    </div>
  );
};

export default AC;




