import React from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./SubscriptionsPage.css";

const plans = [
  {
    price: "$10/month",
    name: "Basic plan",
    desc: "Billed annually.",
    features: [
      "Access to all basic features",
      "Basic reporting and analytics",
      "Up to 10 individual users",
      "20GB individual data each user",
      "Basic chat and email support"
    ]
  },
  {
    price: "$20/month",
    name: "Business plan",
    desc: "Billed annually.",
    features: [
      "200+ integrations",
      "Advanced reporting and analytics",
      "Up to 20 individual users",
      "40GB individual data each user",
      "Priority chat and email support"
    ]
  },
  {
    price: "$40/month",
    name: "Enterprise plan",
    desc: "Billed annually.",
    features: [
      "Advanced custom fields",
      "Audit log and data history",
      "Unlimited individual users",
      "Unlimited individual data",
      "Personalised-priority service"
    ]
  }
];

const SubscriptionsPage = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div className="subscriptions-header">
        <h2>Subscription Management</h2>
        <button className="add-subscription-btn" onClick={() => navigate("/add-subscription")}>Add New Subscription</button>
      </div>
      <div className="subscriptions-cards">
        {plans.map((plan, idx) => (
          <div className="subscription-card" key={idx}>
            <div className="subscription-price">{plan.price}</div>
            <div className="subscription-name">{plan.name}</div>
            <div className="subscription-desc">{plan.desc}</div>
            <ul className="subscription-features">
              {plan.features.map((f, i) => (
                <li key={i}><FaCheckCircle className="feature-icon" /> {f}</li>
              ))}
            </ul>
            <button className="edit-subscription-btn">Edit Subscription</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SubscriptionsPage;
