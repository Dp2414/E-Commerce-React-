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

  const [ac, setAc] = useState([]);

  async function jsonac() {
    try {
      let response = await axios.get("/data.json");
      setAc(response.data.ACs);
    } catch (err) {
      console.error("❌ Error fetching ACs:", err);
    }
  }

  useEffect(() => {
    jsonac();
  }, []);

  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {ac.map((AC) => (
        <ProductCard
          key={AC.id}
          product={AC}
         
          category="Acs"
        />
      ))}
    </div>
  );
};

export default AC;




