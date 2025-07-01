import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  MapPinIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
} from "@heroicons/react/24/outline";

const STATUS_CHOICES = [
  { value: "PENDING", label: "قيد المراجعة" },
  { value: "APPROVED", label: "مقبول" },
  { value: "REJECTED", label: "مرفوض" },
  { value: "BLOCKED", label: "محظور" },
];

const getStatusColor = (status) => {
  switch (status) {
    case "APPROVED":
      return "success";
    case "PENDING":
      return "warning";
    case "REJECTED":
      return "error";
    case "BLOCKED":
      return "neutral";
    default:
      return "neutral";
  }
};

const getStatusText = (status) => {
  const found = STATUS_CHOICES.find((s) => s.value === status);
  return found ? found.label : status;
};

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

const RelaysTab = () => {
  const [relayPoints, setRelayPoints] = useState(initialRelayPoints);
  const [search, setSearch] = useState("");
  const [editId, setEditId] = useState(null);
  const [editStatus, setEditStatus] = useState("");

  const handleStatusChange = (id, newStatus) => {
    setRelayPoints((prev) =>
      prev.map((relay) =>
        relay.id === id ? { ...relay, status: newStatus } : relay
      )
    );
  };

  const openEditModal = (relay) => {
    setEditId(relay.id);
    setEditStatus(relay.status);
  };

  const closeEditModal = () => {
    setEditId(null);
    setEditStatus("");
  };

  const saveEditStatus = () => {
    handleStatusChange(editId, editStatus);
    closeEditModal();
  };

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
          إدارة نقاط الترحيل
        </h3>
        <div className="flex gap-4">
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
          <button className="btn-primary gap-2">
            <PlusIcon className="w-5 h-5" />
            إضافة نقطة ترحيل
          </button>
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
              <th className="py-3 text-right">إجراءات</th>
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
                <td className="py-3">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                      relay.status
                    )}-100 text-${getStatusColor(relay.status)}-700`}
                  >
                    {getStatusText(relay.status)}
                  </span>
                </td>
                <td className="py-3">
                  <span dir="ltr">{relay.latitude}</span>
                </td>
                <td className="py-3">
                  <span dir="ltr">{relay.longitude}</span>
                </td>
                <td className="py-3">
                  <div className="flex gap-2">
                    <button
                      className="p-2 text-warning-600 hover:bg-warning-100 rounded-lg transition-colors"
                      onClick={() => openEditModal(relay)}
                    >
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {filteredRelays.length === 0 && (
              <tr>
                <td colSpan={8} className="py-6 text-center text-neutral-400">
                  لا توجد نقاط ترحيل بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Edit Status Modal */}
      {editId && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
            <h4 className="text-lg font-bold mb-4">تغيير حالة نقطة الترحيل</h4>
            <div className="mb-4">
              <label className="block mb-2 font-semibold">الحالة الجديدة</label>
              <select
                className="input-field w-full"
                value={editStatus}
                onChange={(e) => setEditStatus(e.target.value)}
              >
                {STATUS_CHOICES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex justify-end gap-2">
              <button className="btn-secondary" onClick={closeEditModal}>
                إلغاء
              </button>
              <button className="btn-primary" onClick={saveEditStatus}>
                حفظ
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RelaysTab;
