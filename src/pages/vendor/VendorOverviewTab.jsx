import React from "react";
import VendorStatsGrid from "./VendorStatsGrid";
import VendorRelayPointsMap from "./VendorRelayPointsMap";

const VendorOverviewTab = ({ stats, relayPoints }) => (
  <div className="space-y-8">
    <VendorStatsGrid stats={stats} />
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <h2 className="text-xl font-bold mb-4">نقاط الترحيل على الخريطة</h2>
      <VendorRelayPointsMap relayPoints={relayPoints} />
    </div>
  </div>
);

export default VendorOverviewTab; 