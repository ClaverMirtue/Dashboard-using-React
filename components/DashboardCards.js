import React from "react";
import { FaUsers, FaUserCheck, FaUserTimes, FaChartLine } from "react-icons/fa";
import "./DashboardCards.css";

const cards = [
  { title: "Total Users", value: "40,689", icon: <FaUsers /> },
  { title: "Active Users", value: "30,000", icon: <FaUserCheck /> },
  { title: "Inactive Users", value: "10,689", icon: <FaUserTimes /> },
  { title: "Revenue", value: "$ 324,3400", icon: <FaChartLine /> },
];

const DashboardCards = () => (
  <div className="dashboard-cards">
    {cards.map((card, idx) => (
      <div className="card" key={idx}>
        <div className="card-content">
          <div>
            <div className="card-title">{card.title}</div>
            <div className="card-value">{card.value}</div>
          </div>
          <div className="card-icon">{card.icon}</div>
        </div>
      </div>
    ))}
  </div>
);

export default DashboardCards; 