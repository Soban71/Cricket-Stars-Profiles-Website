import React, { useState } from "react";
import "./NavBar.css";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();

  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  // const handleLogout = () => {
  //   setShowDropdown(false); // Hide dropdown when logging out
  //   navigate("/");
  // };

  const handleLinkClick = () => {
    setShowDropdown(false); // Hide dropdown when navigating away
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">PlayerProfile Manager</div>
      <div className="navbar-menu">
        <div className="navbar-item">
          <img
            src="https://t4.ftcdn.net/jpg/02/44/43/69/360_F_244436923_vkMe10KKKiw5bjhZeRDT05moxWcPpdmb.jpg"
            alt="Profile"
            className="profile-image"
          />
          <span className="profile-name">Raja Asad Mehmood</span>
          <div className="profile-info" onClick={handleDropdownToggle}>
            <span className="arrow">&#9662;</span>
          </div>
          {showDropdown && (
            <div className="dropdown-menu">
              <Link
                to="/manage-account"
                className="dropdown-item"
                onClick={handleLinkClick}
              >
                Manage Account
              </Link>
              {/* <div className="dropdown-item" onClick={handleLogout}>
                Logout
              </div> */}
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
