import React from "react";
import {
  UserGroupIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  DocumentTextIcon,
  EyeIcon,
  PencilIcon,
} from "@heroicons/react/24/outline";

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
    {
      title: "الإيرادات الشهرية",
      value: "45,320 د.ج",
      icon: CurrencyDollarIcon,
      color: "warning",
      change: "+8%",
    },
  ],
  recentOrders: [
    {
      id: "DZ001234",
      client: "أحمد بن محمد",
      relay: "متجر الأمين",
      status: "delivered",
      amount: "2,500 د.ج",
    },
    {
      id: "DZ001235",
      client: "فاطمة الزهراء",
      relay: "سوبر ماركت النور",
      status: "pending",
      amount: "1,800 د.ج",
    },
    {
      id: "DZ001236",
      client: "يوسف العلي",
      relay: "مكتبة المعرفة",
      status: "shipped",
      amount: "3,200 د.ج",
    },
    {
      id: "DZ001237",
      client: "زينب حسني",
      relay: "صيدلية الشفاء",
      status: "cancelled",
      amount: "950 د.ج",
    },
  ],
};

const getStatusColor = (status) => {
  switch (status) {
    case "delivered":
      return "success";
    case "shipped":
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
    case "shipped":
      return "تم الشحن";
    case "pending":
      return "في الانتظار";
    case "cancelled":
      return "ملغي";
    default:
      return status;
  }
};

const OverviewTab = () => (
  <div className="space-y-8">
    {/* Stats Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
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
    {/* Recent Orders */}
    <div className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-neutral-800">الطلبات الحديثة</h3>
        <button className="text-primary-600 hover:text-primary-700 font-semibold">
          عرض الكل
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="text-right py-3 text-neutral-700 font-semibold">
                رقم الطلب
              </th>
              <th className="text-right py-3 text-neutral-700 font-semibold">
                العميل
              </th>
              <th className="text-right py-3 text-neutral-700 font-semibold">
                نقطة الترحيل
              </th>
              <th className="text-right py-3 text-neutral-700 font-semibold">
                الحالة
              </th>
              <th className="text-right py-3 text-neutral-700 font-semibold">
                المبلغ
              </th>
              <th className="text-right py-3 text-neutral-700 font-semibold">
                الإجراءات
              </th>
            </tr>
          </thead>
          <tbody>
            {mockData.recentOrders.map((order) => (
              <tr
                key={order.id}
                className="border-b border-neutral-100 hover:bg-neutral-50"
              >
                <td className="py-4 font-mono text-primary-600">{order.id}</td>
                <td className="py-4 text-neutral-800">{order.client}</td>
                <td className="py-4 text-neutral-600">{order.relay}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                      order.status
                    )}-100 text-${getStatusColor(order.status)}-700`}
                  >
                    {getStatusText(order.status)}
                  </span>
                </td>
                <td className="py-4 font-semibold text-neutral-800">
                  {order.amount}
                </td>
                <td className="py-4">
                  <div className="flex gap-2">
                    <button className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-2 text-warning-600 hover:bg-warning-100 rounded-lg transition-colors">
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default OverviewTab;
