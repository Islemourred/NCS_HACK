import React from "react";
import {
  ClockIcon,
  CheckCircleIcon,
  CurrencyDollarIcon,
  ArrowPathIcon,
  ExclamationTriangleIcon,
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

    {/* Recent Parcels */}
    <div className="card p-6">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-bold text-neutral-800">الطرود الحديثة</h3>
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
                  <td className="py-4 text-neutral-800">{parcel.sender}</td>
                  <td className="py-4 text-neutral-800">{parcel.recipient}</td>
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
                        )}-100 text-${getStatusColor(parcel.status)}-700`}
                      >
                        {getStatusText(parcel.status)}
                      </span>
                    </div>
                  </td>
                  <td className="py-4 font-semibold text-neutral-800">
                    {parcel.amount}
                  </td>
                  <td className="py-4 text-neutral-600">{parcel.arrived}</td>
                  <td className="py-4">
                    <div className="flex gap-2">
                      <button
                        className="p-2 text-primary-600 hover:bg-primary-100 rounded-lg transition-colors"
                        title="عرض التفاصيل"
                      >
                        {/* EyeIcon */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                          />
                        </svg>
                      </button>
                      <button
                        className="p-2 text-warning-600 hover:bg-warning-100 rounded-lg transition-colors"
                        title="تحديث الحالة"
                      >
                        {/* PencilIcon */}
                        <svg
                          className="w-4 h-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15.232 5.232l3.536 3.536M9 13l6-6m2 2l-6 6m-2 2h2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2h-2a2 2 0 00-2 2v2z"
                          />
                        </svg>
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
);

export default OverviewTab;
