import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "animate.css";
import './Header.css';

function Header() {
  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    bsOffcanvas?.hide(); 
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg p-1 headercontainer">
        <div className="container">
          <Link to="/" className="text-decoration-none d-flex align-items-center">
            <img src={logo} alt="" className="logoimg mx-2" />
            <span className="text-white fs-5 fw-bold">LawForLayman</span>
          </Link>

          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasNavbar"
            aria-controls="offcanvasNavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div
            className="offcanvas offcanvas-end"
            tabIndex="-1"
            id="offcanvasNavbar"
            aria-labelledby="offcanvasNavbarLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title text-primary fw-bold" id="offcanvasNavbarLabel">Menu</h5>
              <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body menubarcolor">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link to="/" onClick={handleCloseOffcanvas} className="nav-link active text-white fw-bold">Home</Link>
                </li>
                <li className="nav-item">
                  <Link to="/service" onClick={handleCloseOffcanvas} className="nav-link text-white fw-bold">Services</Link>
                </li>
                <li className="nav-item">
                  <Link to="/about" onClick={handleCloseOffcanvas} className="nav-link text-white fw-bold">About us</Link>
                </li>
                <li className="nav-item">
                  <Link to="/contact" onClick={handleCloseOffcanvas} className="nav-link text-white fw-bold">Contact us</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      <div className="subheading p-2">
        <div className="container d-flex gap-4 justify-content-center">
          <button className="subbtn">Track Complaint</button>
          <button className="subbtn">Lawyer Login</button>
          <button className="subbtn">Admin Login</button>
        </div>
      </div>
    </>
  );
}

export default Header;
