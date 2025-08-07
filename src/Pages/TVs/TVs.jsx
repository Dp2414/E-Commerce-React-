// import React, { useContext, useEffect, useState } from 'react'
// // import db from './db.json'
// import TVsCard from './TVsCard';
// import axios from "axios";
// import { CartContext } from '../../Context/Context';
// const TVs = () => {
  
//   const { count, setCount } = useContext(CartContext);
//   let [tv, setTv] = useState([]);

//   async function jsontv() {
//     let response = await axios.get("http://localhost:8000/TVs");

//     try {
//       setTv(response.data);
//     } catch (err) {
//       console.log(err.message);
//     }
//   }

//   useEffect(() => {
//     jsontv();
//   }, []);

//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       {tv.map((TV) => (
//         <TVsCard key={TV.id} TV={TV} count={count} setCount={setCount} />
//       ))}
//     </div>
//   );
// };

// export default TVs



import React, { useContext, useEffect, useState } from "react";
// import db from './db.json'
import TVsCard from "./TVsCard";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";
const TVs = () => {

  let [tv, setTv] = useState([]);

  async function jsontv() {
    try {
      let response = await axios.get("/data.json");
      setTv(response.data.TVs);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    jsontv();
  }, []);



  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {tv.map((TV) => (
        <ProductCard
          key={TV.id}
          product={TV}
       
          category="TVs"
        />
      ))}
    </div>
  );
};

export default TVs;
