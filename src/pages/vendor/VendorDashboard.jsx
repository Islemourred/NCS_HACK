import React, { useState } from "react";
import {
  ShoppingBagIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon,
  BellIcon,
  MapPinIcon,
  UserIcon,
  CogIcon,
} from "@heroicons/react/24/outline";
// import VendorTabsNav from "./VendorTabsNav";
import VendorStatsGrid from "./VendorStatsGrid";
import VendorProfileForm from "./VendorProfileForm";
// import VendorRecentOrdersTable from "./VendorRecentOrdersTable";
import VendorRelayPointsTab from "./VendorRelayPointsTab";
import VendorPerformanceStats from "./VendorPerformanceStats";
import VendorSettingsNotifications from "./VendorSettingsNotifications";
import VendorSettingsDelivery from "./VendorSettingsDelivery";
import VendorRelayPointsMap from "./VendorRelayPointsMap";
import VendorOrdersTab from "./VendorOrdersTab";
import { useNotification } from "../../components/NotificationProvider";

const mockData = {
  stats: [
    {
      title: "إجمالي الطلبات",
      value: "284",
      icon: ShoppingBagIcon,
      color: "primary",
      change: "+15%",
    },
    {
      title: "قيد التوصيل",
      value: "23",
      icon: TruckIcon,
      color: "warning",
      change: "+8%",
    },
    {
      title: "تم التسليم",
      value: "198",
      icon: CheckCircleIcon,
      color: "success",
      change: "+22%",
    },
  ],
};

const vendorTabs = [
  { id: "overview", label: "نظرة عامة", icon: ShoppingBagIcon },
  { id: "orders", label: "الطلبات", icon: TruckIcon },
  { id: "relay-points", label: "نقاط الترحيل", icon: MapPinIcon },
  { id: "profile", label: "الملف الشخصي", icon: UserIcon },
  { id: "settings", label: "الإعدادات", icon: CogIcon },
];

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  const { showNotification } = useNotification();

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
              لوحة تحكم البائع
            </h1>
            <p className="text-neutral-600">
              أهلاً بك! هنا يمكنك إنشاء وإدارة طلباتك، اختيار نقاط الترحيل،
              ومتابعة إحصائياتك.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 relative"
              onClick={() =>
                showNotification("تم تسليم الطلب بنجاح!", "success")
              }
            >
              <BellIcon className="w-6 h-6 text-neutral-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
            </button>
            <button className="btn-primary gap-2">
              <PlusIcon className="w-5 h-5" />
              طلب جديد
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {vendorTabs.map((tab) => (
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
        {activeTab === "overview" && (
          <div className="space-y-8">
            {/* Stats Grid */}
            <VendorStatsGrid stats={mockData.stats} />
            {/* Google Map with Relay Points */}
            <div className="bg-white rounded-2xl shadow-soft p-4">
              <h2 className="text-xl font-bold mb-4">
                نقاط الترحيل على الخريطة
              </h2>
              <VendorRelayPointsMap relayPoints={mockData.relayPoints} />
            </div>
          </div>
        )}

        {/* Orders Tab */}
        {activeTab === "orders" && <VendorOrdersTab />}

        {/* Relay Points Tab */}
        {activeTab === "relay-points" && <VendorRelayPointsTab />}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800">
              الملف الشخصي
            </h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VendorProfileForm />
              <VendorPerformanceStats />
            </div>
            <div className="flex justify-end gap-4">
              <button className="btn-secondary">إلغاء</button>
              <button className="btn-primary">حفظ التغييرات</button>
            </div>
          </div>
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800">الإعدادات</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <VendorSettingsNotifications />
              <VendorSettingsDelivery />
            </div>
            <div className="flex justify-end gap-4">
              <button className="btn-secondary">إلغاء</button>
              <button className="btn-primary">حفظ التغييرات</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default VendorDashboard;
