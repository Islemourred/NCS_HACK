import React from "react";

const VendorDashboard = () => {
  return (
    <div className="p-8 min-h-[80vh] bg-gradient-to-br from-blue-50 to-white">
      <h1 className="text-3xl font-bold text-blue-700 mb-4">Vendor Dashboard</h1>
      <div className="bg-white shadow rounded-lg p-6">
        <p className="text-gray-700">Welcome, Vendor! Here you can create and manage orders, select relay points, and view your stats.</p>
      </div>
    </div>
  );
};

export default VendorDashboard; 