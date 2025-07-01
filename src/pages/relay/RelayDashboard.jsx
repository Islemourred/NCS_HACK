import React, { useState } from "react";
import {
  TruckIcon,
  MapPinIcon,
  UserIcon,
  BellIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
import RelayPointsCRUD from "./RelayPointsCRUD";
import OverviewTab from "./OverviewTab";
import ParcelsTab from "./ParcelsTab";
import ProfileTab from "./ProfileTab";
import SettingsTab from "./SettingsTab";
import EmploymentApplications from "./EmploymentApplications";

const RelayDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 p-6"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-neutral-800 mb-2">
              لوحة تحكم نقطة الترحيل
            </h1>
            <p className="text-neutral-600">
              أهلاً بك! هنا يمكنك إدارة الطرود وتحديث الحالات ومتابعة عملياتك
              اليومية.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 relative">
              <BellIcon className="w-6 h-6 text-neutral-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: TruckIcon },
            { id: "parcels", label: "إدارة الطرود", icon: TruckIcon },
            { id: "relaypoints", label: "نقاط الترحيل", icon: MapPinIcon },
            { id: "profile", label: "الملف الشخصي", icon: UserIcon },
            { id: "settings", label: "الإعدادات", icon: CogIcon },
            { id: "employment", label: "طلبات نقاط الترحيل", icon: TruckIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-medium"
                  : "bg-white text-neutral-700 hover:bg-primary-50 shadow-soft"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && <OverviewTab />}

        {/* Parcels Management Tab */}
        {activeTab === "parcels" && <ParcelsTab />}

        {/* Relay Points CRUD Tab */}
        {activeTab === "relaypoints" && <RelayPointsCRUD />}

        {/* Profile Tab */}
        {activeTab === "profile" && <ProfileTab />}

        {/* Settings Tab */}
        {activeTab === "settings" && <SettingsTab />}

        {/* Employment Applications */}
        {activeTab === "employment" && <EmploymentApplications />}
      </div>
    </div>
  );
};

export default RelayDashboard;
