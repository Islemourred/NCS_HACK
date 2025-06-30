import React from "react";

const AdminDashboard = () => {
  return (
    <div className="p-8 min-h-[80vh] bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Admin Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700">Welcome, Admin! Here you can manage users, relay points, orders, and view analytics.</p>
      </div>
    </div>
  );
};

export default AdminDashboard; 