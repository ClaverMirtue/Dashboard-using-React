import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FaTrash, FaCog, FaExternalLinkAlt, FaStar, FaPlay } from "react-icons/fa";
import "./BranchDetailPage.css";

const branch = {
  logo: "Logo",
  name: "Branch Name",
  address: "1919 Post Alley, Seattle, WA 98101, United States",
  contact: "eddie_lake@gmail.com",
  staffType: "Basic"
};

const staff = [
  { name: "Kurt Bates", designation: "cooking chef", contact: "katie63@aol.com", task: 5 },
  { name: "Stephanie Sharkey", designation: "cooking chef", contact: "c_j_mccoy@gmail.com", task: 5 },
  { name: "Frances Swann", designation: "cooking chef", contact: "iva838@outlook.com", task: 5 },
  { name: "Joshua Jones", designation: "cooking chef", contact: "eddie_lake@gmail.com", task: 5 },
  { name: "Mary Freund", designation: "cooking chef", contact: "kurt_bates@outlook.com", task: 5 },
  { name: "Mary Freund", designation: "cooking chef", contact: "kurt_bates@outlook.com", task: 5 },
  { name: "Mary Freund", designation: "cooking chef", contact: "kurt_bates@outlook.com", task: 5 },
  { name: "Mary Freund", designation: "cooking chef", contact: "kurt_bates@outlook.com", task: 5 }
];

const tabs = ["Staff", "Templates", "Recipes", "Wine Types", "Generated Videos"];

const templates = Array.from({ length: 10 }).map((_, i) => ({
  title: "Template Name",
  subtitle: "Specials",
  img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
}));

const recipes = Array.from({ length: 5 }).map((_, i) => ({
  title: "Balsamic Glazed Pork Porterhouse, with broccolini and roasted fingerlings.",
  subtitle: "Balsamic Glazed Pork Porterhouse, with broccolini and roasted fingerlings.",
  img: "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=400&q=80",
  rating: 4.5
}));

const wines = [
  {
    name: "Cabernet Sauvignon",
    description: "A full-bodied red wine with dark fruit flavors and savory tastes from black pepper to bell pepper.",
    img: "https://images.unsplash.com/photo-1514361892635-cebb9b6c1d90?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Chardonnay",
    description: "A popular white wine with flavors ranging from apple and lemon to papaya and pineapple.",
    img: "https://images.unsplash.com/photo-1502741338009-cac2772e18bc?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Pinot Noir",
    description: "A light-bodied red wine with red fruit, flower, and spice aromas that are accentuated by a long, smooth finish.",
    img: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Sauvignon Blanc",
    description: "A crisp, dry, and aromatic white wine with high acidity and citrus flavors.",
    img: "https://images.unsplash.com/photo-1510626176961-4b57d4fbad04?auto=format&fit=crop&w=400&q=80"
  },
  {
    name: "Merlot",
    description: "A soft, medium- to full-bodied red wine with juicy fruit flavors like plum, black cherry, and raspberry.",
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80"
  }
];

const videos = Array.from({ length: 8 }).map((_, i) => ({
  img: "https://images.unsplash.com/photo-1514361892635-cebb9b6c1d90?auto=format&fit=crop&w=600&q=80"
}));

const BranchDetailPage = () => {
  const [activeTab, setActiveTab] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <button className="back-btn" onClick={() => navigate(-1)}>← Back</button>
      <div className="branch-detail-card">
        <div className="branch-detail-logo">{branch.logo}</div>
        <div className="branch-detail-info">
          <div>
            <div className="branch-detail-label">Name</div>
            <div className="branch-detail-value">{branch.name}</div>
          </div>
          <div>
            <div className="branch-detail-label">Address</div>
            <div className="branch-detail-value">{branch.address}</div>
          </div>
          <div>
            <div className="branch-detail-label">Contact</div>
            <div className="branch-detail-value">{branch.contact}</div>
          </div>
          <div>
            <div className="branch-detail-label">Total Staff</div>
            <div className="branch-detail-value">{branch.staffType}</div>
          </div>
        </div>
        <div className="branch-detail-actions">
          <button className="action-btn"><FaTrash /></button>
          <button className="action-btn"><FaCog /></button>
        </div>
      </div>
      <div className="branch-tabs">
        {tabs.map((tab, idx) => (
          <button
            key={tab}
            className={`branch-tab-btn${activeTab === idx ? " active" : ""}`}
            onClick={() => setActiveTab(idx)}
          >
            {tab}
          </button>
        ))}
      </div>
      {activeTab === 0 && (
        <div className="branch-staff-table-container">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Designation</th>
                <th>Contact</th>
                <th>Task</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {staff.map((s, idx) => (
                <tr key={idx}>
                  <td>{s.name}</td>
                  <td>{s.designation}</td>
                  <td>{s.contact}</td>
                  <td>{s.task}</td>
                  <td>
                    <button className="action-btn">
                      <FaExternalLinkAlt />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {activeTab === 1 && (
        <div className="branch-templates-grid">
          {templates.map((tpl, idx) => (
            <div className="template-card" key={idx}>
              <div className="template-card-header">
                <div className="template-title">{tpl.title}</div>
                <div className="template-subtitle">{tpl.subtitle}</div>
              </div>
              <div className="template-img-box">
                <img src={tpl.img} alt="template" />
                <span className="template-action-icon"><FaExternalLinkAlt /></span>
              </div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 2 && (
        <div className="branch-recipes-grid">
          {recipes.map((rec, idx) => (
            <div className={`recipe-card${idx === 0 ? " active" : ""}`} key={idx}>
              <div className="recipe-img-box">
                <img src={rec.img} alt="recipe" />
                <div className="recipe-rating">
                  <FaStar style={{ color: '#ffb347', marginRight: 2 }} />
                  <span>{rec.rating}/5</span>
                </div>
              </div>
              <div className="recipe-title">{rec.title}</div>
              <div className="recipe-subtitle">{rec.subtitle}</div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 3 && (
        <div className="branch-wines-grid">
          {wines.map((wine, idx) => (
            <div className="wine-card" key={idx}>
              <div className="wine-img-box">
                <img src={wine.img} alt={wine.name} />
              </div>
              <div className="wine-title">{wine.name}</div>
              <div className="wine-desc">{wine.description}</div>
            </div>
          ))}
        </div>
      )}
      {activeTab === 4 && (
        <div className="branch-videos-grid">
          {videos.map((video, idx) => (
            <div className="video-card" key={idx}>
              <div className="video-thumb-box">
                <img src={video.img} alt="video" />
                <span className="video-play-icon"><FaPlay /></span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BranchDetailPage; 