import React, { useState } from "react";
import { FaUser, FaLock, FaBell, FaPen } from "react-icons/fa";
import "./SettingsPage.css";

const tabs = [
  { label: "Personal Information", icon: <FaUser /> },
  { label: "Security", icon: <FaLock /> },
  { label: "Notifications", icon: <FaBell /> },
];

const notificationList = [
  "General Notifications",
  "Admin Notification",
  "Email Notification",
  "Phone Notification",
  "Subscription Notification",
];

const defaultToggles = [true, false, true, true, true];

const SettingsPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    state: "",
    address: "",
  });
  const [security, setSecurity] = useState({
    oldPassword: "",
    newPassword: "",
    reNewPassword: "",
  });
  const [toggles, setToggles] = useState(defaultToggles);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSecurityChange = (e) => {
    setSecurity({ ...security, [e.target.name]: e.target.value });
  };

  const handleToggle = (idx) => {
    setToggles((prev) => prev.map((v, i) => (i === idx ? !v : v)));
  };

  return (
    <div>
      <h2 style={{ marginBottom: 24 }}>Settings</h2>
      <div className="settings-card">
        <div className="settings-left">
          <div className="settings-tabs">
            {tabs.map((tab, idx) => (
              <button
                key={tab.label}
                className={`settings-tab-btn${activeTab === idx ? " active" : ""}`}
                onClick={() => setActiveTab(idx)}
              >
                {tab.icon} {tab.label}
              </button>
            ))}
          </div>
          {activeTab === 0 && (
            <form className="settings-form">
              <label>Name
                <input type="text" name="name" placeholder="Enter your name" value={form.name} onChange={handleChange} />
              </label>
              <label>Contact Email
                <input type="email" name="email" placeholder="Enter your email address" value={form.email} onChange={handleChange} />
              </label>
              <label>Phone Number
                <input type="text" name="phone" placeholder="Enter your phone number" value={form.phone} onChange={handleChange} />
              </label>
              <div className="settings-form-row">
                <label>City
                  <input type="text" name="city" placeholder="City" value={form.city} onChange={handleChange} />
                </label>
                <label>State
                  <input type="text" name="state" placeholder="State" value={form.state} onChange={handleChange} />
                </label>
              </div>
              <label>Address
                <input type="text" name="address" placeholder="Address" value={form.address} onChange={handleChange} />
              </label>
              <div className="settings-form-actions">
                <button type="button" className="settings-cancel-btn">Cancel</button>
                <button type="submit" className="settings-save-btn">Save</button>
              </div>
            </form>
          )}
          {activeTab === 1 && (
            <form className="settings-form">
              <label>Old Password
                <input type="password" name="oldPassword" placeholder="********" value={security.oldPassword} onChange={handleSecurityChange} />
              </label>
              <label>New Password
                <input type="password" name="newPassword" placeholder="********" value={security.newPassword} onChange={handleSecurityChange} />
              </label>
              <label>Re-Enter New Password
                <input type="password" name="reNewPassword" placeholder="********" value={security.reNewPassword} onChange={handleSecurityChange} />
              </label>
              <div className="settings-form-actions">
                <button type="button" className="settings-cancel-btn">Cancel</button>
                <button type="submit" className="settings-save-btn">Save</button>
              </div>
            </form>
          )}
          {activeTab === 2 && (
            <form className="settings-form settings-notification-form">
              {notificationList.map((label, idx) => (
                <div className="settings-notification-row" key={label}>
                  <span>{label}</span>
                  <label className="switch">
                    <input type="checkbox" checked={toggles[idx]} onChange={() => handleToggle(idx)} />
                    <span className="slider round"></span>
                  </label>
                </div>
              ))}
              <div className="settings-form-actions">
                <button type="button" className="settings-cancel-btn">Cancel</button>
                <button type="submit" className="settings-save-btn">Save</button>
              </div>
            </form>
          )}
        </div>
        <div className="settings-profile">
          <div className="settings-profile-label">Profile</div>
          <div className="settings-profile-img-box">
            <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="profile" />
            <span className="settings-profile-edit"><FaPen /></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage; 