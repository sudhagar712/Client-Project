import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg px-2 headercontainer">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand px-3 d-flex align-items-center">
          <img
            src={logo}
            alt="Lawfor Layman"
            className="logo-img animated-logo me-2"
            style={{ height: "50px", transition: "transform 0.3s ease-in-out" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          />
          <span className="text-warning fw-bolder  py-1">LAWFOR</span>
          <span className="fw-bold text-white ">LAYMAN</span>
        </Link>

        {/* Toggle button for Offcanvas */}
        <button
          className="navbar-toggler attractive-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <i className="bi bi-list fs-3 text-white"></i>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-start "
          style={{ backgroundColor: "#012b5c" }}
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">
              Menu
            </h5>
            <button
              type="button"
              className="btn-close bg-white"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body ">
            <ul className="navbar-nav justify-content-end align-items-center    flex-grow-1 pe-3 gap-lg-4 ">
              {/* Dynamic Dropdowns */}
              {[
                {
                  label: "Consult an Expert",
                  options: [
                    " Talk to Lawyer",
                    "Talk to a Chartered Accountant",
                    " Talk to a Company Secretary",
                    " Talk to a IP/Trademark Lawyer"
                  ]
                },
                { label: "Business Setup", options: ["Startup", "Company"] },
                { label: "Tax & Compliance", options: ["GST", "Income Tax"] }
              ].map((item, idx) => (
                <li className="nav-item dropdown mt-3" key={idx}>
                  <a
                    className="nav-link dropdown-toggle text-warning"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.options.map((opt, i) => (
                      <li key={i}>
                        <a
                          className="dropdown-item"
                          href="#"
                          data-bs-dismiss="offcanvas"
                        >
                          {opt}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li>
                <Link to="/track-complaint" className="text-decoration-none text-warning">
                  Tracking Complaint
                </Link>
              </li>
              <li>
                <Link to="/lawyer/login" className="text-decoration-none text-warning">
                  Lawyer Login
                </Link>
              </li>

              {/* Profile Icon Dropdown */}
              <li className="nav-item dropdown mt-3">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  id="profileDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-person-circle text-white"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="profileDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/admin/login"
                      data-bs-dismiss="offcanvas"
                    >
                      Admin Login
                    </Link>
                  </li>
                </ul>
              </li>

              {/* Extra Menu Icon Dropdown */}
              <li className="nav-item dropdown mt-3">
                <a
                  className="nav-link d-flex align-items-center"
                  href="#"
                  id="menuDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-list text-white"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="menuDropdown"
                >
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/service"
                      data-bs-dismiss="offcanvas"
                    >
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/about"
                      data-bs-dismiss="offcanvas"
                    >
                      How it works
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="dropdown-item"
                      to="/contact"
                      data-bs-dismiss="offcanvas"
                    >
                      Contact Us
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
