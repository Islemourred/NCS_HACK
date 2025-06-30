import React from "react";

const stats = [
  { label: "معدل التسليم في الوقت", value: "96%" },
  { label: "متوسط التقييم", value: "4.8 / 5" },
  { label: "متوسط زمن الاستجابة", value: "1.2 ساعة" },
  { label: "عدد الطلبات الشهري", value: "120" },
];

const VendorPerformanceStats = () => (
  <div className="bg-white rounded-xl shadow-soft p-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
    {stats.map((stat, idx) => (
      <div key={idx} className="flex flex-col items-center text-center p-2">
        <div className="text-2xl font-bold mb-1">{stat.value}</div>
        <div className="text-sm text-neutral-600">{stat.label}</div>
      </div>
    ))}
  </div>
);

export default VendorPerformanceStats; 