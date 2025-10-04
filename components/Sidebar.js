import React from "react";
import { FaTachometerAlt, FaUsers, FaFileAlt, FaRegCreditCard, FaSignOutAlt } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="sidebar">
      <div className="logo">PLATEPREP <span className="subtitle">A MEAL PREPARATION REPOSITORY</span></div>
      <ul>
        <li className={location.pathname === "/" ? "active" : ""}>
          <Link to="/"><FaTachometerAlt /> Dashboard</Link>
        </li>
        <li className={location.pathname === "/user" ? "active" : ""}>
          <Link to="/user"><FaUsers /> Users</Link>
        </li>
        <li className={location.pathname === "/reports" ? "active" : ""}>
          <Link to="/reports"><FaFileAlt /> Reports</Link>
        </li>
        <li className={location.pathname === "/subscriptions" ? "active" : ""}>
          <Link to="/subscriptions"><FaRegCreditCard /> Subscriptions</Link>
        </li>
      </ul>
      <button className="logout"><FaSignOutAlt /> Logout</button>
    </div>
  );
};

export default Sidebar; 