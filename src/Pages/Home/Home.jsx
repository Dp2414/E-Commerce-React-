import React, { useContext, useEffect, useState } from "react";
// import db from './db.json'
import "./home.css";
import MobileCard from "./MobileCard";
import LaptopCard from "./LaptopCard";
import { Link } from "react-router-dom";
import axios from "axios";
import TVsCard from "./TVsCard";
import Banner from "../../Components/Banner/Banner";
import EleCard from "./EleCard";
import ACCard from "./ACCard";
import ClothingCard from "./ClothingCard";
import Mobiles from "../Mobiles/Mobiles";
import Laptop from "../Laptop/Laptop";
import TVs from "../TVs/TVs";
import AC from "../AC/AC";
import Ele from "../Electronics/Ele"
import Clothing from "../Clothing/Clothing";
import Alldetails from "../../Alldetails";
import { CartContext } from "../../Context/Context";
const Home = ({ homeData, ...props }) => {
  const [mobile, setData] = useState([]);
  const [laptop, setLaptop] = useState([]);
  const [Tv, setTv] = useState([]);
  const [Ac, setAc] = useState([]);
  const [Elee, setEle] = useState([]);
  const [Cloth, setCloth] = useState([]);
  const [activePage, setActivePage] = useState("Mobiles");
  const { count, setCount, updateCart, quantities } = useContext(CartContext);

  // let count = props.count;
  // let setCount = props.setCount;
  const [test, setTest] = useState(0);

  function mg() {
    setTest(test + 1);
    console.log(test);
    console.log("called");
  }

  useEffect(() => {
    if (homeData) {
      setData(homeData.mobiles?.slice(0, 4) || []);
      setLaptop(homeData.laptops?.slice(0, 4) || []);
      setTv(homeData.tvs?.slice(0, 4) || []);
      setAc(homeData.acs?.slice(0, 4) || []);
      setEle(homeData.electronics?.slice(0, 4) || []);
      setCloth(homeData.clothing?.slice(0, 4) || []);
    }
  }, [homeData]);

  // async function server() {
  //   try {
  //     let mobresponse = await axios.get("http://localhost:8000/Mobiles");
  //     let lapresponse = await axios.get("http://localhost:8000/Laptops");
  //     let tvresponse = await axios.get("http://localhost:8000/TVs");
  //     let eleresponse = await axios.get("http://localhost:8000/Electronics");
  //     let acresponse = await axios.get("http://localhost:8000/ACs");
  //     let clothingresponse = await axios.get("http://localhost:8000/Clothing");
  //     let allMobiles = mobresponse.data;
  //     let firstFourMobiles = allMobiles.slice(0, 4);
  //     console.log("Mobiles Data", allMobiles);
  //     let allLaptops = lapresponse.data;
  //     let firstFourLaptops = allLaptops.slice(0, 4);
  //     console.log("Laptops Data", allLaptops);
  //      let allTv = tvresponse.data;
  //      let firstFourTvs = allTv.slice(0, 4);

  //     console.log("Tv Data", allTv);

  //     let allACs = acresponse.data;
  //     let firstFourACs = allACs.slice(0, 4);
  //     console.log("ACs Data", allACs);

  //     let allElectronics = eleresponse.data;
  //     let firstFourElectronics = allElectronics.slice(0, 4);
  //     console.log("Electronics Data", allElectronics);

  //     let allClothing = clothingresponse.data;
  //     let firstFourClothing = allClothing.slice(0, 4);
  //     console.log("Clothing Data", allClothing);

  //     setLaptop(firstFourLaptops);
  //     setData(firstFourMobiles);
  //     setTv(firstFourTvs);
  //     setAc(firstFourACs);
  //     setEle(firstFourElectronics);
  //     setCloth(firstFourClothing);

  //     console.log("Mobiels First Four Data", firstFourMobiles);
  //     console.log("Laptops First Four Data", firstFourLaptops);
  //     console.log("TVs First Four Data", firstFourTvs);
  //     console.log("ACs First Four Data", firstFourACs);
  //     console.log("Electronics First Four Data", firstFourElectronics);

  //     console.log("Clothing First Four Data", firstFourClothing);

  //   } catch (err) {
  //     console.log(err);
  //   }
  // }
  //
  // useEffect(() => {
  //   server();
  // }, []);
  // const updateCart = (newQty) => {
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
  //   setQty(newQty);
  //   setCount(cart.reduce((total, item) => total + item.quantity, 0));
  // };

  // const increase = () => updateCart(qty + 1);
  // const decrease = () => updateCart(qty - 1);
  // const delitem = () => updateCart(0);

  // let displaymobiles =db.Mobiles.slice(0, 4);
  // let displaylaptops = db.Laptops.slice(0, 4);
  return (
    <div className="container-fluid">
      <Banner />
      <div className="d-flex flex-wrap justify-content-around bgc ">
        <Link to="/Mobiles" className="category my-4">
          <div className="landingmobile">
            {mobile.map((mobile) => (
              <MobileCard
                key={mobile.id}
                mobile={mobile}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
          <h2>Mobiles</h2>
        </Link>
        <Link to="/Laptops" className="category my-4">
          <div className="landinglaptop">
            {laptop.map((laptop) => (
              <LaptopCard
                key={laptop.id}
                Laptop={laptop}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
          <h2>Laptops</h2>
        </Link>
        <Link to="/Tvs" className="category my-4">
          <div className="landingtv">
            {Tv.map((TV) => (
              <TVsCard key={TV.id} TV={TV} count={count} setCount={setCount} />
            ))}
          </div>
          <h2>TVs</h2>
        </Link>

        <Link to="/ACs" className="category my-4">
          <div className="landingac">
            {Ac.map((Ac) => (
              <ACCard key={Ac.id} Ac={Ac} count={count} setCount={setCount} />
            ))}
          </div>
          <h2>ACs</h2>
        </Link>

        <Link to="/Electronics" className="category my-4">
          <div className="landingele">
            {Elee.map((Ele) => (
              <EleCard
                key={Ele.id}
                Ele={Ele}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
          <h2>Electronics</h2>
        </Link>

        <Link to="/Clothing" className="category my-4">
          <div className="landingcloth">
            {Cloth.map((cloth) => (
              <ClothingCard
                key={cloth.id}
                Cloth={cloth}
                count={count}
                setCount={setCount}
              />
            ))}
          </div>
          <h2>Clothing</h2>
        </Link>
      </div>
      {/* <div className="forpagination">
        {activePage === "Mobiles" && <Mobiles />}
        {activePage === "Laptop" && <Laptop />}
        {activePage === "TVs" && <TVs />}
        {activePage === "AC" && <AC />}
        {activePage === "Ele" && <Ele />}
        {activePage === "Clothing" && <Clothing />}
      </div>

      <div className="pagination-buttons">
        <button onClick={() => setActivePage("Mobiles")}>Mobiles</button>
        <button onClick={() => setActivePage("Laptop")}>Laptops</button>
        <button onClick={() => setActivePage("TVs")}>TVs</button>
        <button onClick={() => setActivePage("AC")}>ACs</button>
        <button onClick={() => setActivePage("Ele")}>Electronics</button>
        <button onClick={() => setActivePage("Clothing")}>Clothing</button>
      </div> */}
      {/* <Alldetails
        count={count}
        setCount={setCount}
        increase={increase}
        decrease={decrease}
        delitem={delitem}
      /> */}

      <button onClick={mg}>{test}Tetsing</button>
      <h1>hello</h1>
    </div>
  );
};

export default Home;
