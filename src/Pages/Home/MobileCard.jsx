import React from "react";

const MobileCard = ({ mobile }) => {
  return (
   
      <div className="card d-flex flex-wrap" style={{ width: "300px" }}>
        <img
          src={mobile.image}
          alt={mobile.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        {/* <div className="card-body">
        <h5 className="card-title">{mobile.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{mobile.brand}</h6>
        <p className="card-text">{mobile.description}</p>
        <p>
          <strong>₹{mobile.price.toLocaleString()}</strong>
        </p>
        <p>⭐ {mobile.rating} / 5</p>
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn btn-outline-secondary ms-2">Wishlist</button>
      </div> */}
      </div>
 
  );
};

export default MobileCard;
