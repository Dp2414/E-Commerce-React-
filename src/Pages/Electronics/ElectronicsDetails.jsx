import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/Context"; // ✅ import context
import "/src/App.css";

const ElectronicsDetails = () => {
  const { id } = useParams();
  const [electronics, setEle] = useState(null);
  const [qty, setQty] = useState(0);

  
    const { updateCart } = useContext(CartContext); // ✅ get setCount

  // Fetch product by ID
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          `http://localhost:8000/Electronics/${id}`
        );
        setEle(response.data);

        const saved = JSON.parse(localStorage.getItem("products")) || [];
        const found = saved.find((item) => item.id === response.data.id);
        setQty(found ? found.quantity : 0);
      } catch (error) {
        console.error("Failed to fetch electronics details", error);
      }
    }

    fetchData();
  }, [id]);

  // Update localStorage and cart count
 
  const increase = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateCart(electronics,newQty);
  };

  const decrease = () => {
    const newQty = qty - 1;
    setQty(newQty);
    updateCart(electronics,newQty);
  };

  const delitem = () => {
    setQty(0);
    updateCart(electronics,0);
  };

  if (!electronics) return <p>Loading...</p>;

  return (
    <>
      <div className="wholediv">
        <div className="container mt-5 details">
          <div>
            <img
              src={electronics.image}
              alt={electronics.title}
              style={{
                height: "450px",
                width: "500px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="description">
            <h2>{electronics.title}</h2>
            <h4>
              Description:{" "}
              {electronics.description || "No description available."}
            </h4>
            <p>Rating: ⭐ {electronics.rating} / 5</p>
            <h5>Brand: {electronics.brand}</h5>
            <h5>Price: ₹{electronics.price}</h5>

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
                  <h6>Expected Delivery :- {electronics.expectedDelivery}</h6>
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" container my-4">
          <h4>User Reviews:</h4>
          {electronics.reviews && electronics.reviews.length > 0 ? (
            <ul>
              {electronics.reviews.map((review, index) => (
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
    </>
  );
};

export default ElectronicsDetails;
