import React, { useState } from "react";
import { FaTimes, FaChevronDown } from "react-icons/fa";
import "./NotificationPanel.css";

const filters = ["This Week", "This Month", "All"];

const notifications = [
  {
    id: 1,
    user: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "edit",
    text: "Wade Warren Wants to Edit Recipe",
    time: "2 min ago"
  },
  {
    id: 2,
    user: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "comment",
    text: "Commented on Recipe",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    time: "2 min ago"
  },
  {
    id: 3,
    user: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "comment",
    text: "Commented on Recipe",
    comment: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's",
    time: "2 min ago"
  },
  {
    id: 4,
    user: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "edit",
    text: "Wade Warren Wants to Edit Recipe",
    time: "2 min ago"
  },
  {
    id: 5,
    user: "Wade Warren",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    type: "edit",
    text: "Wade Warren Wants to Edit Recipe",
    time: "2 min ago"
  }
];

const NotificationPanel = ({ onClose }) => {
  const [filter, setFilter] = useState(filters[0]);
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="notification-overlay">
      <div className="notification-panel">
        <div className="notification-panel-header">
          <span>Notifications</span>
          <button className="notification-close-btn" onClick={onClose}><FaTimes /></button>
        </div>
        <div className="notification-panel-summary">
          <span className="notification-total">Total Notifications({notifications.length})</span>
          <div className="notification-filter-dropdown">
            <button className="notification-filter-btn" onClick={() => setShowDropdown(v => !v)}>
              {filter} <FaChevronDown style={{ marginLeft: 6 }} />
            </button>
            {showDropdown && (
              <div className="notification-filter-list">
                {filters.map(f => (
                  <div
                    key={f}
                    className={`notification-filter-item${f === filter ? " selected" : ""}`}
                    onClick={() => { setFilter(f); setShowDropdown(false); }}
                  >
                    {f}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div className="notification-list">
          {notifications.map((n, idx) => (
            <div className="notification-card" key={n.id}>
              <div className="notification-card-header">
                <img src={n.avatar} alt="avatar" className="notification-avatar" />
                <div>
                  <span className="notification-user">{n.user}</span>
                  <span className="notification-text">{n.text}</span>
                </div>
                <span className="notification-time">{n.time}</span>
              </div>
              {n.type === "edit" && (
                <div className="notification-actions">
                  <button className="notification-allow-btn">Allow</button>
                  <button className="notification-deny-btn">Deny</button>
                </div>
              )}
              {n.type === "comment" && (
                <div className="notification-comment">{n.comment}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NotificationPanel; 