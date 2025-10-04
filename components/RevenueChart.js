import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";
import "./RevenueChart.css";

const data = Array.from({ length: 20 }, (_, i) => ({
  name: `${(i + 1) * 3}k`,
  value: Math.floor(Math.random() * 100000),
}));

const RevenueChart = () => (
  <div className="revenue-chart-container">
    <div className="chart-title">Revenue Details</div>
    <ResponsiveContainer width="100%" height={260}>
      <LineChart data={data}>
        <CartesianGrid stroke="#e5e7eb" vertical={false} />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="value" stroke="#0a2342" strokeWidth={2} dot={{ r: 4 }} />
      </LineChart>
    </ResponsiveContainer>
  </div>
);

export default RevenueChart; 