import React, { useState } from "react";
import {
  ShoppingBagIcon,
  TruckIcon,
  CurrencyDollarIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";
import VendorTabsNav from "./VendorTabsNav";
import VendorStatsGrid from "./VendorStatsGrid";
import VendorProfileForm from "./VendorProfileForm";
// import VendorRecentOrdersTable from "./VendorRecentOrdersTable";
import VendorOrdersList from "./VendorOrdersList";
import VendorRelayPointsList from "./VendorRelayPointsList";
import VendorPerformanceStats from "./VendorPerformanceStats";
import VendorSettingsNotifications from "./VendorSettingsNotifications";
import VendorSettingsDelivery from "./VendorSettingsDelivery";
import VendorRelayPointsMap from "./VendorRelayPointsMap";

const orderData = [
  {
    vendor: "متجر الإلكترونيات الذكية",
    relay_point: "متجر الأمين",
    product: "هاتف ذكي سامسونج S23",
    client_name: "فاطمة الزهراء",
    client_phone: "+213 555 123 456",
    client_address: "حي النصر، الجزائر العاصمة",
    status: "delivered",
    tracking_id: "DZ123456789",
  },
  {
    vendor: "سوبر ماركت النور",
    relay_point: "سوبر ماركت النور",
    product: "مكيف هواء LG",
    client_name: "يوسف العلي",
    client_phone: "+213 555 654 321",
    client_address: "شارع الجمهورية، وهران",
    status: "shipping",
    tracking_id: "DZ987654321",
  },
  {
    vendor: "مكتبة المعرفة",
    relay_point: "مكتبة المعرفة",
    product: "كتاب برمجة بايثون",
    client_name: "زينب حسني",
    client_phone: "+213 555 789 123",
    client_address: "حي الزهور، قسنطينة",
    status: "pending",
    tracking_id: "DZ456789123",
  },
  {
    vendor: "صيدلية الشفاء",
    relay_point: "صيدلية الشفاء",
    product: "جهاز قياس الضغط",
    client_name: "محمد الأمين",
    client_phone: "+213 555 321 987",
    client_address: "حي السلام، عنابة",
    status: "cancelled",
    tracking_id: "DZ321987654",
  },
];

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
    {
      title: "الأرباح الشهرية",
      value: "42,350 د.ج",
      icon: CurrencyDollarIcon,
      color: "secondary",
      change: "+12%",
    },
  ],
  recentOrders: orderData,
  relayPoints: [
    {
      id: 1,
      name: "متجر الأمين",
      location: "الجزائر العاصمة",
      distance: "2.5 كم",
      rating: 4.8,
      orders: 45,
    },
    {
      id: 2,
      name: "سوبر ماركت النور",
      location: "وهران",
      distance: "1.2 كم",
      rating: 4.6,
      orders: 32,
    },
    {
      id: 3,
      name: "مكتبة المعرفة",
      location: "قسنطينة",
      distance: "3.8 كم",
      rating: 4.9,
      orders: 28,
    },
    {
      id: 4,
      name: "صيدلية الشفاء",
      location: "عنابة",
      distance: "0.8 كم",
      rating: 4.7,
      orders: 19,
    },
  ],
};

const VendorDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "success";
      case "shipping":
        return "primary";
      case "pending":
        return "warning";
      case "cancelled":
        return "error";
      default:
        return "neutral";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "تم التسليم";
      case "shipping":
        return "قيد التوصيل";
      case "pending":
        return "في الانتظار";
      case "cancelled":
        return "ملغي";
      default:
        return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return CheckCircleIcon;
      case "shipping":
        return TruckIcon;
      case "pending":
        return ClockIcon;
      case "cancelled":
        return XCircleIcon;
      default:
        return ClockIcon;
    }
  };

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
            <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 relative">
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
        <VendorTabsNav activeTab={activeTab} setActiveTab={setActiveTab} />

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
        {activeTab === "orders" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-neutral-800">
                إدارة الطلبات
              </h3>
              <div className="flex gap-4">
                <select className="input-field w-40">
                  <option>جميع الحالات</option>
                  <option>في الانتظار</option>
                  <option>قيد التوصيل</option>
                  <option>تم التسليم</option>
                  <option>ملغي</option>
                </select>
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="البحث في الطلبات..."
                    className="input-field pr-10 w-64"
                  />
                </div>
                <button className="btn-primary gap-2">
                  <PlusIcon className="w-5 h-5" />
                  طلب جديد
                </button>
              </div>
            </div>
            <VendorOrdersList
              recentOrders={mockData.recentOrders}
              getStatusIcon={getStatusIcon}
              getStatusColor={getStatusColor}
              getStatusText={getStatusText}
            />
          </div>
        )}

        {/* Relay Points Tab */}
        {activeTab === "relay-points" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-neutral-800">
                نقاط الترحيل المتاحة
              </h3>
              <div className="relative">
                <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                <input
                  type="text"
                  placeholder="البحث في نقاط الترحيل..."
                  className="input-field pr-10 w-64"
                />
              </div>
            </div>
            <VendorRelayPointsList relayPoints={mockData.relayPoints} />
          </div>
        )}

        {/*

Islem L3ziz, [30/06/2025 19:19]
Profile Tab */}
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
