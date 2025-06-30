import React from "react";

const tabs = [
  { key: "overview", label: "نظرة عامة" },
  { key: "orders", label: "الطلبات" },
  { key: "relay-points", label: "نقاط الترحيل" },
  { key: "profile", label: "الملف الشخصي" },
  { key: "settings", label: "الإعدادات" },
];

const VendorTabsNav = ({ activeTab, setActiveTab }) => (
  <div className="flex gap-2 mb-8 border-b border-neutral-200">
    {tabs.map((tab) => (
      <button
        key={tab.key}
        className={`px-4 py-2 font-medium rounded-t-lg focus:outline-none transition-all duration-150
          ${activeTab === tab.key
            ? "bg-primary-100 text-primary-700 border-b-2 border-primary-500"
            : "text-neutral-600 hover:bg-neutral-100"}
        `}
        onClick={() => setActiveTab(tab.key)}
        type="button"
      >
        {tab.label}
      </button>
    ))}
  </div>
);

export default VendorTabsNav; 