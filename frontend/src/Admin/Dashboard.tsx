import React, { useState } from "react";
import NavBar from "./DashboardComponents/Navbar";
import WelcomeBox from "./DashboardComponents/WelcomeBox";
import TaskTable from "./DashboardComponents/TaskTable";
import Footer from "./DashboardComponents/Footer";
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import '../App.css';
import '../index.css';
const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsOpen(false);
    navigate("/");
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Sidebar
        handleLogout={handleLogout}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />

      <NavBar toggleSidebar={toggleSidebar} />
      <WelcomeBox />
      <TaskTable />
      <Footer />
    </div>
  );
};

export default Dashboard;
