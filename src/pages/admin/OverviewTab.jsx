import React from "react";
import {
  UserGroupIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/24/outline";
import VendorRelayPointsMap from "../vendor/VendorRelayPointsMap";

const mockData = {
  stats: [
    {
      title: "إجمالي المستخدمين",
      value: "1,247",
      icon: UserGroupIcon,
      color: "primary",
      change: "+12%",
    },
    {
      title: "نقاط الترحيل النشطة",
      value: "89",
      icon: BuildingStorefrontIcon,
      color: "secondary",
      change: "+5%",
    },
    {
      title: "الطلبات اليومية",
      value: "342",
      icon: TruckIcon,
      color: "success",
      change: "+18%",
    },
  ],
};

const OverviewTab = () => (
  <div className="space-y-8">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {mockData.stats.map((stat, index) => (
        <div
          key={index}
          className="card p-6 hover:scale-105 transition-all duration-300"
        >
          <div className="flex items-center justify-between mb-4">
            <div
              className={`p-3 bg-gradient-to-br from-${stat.color}-100 to-${stat.color}-200 rounded-xl`}
            >
              <stat.icon className={`w-6 h-6 text-${stat.color}-600`} />
            </div>
            <span className="text-success-600 text-sm font-semibold">
              {stat.change}
            </span>
          </div>
          <h3 className="text-2xl font-bold text-neutral-800 mb-1">
            {stat.value}
          </h3>
          <p className="text-neutral-600 text-sm">{stat.title}</p>
        </div>
      ))}
    </div>
    {/* Overview Tab */}

    <div className="space-y-8">
      {/* Google Map with Relay Points */}
      <div className="bg-white rounded-2xl shadow-soft p-4">
        <h2 className="text-xl font-bold mb-4">نقاط الترحيل على الخريطة</h2>
        <VendorRelayPointsMap relayPoints={mockData.relayPoints} />
      </div>
    </div>
  </div>
);

export default OverviewTab;
