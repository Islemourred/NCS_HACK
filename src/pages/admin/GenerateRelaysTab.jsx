import React, { useState } from "react";

const WILAYA_LIST = [
  { code: "16", name: "الجزائر العاصمة", baseLat: 36.75, baseLng: 3.06 },
  { code: "31", name: "وهران", baseLat: 35.69, baseLng: -0.63 },
  { code: "25", name: "قسنطينة", baseLat: 36.36, baseLng: 6.61 },
  { code: "23", name: "عنابة", baseLat: 36.9, baseLng: 7.76 },
];

const STREET_NAMES = [
  "شارع النصر",
  "حي الوحدة",
  "شارع الحرية",
  "حي الأمل",
  "شارع الجمهورية",
  "حي الربيع",
];
const NEIGHBORHOODS = [
  "وسط المدينة",
  "الضواحي",
  "المدينة الجديدة",
  "حي السوق",
  "حي الجامعة",
];
const OPENING_HOURS = [
  "08:00 - 16:00",
  "09:00 - 17:00",
  "10:00 - 18:00",
  "09:00 - 19:00",
];
const STATUSES = ["PENDING", "APPROVED", "REJECTED", "BLOCKED"];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const GenerateRelaysTab = () => {
  const [selectedWilaya, setSelectedWilaya] = useState(WILAYA_LIST[0].code);
  const [generateCount, setGenerateCount] = useState(1);
  const [generatedRelays, setGeneratedRelays] = useState([]);

  const handleGenerateRelayPoints = () => {
    const wilaya = WILAYA_LIST.find((w) => w.code === selectedWilaya);
    if (!wilaya) return;
    const nextId =
      generatedRelays.length > 0
        ? Math.max(...generatedRelays.map((r) => r.id)) + 1
        : 1;
    const newRelays = Array.from({ length: generateCount }, (_, i) => {
      const street = getRandom(STREET_NAMES);
      const neighborhood = getRandom(NEIGHBORHOODS);
      const address = `${street}، ${neighborhood}، ${wilaya.name}`;
      const opening_hours = getRandom(OPENING_HOURS);
      const status = getRandom(STATUSES);
      const latitude = (wilaya.baseLat + (Math.random() - 0.5) * 0.1).toFixed(
        6
      );
      const longitude = (wilaya.baseLng + (Math.random() - 0.5) * 0.1).toFixed(
        6
      );
      const phone = `+213 555 ${Math.floor(100000 + Math.random() * 899999)}`;
      return {
        id: nextId + i,
        address,
        wilaya: { code: wilaya.code, name: wilaya.name },
        opening_hours,
        contact_phone: phone,
        status,
        latitude,
        longitude,
      };
    });
    setGeneratedRelays((prev) => [...prev, ...newRelays]);
  };

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-xl shadow p-4 flex flex-col md:flex-row items-center gap-4">
        <div className="flex items-center gap-2">
          <label className="font-semibold">الولاية:</label>
          <select
            className="input-field"
            value={selectedWilaya}
            onChange={(e) => setSelectedWilaya(e.target.value)}
          >
            {WILAYA_LIST.map((w) => (
              <option key={w.code} value={w.code}>
                {w.name}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center gap-2">
          <label className="font-semibold">عدد النقاط:</label>
          <input
            type="number"
            min={1}
            max={20}
            className="input-field w-20"
            value={generateCount}
            onChange={(e) => setGenerateCount(Number(e.target.value))}
          />
        </div>
        <button className="btn-primary" onClick={handleGenerateRelayPoints}>
          توليد نقاط ترحيل
        </button>
      </div>
      {/* Table of generated relays */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 sticky top-0 z-10">
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
            {generatedRelays.map((relay, idx) => (
              <tr
                key={relay.id}
                className={`border-b border-neutral-100 hover:bg-primary-50 transition ${
                  idx % 2 === 0 ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <td className="py-3">{relay.address}</td>
                <td className="py-3">
                  {relay.wilaya.name} ({relay.wilaya.code})
                </td>
                <td className="py-3">{relay.opening_hours}</td>
                <td className="py-3">
                  <span dir="ltr">{relay.contact_phone}</span>
                </td>
                <td className="py-3">{relay.status}</td>
                <td className="py-3">
                  <span dir="ltr">{relay.latitude}</span>
                </td>
                <td className="py-3">
                  <span dir="ltr">{relay.longitude}</span>
                </td>
              </tr>
            ))}
            {generatedRelays.length === 0 && (
              <tr>
                <td
                  colSpan={7}
                  className="py-6 text-center text-neutral-400 bg-white"
                >
                  لا توجد نقاط ترحيل مولدة بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default GenerateRelaysTab;
