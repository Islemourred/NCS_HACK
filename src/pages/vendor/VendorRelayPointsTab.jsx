import React, { useState } from "react";
// import VendorRelayPointsList from "./VendorRelayPointsList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { RELAY_POINTS } from "../../utils/relayPointsData";

const getStatusLabel = (status) => {
  switch (status) {
    case "APPROVED":
      return "مقبول";
    case "PENDING":
      return "قيد المراجعة";
    case "REJECTED":
      return "مرفوض";
    case "BLOCKED":
      return "محظور";
    default:
      return status;
  }
};

const VendorRelayPointsTab = () => {
  const [search, setSearch] = useState("");

  console.log(RELAY_POINTS);

  const filteredRelays = RELAY_POINTS.filter(
    (relay) =>
      relay.address.includes(search) ||
      relay.wilaya.name.includes(search) ||
      relay.contact_phone.includes(search)
  );

  return (
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
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>
      <div className="overflow-x-auto rounded-xl shadow-soft border border-neutral-200 bg-white">
        <table className="w-full min-w-[800px] text-right border-separate border-spacing-0">
          <thead className="sticky top-0 bg-white z-10">
            <tr className="border-b border-neutral-200">
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                العنوان
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                الولاية
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                ساعات العمل
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                الهاتف
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                الحالة
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                خط العرض
              </th>
              <th className="py-3 px-4 text-right font-bold text-neutral-700 whitespace-nowrap">
                خط الطول
              </th>
            </tr>
          </thead>
          <tbody>
            {filteredRelays.map((relay, idx) => (
              <tr
                key={relay.id}
                className={
                  `border-b border-neutral-100 hover:bg-primary-50/30 transition ` +
                  (idx % 2 === 0 ? "bg-neutral-50" : "bg-white")
                }
              >
                <td className="py-3 px-4 whitespace-nowrap">{relay.address}</td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {relay.wilaya.name} ({relay.wilaya.code})
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  {relay.opening_hours}
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span dir="ltr">{relay.contact_phone}</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span
                    className={
                      relay.status === "APPROVED"
                        ? "bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold"
                        : relay.status === "PENDING"
                        ? "bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-semibold"
                        : relay.status === "REJECTED"
                        ? "bg-red-100 text-red-700 px-3 py-1 rounded-full text-xs font-semibold"
                        : relay.status === "BLOCKED"
                        ? "bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-xs font-semibold"
                        : "bg-neutral-100 text-neutral-700 px-3 py-1 rounded-full text-xs font-semibold"
                    }
                  >
                    {getStatusLabel(relay.status)}
                  </span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span dir="ltr">{relay.latitude}</span>
                </td>
                <td className="py-3 px-4 whitespace-nowrap">
                  <span dir="ltr">{relay.longitude}</span>
                </td>
              </tr>
            ))}
            {filteredRelays.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="py-6 text-center text-neutral-400 bg-white"
                >
                  لا توجد نقاط ترحيل بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default VendorRelayPointsTab;
