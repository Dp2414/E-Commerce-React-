import React from 'react'
import './Secondnav.css'
import { Link } from 'react-router-dom';
const Secondnav = () => {
  return (
    <>
      <nav className="navbarnav navbar-expand-lg ">
        <div className="container-fluid p-0">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav navtwo">
              <li className="li">
                <Link className="- " aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="li">
                <Link className="- active" aria-current="page" to="/Mobiles">
                  Mobiles
                </Link>
              </li>
              <li className="li">
                <Link className="-" to="/Laptops">
                  Laptops
                </Link>
              </li>
              <li className="li">
                <Link className="" to="/TVs">
                  TVs
                </Link>
              </li>
              <li className="li">
                <Link className="" aria-disabled="true" to="/ACs">
                  ACs
                </Link>
              </li>
              <li className="li">
                <Link className="-" to="/Electronics">
                  Electronic Appliances
                </Link>
              </li>
              <li className="li">
                <Link className="-" to="/Clothing">
                  Clothing
                </Link>
              </li>
              <li className="li">
                <Link href="">
                  <img src="/Media\PC_SWM_400x39_3._CB791269750_.jpg" alt="" />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Secondnav
