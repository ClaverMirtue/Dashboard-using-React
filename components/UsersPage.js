import React, { useState } from "react";
import { FaTrash, FaUser, FaExternalLinkAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./UsersPage.css";

const initialUsers = [
  { username: "Kurt Bates", email: "katie63@aol.com", branches: 2, plan: "Basic" },
  { username: "Stephanie Sharkey", email: "c_j_mccoy@gmail.com", branches: 2, plan: "Basic" },
  { username: "Frances Swann", email: "iva838@outlook.com", branches: 2, plan: "Basic" },
  { username: "Joshua Jones", email: "eddie_lake@gmail.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
  { username: "Mary Freund", email: "kurt_bates@outlook.com", branches: 2, plan: "Basic" },
];

const UsersPage = () => {
  const [users, setUsers] = useState(initialUsers);

  const handleDelete = (idx) => {
    setUsers(users.filter((_, i) => i !== idx));
  };

  const handleUser = (username) => {
    alert(`User: ${username}`);
  };

  const handleOpen = (email) => {
    alert(`Email: ${email}`);
  };

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Users</h2>
      <div className="users-table-container">
        <table>
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Branches</th>
              <th>Subscription Plan</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((u, idx) => (
              <tr key={idx}>
                <td>{u.username}</td>
                <td>{u.email}</td>
                <td>{u.branches}</td>
                <td>{u.plan}</td>
                <td>
                  <button className="action-btn" onClick={() => handleDelete(idx)}><FaTrash /></button>
                  <button className="action-btn" onClick={() => handleUser(u.username)}><FaUser /></button>
                  <Link to={`/user/${idx}`} className="action-btn" style={{ color: "inherit" }}><FaExternalLinkAlt /></Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="users-table-footer">
          <span>{users.length} of 120 results</span>
          <div>
            <button className="pagination-btn" disabled>Previous</button>
            <button className="pagination-btn">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage; 