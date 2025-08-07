import React, { useContext } from 'react'
import './Navbar.css'
import { useNavigate } from "react-router-dom";
import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';
import { CartContext } from '../../Context/Context';
const Navbar = () => {
  const { count,setCount } = useContext(CartContext);
  return (
    <nav className="navbar navone navbar-expand-lg sticky-top">
      <div className="container-fluid my-0">
        <Link className="navbar-brand" to="/">
          <img
            src="data:image/png;base64,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"
            alt="Logo"
            width="120"
            height="50"
            className="d-inline-block align-text-top logo"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ">
              <a className="nav-link locationdel" aria-current="page" href="#">
                <div
                  type="button"
                  className="btn btn-dark"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
                  <div className="location p-0">
                    <i className="bi bi-geo-alt"></i>

                    <div className="delivery">
                      <p>Deliver to -</p>
                      <h4>Hyderabad 500010</h4>
                    </div>
                  </div>
                </div>

                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                          Modal title
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">...</div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        <button type="button" className="btn btn-primary">
                          Save changes
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            </li>
            <form className="d-flex searchform" role="search">
              <input
                className=" search"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className=" searchbtn  " type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form>
            {/* <form
              className="d-flex searchform"
              role="search"
              onSubmit={(e) => {
                e.preventDefault();
                const searchValue = e.target.elements.search.value.trim();
                if (searchValue) {
                  navigate(`/search?q=${encodeURIComponent(searchValue)}`);
                }
              }}
            >
              <input
                className="search"
                type="search"
                name="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="searchbtn" type="submit">
                <i className="bi bi-search"></i>
              </button>
            </form> */}

            <li className="nav-item ok dropdown padding">
              <a
                className="navlink dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <p className="p-0 m-0 userhello">Hello,User</p>
                <span className="userlists">Account & Lists</span>
              </a>
              <Dropdown count={count} setCount={setCount} />
            </li>
            <li className="nav-item returnorders ">
              
                <Link to="/orders" className="nav-link padding p-0 my-2">
                  Placed Orders
                </Link>
              
            </li>
            <li className="nav-item navcart ">
              <Link className="nav-link padding" to="/cart">
                <span>
                  <i className="bi bi-cart3"></i>
                  <sup>{count}</sup>
                  <span className="cart">Cart</span>
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar
