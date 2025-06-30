import React, { useState } from "react";
import {
  UserGroupIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
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
  relayPoints: [
    {
      id: 1,
      name: "متجر الأمين",
      location: "الجزائر العاصمة",
      orders: 45,
      status: "active",
    },
    {
      id: 2,
      name: "سوبر ماركت النور",
      location: "وهران",
      orders: 32,
      status: "active",
    },
    {
      id: 3,
      name: "مكتبة المعرفة",
      location: "قسنطينة",
      orders: 28,
      status: "inactive",
    },
    {
      id: 4,
      name: "صيدلية الشفاء",
      location: "عنابة",
      orders: 19,
      status: "active",
    },
  ],
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

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
      case "active":
        return "success";
      case "inactive":
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
      case "active":
        return "نشط";
      case "inactive":
        return "غير نشط";
      default:
        return status;
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
              لوحة تحكم الإدارة
            </h1>
            <p className="text-neutral-600">
              أهلاً بك، إدارة! هنا يمكنك إدارة المستخدمين ونقاط الترحيل والطلبات
              ومراقبة التحليلات.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 relative">
              <BellIcon className="w-6 h-6 text-neutral-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
            </button>
            <button className="btn-primary gap-2">
              <PlusIcon className="w-5 h-5" />
              إضافة جديد
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: ChartBarIcon },
            { id: "orders", label: "الطلبات", icon: DocumentTextIcon },
            {
              id: "relays",
              label: "نقاط الترحيل",
              icon: BuildingStorefrontIcon,
            },
            { id: "users", label: "المستخدمين", icon: UserGroupIcon },
            { id: "settings", label: "الإعدادات", icon: CogIcon },
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
        {activeTab === "overview" && (
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
                <h3 className="text-xl font-bold text-neutral-800">
                  الطلبات الحديثة
                </h3>
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
                        <td className="py-4 font-mono text-primary-600">
                          {order.id}
                        </td>
                        <td className="py-4 text-neutral-800">
                          {order.client}
                        </td>
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
        )}

        {/* Relay Points Tab */}
        {activeTab === "relays" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-neutral-800">
                إدارة نقاط الترحيل
              </h3>
              <div className="flex gap-4">
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="البحث في نقاط الترحيل..."
                    className="input-field pr-10 w-64"
                  />
                </div>
                <button className="btn-primary gap-2">
                  <PlusIcon className="w-5 h-5" />
                  إضافة نقطة ترحيل
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {mockData.relayPoints.map((relay) => (
                <div key={relay.id} className="card p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <h4 className="text-lg font-bold text-neutral-800 mb-1">
                        {relay.name}
                      </h4>
                      <div className="flex items-center gap-2 text-neutral-600 mb-2">
                        <MapPinIcon className="w-4 h-4" />
                        <span>{relay.location}</span>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-sm text-neutral-600">
                          {relay.orders} طلب هذا الشهر
                        </span>
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                            relay.status
                          )}-100 text-${getStatusColor(relay.status)}-700`}
                        >
                          {getStatusText(relay.status)}
                        </span>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <button className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-warning-600 hover:bg-warning-100 rounded-lg transition-colors">
                        <PencilIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-error-600 hover:bg-error-100 rounded-lg transition-colors">
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
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
                  <option>تم الشحن</option>
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
              </div>
            </div>

            <div className="card p-6">
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
                        التاريخ
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
                        <td className="py-4 font-mono text-primary-600">
                          {order.id}
                        </td>
                        <td className="py-4 text-neutral-800">
                          {order.client}
                        </td>
                        <td className="py-4 text-neutral-600">{order.relay}</td>
                        <td className="py-4 text-neutral-600">2024-01-15</td>
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
                            <button
                              className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors"
                              title="عرض التفاصيل"
                            >
                              <EyeIcon className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 text-warning-600 hover:bg-warning-100 rounded-lg transition-colors"
                              title="تعديل"
                            >
                              <PencilIcon className="w-4 h-4" />
                            </button>
                            <button
                              className="p-2 text-error-600 hover:bg-error-100 rounded-lg transition-colors"
                              title="إلغاء"
                            >
                              <XCircleIcon className="w-4 h-4" />
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
        )}

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800">
              إعدادات النظام
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  إعدادات عامة
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      اسم المنصة
                    </label>
                    <input
                      type="text"
                      value="ColisPoint DZ"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      البريد الإلكتروني للدعم
                    </label>
                    <input
                      type="email"
                      value="support@colispointdz.com"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      رقم هاتف الدعم
                    </label>
                    <input
                      type="tel"
                      value="+213 555 123 456"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  إعدادات التسليم
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      الحد الأقصى لأيام التخزين
                    </label>
                    <input type="number" value="7" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      رسوم التسليم الأساسية (د.ج)
                    </label>
                    <input type="number" value="200" className="input-field" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="autoNotifications"
                      className="w-4 h-4 text-primary-600"
                    />
                    <label
                      htmlFor="autoNotifications"
                      className="text-sm text-neutral-700"
                    >
                      تفعيل الإشعارات التلقائية
                    </label>
                  </div>
                </div>
              </div>
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

export default AdminDashboard;
