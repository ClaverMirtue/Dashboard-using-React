import React from "react";
import { FaUsers, FaUserCheck, FaUserTimes, FaBuilding, FaMoneyBillWave } from "react-icons/fa";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./ReportsPage.css";

const cardData = [
  { title: "Total User", value: "40,689", icon: <FaUsers />, change: "+8.5% Up from yesterday", color: "#3bb77e" },
  { title: "Active Users", value: "10293", icon: <FaUserCheck />, change: "+1.3% Up from past week", color: "#3bb77e" },
  { title: "Inactive Users", value: "2040", icon: <FaUserTimes />, change: "+1.8% Up from yesterday", color: "#3bb77e" },
  { title: "Total Branches", value: "2040", icon: <FaBuilding />, change: "+1.8% Up from yesterday", color: "#3bb77e" },
  { title: "Total Revenue", value: "$89,000", icon: <FaMoneyBillWave />, change: "-4.3% Down from yesterday", color: "#ff5c5c" },
];

const pieData = [
  { name: "Active", value: 30000, color: "#3bb77e" },
  { name: "Inactive", value: 10000, color: "#ffb347" },
];

const barData = [
  { name: "JAN", value: 20000 },
  { name: "FEB", value: 30000 },
  { name: "MAR", value: 25000 },
  { name: "APR", value: 40000 },
  { name: "MAY", value: 35000 },
  { name: "JUN", value: 50000 },
  { name: "JUL", value: 60000 },
  { name: "AUG", value: 70000 },
  { name: "SEP", value: 80000 },
  { name: "OCT", value: 90000 },
  { name: "NOV", value: 100000 },
  { name: "DEC", value: 110000 },
];

const branches = [
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
  { username: "Kurt Bates", branch: "Branch Name", address: "1919 Post Alley, Seattle, WA 98101, United States" },
];

const ReportsPage = () => (
  <div>
    <h2 style={{ marginBottom: 24 }}>Reports</h2>
    <div className="reports-cards">
      {cardData.map((card, idx) => (
        <div className="report-card" key={idx}>
          <div className="report-card-icon">{card.icon}</div>
          <div>
            <div className="report-card-title">{card.title}</div>
            <div className="report-card-value">{card.value}</div>
            <div className="report-card-change" style={{ color: card.color }}>{card.change}</div>
          </div>
        </div>
      ))}
    </div>
    <div className="reports-charts-row">
      <div className="reports-chart-box">
        <div className="reports-chart-title">Total Users <select><option>Jan</option></select></div>
        <ResponsiveContainer width="100%" height={200}>
          <PieChart>
            <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={60}>
              {pieData.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={entry.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div className="reports-pie-labels">
          <span style={{ color: '#3bb77e' }}>● Active: 30,000</span>
          <span style={{ color: '#ffb347', marginLeft: 16 }}>● Inactive: 10,000</span>
        </div>
        <div className="reports-pie-center">40,303</div>
      </div>
      <div className="reports-chart-box">
        <div className="reports-chart-title">Yearly Revenue <select><option>2025</option></select></div>
        <ResponsiveContainer width="100%" height={200}>
          <BarChart data={barData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" radius={[8, 8, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
    <div className="reports-table-container">
      <div className="reports-table-title">Latest Branches</div>
      <table>
        <thead>
          <tr>
            <th>Username</th>
            <th>Branch Name</th>
            <th>Address</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {branches.map((b, idx) => (
            <tr key={idx}>
              <td>{b.username}</td>
              <td>{b.branch}</td>
              <td>{b.address}</td>
              <td>
                <button className="action-btn">
                  <span role="img" aria-label="open">🔗</span>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default ReportsPage; 