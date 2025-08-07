import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/Context";
import "/src/App.css";

const MobileDetails = () => {
  const { id } = useParams();
  const [mobile, setMobile] = useState(null);
    const [qty, setQty] = useState(0);

  const { updateCart, quantities } = useContext(CartContext);

  // Fetch product by ID
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(`http://localhost:8000/Mobiles/${id}`);
        setMobile(response.data);
      } catch (error) {
        console.error("Failed to fetch mobile details", error);
      }
    }

    fetchData();
  }, [id]);

  if (!mobile) return <p>Loading...</p>;

 

  const increase = () => {
      const newQty = qty + 1;
      setQty(newQty);
    updateCart(mobile, newQty);
  }
  const decrease = () => {
    const newQty = qty - 1;
    setQty(newQty);
    updateCart(mobile, newQty);
  };

  const delitem = () => {
    setQty(0);
    updateCart(mobile, 0);
  };


  return (
    <div className="wholediv">
      <div className="container mt-5 details">
        <div>
          <img
            src={mobile.image}
            alt={mobile.title}
            style={{
              height: "450px",
              width: "500px",
              objectFit: "contain",
            }}
          />
        </div>
        <div className="description">
          <h2>{mobile.title}</h2>
          <h4>
            Description: {mobile.description || "No description available."}
          </h4>
          <p>Rating: ⭐ {mobile.rating} / 5</p>
          <h5>Brand: {mobile.brand}</h5>
          <h5>Price: ₹{mobile.price}</h5>

          {qty === 0 ? (
            <div>
              <button className="btn btn-primary" onClick={increase}>
                Add to Cart
              </button>
            </div>
          ) : (
            <>
              <div className="d-flex align-items-center gap-2">
                <div className="d-flex align-items-center">
                  <button className="btn btn-secondary" onClick={decrease}>
                    –
                  </button>
                  <span className="mx-2">{qty}</span>
                  <button className="btn btn-secondary" onClick={increase}>
                    +
                  </button>
                </div>
                <button className="btn btn-danger" onClick={delitem}>
                  Remove
                </button>
              </div>
              <div className="my-4">
                <h6>Expected Delivery :- {mobile.expectedDelivery}</h6>
              </div>
            </>
          )}
        </div>
      </div>
      <div className="container my-4">
        <h4>User Reviews:</h4>
        {mobile.reviews && mobile.reviews.length > 0 ? (
          <ul>
            {mobile.reviews.map((review, index) => (
              <li key={index} style={{ marginBottom: "1rem" }}>
                <img
                  src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o="
                  alt=""
                  style={{ width: "50px" }}
                />
                <strong>{review.user}</strong> ⭐ {review.rating}/5
                <p style={{ margin: 0 }}>{review.comment}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No reviews available.</p>
        )}
      </div>
    </div>
  );
};

export default MobileDetails;
