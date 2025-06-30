import React from "react";
import VendorOrdersList from "./VendorOrdersList";
import { MagnifyingGlassIcon, PlusIcon } from "@heroicons/react/24/outline";

const VendorOrdersTab = ({ recentOrders, getStatusIcon, getStatusColor, getStatusText }) => (
  <div className="space-y-6">
    <div className="flex justify-between items-center">
      <h3 className="text-2xl font-bold text-neutral-800">إدارة الطلبات</h3>
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
          <input type="text" placeholder="البحث في الطلبات..." className="input-field pr-10 w-64" />
        </div>
        <button className="btn-primary gap-2">
          <PlusIcon className="w-5 h-5" />
          طلب جديد
        </button>
      </div>
    </div>
    <VendorOrdersList
      recentOrders={recentOrders}
      getStatusIcon={getStatusIcon}
      getStatusColor={getStatusColor}
      getStatusText={getStatusText}
    />
  </div>
);

export default VendorOrdersTab; 