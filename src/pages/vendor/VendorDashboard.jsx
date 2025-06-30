import React, { useState } from "react";
import {
  ShoppingBagIcon,
  TruckIcon,
  ChartBarIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  PlusIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  BellIcon,
  CogIcon,
  UserIcon,
  BuildingStorefrontIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

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
  recentOrders: [
    {
      id: "ORD001234",
      relayPoint: "متجر الأمين",
      recipient: "فاطمة الزهراء",
      status: "delivered",
      amount: "2,500 د.ج",
      date: "2024-01-15",
    },
    {
      id: "ORD001235",
      relayPoint: "سوبر ماركت النور",
      recipient: "يوسف العلي",
      status: "shipping",
      amount: "1,800 د.ج",
      date: "2024-01-14",
    },
    {
      id: "ORD001236",
      relayPoint: "مكتبة المعرفة",
      recipient: "زينب حسني",
      status: "pending",
      amount: "3,200 د.ج",
      date: "2024-01-14",
    },
    {
      id: "ORD001237",
      relayPoint: "صيدلية الشفاء",
      recipient: "محمد الأمين",
      status: "cancelled",
      amount: "950 د.ج",
      date: "2024-01-13",
    },
  ],
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
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: ChartBarIcon },
            { id: "orders", label: "الطلبات", icon: ShoppingBagIcon },
            {
              id: "relay-points",
              label: "نقاط الترحيل",
              icon: BuildingStorefrontIcon,
            },
            { id: "profile", label: "الملف الشخصي", icon: UserIcon },
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
                        نقطة الترحيل
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        المستلم
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        الحالة
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        المبلغ
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        التاريخ
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.recentOrders.map((order) => {
                      const StatusIcon = getStatusIcon(order.status);
                      return (
                        <tr
                          key={order.id}
                          className="border-b border-neutral-100 hover:bg-neutral-50"
                        >
                          <td className="py-4 font-mono text-primary-600">
                            {order.id}
                          </td>
                          <td className="py-4 text-neutral-800">
                            {order.relayPoint}
                          </td>
                          <td className="py-4 text-neutral-800">
                            {order.recipient}
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <StatusIcon
                                className={`w-4 h-4 text-${getStatusColor(
                                  order.status
                                )}-500`}
                              />
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                                  order.status
                                )}-100 text-${getStatusColor(
                                  order.status
                                )}-700`}
                              >
                                {getStatusText(order.status)}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 font-semibold text-neutral-800">
                            {order.amount}
                          </td>
                          <td className="py-4 text-neutral-600">
                            {order.date}
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
                            </div>
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
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

            <div className="grid gap-6">
              {mockData.recentOrders.map((order) => {
                const StatusIcon = getStatusIcon(order.status);
                return (
                  <div key={order.id} className="card p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-lg font-bold text-primary-600">
                            {order.id}
                          </span>
                          <div className="flex items-center gap-2">
                            <StatusIcon
                              className={`w-5 h-5 text-${getStatusColor(
                                order.status
                              )}-500`}
                            />
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold bg-${getStatusColor(
                                order.status
                              )}-100 text-${getStatusColor(order.status)}-700`}
                            >
                              {getStatusText(order.status)}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              نقطة الترحيل
                            </p>
                            <p className="font-semibold text-neutral-800">
                              {order.relayPoint}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              المستلم
                            </p>
                            <p className="font-semibold text-neutral-800">
                              {order.recipient}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              المبلغ
                            </p>
                            <p className="font-semibold text-success-600">
                              {order.amount}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              التاريخ
                            </p>
                            <p className="font-semibold text-neutral-800">
                              {order.date}
                            </p>
                          </div>
                        </div>
                      </div>
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
                          <TrashIcon className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
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

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
                          المسافة: {relay.distance}
                        </span>
                        <div className="flex items-center gap-1">
                          <span className="text-sm font-semibold text-warning-600">
                            ⭐ {relay.rating}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="text-center">
                      <span className="text-2xl font-bold text-primary-600">
                        {relay.orders}
                      </span>
                      <p className="text-sm text-neutral-500">طلب</p>
                    </div>
                  </div>
                  <button className="btn-primary w-full">
                    اختيار نقطة الترحيل
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === "profile" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800">
              الملف الشخصي
            </h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  معلومات البائع
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      اسم الشركة / المتجر
                    </label>
                    <input
                      type="text"
                      value="متجر الإلكترونيات الذكية"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      الاسم الكامل
                    </label>
                    <input
                      type="text"
                      value="أحمد بن محمد"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      البريد الإلكتروني
                    </label>
                    <input
                      type="email"
                      value="ahmed@smartelectronics.dz"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      value="+213 555 987 654"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      المنطقة
                    </label>
                    <input
                      type="text"
                      value="الجزائر العاصمة"
                      className="input-field"
                    />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  إحصائيات الأداء
                </h4>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-success-50 rounded-lg">
                    <span className="text-neutral-700">
                      معدل التسليم الناجح
                    </span>
                    <span className="font-bold text-success-600">94.2%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                    <span className="text-neutral-700">متوسط وقت التوصيل</span>
                    <span className="font-bold text-primary-600">2.8 أيام</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                    <span className="text-neutral-700">تقييم العملاء</span>
                    <span className="font-bold text-secondary-600">4.6/5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-warning-50 rounded-lg">
                    <span className="text-neutral-700">إجمالي الطلبات</span>
                    <span className="font-bold text-warning-600">284</span>
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

        {/* Settings Tab */}
        {activeTab === "settings" && (
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-800">الإعدادات</h3>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  إعدادات الإشعارات
                </h4>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700">
                      إشعارات حالة الطلبات
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700">تأكيدات التسليم</span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700">
                      إشعارات البريد الإلكتروني
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700">إشعارات SMS</span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                    />
                  </div>
                </div>
              </div>

              <div className="card p-6">
                <h4 className="text-lg font-bold text-neutral-800 mb-4">
                  إعدادات التوصيل
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      نطاق التوصيل المفضل (كم)
                    </label>
                    <input type="number" value="10" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      الحد الأقصى للطلبات اليومية
                    </label>
                    <input type="number" value="20" className="input-field" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="autoSelect"
                      className="w-4 h-4 text-primary-600"
                    />
                    <label
                      htmlFor="autoSelect"
                      className="text-sm text-neutral-700"
                    >
                      اختيار نقطة الترحيل تلقائياً
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

export default VendorDashboard;
