import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { CartContext } from "../../Context/Context"; // ✅ import context
import "/src/App.css";

const ClothingDetails = () => {
  const { id } = useParams();
  const [clothing, setCloth] = useState(null);
  const [qty, setQty] = useState(0);

  const { setCount } = useContext(CartContext); // ✅ get setCount

  // Fetch product by ID
  useEffect(() => {
    async function fetchData() {
      try {
        let response = await axios.get(
          `http://localhost:8000/Clothing/${id}`
        );
        setCloth(response.data);

        const saved = JSON.parse(localStorage.getItem("products")) || [];
        const found = saved.find((item) => item.id === response.data.id);
        setQty(found ? found.quantity : 0);
      } catch (error) {
        console.error("Failed to fetch clothing details", error);
      }
    }

    fetchData();
  }, [id]);

  // Update localStorage and cart count
  const updateCart = (newQty) => {
    let items = JSON.parse(localStorage.getItem("products")) || [];

    if (newQty <= 0) {
      items = items.filter((item) => item.id !== clothing.id);
    } else {
      const exists = items.find((item) => item.id === clothing.id);
      if (exists) {
        items = items.map((item) =>
          item.id === clothing.id ? { ...item, quantity: newQty } : item
        );
      } else {
        items.push({ ...clothing, quantity: newQty });
      }
    }

    localStorage.setItem("products", JSON.stringify(items));

    // ✅ update the cart count in context
    const totalCount = items.reduce((acc, item) => acc + item.quantity, 0);
    setCount(totalCount);
  };

  const increase = () => {
    const newQty = qty + 1;
    setQty(newQty);
    updateCart(newQty);
  };

  const decrease = () => {
    const newQty = qty - 1;
    setQty(newQty);
    updateCart(newQty);
  };

  const delitem = () => {
    setQty(0);
    updateCart(0);
  };

  if (!clothing) return <p>Loading...</p>;

  return (
    <>
      <div className="wholediv">
        <div className="container mt-5 details">
          <div>
            <img
              src={clothing.image}
              alt={clothing.title}
              style={{
                height: "450px",
                width: "500px",
                objectFit: "cover",
              }}
            />
          </div>
          <div className="description">
            <h2>{clothing.title}</h2>
            <h4>
              Description: {clothing.description || "No description available."}
            </h4>
            <p>Rating: ⭐ {clothing.rating} / 5</p>
            <h5>Brand: {clothing.brand}</h5>
            <h5>Price: ₹{clothing.price}</h5>

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
                  <h6>Expected Delivery :- {clothing.expectedDelivery}</h6>
                </div>
              </>
            )}
          </div>
        </div>
        <div className=" container my-4">
          <h4>User Reviews:</h4>
          {clothing.reviews && clothing.reviews.length > 0 ? (
            <ul>
              {clothing.reviews.map((review, index) => (
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

export default ClothingDetails;
