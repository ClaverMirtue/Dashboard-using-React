import React from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { FaTrash, FaUser, FaCog, FaExternalLinkAlt } from "react-icons/fa";
import "./UserDetailPage.css";

const user = {
  name: "Brigete Laurie",
  username: "omarrhielmadsen",
  email: "eddie_lake@gmail.com",
  plan: "Basic",
  branches: 2,
  photo: "https://randomuser.me/api/portraits/women/44.jpg"
};

const branches = [
  { name: "Kurt Bates", address: "1919 Post Alley, Seattle, WA 98101, United States", contact: "katie63@aol.com", staff: 10 },
  { name: "Stephanie Sharkey", address: "1919 Post Alley, Seattle, WA 98101, United States", contact: "c_j_mccoy@gmail.com", staff: 20 }
];

const UserDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="user-detail-card">
        <div className="user-detail-photo">
          <img src={user.photo} alt="User" />
        </div>
        <div className="user-detail-info">
          <div>
            <div className="user-detail-label">Name</div>
            <div className="user-detail-value">{user.name}</div>
          </div>
          <div>
            <div className="user-detail-label">Username</div>
            <div className="user-detail-value">{user.username}</div>
          </div>
          <div>
            <div className="user-detail-label">Email</div>
            <div className="user-detail-value">{user.email}</div>
          </div>
          <div>
            <div className="user-detail-label">Subscription Plan</div>
            <div className="user-detail-value">{user.plan}</div>
          </div>
          <div>
            <div className="user-detail-label">Branches</div>
            <div className="user-detail-value">{user.branches}</div>
          </div>
        </div>
        <div className="user-detail-actions">
          <button className="action-btn"><FaTrash /></button>
          <button className="action-btn"><FaCog /></button>
        </div>
      </div>
      <h2 style={{ margin: "32px 0 16px 0" }}>Branches</h2>
      <div className="branches-table-container">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Contact</th>
              <th>Total staff</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((b, idx) => (
              <tr key={idx}>
                <td>{b.name}</td>
                <td>{b.address}</td>
                <td>{b.contact}</td>
                <td>{b.staff}</td>
                <td>
                  <Link to={`/branch/${idx}`} className="action-btn" style={{ color: "inherit" }}>
                    <FaExternalLinkAlt />
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserDetailPage;
