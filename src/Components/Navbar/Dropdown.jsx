import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Dropdown = ({ savelater, setSavelater, setCartItems }) => {

  const navigate = useNavigate();

  const gotosave = () => {
    navigate("/saved");
  };
  // const handleLogout = () => {
  //   localStorage.removeItem("isLoggedIn");
  //   window.location.href = "/login";
  // };

  return (
    <ul className="dropdown-menu">
      <li>
        <a className="dropdown-item" href="#">
          Action
        </a>
      </li>
      <li>
        {/* Link to the saved for later page */}
        <Link className="dropdown-item" to="/saved" onClick={gotosave}>
          Saved for Later
        </Link>
      </li>
      <li>
        <hr className="dropdown-divider" />
      </li>
      <li>
        <a className="dropdown-item" href="#">
          Wish List
        </a>
      </li>
      <li>
        <Link  className="dropdown-item" to="/login">
          Log Out
        </Link>
      </li>
    </ul>
  );
};

export default Dropdown;
