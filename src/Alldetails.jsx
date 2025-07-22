import React, { useEffect, useState } from "react";
import data from "../db.json";

const Alldetails = ({ count, setCount }) => {
  const allProducts = [
    ...data.Mobiles,
    ...data.Laptops,
    ...data.TVs,
    ...data.ACs,
    ...data.Electronics,
    ...data.Clothing,
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 12;

  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = allProducts.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );

  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("products")) || [];
    const initialQuantities = {};
    stored.forEach((item) => {
      initialQuantities[item.id] = item.quantity;
    });
    setQuantities(initialQuantities);
  }, [currentPage]);

  const updateCart = (product, newQty) => {
    let cart = JSON.parse(localStorage.getItem("products")) || [];

    if (newQty <= 0) {
      cart = cart.filter((item) => item.id !== product.id);
    } else {
      const exists = cart.find((item) => item.id === product.id);
      if (exists) {
        cart = cart.map((item) =>
          item.id === product.id ? { ...item, quantity: newQty } : item
        );
      } else {
        cart.push({ ...product, quantity: newQty });
      }
    }

    localStorage.setItem("products", JSON.stringify(cart));
    setQuantities((prev) => ({ ...prev, [product.id]: newQty }));
    setCount(cart.reduce((total, item) => total + item.quantity, 0));
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className="container mt-4">
      <h2>All Products ({allProducts.length})</h2>
      <div className="row">
        {currentProducts.map((product) => {
          const qty = quantities[product.id] || 0;

          const increase = () => updateCart(product, qty + 1);
          const decrease = () => updateCart(product, qty - 1);
          const delitem = () => updateCart(product, 0);

          return (
            <div key={product.id} className="col-md-4 mb-4">
              <div className="card h-100">
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  style={{ height: "200px", objectFit: "cover" }}
                />
                <div className="card-body">
                  <h5 className="card-title">{product.title}</h5>
                  <p className="card-text">
                    {product.description?.length > 80
                      ? product.description.slice(0, 80) + "..."
                      : product.description}
                  </p>
                  <p>₹{product.price}</p>
                  <p>⭐ {product.rating} / 5</p>

                  {qty === 0 ? (
                    <button className="btn btn-primary" onClick={increase}>
                      Add to Cart
                    </button>
                  ) : (
                    <div className="d-flex justify-content-between align-items-center">
                      <div>
                        <button
                          className="btn btn-secondary"
                          onClick={decrease}
                        >
                          –
                        </button>
                        <span className="mx-2">{qty}</span>
                        <button
                          className="btn btn-secondary"
                          onClick={increase}
                        >
                          +
                        </button>
                      </div>
                      <button className="btn btn-danger" onClick={delitem}>
                        Remove
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="d-flex justify-content-center my-4">
        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => paginate(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({
          length: Math.ceil(allProducts.length / productsPerPage),
        }).map((_, i) => (
          <button
            key={i}
            className={`btn mx-1 ${
              currentPage === i + 1 ? "btn-primary" : "btn-outline-primary"
            }`}
            onClick={() => paginate(i + 1)}
          >
            {i + 1}
          </button>
        ))}

        <button
          className="btn btn-outline-primary mx-1"
          onClick={() => paginate(currentPage + 1)}
          disabled={
            currentPage === Math.ceil(allProducts.length / productsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Alldetails;
