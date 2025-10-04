import React from "react";
import { FaTrash, FaUser, FaEllipsisH } from "react-icons/fa";
import "./NewUsersTable.css";

const users = [
  { username: "Kurt Bates", email: "katie63@aol.com", plan: "Basic" },
  { username: "Stephanie Sharkey", email: "c_j_mccoy@gmail.com", plan: "Basic" },
  { username: "Frances Swann", email: "iva838@outlook.com", plan: "Basic" },
  { username: "Joshua Jones", email: "eddie_lake@gmail.com", plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", plan: "Basic" },
];

const NewUsersTable = () => (
  <div className="users-table-container">
    <div className="table-title">New Users</div>
    <table>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email</th>
          <th>Subscription Plan</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((u, idx) => (
          <tr key={idx}>
            <td>{u.username}</td>
            <td>{u.email}</td>
            <td>{u.plan}</td>
            <td>
              <button className="action-btn"><FaTrash /></button>
              <button className="action-btn"><FaUser /></button>
              <button className="action-btn"><FaEllipsisH /></button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default NewUsersTable; 