import React, { useState } from "react";
import {
  TruckIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
  MapPinIcon,
  UserIcon,
  CurrencyDollarIcon,
  BellIcon,
  CogIcon,
  EyeIcon,
  PencilIcon,
  MagnifyingGlassIcon,
  QrCodeIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";

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
    {
      title: "الأرباح الشهرية",
      value: "8,750 د.ج",
      icon: CurrencyDollarIcon,
      color: "secondary",
      change: "+8%",
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

const RelayDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "success";
      case "waiting":
        return "warning";
      case "expired":
        return "error";
      default:
        return "neutral";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "تم التسليم";
      case "waiting":
        return "في الانتظار";
      case "expired":
        return "منتهي الصلاحية";
      default:
        return status;
    }
  };

  const getStatusIcon = (status) => {
    switch (status) {
      case "delivered":
        return CheckCircleIcon;
      case "waiting":
        return ClockIcon;
      case "expired":
        return ExclamationTriangleIcon;
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
            <button className="btn-primary gap-2">
              <QrCodeIcon className="w-5 h-5" />
              مسح QR Code
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: TruckIcon },
            { id: "parcels", label: "إدارة الطرود", icon: TruckIcon },
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

            {/* Recent Parcels */}
            <div className="card p-6">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-xl font-bold text-neutral-800">
                  الطرود الحديثة
                </h3>
                <button className="btn-secondary gap-2">
                  <ArrowPathIcon className="w-4 h-4" />
                  تحديث
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-neutral-200">
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        رقم الطرد
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        المرسل
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        المستلم
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        الحالة
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        العمولة
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        وقت الوصول
                      </th>
                      <th className="text-right py-3 text-neutral-700 font-semibold">
                        الإجراءات
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {mockData.recentParcels.map((parcel) => {
                      const StatusIcon = getStatusIcon(parcel.status);
                      return (
                        <tr
                          key={parcel.id}
                          className="border-b border-neutral-100 hover:bg-neutral-50"
                        >
                          <td className="py-4 font-mono text-primary-600">
                            {parcel.id}
                          </td>
                          <td className="py-4 text-neutral-800">
                            {parcel.sender}
                          </td>
                          <td className="py-4 text-neutral-800">
                            {parcel.recipient}
                          </td>
                          <td className="py-4">
                            <div className="flex items-center gap-2">
                              <StatusIcon
                                className={`w-4 h-4 text-${getStatusColor(
                                  parcel.status
                                )}-500`}
                              />
                              <span
                                className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                                  parcel.status
                                )}-100 text-${getStatusColor(
                                  parcel.status
                                )}-700`}
                              >
                                {getStatusText(parcel.status)}
                              </span>
                            </div>
                          </td>
                          <td className="py-4 font-semibold text-neutral-800">
                            {parcel.amount}
                          </td>
                          <td className="py-4 text-neutral-600">
                            {parcel.arrived}
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
                                title="تحديث الحالة"
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

        {/* Parcels Management Tab */}
        {activeTab === "parcels" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <h3 className="text-2xl font-bold text-neutral-800">
                إدارة الطرود
              </h3>
              <div className="flex gap-4">
                <select className="input-field w-40">
                  <option>جميع الحالات</option>
                  <option>في الانتظار</option>
                  <option>تم التسليم</option>
                  <option>منتهي الصلاحية</option>
                </select>
                <div className="relative">
                  <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
                  <input
                    type="text"
                    placeholder="البحث في الطرود..."
                    className="input-field pr-10 w-64"
                  />
                </div>
              </div>
            </div>

            <div className="grid gap-6">
              {mockData.recentParcels.map((parcel) => {
                const StatusIcon = getStatusIcon(parcel.status);
                return (
                  <div key={parcel.id} className="card p-6">
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="font-mono text-lg font-bold text-primary-600">
                            {parcel.id}
                          </span>
                          <div className="flex items-center gap-2">
                            <StatusIcon
                              className={`w-5 h-5 text-${getStatusColor(
                                parcel.status
                              )}-500`}
                            />
                            <span
                              className={`px-3 py-1 rounded-full text-sm font-semibold bg-${getStatusColor(
                                parcel.status
                              )}-100 text-${getStatusColor(parcel.status)}-700`}
                            >
                              {getStatusText(parcel.status)}
                            </span>
                          </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              المرسل
                            </p>
                            <p className="font-semibold text-neutral-800">
                              {parcel.sender}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              المستلم
                            </p>
                            <p className="font-semibold text-neutral-800">
                              {parcel.recipient}
                            </p>
                          </div>
                          <div>
                            <p className="text-sm text-neutral-500 mb-1">
                              العمولة
                            </p>
                            <p className="font-semibold text-success-600">
                              {parcel.amount}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button className="btn-secondary">تحديث الحالة</button>
                        <button className="btn-primary">عرض التفاصيل</button>
                      </div>
                    </div>
                  </div>
                );
              })}
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
                  معلومات نقطة الترحيل
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      اسم نقطة الترحيل
                    </label>
                    <input
                      type="text"
                      value="متجر الأمين للإلكترونيات"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      العنوان
                    </label>
                    <input
                      type="text"
                      value="شارع ديدوش مراد، الجزائر العاصمة"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      رقم الهاتف
                    </label>
                    <input
                      type="tel"
                      value="+213 555 123 456"
                      className="input-field"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      ساعات العمل
                    </label>
                    <input
                      type="text"
                      value="09:00 - 19:00"
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
                    <span className="font-bold text-success-600">96.5%</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
                    <span className="text-neutral-700">متوسط وقت التخزين</span>
                    <span className="font-bold text-primary-600">2.3 أيام</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
                    <span className="text-neutral-700">تقييم العملاء</span>
                    <span className="font-bold text-secondary-600">4.8/5</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-warning-50 rounded-lg">
                    <span className="text-neutral-700">
                      إجمالي الطرود المعالجة
                    </span>
                    <span className="font-bold text-warning-600">1,247</span>
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
                      إشعارات الطرود الجديدة
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                      defaultChecked
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-700">
                      تذكير بالطرود المتأخرة
                    </span>
                    <input
                      type="checkbox"
                      className="w-4 h-4 text-primary-600"
                      defaultChecked
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
                  إعدادات التشغيل
                </h4>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      الحد الأقصى للطرود اليومية
                    </label>
                    <input type="number" value="50" className="input-field" />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-neutral-700 mb-2">
                      مدة التخزين القصوى (أيام)
                    </label>
                    <input type="number" value="7" className="input-field" />
                  </div>
                  <div className="flex items-center gap-3">
                    <input
                      type="checkbox"
                      id="autoAccept"
                      className="w-4 h-4 text-primary-600"
                    />
                    <label
                      htmlFor="autoAccept"
                      className="text-sm text-neutral-700"
                    >
                      قبول الطرود تلقائياً
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

export default RelayDashboard;
