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
  const { count, setCount } = useContext(CartContext);
  let [tv, setTv] = useState([]);

  async function jsontv() {
    let response = await axios.get("http://localhost:8000/TVs");

    try {
      setTv(response.data);
    } catch (err) {
      console.log(err.message);
    }
  }

  useEffect(() => {
    jsontv();
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
      {tv.map((TV) => (
        <ProductCard
          key={TV.id}
          product={TV}
          count={count}
          setCount={setCount}
          increase={increase}
          decrease={decrease}
          delitem={delitem}
          category="TVs"
        />
      ))}
    </div>
  );
};

export default TVs;
