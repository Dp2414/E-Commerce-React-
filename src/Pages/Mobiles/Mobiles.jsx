// import React from 'react'
// import db from './db.json'
// import MobileCard from './MobileCard';
// import "./Mobile.css";
// const Mobiles = ({ count, setCount }) => {
//   return (
//     <div className="sidecheckbox">
//       <div className="box ">
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>{" "}
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//         <label htmlFor="">
//           <input type="checkbox" name="" id="" />
//         </label>
//         <br />
//       </div>
//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {db.Mobiles.map((mobile) => (
//           <MobileCard
//             key={mobile.id}
//             mobile={mobile}
//             count={count}
//             setCount={setCount}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobiles



// import React, { useState } from "react";
// import db from "./db.json";
// import MobileCard from "./MobileCard";
// import "./Mobile.css";

// const Mobiles = ({ count, setCount }) => {
//   const [selectedBrands, setSelectedBrands] = useState([]);

//   const allBrands = Array.from(
//     new Set(db.Mobiles.map((mobile) => mobile.brand))
//   );

//   const handleCheckboxChange = (brand) => {
//     if (selectedBrands.includes(brand)) {
//       setSelectedBrands(selectedBrands.filter((b) => b !== brand));
//     } else {
//       setSelectedBrands([...selectedBrands, brand]);
//     }
//   };

//   const filteredMobiles =
//     selectedBrands.length === 0
//       ? db.Mobiles
//       : db.Mobiles.filter((mobile) => selectedBrands.includes(mobile.brand));

//   return (
//     <div className="sidecheckbox">
//       <div className="box">
//         {allBrands.map((brand) => (
//           <label key={brand}>
//             <input
//               type="checkbox"
//               checked={selectedBrands.includes(brand)}
//               onChange={() => handleCheckboxChange(brand)}
//             />
//             {brand}
           
//           </label>
          
//         ))}
//       </div>

//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {filteredMobiles.map((mobile) => (
//           <MobileCard
//             key={mobile.id}
//             mobile={mobile}
//             count={count}
//             setCount={setCount}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobiles;




// import React, { useEffect, useState } from "react";
// import db from "./db.json";
// import MobileCard from "./MobileCard";
// import "./Mobile.css";
// import axios from "axios";

// const Mobiles = ({ count, setCount }) => {
//   const [selectedBrand, setSelectedBrand] = useState("");


//   const allBrands = [...new Set(db.Mobiles.map((m) => m.brand))];

//   const filtered = selectedBrand
//     ? db.Mobiles.filter((m) => m.brand === selectedBrand)
//     : db.Mobiles;

//   return (
//     <div className="sidecheckbox">
//       <div className="box">
//         {allBrands.map((brand) => (
//           <label key={brand}>
//             <input
//               type="radio"
//               name="brand"
//               value={brand}
//               checked={selectedBrand === brand}
//               onChange={() => setSelectedBrand(brand)}
//             />
//             {brand}
//           </label>
//         ))}
//         <label>
//           <input
//             type="radio"
//             name="brand"
//             value=""
//             checked={selectedBrand === ""}
//             onChange={() => setSelectedBrand("")}
//           />
//           All
//         </label>
//       </div>

//       <div
//         style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//       >
//         {filtered.map((mobile) => (
//           <MobileCard
//             key={mobile.id}
//             mobile={mobile}
//             count={count}
//             setCount={setCount}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Mobiles;


// -----------------------------------------------------------


// import React, { useContext, useEffect, useState } from "react";
// import axios from "axios";
// import MobileCard from "./MobileCard";
// import "./Mobile.css";
// import { CartContext } from "../../Context/Context";

// const Mobiles = () => {
//    const { count, setCount } = useContext(CartContext);
//   const [mobiles, setMobiles] = useState([]);


//   async function jsonmobile() {
//     let response = await axios.get("http://localhost:8000/Mobiles")
//       try {
//         setMobiles(response.data);
//       }
//       catch(err){
//         console.error("❌ Error fetching mobiles:", err);
//       }
    
//   }

//   useEffect(() => {
//     jsonmobile();
//   }, []);

//   return (
//     <div
//       style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
//     >
//       {mobiles.map((mobile) => (
//         <MobileCard
//           key={mobile.id}
//           mobile={mobile}
//           count={count}
//           setCount={setCount}
//         />
//       ))}
//     </div>
//   );
// };

// export default Mobiles;




// --------------------------quantity only card changing --------------------




import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
// import MobileCard from "./MobileCard";
import "./Mobile.css";
import { CartContext } from "../../Context/Context";
import ProductCard from "../../ProductCard";

const Mobiles = () => {
  const { count, setCount } = useContext(CartContext);
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
      {mobiles.map((mobile) => (
        <ProductCard
          key={mobile.id}
          product={mobile}
          count={count}
          setCount={setCount}
          increase={increase}
          decrease={decrease}
          delitem={delitem}
        />
      ))}
    </div>
  );
};

export default Mobiles;





// --------------------Quantity------------------------------

// Pages/Mobiles/Mobiles.js
// import React, { useContext, useEffect, useState } from 'react';
// import ProductCard from '../../ProductCard';
// import { CartContext } from '../../Context/Context';

// const Mobiles = () => {
//   const { count, setCount } = useContext(CartContext);
//   const [items, setItems] = useState([]);

//   useEffect(() => {
//     fetch('http://localhost:8000/Mobiles')  // your JSON server endpoint
//       .then(res => res.json())
//       .then(data => setItems(data))
//       .catch(err => console.error(err));
//   }, []);

//   return (
//     <div className="products-grid">
//       {items.map(item => (
//         <ProductCard
//           key={item.id}
//           item={item}
//           count={count}
//           setCount={setCount}
//         />
//       ))}
//     </div>
//   );
// };

// export default Mobiles;
