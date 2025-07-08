

// import React, { useEffect, useState } from "react";



// const MobileCard = (props) => {


  



//   const { mobile, count, setCount } = props;
//   if (!mobile) {
//     console.log("❌ mobile not passed properly");
//     return null;
//   }

//   const [state, setState] = useState(() => {
//     let saved = JSON.parse(localStorage.getItem("products")) || [];
//     return saved.some((item) => item.id === mobile.id) ? false : true; // ✅ FIXED
//   });

//   function addtocart() {
//     let products = JSON.parse(localStorage.getItem("products")) || [];

//     if (state) {
//       setCount(count + 1);
//       products.push(mobile); // ✅ ADD
//       localStorage.setItem("products", JSON.stringify(products));
//       console.log(`There are ${count + 1} items in the cart`);
//     } else if (!state) {
//       setCount(count - 1);
//       products = products.filter((item) => item.id !== mobile.id);
//       localStorage.setItem("products", JSON.stringify(products));
//       console.log(`There are ${count - 1} items in the cart`);
//     }

//     setState((prev) => !prev);
//   }

//   return (
   
    
//       <div
//         className="card"
//         style={{
//           width: "18rem",
//           margin: "1rem",
//           boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <img
//           src={mobile.image}
//           alt={mobile.title}
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{mobile.title}</h5>
//           <h6 className="card-subtitle mb-2 text-muted">{mobile.brand}</h6>
//           <p className="card-text">{mobile.description}</p>
//           <p>
//             <strong>₹{mobile.price.toLocaleString()}</strong>
//           </p>
//           <p>⭐ {mobile.rating} / 5</p>
//           <button className="btn btn-primary" onClick={addtocart}>
//             {state ? "Add" : "Remove"}
//           </button>
//           <button className="btn btn-outline-secondary ms-2">Wishlist</button>
//         </div>
//       </div>
  
//   );
// };

// export default MobileCard;



// ------------------------------Json server Data -----------------------\



// import React, { useEffect, useState } from "react";
// import axios from "axios";


// const MobileCard = (props) => {


//   const [jsonmobile, setJsonmobile] = useState([]);

//   async function mobileserver() {
//     let response = await axios.get("http://localhost:8000/Mobiles");
//     let displaymobiles = response.data;
//     // console.log(displaymobiles);
//     setJsonmobile(displaymobiles);
//     // console.log(jsonmobile)
//   }
//   // console.log(jsonmobile);

//   useEffect(() => {
//     mobileserver();
//   }, []);



//   const { count, setCount } = props;
//   if (!jsonmobile) {
//     console.log("❌ mobile not passed properly");
//     return null;
//   }

//   const [state, setState] = useState(() => {
//     let saved = JSON.parse(localStorage.getItem("products")) || [];
//     return saved.some((item) => item.id === jsonmobile.id) ? false : true; // ✅ FIXED
//   });

//   function addtocart() {
//     let products = JSON.parse(localStorage.getItem("products")) || [];

//     if (state) {
//       setCount(count + 1);
//       products.push(jsonmobile); // ✅ ADD
//       localStorage.setItem("products", JSON.stringify(products));
//       console.log(`There are ${count + 1} items in the cart`);
//     } else if (!state) {
//       setCount(count - 1);
//       products = products.filter((item) => item.id !== jsonmobile.id);
//       localStorage.setItem("products", JSON.stringify(products));
//       console.log(`There are ${count - 1} items in the cart`);
//     }

//     setState((prev) => !prev);
//   }

//   return (
   
    
//       <div
//         className="card"
//         style={{
//           width: "18rem",
//           margin: "1rem",
//           boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//         }}
//       >
//         <img
//           src={jsonmobile.image}
//           alt={jsonmobile.title}
//           style={{ height: "200px", objectFit: "cover" }}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{jsonmobile.title}</h5>
//           <h6 className="card-subtitle mb-2 text-muted">{jsonmobile.brand}</h6>
//           <p className="card-text">{jsonmobile.description}</p>
//           <p>
//             <strong>₹{jsonmobile.price.toLocaleString()}</strong>
//           </p>
//           <p>⭐ {jsonmobile.rating} / 5</p>
//           <button className="btn btn-primary" onClick={addtocart}>
//             {state ? "Add" : "Remove"}
//           </button>
//           <button className="btn btn-outline-secondary ms-2">Wishlist</button>
//         </div>
//       </div>
  
//   );
// };

// export default MobileCard;




// --------------------

import React, { useState } from "react";

const MobileCard = ({ mobile, count, setCount }) => {
  const [inCart, setInCart] = useState(() => {
    let products = JSON.parse(localStorage.getItem("products")) || [];
    return products.some((item) => item.id === mobile.id);
  });

  const toggleCart = () => {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    if (!inCart) {
      products.push(mobile);
      setCount(count + 1);
    } else {
      products = products.filter((item) => item.id !== mobile.id);
      setCount(count - 1);
    }

    localStorage.setItem("products", JSON.stringify(products));
    setInCart(!inCart);
  };

  return (
    <div
      className="card"
      style={{
        width: "18rem",
        margin: "1rem",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      }}
    >
      <img
        src={mobile.image}
        alt={mobile.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{mobile.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{mobile.brand}</h6>
        <p className="card-text">{mobile.description}</p>
        <p>
          <strong>₹{mobile.price.toLocaleString()}</strong>
        </p>
        <p>⭐ {mobile.rating} / 5</p>
        <button className="btn btn-primary" onClick={toggleCart}>
          {inCart ? "Remove" : "Add"}
        </button>
        <button className="btn btn-outline-secondary ms-2">Wishlist</button>
      </div>
    </div>
  );
};

export default MobileCard;
