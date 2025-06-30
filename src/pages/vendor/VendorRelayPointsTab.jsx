import React from "react";
// import VendorRelayPointsList from "./VendorRelayPointsList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const VendorRelayPointsTab = ({ relayPoints }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-bold text-neutral-800">نقاط الترحيل المتاحة</h3>
      <div className="relative">
        <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
        <input type="text" placeholder="البحث في نقاط الترحيل..." className="input-field pr-10 w-64" />
      </div>
    </div>
    {/* <VendorRelayPointsList relayPoints={relayPoints} /> */}
  </div>
);

export default VendorRelayPointsTab; 