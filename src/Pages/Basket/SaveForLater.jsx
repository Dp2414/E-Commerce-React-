// import React from "react";
// import "./basket.css";

// function SaveForLater({
//   savelater,
//   setSavelater,
//   setCartItems }) {
//     const moveToCart = (item) => {
//         let products = JSON.parse(localStorage.getItem("products")) || [];
      
//         const exists = products.find((p) => p.id === item.id);
//         if (!exists) {
//           const updatedProducts = [...products, { ...item, quantity: 1 }];
//           localStorage.setItem("products", JSON.stringify(updatedProducts));
//           setCartItems(updatedProducts); // 🔥 THIS updates the UI
//         }
      
//         const updated = savelater.filter((i) => i.id !== item.id);
//         setSavelater(updated);
//         localStorage.setItem("savedForLater", JSON.stringify(updated));
//       };
      

//   const removeItem = (item) => {
//     const updated = savelater.filter((i) => i.id !== item.id);
//     setSavelater(updated);
//     localStorage.setItem("savedForLater", JSON.stringify(updated));
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Saved for Later</h3>
//       <div className="row">
//         {savelater.length === 0 ? (
//           <p className="text-muted">No saved items.</p>
//         ) : (
//           savelater.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ height: 200, objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <h6 className="text-muted">{item.brand}</h6>
//                   <p>
//                     <strong>₹{item.price}</strong>
//                   </p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => moveToCart(item)}
//                   >
//                     Move to Cart
//                   </button>
//                   <button
//                     className="btn btn-danger mx-3"
//                     onClick={() => removeItem(item)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default SaveForLater;

// import React, { useState, useEffect } from "react";
// import "./basket.css";

// function SaveForLater() {
//   const [savelater, setSavelater] = useState([]);

//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("savedForLater")) || [];
//     setSavelater(saved);
//   }, []);

//   const moveToCart = (item) => {
//     let products = JSON.parse(localStorage.getItem("products")) || [];

//     const exists = products.find((p) => p.id === item.id);
//     if (!exists) {
//       products.push({ ...item, quantity: 1 });
//       localStorage.setItem("products", JSON.stringify(products));
//     }

//     const updated = savelater.filter((i) => i.id !== item.id);
//     setSavelater(updated);
//     localStorage.setItem("savedForLater", JSON.stringify(updated));
//   };

//   const removeItem = (item) => {
//     const updated = savelater.filter((i) => i.id !== item.id);
//     setSavelater(updated);
//     localStorage.setItem("savedForLater", JSON.stringify(updated));
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Saved for Later</h3>
//       <div className="row">
//         {savelater.length === 0 ? (
//           <p className="text-muted">No saved items.</p>
//         ) : (
//           savelater.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ height: 200, objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <h6 className="text-muted">{item.brand}</h6>
//                   <p>
//                     <strong>₹{item.price}</strong>
//                   </p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => moveToCart(item)}
//                   >
//                     Move to Cart
//                   </button>
//                   <button
//                     className="btn btn-danger mx-3"
//                     onClick={() => removeItem(item)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }

// export default SaveForLater;



// import React, { useContext, useEffect } from "react";
// import { CartContext } from "../../Context/Context";
// import "./basket.css";

// function SaveForLater({ savelater, setSavelater, setCartItems }) {
//   const { setCount } = useContext(CartContext);


//   useEffect(() => {
//     const saved = JSON.parse(localStorage.getItem("savedForLater")) || [];
//     setSavelater(saved);
//   }, [setSavelater]);

//   const moveToCart = (item) => {
//     let products = JSON.parse(localStorage.getItem("products")) || [];

//     const exists = products.find((p) => p.id === item.id);
//     if (!exists) {
//       const updatedProducts = [...products, { ...item, quantity: 1 }];
//       localStorage.setItem("products", JSON.stringify(updatedProducts));
//       setCartItems(updatedProducts);
//       setCount((prev) => prev + 1);
//     }

//     const updated = savelater.filter((i) => i.id !== item.id);
//     setSavelater(updated);
//     localStorage.setItem("savedForLater", JSON.stringify(updated));
//   };

//   const removeItem = (item) => {
//     const updated = savelater.filter((i) => i.id !== item.id);
//     setSavelater(updated);
//     localStorage.setItem("savedForLater", JSON.stringify(updated));
//   };

//   return (
//     <div className="container mt-5">
//       <h3>Saved for Later</h3>
//       <div className="row">
//         {
//           savelater.map((item) => (
//             <div key={item.id} className="col-md-4 mb-4">
//               <div className="card">
//                 <img
//                   src={item.image}
//                   alt={item.title}
//                   style={{ height: 200, objectFit: "cover" }}
//                 />
//                 <div className="card-body">
//                   <h5 className="card-title">{item.title}</h5>
//                   <h6 className="text-muted">{item.brand}</h6>
//                   <p>
//                     <strong>₹{item.price}</strong>
//                   </p>
//                   <button
//                     className="btn btn-primary"
//                     onClick={() => moveToCart(item)}
//                   >
//                     Move to Cart
//                   </button>
//                   <button
//                     className="btn btn-danger mx-3"
//                     onClick={() => removeItem(item)}
//                   >
//                     Delete
//                   </button>
//                 </div>
//               </div>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   );
// }

// export default SaveForLater;

// SaveForLater.jsx
import React, { useContext, useEffect } from "react";
import { CartContext } from "../../Context/Context";
import "./basket.css";

function SaveForLater({ savelater, setSavelater, setCartItems }) {
  const { setCount } = useContext(CartContext);

 
  useEffect(() => {

      const saved = JSON.parse(localStorage.getItem("savedForLater")) || [];
      setSavelater(saved);
    
  }, []);

  const moveToCart = (item) => {
    let products = JSON.parse(localStorage.getItem("products")) || [];

    const exists = products.find((p) => p.id === item.id);
    if (!exists) {
      const updatedProducts = [...products, { ...item, quantity: 1 }];
      localStorage.setItem("products", JSON.stringify(updatedProducts));
      setCartItems(updatedProducts);
      setCount((prev) => prev + 1);
    }

    const updated = savelater.filter((i) => i.id !== item.id);
    setSavelater(updated);
    localStorage.setItem("savedForLater", JSON.stringify(updated));
  };

  const removeItem = (item) => {
    const updated = savelater.filter((i) => i.id !== item.id);
    setSavelater(updated);
    localStorage.setItem("savedForLater", JSON.stringify(updated));
  };

  return (
    <div className="container mt-5">
      <h3>Saved for Later</h3>
      <div className="row">
        {savelater.length === 0 ? (
          <p className="text-muted">No saved items.</p>
        ) : (
          savelater.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img
                  src={item.image}
                  alt={item.title}
                  style={{ height: 200, objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{item.title}</h5>
                  <h6 className="text-muted">{item.brand}</h6>
                  <p>
                    <strong>₹{item.price}</strong>
                  </p>
                  <button
                    className="btn btn-primary"
                    onClick={() => moveToCart(item)}
                  >
                    Move to Cart
                  </button>
                  <button
                    className="btn btn-danger mx-3"
                    onClick={() => removeItem(item)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default SaveForLater;
