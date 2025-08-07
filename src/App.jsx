import React, { useContext, useState } from "react";
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



import Access from "./Pages/Access";
import MobileDetails from "./Pages/Mobiles/MobileDetails";
import LaptopDetails from "./Pages/Laptop/LaptopDetails";
import ElectronicsDetails from "./Pages/Electronics/ElectronicsDetails";
import ClothingDetails from "./Pages/Clothing/ClothingDetails";
import AcDetails from './Pages/AC/AcDetails'
import TvDetails from "./Pages/TVs/TvDetails";
import Alldetails from "./Alldetails";
import { CartContext } from "./Context/Context";
import Admin from "./Pages/Admin/Admin";
import Orders from "./Pages/Orders/Orders";

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [savelater, setSavelater] = useState([]);
  const [quantities, setQuantities] = useState({});
  const [homeData, setHomeData] = useState(null);

      const {  updateCart } = useContext(CartContext);

const [count, setCount] = useState(() => {
  const cart = JSON.parse(localStorage.getItem("products")) || [];
  return cart.reduce((total, item) => total + item.quantity, 0);
});
    // const updateCart = (product, newQty) => {
    //   let cart = JSON.parse(localStorage.getItem("products")) || [];

    //   if (newQty <= 0) {
    //     cart = cart.filter((item) => item.id !== product.id);
    //   } else {
    //     const exists = cart.find((item) => item.id === product.id);
    //     if (exists) {
    //       cart = cart.map((item) =>
    //         item.id === product.id ? { ...item, quantity: newQty } : item
    //       );
    //     } else {
    //       cart.push({ ...product, quantity: newQty });
    //     }
    //   }

    //   localStorage.setItem("products", JSON.stringify(cart));
    //   setQuantities((prev) => ({ ...prev, [product.id]: newQty }));
    //   setCount(cart.reduce((total, item) => total + item.quantity, 0));
    // };
  


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <Access>
              <Navbar count={count} />
              <Secondnav />
              <Home homeData={homeData} />
              <Alldetails
                count={count}
                setCount={setCount}
                updateCart={updateCart}
                quantities={quantities}
                setQuantities={setQuantities}
                onDataFetched={setHomeData}
              />
            </Access>
          }
        />
         <Route
          path="/orders"
          element={<><Navbar count={count} /><Secondnav />   <Orders/> </> } />
        <Route
          path="/Mobiles"
          element={
            <>
              <Navbar count={count} />
              <Secondnav /> <Mobiles onDataFetched={setHomeData} />
            </>
          }
        />
        <Route
          path="/Mobiles/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav /> <MobileDetails />
            </>
          }
        />
        <Route
          path="/Laptops"
          element={
            <>
              <Navbar count={count} />
              <Secondnav /> <Laptop count={count} setCount={setCount} />
            </>
          }
        />
        <Route
          path="/Laptops/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <LaptopDetails />
            </>
          }
        />
        <Route
          path="/TVs"
          element={
            <>
              <Navbar count={count} />
              <Secondnav /> <TVs count={count} setCount={setCount} />
            </>
          }
        />
        <Route
          path="/TVs/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav /> <TvDetails />
            </>
          }
        />
        <Route
          path="/ACs"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <AC count={count} setCount={setCount} />
            </>
          }
        />
        <Route
          path="/ACs/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <AcDetails />
            </>
          }
        />
        <Route
          path="/Electronics"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <Ele count={count} setCount={setCount} />
            </>
          }
        />
        <Route
          path="/Electronics/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <ElectronicsDetails />
            </>
          }
        />
        <Route
          path="/Clothing"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <Clothing count={count} setCount={setCount} />
            </>
          }
        />
        <Route
          path="/Clothing/:id"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <ClothingDetails />
            </>
          }
        />
        <Route
          path="/cart"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <Basket
                cartItems={cartItems}
                setCartItems={setCartItems}
                count={count}
                setCount={setCount}
              />
            </>
          }
        />
        <Route
          path="/saved"
          element={
            <>
              <Navbar count={count} />
              <Secondnav />
              <SaveForLater
                savelater={savelater}
                setSavelater={setSavelater}
                setCartItems={setCartItems}
                count={count}
                setCount={setCount}
              />
            </>
          }
        />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
