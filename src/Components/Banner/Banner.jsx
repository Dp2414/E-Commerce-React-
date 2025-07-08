
import React from "react";
import Clothing from "../../assets/clothes.jpg";
import Mobiles from "../../assets/mobiles.jpg";
import Acs from "../../assets/ac.jpg";
import Laptops from "../../assets/laptop.jpeg";
import Electronics from "../../assets/electronics.jpg";
import TVs from "../../assets/tv.avif";
import './Banner.css'
import { Link } from "react-router-dom";
import Laptop from "../../Pages/Laptop/Laptop";

const Banner = () => {
  const images = [Clothing, Mobiles, Acs, Laptops, Electronics,TVs];
  const routes = ["/Clothing", "/Mobiles", "/ACs", "/Laptops", "/Electronics", "/TVs"];

  return (
    <div
      id="carouselExample"
      className="carousel slide my-2"
      data-bs-ride="carousel"
      data-bs-interval="2500"
    >
      <div className="carousel-inner">
        {images.map((img, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <Link to={routes[index]}>
              <img
                src={img}
                className="d-block w-100 images"
                alt={`Slide ${index + 1}`}
                style={{
                  height: "350px",
                  objectFit:
                    img === TVs || img === Acs ? "contain" : "cover",
                }}
              />
            </Link>
          </div>
        ))}
      </div>

      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>

      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Banner;


