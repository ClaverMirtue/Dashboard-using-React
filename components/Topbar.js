import React, { useState } from "react";
import { FaSearch, FaBell, FaCog } from "react-icons/fa";
import { Link } from "react-router-dom";
import NotificationPanel from "./NotificationPanel";
import "./Topbar.css";

const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  return (
    <div className="topbar">
      <div className="search-bar">
        <FaSearch />
        <input type="text" placeholder="Search" />
      </div>
      <div className="topbar-right">
        <div className="date-filter">
          <label>Date Range Filter:</label>
          <input type="text" value="July 1, 2024 - July 31, 2024" readOnly />
        </div>
        <FaBell className="icon" onClick={() => setShowNotifications(true)} style={{ cursor: 'pointer' }} />
        <Link to="/settings" className="icon" style={{ display: 'inline-flex', alignItems: 'center' }}>
          <FaCog />
        </Link>
        <div className="profile">
          <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
          <div>
            <div className="name">Brigete Laurie</div>
            <div className="email">Erin.simonoff@gmail.com</div>
          </div>
        </div>
      </div>
      {showNotifications && <NotificationPanel onClose={() => setShowNotifications(false)} />}
    </div>
  );
};

export default Topbar; 