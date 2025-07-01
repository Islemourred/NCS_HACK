import React from "react";

const VendorOrdersList = ({
  orders = [],
  getStatusColor,
  getStatusText,
  onEdit,
  onDelete,
}) => (
  <div className="bg-white rounded-xl shadow-soft p-4 overflow-x-auto">
    <h4 className="text-lg font-bold mb-4">قائمة الطلبات</h4>
    <table className="min-w-full text-right">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-4">رقم التتبع</th>
          <th className="py-2 px-4">المنتج</th>
          <th className="py-2 px-4">العميل</th>
          <th className="py-2 px-4">الحالة</th>
          <th className="py-2 px-4">الوزن (كغ)</th>
          <th className="py-2 px-4">النوع</th>
          <th className="py-2 px-4">هش؟</th>
          <th className="py-2 px-4">تقدير التسليم</th>
          <th className="py-2 px-4">ملاحظات</th>
          <th className="py-2 px-4">إجراءات</th>
        </tr>
      </thead>
      <tbody>
        {orders.map((order, idx) => (
          <tr key={idx} className="border-b hover:bg-neutral-50">
            <td className="py-2 px-4 font-mono text-primary-600">
              {order.tracking_number}
            </td>
            <td className="py-2 px-4">{order.order.product}</td>
            <td className="py-2 px-4">{order.order.client_name}</td>
            <td className="py-2 px-4">
              <span
                className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                  order.status
                )}-100 text-${getStatusColor(order.status)}-700`}
              >
                {getStatusText(order.status)}
              </span>
            </td>
            <td className="py-2 px-4">{order.package_weight ?? "-"}</td>
            <td className="py-2 px-4">{order.package_type}</td>
            <td className="py-2 px-4">{order.fragile ? "نعم" : "لا"}</td>
            <td className="py-2 px-4">
              {order.estimated_delivery
                ? new Date(order.estimated_delivery).toLocaleString("ar-EG")
                : "-"}
            </td>
            <td className="py-2 px-4">{order.notes}</td>
            <td className="py-2 px-4 flex gap-2">
              <button className="btn-secondary text-xs">عرض التفاصيل</button>
              <button
                className="btn-primary text-xs"
                onClick={() => onEdit(idx)}
              >
                تعديل
              </button>
              <button
                className="btn-error text-xs"
                onClick={() => onDelete(idx)}
              >
                حذف
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VendorOrdersList;
