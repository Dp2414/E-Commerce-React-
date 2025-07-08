import React, { useState } from 'react'

const ClothingCard = (props) => {
     const { cloth, count, setCount } = props;
      if (!cloth) return null;
        const [state, setState] = useState(() => {
          let saved = JSON.parse(localStorage.getItem("products")) || [];
          return saved.some((item) => item.id === cloth.id) ? false : true; // false = already added
        });
        function addtocart() {
          let products = JSON.parse(localStorage.getItem("products")) || [];
    
          if (state) {
            setCount(count + 1);
            products.push(cloth); // Add to localStorage only on ADD
            localStorage.setItem("products", JSON.stringify(products));
            console.log(`There are ${count + 1} Movies in the basket `);
          } else if (!state) {
            setCount(count - 1);
            products = products.filter((item) => item.id !== cloth.id);
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
        src={cloth.image}
        alt={cloth.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body">
        <h5 className="card-title">{cloth.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{cloth.brand}</h6>
        <p className="card-text">{cloth.description}</p>
        <p>
          <strong>₹{cloth.price.toLocaleString()}</strong>
        </p>
        <p>⭐ {cloth.rating} / 5</p>
        <button className="btn btn-primary" onClick={addtocart}>
          {" "}
          {state ? "Add" : "Remove"}
        </button>
        <button className="btn btn-outline-secondary ms-2">Wishlist</button>
      </div>
    </div>
  );
}

export default ClothingCard
