import React from "react";
import {
  HouseDoor,
  Briefcase,
  Calendar,
  People,
  Gear,
  BoxArrowRight,
  List
} from "react-bootstrap-icons";
import logo from "../../../assets/images/logo.png"
import { Link } from "react-router-dom";


const Sidebar = () => {
  return (
    <>
      {/* Mobile Toggle Button */}
      <div style={{ backgroundColor: "#144481" }}>
        <button
          className="btn btn-warning mt-4 d-md-none m-2"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#sidebarOffcanvas"
        >
          <List size={20} />
        </button>
      </div>

      {/* Offcanvas Sidebar for Mobile */}
      <div
        className="offcanvas offcanvas-start d-md-none "
        style={{ backgroundColor: "#144481" }}
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header ">
          {/* <h5 className="offcanvas-title text-white" id="sidebarOffcanvasLabel">
         
          </h5> */}
          <button
            type="button"
            className="btn-close bg-warning "
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body p-0">
          <div className="p-3">
            <SidebarContent logo={logo} />
          </div>
        </div>
      </div>

      {/* Sidebar for Desktop */}
      <div
        className="d-none d-md-flex flex-column  border-end"
        style={{ width: "250px", height: "100vh", backgroundColor: "#144481" }}
      >
        <SidebarContent logo={logo} />
      </div>
    </>
  );
};

const SidebarContent = ({ logo }) => (
  <div className="d-flex  flex-column h-100">
    <div className=" text-center">
      <img src={logo} alt="Logo" className="w-50 mb-3 rounded-circle" />
      <h5 className="text-white fs-4 fw-bold mb-5">LawForLayman</h5>
      <nav className="nav flex-column ">
        <NavItem icon={<HouseDoor />} text="Dashboard" />
        <NavItem icon={<Briefcase />} text="My Cases" />
        <NavItem icon={<Calendar />} text="Schedule" />
        <NavItem icon={<People />} text="Clients" />
        <NavItem icon={<Gear />} text="Profile" />
      </nav>
    </div>
    <div className="mt-auto p-3 border-top">
      <Link to="/lawyer/login">
        <button className="btn btn-danger w-100 d-flex align-items-center">
          <BoxArrowRight className="me-2" /> Logout
        </button>
      </Link>
    </div>
  </div>
);

const NavItem = ({ icon, text }) => (
  <div
    className="nav-link text-white  d-flex align-items-center mb-1"
    style={{ cursor: "pointer" }}
  >
    <div className="d-flex p-3 text-center  align-items-center w-100 p-2 hover:bg-warning">
      {icon}
      <span className="ms-2">{text}</span>
    </div>
  </div>
);

export default Sidebar;
