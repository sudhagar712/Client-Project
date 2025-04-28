import React from "react";
import {
  HouseDoor, 
  FileText, 
  PersonCircle, 
  Calendar2Event, 
  BarChart, 
  Gear, 
  BoxArrowRight,
  List
} from "react-bootstrap-icons"; 
import logo from "../../../assets/images/logo.png";
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
        className="offcanvas offcanvas-start d-md-none"
        style={{ backgroundColor: "#144481" }}
        tabIndex="-1"
        id="sidebarOffcanvas"
        aria-labelledby="sidebarOffcanvasLabel"
      >
        <div className="offcanvas-header">
          <button
            type="button"
            className="btn-close bg-warning"
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
        className="d-none d-md-flex flex-column border-end"
        style={{ width: "250px", height: "100vh", backgroundColor: "#144481" }}
      >
        <SidebarContent logo={logo} />
      </div>
    </>
  );
};

const SidebarContent = ({ logo }) => (
  <div className="d-flex flex-column h-100">
    <div className="text-center">
      <img src={logo} alt="Logo" className="w-25 mb-3 rounded-circle" />
      <h6 className="text-white  fw-bold mb-5">LawForLayman</h6>
      <nav className="nav flex-column">
        <NavItem icon={<HouseDoor />} text="Dashboard" />
        <NavItem icon={<FileText />} text="Complaints" />
        <NavItem icon={<PersonCircle />} text="Lawyers" />
        <NavItem icon={<Calendar2Event />} text="Schedule" />
        <NavItem icon={<BarChart />} text="Reports" />
        <NavItem icon={<Gear />} text="Settings" />
      </nav>
    </div>
    <div className="mt-auto p-3 border-top">
      <Link to="/admin/login" className="text-decoration-none">
        <button className="btn btn-danger w-100 d-flex align-items-center">
          <BoxArrowRight className="me-2" /> Logout
        </button>
      </Link>
    </div>
  </div>
);

const NavItem = ({ icon, text }) => (
  <div
    className="nav-link text-white d-flex align-items-center mb-1"
    style={{ cursor: "pointer" }}
  >
    <div className="d-flex p-3 text-center align-items-center w-100 p-2 hover:bg-warning">
      {icon}
      <span className="ms-2">{text}</span>
    </div>
  </div>
);

export default Sidebar;
