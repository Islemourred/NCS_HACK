import React from "react";

const VendorOrdersList = ({ recentOrders, getStatusIcon, getStatusColor, getStatusText }) => (
  <div className="bg-white rounded-xl shadow-soft p-4 overflow-x-auto">
    <h4 className="text-lg font-bold mb-4">قائمة الطلبات</h4>
    <table className="min-w-full text-right">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-4">المنتج</th>
          <th className="py-2 px-4">العميل</th>
          <th className="py-2 px-4">الحالة</th>
          <th className="py-2 px-4">إجراءات</th>
        </tr>
      </thead>
      <tbody>
        {recentOrders.map((order, idx) => {
          const StatusIcon = getStatusIcon(order.status);
          return (
            <tr key={idx} className="border-b hover:bg-neutral-50">
              <td className="py-2 px-4">{order.product}</td>
              <td className="py-2 px-4">{order.client_name}</td>
              <td className="py-2 px-4 flex items-center gap-2">
                {StatusIcon && <StatusIcon className={`w-5 h-5 text-${getStatusColor(order.status)}-600`} />}
                <span className={`text-${getStatusColor(order.status)}-700 font-medium`}>{getStatusText(order.status)}</span>
              </td>
              <td className="py-2 px-4">
                <button className="btn-secondary text-xs">عرض</button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default VendorOrdersList; 