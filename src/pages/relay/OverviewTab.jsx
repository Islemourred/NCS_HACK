import React from "react";
import {
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import VendorRelayPointsMap from "../vendor/VendorRelayPointsMap";

const mockData = {
  stats: [
    {
      title: "الطرود المستلمة",
      value: "127",
      icon: ClockIcon,
      color: "primary",
      change: "+12%",
    },
    {
      title: "في الانتظار",
      value: "23",
      icon: ClockIcon,
      color: "warning",
      change: "+3%",
    },
    {
      title: "تم التسليم اليوم",
      value: "45",
      icon: CheckCircleIcon,
      color: "success",
      change: "+18%",
    },
  ],
  recentParcels: [
    {
      id: "DZ001234",
      sender: "أحمد متجر الإلكترونيات",
      recipient: "فاطمة الزهراء",
      status: "waiting",
      amount: "300 د.ج",
      arrived: "10:30 ص",
    },
    {
      id: "DZ001235",
      sender: "سوق النور للأزياء",
      recipient: "يوسف العلي",
      status: "delivered",
      amount: "450 د.ج",
      arrived: "09:15 ص",
    },
    {
      id: "DZ001236",
      sender: "صيدلية الشفاء",
      recipient: "زينب حسني",
      status: "waiting",
      amount: "200 د.ج",
      arrived: "11:45 ص",
    },
    {
      id: "DZ001237",
      sender: "مكتبة المعرفة",
      recipient: "محمد الأمين",
      status: "expired",
      amount: "150 د.ج",
      arrived: "أمس",
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
    {/* Google Map with Relay Points */}
    <div className="bg-white rounded-2xl shadow-soft p-4">
      <h2 className="text-xl font-bold mb-4">نقاط الترحيل على الخريطة</h2>
      <VendorRelayPointsMap relayPoints={mockData.relayPoints} />
    </div>
  </div>
);

export default OverviewTab;
