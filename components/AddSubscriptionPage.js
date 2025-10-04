import React, { useState } from "react";
import { FaTrash } from "react-icons/fa";
import "./AddSubscriptionPage.css";

const AddSubscriptionPage = () => {
  const [planName, setPlanName] = useState("");
  const [price, setPrice] = useState("");
  const [discount, setDiscount] = useState("");
  const [features, setFeatures] = useState([
    "Real-time contact syncing",
    "Private lists",
    "Adjustable permissions",
    "Unlimited reporting",
  ]);

  const handleFeatureChange = (idx, value) => {
    setFeatures(features.map((f, i) => (i === idx ? value : f)));
  };

  const handleRemoveFeature = (idx) => {
    setFeatures(features.filter((_, i) => i !== idx));
  };

  const handleAddFeature = () => {
    setFeatures([...features, ""]);
  };

  return (
    <div className="add-subscription-container">
      <h2>Add New Subscription Plan</h2>
      <div className="add-subscription-subhead">Define pricing, features, and limits for a new subscription tier.</div>
      <form className="add-subscription-form">
        <div className="add-subscription-row">
          <div className="add-subscription-field">
            <label>Plan Name<span className="required">*</span></label>
            <input type="text" placeholder="Enter a title" value={planName} onChange={e => setPlanName(e.target.value)} />
          </div>
          <div className="add-subscription-field">
            <label>Price Per Month</label>
            <input type="text" placeholder="Enter a price" value={price} onChange={e => setPrice(e.target.value)} />
          </div>
          <div className="add-subscription-field">
            <label>Discount %</label>
            <input type="text" placeholder="Enter discount percentage" value={discount} onChange={e => setDiscount(e.target.value)} />
          </div>
        </div>
        <div className="add-subscription-features">
          <label>Features</label>
          {features.map((feature, idx) => (
            <div className="feature-row" key={idx}>
              <input
                type="text"
                value={feature}
                onChange={e => handleFeatureChange(idx, e.target.value)}
                placeholder="Feature description"
              />
              <button type="button" className="feature-remove-btn" onClick={() => handleRemoveFeature(idx)}>
                <FaTrash />
              </button>
            </div>
          ))}
          <button type="button" className="add-feature-btn" onClick={handleAddFeature}>
            Add New Feature
          </button>
        </div>
        <div className="add-subscription-actions">
          <button type="button" className="cancel-btn">Cancel</button>
          <button type="submit" className="save-btn">Save</button>
        </div>
      </form>
    </div>
  );
};

export default AddSubscriptionPage; 