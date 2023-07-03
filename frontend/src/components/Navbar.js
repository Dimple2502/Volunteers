import React from "react";
import { Link } from "react-router-dom";
import "./css/Navbar.css";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Volunteers
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link className="nav-link" to="/contact">
                Contact
              </Link>
              <Link className="nav-link" to="/details">
                Details
              </Link>
              <Link className="nav-link" to="/admin">
                Admin
              </Link>
            </div>
            {/* <button type="submit" id="logout" >Logout</button> */}
            {(!localStorage.getItem('token'==true)) ? <Link id="logout" to="/">Logout</Link> :
                  <Link id="logout" to="/contact">Login</Link>}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
