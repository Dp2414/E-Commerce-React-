import React from 'react'

const TVsCard = ({TV}) => {
  return (
    <div className="card d-flex flex-wrap" style={{ width: "300px" }}>
      <img
        src={TV.image}
        alt={TV.title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      {/* <div className="card-body">
        <h5 className="card-title">{TV.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{TV.brand}</h6>
        <p className="card-text">{TV.description}</p>
        <p>
          <strong>₹{TV.price.toLocaleString()}</strong>
        </p>
        <p>⭐ {TV.rating} / 5</p>
        <button className="btn btn-primary">Add to Cart</button>
        <button className="btn btn-outline-secondary ms-2">Wishlist</button>
      </div> */}
    </div>
  );
}

export default TVsCard
