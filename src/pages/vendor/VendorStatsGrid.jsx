import React from "react";

const VendorStatsGrid = ({ stats }) => (
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
    {stats.map((stat, idx) => {
      const Icon = stat.icon;
      return (
        <div key={idx} className="bg-white rounded-xl shadow-soft p-4 flex flex-col items-center text-center">
          <div className={`mb-2 p-2 rounded-full bg-${stat.color}-100 text-${stat.color}-600`}>
            {Icon && <Icon className="w-7 h-7" />}
          </div>
          <div className="text-2xl font-bold mb-1">{stat.value}</div>
          <div className="text-sm text-neutral-600 mb-1">{stat.title}</div>
          <div className="text-xs font-medium text-green-600">{stat.change}</div>
        </div>
      );
    })}
  </div>
);

export default VendorStatsGrid; 