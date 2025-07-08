import React, { useState } from 'react'


const EleCard = (props) => {
  const { Ele, count, setCount } = props;
  if (!Ele) return null;
    const [state, setState] = useState(() => {
      let saved = JSON.parse(localStorage.getItem("products")) || [];
      return saved.some((item) => item.id === Ele.id) ? false : true; // false = already added
    });
    function addtocart() {
      let products = JSON.parse(localStorage.getItem("products")) || [];

      if (state) {
        setCount(count + 1);
        products.push(Ele); // Add to localStorage only on ADD
        localStorage.setItem("products", JSON.stringify(products));
        console.log(`There are ${count + 1} Movies in the basket `);
      } else if (!state) {
        setCount(count - 1);
        products = products.filter((item) => item.id !== Ele.id);
        localStorage.setItem("products", JSON.stringify(products));
        console.log(`There are ${count - 1} Movies in the basket `);
      }
      setState((prev) => !prev);
      console.log(state);

      //   // Toggle add/remove
    }
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
        src={Ele.image}
        alt={Ele.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{Ele.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{Ele.brand}</h6>
        <p className="card-text">{Ele.description}</p>
        <p>
          <strong>₹{Ele.price.toLocaleString()}</strong>
        </p>
        <p>⭐ {Ele.rating} / 5</p>
        <button className="btn btn-primary" onClick={addtocart}>
          {" "}
          {state ? "Add" : "Remove"}
        </button>
        <button className="btn btn-outline-secondary ms-2">Wishlist</button>
      </div>
    </div>
  );
}

export default EleCard

// import React, { useContext, useState, useEffect } from "react";
// import CartContext from "../../CartContext"; // Adjust path based on your structure

// const EleCard = ({ Ele }) => {
//   const { addToCart, removeFromCart, isInCart } = useContext(CartContext);
//   const [inCart, setInCart] = useState(false);

//   useEffect(() => {
//     if (Ele) {
//       setInCart(isInCart(Ele.id));
//     }
//   }, [Ele, isInCart]);

//   if (!Ele) return null;

//   const handleCartToggle = () => {
//     if (inCart) {
//       removeFromCart(Ele.id);
//     } else {
//       addToCart(Ele);
//     }
//     setInCart((prev) => !prev);
//   };

//   return (
//     <div
//       className="card"
//       style={{
//         width: "18rem",
//         margin: "1rem",
//         boxShadow: "0 0 10px rgba(0,0,0,0.1)",
//       }}
//     >
//       <img
//         src={Ele.image}
//         alt={Ele.title}
//         style={{ height: "200px", objectFit: "cover" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{Ele.title}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{Ele.brand}</h6>
//         <p className="card-text">{Ele.description}</p>
//         <p>
//           <strong>₹{Ele.price.toLocaleString()}</strong>
//         </p>
//         <p>⭐ {Ele.rating} / 5</p>
//         <button className="btn btn-primary" onClick={handleCartToggle}>
//           {inCart ? "Remove" : "Add"}
//         </button>
//         <button className="btn btn-outline-secondary ms-2">Wishlist</button>
//       </div>
//     </div>
//   );
// };

// export default EleCard;