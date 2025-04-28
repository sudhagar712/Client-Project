import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "animate.css";
import "./Header.css";
import { FaUserCircle } from "react-icons/fa";

function Header() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleCloseOffcanvas = () => {
    const offcanvasElement = document.getElementById("offcanvasNavbar");
    const bsOffcanvas = bootstrap.Offcanvas.getInstance(offcanvasElement);
    bsOffcanvas?.hide();
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div>
      <nav className="navbar navbar-expand-lg p-3  headercontainer">
        <div className="container">
          <Link
            to="/"
            className="text-decoration-none d-flex align-items-center"
          >
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
              <h5
                className="offcanvas-title text-primary fw-bold"
                id="offcanvasNavbarLabel"
              >
                Menu
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body menubarcolor">
              <ul className="navbar-nav justify-content-end gap-2  flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    onClick={handleCloseOffcanvas}
                    className="nav-link active text-white fw-bold"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/service"
                    onClick={handleCloseOffcanvas}
                    className="nav-link text-white fw-bold"
                  >
                    Services
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/about"
                    onClick={handleCloseOffcanvas}
                    className="nav-link text-white fw-bold"
                  >
                    About us
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/contact"
                    onClick={handleCloseOffcanvas}
                    className="nav-link text-white fw-bold"
                  >
                    Contact us
                  </Link>
                </li>
                <li className="nav-item dropdown">
                  <div
                    className="nav-link text-white fw-bold"
                    onClick={toggleDropdown}
                    style={{ cursor: "pointer" }}
                  >
                    <FaUserCircle size={24}  />
                  </div>
                  {showDropdown && (
                    <div
                      className="dropdown-menu show bg-warning opacity-75 bg-light p-4"
                      style={{ position: "absolute", right: 0 }}
                    >
                      <Link
                        to="/track-complaint"
                        className="dropdown-item"
                        onClick={handleCloseOffcanvas}
                      >
                        Track Complaint
                      </Link>
                      <hr />
                      <Link
                        to="/lawyer/login"
                        className="dropdown-item"
                        onClick={handleCloseOffcanvas}
                      >
                        Lawyer Login
                      </Link>
                      <hr />
                      <Link
                        to="/admin/login"
                        className="dropdown-item"
                        onClick={handleCloseOffcanvas}
                      >
                        Admin Login
                      </Link>
                    
                    </div>
                  )}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <div className="subheading p-2">
        <div className="container d-flex gap-4 justify-content-center">
          <Link to="/track-complaint">
            {" "}
            <button className="subbtn">Track Complaint</button>
          </Link>
          <Link to="/lawyer/login">
            {" "}
            <button className="subbtn">Lawyer Login</button>
          </Link>
          <Link to="/admin/login">
            {" "}
            <button className="subbtn">Admin Login</button>
          </Link>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
