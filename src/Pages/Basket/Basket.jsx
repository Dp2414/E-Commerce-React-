// import React, { useContext, useEffect, useState } from "react";
// import './Basket.css'
// import { CartContext } from "../../Context/Context";

// const Basket = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const { setCount } = useContext(CartContext);

//   // Load from localStorage when page loads
//   useEffect(() => {
//     const products = JSON.parse(localStorage.getItem("products")) || [];
//     setCartItems(products);
//   }, []);
//   // in CartContext provider (or Context.js)
//   const addToCart = (product) => {
//     setCartItems((prev) => {
//       const exists = prev.find((item) => item.id === product.id);
//       if (exists) {
//         return prev.map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity + 1 }
//             : item
//         );
//       } else {
//         return [...prev, { ...product, quantity: 1 }];
//       }
//     });
//   };

//   const removeFromCart = (product) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   // function removeFromCart(id) {
//   //   const updatedCart = cartItems.filter((item) => item.id !== id);
//   //   setCartItems(updatedCart);
//   //   localStorage.setItem("products", JSON.stringify(updatedCart));
//   //   setCount(updatedCart.length); // Update count
//   // }
//   const subtotal = cartItems.reduce((acc, item) => acc + item.price, 0);
//   const tax = subtotal * 0.18;
//   const total = subtotal + tax;

//   if (cartItems.length === 0) {
//     return <h3 className="text-center my-5">🛒 Your basket is empty</h3>;
//   }

//   return (
//     <div className="container-fluid my-4">
//       <h2>Your Cart ({cartItems.length} items)</h2>
//       <div className="flex ">
//         <div className="row d-flex flex-wrap" style={{ width: "70%" }}>
//           {cartItems.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img
//                   src={item.image}
//                   className="card-img-top"
//                   alt={item.title}
//                   style={{
//                     height: "200px",
//                     objectFit: "cover",
//                   }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <p className="card-text">
//                     {item.description.length > 80
//                       ? item.description.slice(0, 80) + "..."
//                       : item.description}
//                   </p>
//                   <p>
//                     <strong>₹{item.price.toLocaleString()}</strong>
//                   </p>
//                   {/* <p>⭐ {item.rating} / 5</p> */}
//                   <p>
//                     {"⭐".repeat(Math.floor(item.rating))} ({item.rating} / 5)
//                   </p>

//                   <button
//                     className="btn btn-danger"
//                     onClick={() => removeFromCart(item.id)}
//                   >
//                     Remove
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="border-top billing">
//           <h3>Billing Details</h3>
//           <div>
//             {cartItems.map((item) => (
//               <h6 key={item.id}>
//                 {item.title} -₹{item.price}
//               </h6>
//             ))}
//           </div>
//           <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
//           <p>GST (18%): ₹{tax.toFixed(2)}</p>
//           <h4>Total: ₹{total.toFixed(2)}</h4>
//           <button className="btn btn-success mt-3">Place Order</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Basket;


// import React, { useContext, useState, useEffect } from "react";
// import { CartContext } from "../../Context/Context";
// import "./Basket.css";

// const Basket = () => {
//   const { setCount } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);

//   // Load cart from localStorage and initialize quantity
//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("products")) || [];

//     // Ensure every item has a quantity (defaults to 1)
//     const updated = saved.map((item) =>
//       item.quantity ? item : { ...item, quantity: 1 }
//     );

//     setCartItems(updated);
//   }, []);

//   // Update localStorage and cart count whenever cartItems change
//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(cartItems));

//     const totalQuantity = cartItems.reduce(
//       (acc, item) => acc + item.quantity,
//       0
//     );
//     setCount(totalQuantity);
//   }, [cartItems, setCount]);

//   const addToCart = (product) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const removeFromCart = (product) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const tax = subtotal * 0.18;
//   const total = subtotal + tax;

//   if (cartItems.length === 0) {
//     return <h3 className="text-center my-5">🛒 Your basket is empty</h3>;
//   }

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
//         src={mobiles.image}
//         alt={mobiles.title}
//         style={{ height: "200px", objectFit: "cover" }}
//       />
//       <div className="card-body">
//         <h5 className="card-title">{mobiles.title}</h5>
//         <h6 className="card-subtitle mb-2 text-muted">{mobiles.brand}</h6>
//         <p className="card-text">{mobiles.description}</p>
//         <p>
//           <strong>₹{mobiles.price.toLocaleString()}</strong>
//         </p>
//         <p>⭐ {mobiles.rating} / 5</p>

//         {qty === 0 ? (
//           <button className="btn btn-primary" onClick={increase}>
//             Add to Cart
//           </button>
//         ) : (
//           <div className="qty-controls">
//             <button className="btn btn-light" onClick={decrease}>
//               −
//             </button>
//             <span style={{ margin: "0 0.5rem" }}>{qty}</span>
//             <button className="btn btn-light" onClick={increase}>
//               +
//             </button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Basket;




// import { useContext, useEffect, useState } from "react";
// import QuizModal from "./QuizModal.jsx";
// import { CartContext } from "../../Context/Context";
// import SaveForLater from "./SaveForLater"; // ✅ imported

// const Basket = () => {
//   const [showQuiz, setShowQuiz] = useState(false);
//   const [finalAmount, setFinalAmount] = useState(null);
//   const [orderPlaced, setOrderPlaced] = useState(false);

//   const { setCount } = useContext(CartContext);
//   const [cartItems, setCartItems] = useState([]);
//   const [savelater, setSavelater] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("products")) || [];
//     const withQty = saved.map((item) =>
//       item.quantity ? item : { ...item, quantity: 1 }
//     );
//     setCartItems(withQty);

//     const savedLater = JSON.parse(localStorage.getItem("savedForLater")) || [];
//     setSavelater(savedLater);
//   }, []);

//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(cartItems));
//     const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     setCount(totalQty);
//   }, [cartItems, setCount]);

//   const increase = (product) => {
//     setCartItems((prev) =>
//       prev.map((item) =>
//         item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
//       )
//     );
//   };

//   const decrease = (product) => {
//     setCartItems((prev) =>
//       prev
//         .map((item) =>
//           item.id === product.id
//             ? { ...item, quantity: item.quantity - 1 }
//             : item
//         )
//         .filter((item) => item.quantity > 0)
//     );
//   };

//   const saveforlater = (product) => {
//     removeFromCart(product);

//     if (!savelater.find((item) => item.id === product.id)) {
//       const updated = [...savelater, product];
//       setSavelater(updated);
//       localStorage.setItem("savedForLater", JSON.stringify(updated));
//     }
//   };

//   const removeFromCart = (product) => {
//     setCartItems((prev) => prev.filter((item) => item.id !== product.id));
//   };

//   const subtotal = cartItems.reduce(
//     (sum, item) => sum + item.price * item.quantity,
//     0
//   );
//   const tax = subtotal * 0.18;
//   const total = subtotal + tax;

//   const handlePlaceOrderClick = () => {
//     setShowQuiz(true);
//   };

//   const handleQuizSubmit = (score) => {
//     let discount = 0;
//     if (score >= 4) discount = 0.3;
//     else if (score >= 3) discount = 0.2;
//     else if (score >= 2) discount = 0.1;

//     const discounted = total - total * discount;
//     setFinalAmount(discounted);
//     setOrderPlaced(true);
//     setCartItems([]);
//     localStorage.setItem("products", JSON.stringify([]));
//   };

//   return (
//     <div className="container-fluid my-4">
//       <h2>Your Cart ({cartItems.length} items)</h2>
//       <div className="row">
//         <div className="col-md-8">
//           {cartItems.map((item) => (
//             <div key={item.id} className="card basketcard mb-3">
//               <div className="row g-0">
//                 <div className="col-md-4">
//                   <img
//                     src={item.image}
//                     className="img-fluid rounded-start basketimages"
//                     alt={item.title}
//                   />
//                 </div>
//                 <div className="col-md-8">
//                   <div className="card-body cardbody">
//                     <h5 className="card-title">{item.title}</h5>
//                     <h6 className="text-muted">{item.brand}</h6>
//                     <p>
//                       <strong>₹{item.price.toLocaleString()}</strong>
//                     </p>
//                     <p>⭐ {item.rating} / 5</p>

//                     <div className="d-flex justify-content-between">
//                       <div className="classqantity">
//                         <button
//                           className="btn btn-outline-secondary"
//                           onClick={() => decrease(item)}
//                         >
//                           –
//                         </button>
//                         <span className="mx-3">{item.quantity}</span>
//                         <button
//                           className="btn btn-outline-secondary"
//                           onClick={() => increase(item)}
//                         >
//                           +
//                         </button>
//                       </div>

//                       <button
//                         className="btn btn-warning"
//                         onClick={() => saveforlater(item)}
//                       >
//                         Save For Later
//                       </button>

//                       <button
//                         className="btn btn-danger"
//                         onClick={() => removeFromCart(item)}
//                       >
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//         <div className="col-md-4">
//           <div className="border-top billing mt-4">
//             <h3>Billing Details</h3>
//             {cartItems.map((item) => (
//               <p key={item.id}>
//                 {item.title} - ₹{item.price} × {item.quantity}
//               </p>
//             ))}
//             <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
//             <p>GST (18%): ₹{tax.toFixed(2)}</p>
//             <h4>Total: ₹{total.toFixed(2)}</h4>
//             <button className="btn btn-success mt-3" onClick={handleQuizSubmit}>
//               Place Order
//             </button>
//           </div>
//         </div>
//       </div>

//       <QuizModal
//         show={showQuiz}
//         onClose={() => setShowQuiz(false)}
//         onSubmit={handleQuizSubmit}
//       />
//     </div>
//   );
// };

// export default Basket;



import React, { useContext, useState, useEffect } from "react";
import { CartContext } from "../../Context/Context";
import "./Basket.css";
import SaveForLater from "./SaveForLater";
import QuizModal from "./QuizModal";

const Basket = () => {
  const { setCount } = useContext(CartContext);
  const [cartItems, setCartItems] = useState([]);
  const [savelater, setSavelater] = useState([]);
  const [showQuiz, setShowQuiz] = useState(false);
  const [finalAmount, setFinalAmount] = useState(null);
  const [orderPlaced, setOrderPlaced] = useState(false);

  // Load cart and saved items from localStorage
  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("products")) || [];
    const withQty = saved.map((item) =>
      item.quantity ? item : { ...item, quantity: 1 }
    );
    setCartItems(withQty);

    const savedLater = JSON.parse(localStorage.getItem("savedForLater")) || [];
    setSavelater(savedLater);
  }, []);

  // Sync cart changes to localStorage and update count
  useEffect(() => {
    localStorage.setItem("products", JSON.stringify(cartItems));
    const totalQty = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalQty);
  }, [cartItems, setCount]);

  const increase = (product) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decrease = (product) => {
    setCartItems((prev) =>
      prev
        .map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  function saveforlater(product) {
    removeFromCart(product);

    if (!savelater.find((item) => item.id === product.id)) {
      const updated = [...savelater, product];
      setSavelater(updated);
      localStorage.setItem("savedForLater", JSON.stringify(updated)); // 🔴 IMMEDIATE UPDATE
    }
  }

  const removeFromCart = (product) => {
    setCartItems((prev) => prev.filter((item) => item.id !== product.id));
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );
  const tax = subtotal * 0.18;
  const total = subtotal + tax;

  const handlePlaceOrderClick = () => {
    setShowQuiz(true);
  };

  const handleQuizSubmit = (score) => {
    let discount = 0;
    if (score >= 4) discount = 0.5;
    else if (score >= 3) discount = 0.2;
    else if (score >= 2) discount = 0.1;

    const discounted = total - total * discount;
    setFinalAmount(discounted);
    setOrderPlaced(true);
    setCartItems([]); // Empty cart after order
    localStorage.setItem("products", JSON.stringify([]));
  };

  return (
    <>
      <div className="container-fluid my-4">
        {
          <div>
            <h2>Your Cart ({cartItems.length} items)</h2>
            <div className="sidebill">
              <div className="column">
                {cartItems.map((item) => (
                  <div key={item.id} className="row-md-4 mb-4">
                    <div className="card basketcard">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="basketimages"
                      />
                      <div className="card-body cardbody">
                        <h5 className="card-title">{item.title}</h5>
                        <h6 className="text-muted">{item.brand}</h6>
                        <p>
                          <strong>₹{item.price.toLocaleString()}</strong>
                        </p>
                        <p>⭐ {item.rating} / 5</p>

                        <div className="d-flex justify-content-between">
                          <div className="classqantity">
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => decrease(item)}
                            >
                              –
                            </button>
                            <span className="mx-3">{item.quantity}</span>
                            <button
                              className="btn btn-outline-secondary"
                              onClick={() => increase(item)}
                            >
                              +
                            </button>
                          </div>

                          <button
                            className="btn btn-warning"
                            onClick={() => saveforlater(item)}
                          >
                            Save For Later
                          </button>

                          <button
                            className="btn btn-danger"
                            onClick={() => removeFromCart(item)}
                          >
                            Delete
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-top billing mt-4">
                <h3>Billing Details</h3>
                {cartItems.map((item) => (
                  <p key={item.id}>
                    {item.title} - ₹{item.price} × {item.quantity}
                  </p>
                ))}
                <p>Subtotal: ₹{subtotal.toLocaleString()}</p>
                <p>GST (18%): ₹{tax.toFixed(2)}</p>
                <h4>Total: ₹{total.toFixed(2)}</h4>
                <button
                  className="btn btn-success mt-3"
                  onClick={handlePlaceOrderClick}
                >
                  Place Order
                </button>
                {orderPlaced && (
                  <div className="alert alert-success mt-4">
                    ✅ Order placed successfully! Final Amount: ₹
                    {finalAmount.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          </div>
        }

        {/* ✅ Always show saved for later section */}
        <SaveForLater
          savelater={savelater}
          setSavelater={setSavelater}
          setCartItems={setCartItems}
        />
      </div>
      {showQuiz && (
        <QuizModal
          show={showQuiz}
          onClose={() => setShowQuiz(false)}
          onSubmit={handleQuizSubmit}
        />
      )}
    </>
  );
};

export default Basket;