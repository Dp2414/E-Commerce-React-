// ------------------main-------------------------

// import React, { useEffect, useState } from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Secondnav from './Components/SecondNav/Secondnav';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Mobiles from './Pages/Mobiles/Mobiles';
// import Laptop from './Pages/Laptop/Laptop';
// import Home from './Pages/Home/Home';

// import TVs from './Pages/TVs/TVs'
// import Basket from './Pages/Basket/Basket';
// import AC from './Pages/AC/AC';
// import Ele from './Pages/Electronics/Ele';
// import Clothing from './Pages/Clothing/Clothing';
// // import Apis from './Custom Hooks/Apis/Apis';
// const App = () => {

//   const [count, setCount] = useState(() => {
//     const saved = localStorage.getItem("cartCount");
//     return saved ? parseInt(saved) : 0;
//   });
//   useEffect(() => {
//     localStorage.setItem("cartCount", count);
//   }, [count]);
//   return (
//     <>
//       <BrowserRouter>
//         <Navbar count={count} />
//         <Secondnav />

//         <Routes>
//           <Route
//             path="/"
//             element={<Home count={count} setCount={setCount} />}
//           />
//           <Route
//             path="/Mobiles"
//             element={<Mobiles setCount={setCount} count={count} />}
//           />
//           <Route
//             path="/Laptops"
//             element={<Laptop setCount={setCount} count={count} />}
//           />
//           <Route
//             path="/TVs"
//             element={<TVs setCount={setCount} count={count} />}
//           />
//           <Route
//             path="/ACs"
//             element={<AC setCount={setCount} count={count} />}
//           />
//           <Route
//             path="/Electronics"
//             element={<Ele setCount={setCount} count={count} />}
//           />
//           <Route
//             path="/Clothing"
//             element={<Clothing setCount={setCount} count={count} />}
//           />

//           <Route
//             path="/cart"
//             element={<Basket setCount={setCount} count={count} />}
//           />
//         </Routes>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App

// import CartContext from "./CartContext";
// import React, { useEffect, useState } from 'react'
// import Navbar from './Components/Navbar/Navbar'
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Secondnav from './Components/SecondNav/Secondnav';
// import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
// import Mobiles from './Pages/Mobiles/Mobiles';
// import Laptop from './Pages/Laptop/Laptop';
// import Home from './Pages/Home/Home';
// import Banner from './Components/Banner/Banner';
// import TVs from './Pages/TVs/TVs'
// import Basket from './Pages/Basket/Basket';
// import AC from './Pages/AC/AC';
// import Ele from './Pages/Electronics/Ele';
// import Clothing from './Pages/Clothing/Clothing';

// const App = () => {
//   const [cartItems, setCartItems] = useState(() => {
//     return JSON.parse(localStorage.getItem("products")) || [];
//   });

//   const [count, setCount] = useState(() => {
//     const saved = localStorage.getItem("cartCount");
//     return saved ? parseInt(saved) : 0;
//   });

//   useEffect(() => {
//     localStorage.setItem("products", JSON.stringify(cartItems));
//     localStorage.setItem("cartCount", count);
//   }, [cartItems, count]);

//   const addToCart = (product) => {
//     if (!cartItems.find((item) => item.id === product.id)) {
//       setCartItems([...cartItems, product]);
//       setCount(count + 1);
//     }
//   };

//   const removeFromCart = (productId) => {
//     const updated = cartItems.filter((item) => item.id !== productId);
//     setCartItems(updated);
//     setCartItems([...cartItems, product]);
//     setCount(count - 1);

//   };

//   const isInCart = (id) => {
//     return cartItems.some((item) => item.id === id);
//   };

//   return (
//     <CartContext.Provider
//       value={{ cartItems, count,setCount, addToCart, removeFromCart, isInCart }}
//     >
//       <BrowserRouter>
//         <Navbar count={count} />
//         <Secondnav />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/Mobiles" element={<Mobiles />} />
//           <Route path="/Laptops" element={<Laptop />} />
//           <Route path="/TVs" element={<TVs />} />
//           <Route path="/ACs" element={<AC />} />
//           <Route path="/Electronics" element={<Ele />} />
//           <Route path="/Clothing" element={<Clothing />} />
//           <Route path="/cart" element={<Basket />} />
//         </Routes>
//       </BrowserRouter>
//     </CartContext.Provider>
//   );
// };

// export default App;

// import React, { useEffect, useState } from "react";
// import Navbar from "./Components/Navbar/Navbar";
// import "bootstrap-icons/font/bootstrap-icons.css";
// import Secondnav from "./Components/SecondNav/Secondnav";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Mobiles from "./Pages/Mobiles/Mobiles";
// import Laptop from "./Pages/Laptop/Laptop";
// import Home from "./Pages/Home/Home";
// import TVs from "./Pages/TVs/TVs";
// import Basket from "./Pages/Basket/Basket";
// import AC from "./Pages/AC/AC";
// import Ele from "./Pages/Electronics/Ele";
// import Clothing from "./Pages/Clothing/Clothing";
// import SaveForLater from "./Pages/Basket/SaveForLater";

// const App = () => {
//   const [cartItems, setCartItems] = useState([]);
//   const [savelater, setSavelater] = useState([]);

//   // Initial loading from localStorage
//   useEffect(() => {
//     const cart = JSON.parse(localStorage.getItem("products")) || [];
//     setCartItems(cart);

//     const saved = JSON.parse(localStorage.getItem("savedForLater")) || [];
//     setSavelater(saved);
//   }, []);
//   return (
//     <BrowserRouter>
//       <Navbar />
//       <Secondnav />

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/Mobiles" element={<Mobiles />} />
//         <Route path="/Laptops" element={<Laptop />} />
//         <Route path="/TVs" element={<TVs />} />
//         <Route path="/ACs" element={<AC />} />
//         <Route path="/Electronics" element={<Ele />} />
//         <Route path="/Clothing" element={<Clothing />} />
//         <Route
//           path="/cart"
//           element={
//             <Basket
//               cartItems={cartItems}
//               setCartItems={setCartItems}
//               savelater={savelater}
//               setSavelater={setSavelater}
//             />
//           }
//         />
//         <Route
//           path="/saved"
//           element={
//             <SaveForLater
//               savelater={savelater}
//               setSavelater={setSavelater}
//               setCartItems={setCartItems}
//             />
//           }
//         />
//       </Routes>
//     </BrowserRouter>
//   );
// };

// export default App;

import React, { useEffect, useState } from "react";
import Navbar from "./Components/Navbar/Navbar";
import "bootstrap-icons/font/bootstrap-icons.css";
import Secondnav from "./Components/SecondNav/Secondnav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mobiles from "./Pages/Mobiles/Mobiles";
import Laptop from "./Pages/Laptop/Laptop";
import Home from "./Pages/Home/Home";
import TVs from "./Pages/TVs/TVs";
import Basket from "./Pages/Basket/Basket";
import AC from "./Pages/AC/AC";
import Ele from "./Pages/Electronics/Ele";
import Clothing from "./Pages/Clothing/Clothing";
import SaveForLater from "./Pages/Basket/SaveForLater";
import Signup from "./Pages/Signup";
import Login from "./Pages/Login";

import Practice from "./Practice";
import Access from "./Pages/Access";
import MobileDetails from "./Pages/Mobiles/MobileDetails";
import LaptopDetails from "./Pages/Laptop/LaptopDetails";
import ElectronicsDetails from "./Pages/Electronics/ElectronicsDetails";
import ClothingDetails from "./Pages/Clothing/ClothingDetails";
import AcDetails from './Pages/AC/AcDetails'
import TvDetails from "./Pages/TVs/TvDetails";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [savelater, setSavelater] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("products")) || [];
    setCartItems(cart);
  }, []);

  return (
    <BrowserRouter>
      {/* <Routes></Routes> */}

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Access>
              <Navbar />
              <Secondnav />
              <Home />
            </Access>
          }
        />

        <Route
          path="/Mobiles"
          element={
            <>
              <Navbar />
              <Secondnav /> <Mobiles />
            </>
          }
        />
        <Route
          path="/Mobiles/:id"
          element={
            <>
              <Navbar />
              <Secondnav /> <MobileDetails />
            </>
          }
        />
        <Route
          path="/Laptops"
          element={
            <>
              
              <Navbar />
              <Secondnav /> <Laptop />
            </>
          }
        />
        <Route
          path="/Laptops/:id"
          element={
            <>
             
              <Navbar />
              <Secondnav />
              <LaptopDetails />
            </>
          }
        />
        <Route
          path="/TVs"
          element={
            <>
             
              <Navbar />
              <Secondnav /> <TVs />
            </>
          }
        />
        <Route
          path="/TVs/:id"
          element={
            <>
              
              <Navbar />
              <Secondnav /> <TvDetails />
            </>
          }
        />
        <Route
          path="/ACs"
          element={
            <>
              <Navbar />
              <Secondnav />
              <AC />
            </>
          }
        />
        <Route
          path="/ACs/:id"
          element={
            <>
              <Navbar />
              <Secondnav />
              <AcDetails />
            </>
          }
        />
        <Route
          path="/Electronics"
          element={
            <>
              <Navbar />
              <Secondnav />
              <Ele />
            </>
          }
        />
        <Route
          path="/Electronics/:id"
          element={
            <>
              <Navbar />
              <Secondnav />
              <ElectronicsDetails />
            </>
          }
        />
        <Route
          path="/Clothing"
          element={
            <>
              <Navbar />
              <Secondnav />
              <Clothing />
            </>
          }
        />
        <Route
          path="/Clothing/:id"
          element={
            <>
              <Navbar />
              <Secondnav />
              <ClothingDetails />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar />
              <Secondnav />
              <Basket cartItems={cartItems} setCartItems={setCartItems} />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              
              <Navbar />
              <Secondnav />
              <SaveForLater
                savelater={savelater}
                setSavelater={setSavelater}
                setCartItems={setCartItems}
              />
            </>
          }
        />
        <Route path="/practice" element={<Practice />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
