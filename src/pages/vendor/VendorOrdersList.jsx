import React from "react";

const VendorOrdersList = ({
  orders = [],
  getStatusColor,
  getStatusText,
  onEdit,
  onDelete,
}) => (
  <div
    className="bg-white rounded-xl shadow-soft p-4 overflow-x-auto max-w-full"
    style={{ maxHeight: "70vh", minHeight: "200px" }}
  >
    <h4 className="text-lg font-bold mb-4">قائمة الطلبات</h4>
    <div className="overflow-x-auto w-full">
      <table className="min-w-full text-right border-separate border-spacing-0">
        <thead className="sticky top-0 bg-white z-10">
          <tr className="border-b">
            <th className="py-2 px-4 whitespace-nowrap">رقم التتبع</th>
            <th className="py-2 px-4 whitespace-nowrap">المنتج</th>
            <th className="py-2 px-4 whitespace-nowrap">العميل</th>
            <th className="py-2 px-4 whitespace-nowrap">الحالة</th>
            <th className="py-2 px-4 whitespace-nowrap">الوزن (كغ)</th>
            <th className="py-2 px-4 whitespace-nowrap">النوع</th>
            <th className="py-2 px-4 whitespace-nowrap">هش؟</th>
            <th className="py-2 px-4 whitespace-nowrap">تقدير التسليم</th>
            <th className="py-2 px-4 whitespace-nowrap">ملاحظات</th>
            <th className="py-2 px-4 whitespace-nowrap">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order, idx) => (
            <tr key={idx} className="border-b hover:bg-neutral-50">
              <td className="py-2 px-4 font-mono text-primary-600 whitespace-nowrap">
                {order.tracking_number}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.order.product}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.order.client_name}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                    order.status
                  )}-100 text-${getStatusColor(order.status)}-700`}
                >
                  {getStatusText(order.status)}
                </span>
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.package_weight ?? "-"}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.package_type}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.fragile ? "نعم" : "لا"}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">
                {order.estimated_delivery
                  ? new Date(order.estimated_delivery).toLocaleString("ar-EG")
                  : "-"}
              </td>
              <td className="py-2 px-4 whitespace-nowrap">{order.notes}</td>
              <td className="py-2 px-4 flex gap-2 whitespace-nowrap">
                <button className="btn-secondary text-xs">عرض التفاصيل</button>
                <button
                  className="btn-primary text-xs"
                  onClick={() => onEdit(idx)}
                >
                  تعديل
                </button>
                <button
                  className="btn-secondary text-xs"
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
  </div>
);

export default VendorOrdersList;
