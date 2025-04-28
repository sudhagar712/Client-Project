import React, { useState } from "react";
import { Bell, Search } from "react-bootstrap-icons";

const Header = () => {
  const [showSearch, setShowSearch] = useState(false);

  return (
    <>
      <header
      className="d-flex justify-content-between align-items-center p-3 shadow-lg flex-wrap"
      style={{ background: "#144481" }}
    >
      <h2 className="h5 text-small m-0 fw-bold text-white">
        Lawyer <span className="text-warning"> Dashboard</span>
      </h2>
      <div className="d-flex align-items-center gap-3 mt-2 mt-md-0">
        {/* Search Icon for Small Screens */}
        <div className="d-block d-md-none">
          <button
            className="btn text-white"
            onClick={() => setShowSearch(!showSearch)}
          >
            <Search size={20} />
          </button>
        </div>

        {/* Search Bar for Medium and Larger Screens */}
        <div className={`d-none d-md-block ${showSearch ? "d-block" : ""}`}>
          <input
            type="text"
            className="form-control"
            placeholder="Search cases..."
          />
        </div>

        {/* Search Bar for Small Screens */}
        <div
          className={`d-block d-md-none ${showSearch ? "d-block" : "d-none"}`}
        >
          <input
            type="text"
            className="form-control"
            placeholder="Search cases..."
            onBlur={() => setShowSearch(false)} 
          />
        </div>

        <Bell className="text-warning" size={22} />
        <div className="d-flex align-items-center">
          <div
            className="rounded-circle bg-warning"
            style={{ width: 40, height: 40 }}
          ></div>
          <span className="ms-2 d-none d-md-block text-white fw-bold">
            Adv. Rajesh Kumar
          </span>
        </div>
      </div>
    </header>
    </>
  
  );
};

export default Header;
