import React from "react";
import { FaTh, FaBars } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";

const SidebarContainer = styled.div`
  background: #424141;
  color: #fff;
  height: 100vh;
  width: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  transition: width 0.5s;
  position: fixed;
  top: 0;
  left: 0;
  overflow-x: hidden;
`;

const Sidebar = ({ isOpen, setIsOpen, handleLogout, children }) => {
  const history = useNavigate(); // Import useHistory hook

  const closeSidebar = () => setIsOpen(false); // Function to close sidebar

  const menuItem = [
    {
      path: "/Admin",
      name: "Dashboard",
      icon: <FaTh />,
    },
    {
      path: "/", // Change path to "/" for Logout
      name: "Logout",
      icon: <FaTh />,
    },
  ];

  // Function to handle logout and hide sidebar permanently
  const handleLogoutClick = () => {
    handleLogout(); // Call logout function
    setIsOpen(false); // Hide sidebar permanently
    history("/"); // Navigate to home page ("/")
  };

  return (
    <div className="container">
      <SidebarContainer isOpen={isOpen}>
        <div className="top_section">
          <h1 style={{ display: isOpen ? "block" : "none" }} className="logo">
            Player Profiler
          </h1>
          <div style={{ marginLeft: isOpen ? "50px" : "0px" }} className="bars">
            <FaBars onClick={closeSidebar} />
          </div>
        </div>
        {menuItem.map((item, index) => (
          <NavLink
            to={item.path}
            key={index}
            className="link"
            activeClassName="active"
            onClick={item.name === "Logout" ? handleLogoutClick : closeSidebar} // Handle logout separately
          >
            <div className="icon">{item.icon}</div>
            <div
              style={{ display: isOpen ? "block" : "none" }}
              className="link_text"
            >
              {item.name}
            </div>
          </NavLink>
        ))}
      </SidebarContainer>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;
