import React from "react";
import "./Header.css"
import { Link } from "react-router-dom";
// import logo from "../../assets/images/logo.png";


const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg p-5 headercontainer px-5">
      <div className="container-fluid">
        {/* Brand Logo */}
        <Link to="/" className="navbar-brand d-flex align-items-center">
          {/* <img
            src={logo}
            alt="Lawfor Layman"
            className="logo-img animated-logo"
            style={{ height: "40px", transition: "transform 0.3s ease-in-out" }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.transform = "scale(1.1)")
            }
            onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
          /> */}
          <span className=" bg-warning fw-bold px-2 py-1 ">LAWFOR </span>
          <span className="fw-bold text-white">LAYMAN</span>
        </Link>

        {/* Toggle button for Offcanvas */}
        <button
          className="navbar-toggler bg-white"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end "
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
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3 gap-lg-3">
              <li className="nav-item dropdown">
                <button
                  className="btn btn-warning fw-bold  dropdown-toggle w-100"
                  data-bs-toggle="dropdown"
                >
                  Consult an Expert
                </button>
                <ul className="dropdown-menu ">
                  <li>
                    <Link to="#" className="dropdown-item" href="#">
                      Talk to Lawyer
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item" href="#">
                      Talk to a Chartered Accountant
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item" href="#">
                      Talk to a Company Secretary
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="dropdown-item" href="#">
                      Talk to a IP/Trademark Lawyer
                    </Link>
                  </li>
                </ul>
              </li>

              {[
                { label: "Business Setup", options: ["Startup", "Company"] },
                { label: "Tax & Compliance", options: ["GST", "Income Tax"] },
                { label: "Trademark & IP", options: ["Trademark"] },
                { label: "Documentation", options: ["Agreements"] }
              ].map((item, idx) => (
                <li className="nav-item dropdown" key={idx}>
                  <a
                    className="nav-link dropdown-toggle text-white"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    {item.label}
                  </a>
                  <ul className="dropdown-menu">
                    {item.options.map((opt, i) => (
                      <li key={i}>
                        <a className="dropdown-item" href="#">
                          {opt}
                        </a>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}

              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-person-circle text-white "></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <a className="dropdown-item" href="/profile">
                      My Profile
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="/settings">
                      Settings
                    </a>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <a className="dropdown-item text-danger" href="/logout">
                      Logout
                    </a>
                  </li>
                </ul>
              </li>

              <li className="nav-item dropdown">
                <a
                  className="nav-link  d-flex align-items-center"
                  href="#"
                  id="navbarDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-list text-warning"></i>
                </a>
                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="navbarDropdown"
                >
                  <li>
                    <Link className="dropdown-item" to="/service">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/about">
                      How its works
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/contact">
                      Contact US
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
