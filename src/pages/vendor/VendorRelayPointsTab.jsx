import React, { useState } from "react";
// import VendorRelayPointsList from "./VendorRelayPointsList";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";

const initialRelayPoints = [
  {
    id: 1,
    address: "شارع ديدوش مراد، الجزائر العاصمة",
    wilaya: { code: "16", name: "الجزائر العاصمة" },
    opening_hours: "09:00 - 19:00",
    contact_phone: "+213 555 123 456",
    status: "APPROVED",
    latitude: "36.752887",
    longitude: "3.042048",
  },
  {
    id: 2,
    address: "حي الأمير عبد القادر، وهران",
    wilaya: { code: "31", name: "وهران" },
    opening_hours: "08:00 - 18:00",
    contact_phone: "+213 555 654 321",
    status: "PENDING",
    latitude: "35.697654",
    longitude: "-0.633737",
  },
  {
    id: 3,
    address: "حي أول نوفمبر، قسنطينة",
    wilaya: { code: "25", name: "قسنطينة" },
    opening_hours: "10:00 - 17:00",
    contact_phone: "+213 555 987 654",
    status: "REJECTED",
    latitude: "36.365",
    longitude: "6.6147",
  },
  {
    id: 4,
    address: "حي الثورة، عنابة",
    wilaya: { code: "23", name: "عنابة" },
    opening_hours: "09:00 - 20:00",
    contact_phone: "+213 555 321 987",
    status: "BLOCKED",
    latitude: "36.9",
    longitude: "7.7667",
  },
];

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
  const [relayPoints] = useState(initialRelayPoints);

  const filteredRelays = relayPoints.filter(
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
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-neutral-200">
              <th className="py-3 text-right">العنوان</th>
              <th className="py-3 text-right">الولاية</th>
              <th className="py-3 text-right">ساعات العمل</th>
              <th className="py-3 text-right">الهاتف</th>
              <th className="py-3 text-right">الحالة</th>
              <th className="py-3 text-right">خط العرض</th>
              <th className="py-3 text-right">خط الطول</th>
            </tr>
          </thead>
          <tbody>
            {filteredRelays.map((relay) => (
              <tr
                key={relay.id}
                className="border-b border-neutral-100 hover:bg-neutral-50"
              >
                <td className="py-3">{relay.address}</td>
                <td className="py-3">
                  {relay.wilaya.name} ({relay.wilaya.code})
                </td>
                <td className="py-3">{relay.opening_hours}</td>
                <td className="py-3">
                  <span dir="ltr">{relay.contact_phone}</span>
                </td>
                <td className="py-3">{getStatusLabel(relay.status)}</td>
                <td className="py-3">
                  <span dir="ltr">{relay.latitude}</span>
                </td>
                <td className="py-3">
                  <span dir="ltr">{relay.longitude}</span>
                </td>
              </tr>
            ))}
            {filteredRelays.length === 0 && (
              <tr>
                <td colSpan={7} className="py-6 text-center text-neutral-400">
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
