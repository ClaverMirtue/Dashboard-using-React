import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import DashboardCards from "./components/DashboardCards";
import RevenueChart from "./components/RevenueChart";
import NewUsersTable from "./components/NewUsersTable";
import ReportsPage from "./components/ReportsPage";
import UsersPage from "./components/UsersPage";
import SubscriptionsPage from "./components/SubscriptionsPage";
import UserDetailPage from "./components/UserDetailPage";
import BranchDetailPage from "./components/BranchDetailPage";
import SettingsPage from "./components/SettingsPage";
import AddSubscriptionPage from "./components/AddSubscriptionPage";
import "./App.css";
import "./components/Sidebar.css";
import "./components/Topbar.css";
import "./components/DashboardCards.css";
import "./components/RevenueChart.css";
import "./components/NewUsersTable.css";
import "./components/ReportsPage.css";
import "./components/UsersPage.css";
import "./components/SubscriptionsPage.css";
import "./components/UserDetailPage.css";
import "./components/BranchDetailPage.css";
import "./components/SettingsPage.css";
import "./components/AddSubscriptionPage.css";

function App() {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="main-content">
          <Topbar />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <DashboardCards />
                  <RevenueChart />
                  <NewUsersTable />
                </>
              }
            />
            <Route path="/reports" element={<ReportsPage />} />
            <Route path="/user" element={<UsersPage />} />
            <Route path="/subscriptions" element={<SubscriptionsPage />} />
            <Route path="/user/:id" element={<UserDetailPage />} />
            <Route path="/branch/:id" element={<BranchDetailPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/add-subscription" element={<AddSubscriptionPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
