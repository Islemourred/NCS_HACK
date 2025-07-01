import React from "react";

const VendorRelayPointsList = ({ relayPoints }) => (
  <div className="bg-white rounded-xl shadow-soft p-4 overflow-x-auto border ">
    <h4 className="text-lg font-bold mb-4">نقاط الترحيل</h4>
    <table className="min-w-full text-right">
      <thead>
        <tr className="border-b">
          <th className="py-2 px-4">الاسم</th>
          <th className="py-2 px-4">الموقع</th>
          <th className="py-2 px-4">المسافة</th>
          <th className="py-2 px-4">التقييم</th>
          <th className="py-2 px-4">عدد الطلبات</th>
        </tr>
      </thead>
      <tbody>
        {relayPoints.map((point, idx) => (
          <tr key={idx} className="border-b hover:bg-neutral-50">
            <td className="py-2 px-4">{point.name}</td>
            <td className="py-2 px-4">{point.location}</td>
            <td className="py-2 px-4">{point.distance}</td>
            <td className="py-2 px-4">{point.rating}</td>
            <td className="py-2 px-4">{point.orders}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export default VendorRelayPointsList;
