import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const mockData = {
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
      return (
        <svg
          className="w-5 h-5 text-success-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2l4-4"
          />
        </svg>
      );
    case "waiting":
      return (
        <svg
          className="w-5 h-5 text-warning-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3" />
        </svg>
      );
    case "expired":
      return (
        <svg
          className="w-5 h-5 text-error-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0a9 9 0 0118 0z"
          />
        </svg>
      );
    default:
      return null;
  }
};

const ParcelsTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-bold text-neutral-800">إدارة الطرود</h3>
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
                    {StatusIcon}
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
                    <p className="text-sm text-neutral-500 mb-1">المرسل</p>
                    <p className="font-semibold text-neutral-800">
                      {parcel.sender}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">المستلم</p>
                    <p className="font-semibold text-neutral-800">
                      {parcel.recipient}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 mb-1">العمولة</p>
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
);

export default ParcelsTab;
