import React from "react";
import {
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  XCircleIcon,
  DocumentTextIcon,
} from "@heroicons/react/24/outline";

const mockData = {
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

const OrdersTab = () => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-bold text-neutral-800">إدارة الطلبات</h3>
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
                <td className="py-4 font-mono text-primary-600">{order.id}</td>
                <td className="py-4 text-neutral-800">{order.client}</td>
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
);

export default OrdersTab;
