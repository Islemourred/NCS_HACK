import React, { useRef, useEffect } from "react";
import {
  PencilIcon,
  TrashIcon,
  XMarkIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import { RELAY_POINTS } from "../../utils/relayPointsData";

const STATUS_CHOICES = [
  { value: "PENDING", label: "قيد المراجعة" },
  { value: "APPROVED", label: "مقبول" },
  { value: "REJECTED", label: "مرفوض" },
  { value: "BLOCKED", label: "محظور" },
];

const WILAYA_LIST = [
  { code: "16", name: "الجزائر العاصمة" },
  { code: "31", name: "وهران" },
  { code: "09", name: "البليدة" },
  { code: "25", name: "قسنطينة" },
];

function RelayPointsCRUD() {
  const [relayPoints, setRelayPoints] = React.useState(RELAY_POINTS);
  const [modalOpen, setModalOpen] = React.useState(false);
  const [editId, setEditId] = React.useState(null);
  const [form, setForm] = React.useState({
    address: "",
    wilaya: WILAYA_LIST[0],
    opening_hours: "",
    contact_phone: "",
    status: "PENDING",
    latitude: "",
    longitude: "",
  });
  const [deleteId, setDeleteId] = React.useState(null);
  const modalFormRef = useRef(null);

  useEffect(() => {
    if (modalOpen && modalFormRef.current) {
      modalFormRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [modalOpen]);

  const openAdd = () => {
    setEditId(null);
    setForm({
      address: "",
      wilaya: WILAYA_LIST[0],
      opening_hours: "",
      contact_phone: "",
      status: "PENDING",
      latitude: "",
      longitude: "",
    });
    setModalOpen(true);
  };
  const openEdit = (relay) => {
    setEditId(relay.id);
    setForm({
      ...relay,
      wilaya: relay.wilaya || WILAYA_LIST[0],
      latitude: relay.latitude || "",
      longitude: relay.longitude || "",
    });
    setModalOpen(true);
  };
  const closeModal = () => setModalOpen(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };
  const handleWilayaChange = (e) => {
    const wilaya = WILAYA_LIST.find((w) => w.code === e.target.value);
    setForm((f) => ({ ...f, wilaya }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editId) {
      setRelayPoints((prev) =>
        prev.map((r) => (r.id === editId ? { ...form, id: editId } : r))
      );
    } else {
      setRelayPoints((prev) => [...prev, { ...form, id: Date.now() }]);
    }
    setModalOpen(false);
  };
  const handleDelete = (id) => {
    setRelayPoints((prev) => prev.filter((r) => r.id !== id));
    setDeleteId(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-2xl font-bold text-neutral-800">نقاط الترحيل</h3>
        <button className="btn-primary" onClick={openAdd}>
          + إضافة نقطة ترحيل
        </button>
      </div>
      {/* Table Container */}
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
              <th className="py-3 text-right">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {relayPoints.map((relay, idx) => (
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
                <td className="py-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                    {
                      STATUS_CHOICES.find((s) => s.value === relay.status)
                        ?.label
                    }
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
                      className="btn-secondary flex items-center gap-1 px-3 py-1"
                      onClick={() => openEdit(relay)}
                    >
                      <PencilIcon className="w-4 h-4" /> تعديل
                    </button>
                    <button
                      className="btn-error flex items-center gap-1 px-3 py-1"
                      onClick={() => setDeleteId(relay.id)}
                    >
                      <TrashIcon className="w-4 h-4" /> حذف
                    </button>
                  </div>
                </td>
              </tr>
            ))}
            {relayPoints.length === 0 && (
              <tr>
                <td
                  colSpan={8}
                  className="py-6 text-center text-neutral-400 bg-white"
                >
                  لا توجد نقاط ترحيل بعد.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      {/* Modal for Add/Edit */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50"
          onClick={closeModal}
        >
          <form
            ref={modalFormRef}
            className="bg-white rounded-xl p-8 w-full max-w-lg space-y-4 shadow-lg relative max-h-[80vh] overflow-y-auto"
            onSubmit={handleSubmit}
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              className="absolute top-4 left-4 text-neutral-400 hover:text-neutral-600"
              onClick={closeModal}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h4 className="text-xl font-bold mb-4">
              {editId ? "تعديل نقطة الترحيل" : "إضافة نقطة ترحيل"}
            </h4>
            <hr className="mb-4" />
            <div>
              <label className="block mb-1 font-semibold">العنوان</label>
              <input
                name="address"
                className="input-field w-full rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                value={form.address}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">الولاية</label>
              <div className="relative w-full">
                <select
                  name="wilaya"
                  className="input-field appearance-none w-full pl-3 pr-8 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                  value={form.wilaya.code}
                  onChange={handleWilayaChange}
                  required
                >
                  {WILAYA_LIST.map((w) => (
                    <option key={w.code} value={w.code}>
                      {w.name} ({w.code})
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold">ساعات العمل</label>
              <input
                name="opening_hours"
                className="input-field w-full rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                value={form.opening_hours}
                onChange={handleChange}
                required
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">رقم الهاتف</label>
              <input
                name="contact_phone"
                className="input-field w-full font-mono rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                value={form.contact_phone}
                onChange={handleChange}
                required
                dir="ltr"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">الحالة</label>
              <div className="relative w-full">
                <select
                  name="status"
                  className="input-field appearance-none w-full pl-3 pr-8 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                  value={form.status}
                  onChange={handleChange}
                  required
                >
                  {STATUS_CHOICES.map((s) => (
                    <option key={s.value} value={s.value}>
                      {s.label}
                    </option>
                  ))}
                </select>
                <ChevronDownIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
              </div>
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                خط العرض (Latitude)
              </label>
              <input
                name="latitude"
                type="number"
                step="0.000001"
                min="-90"
                max="90"
                className="input-field w-full rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                value={form.latitude}
                onChange={handleChange}
                placeholder="مثال: 36.752887"
              />
            </div>
            <div>
              <label className="block mb-1 font-semibold">
                خط الطول (Longitude)
              </label>
              <input
                name="longitude"
                type="number"
                step="0.000001"
                min="-180"
                max="180"
                className="input-field w-full rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                value={form.longitude}
                onChange={handleChange}
                placeholder="مثال: 3.042048"
              />
            </div>
            <div className="flex justify-end gap-2 mt-4">
              <button
                type="button"
                className="btn-secondary"
                onClick={closeModal}
              >
                إلغاء
              </button>
              <button type="submit" className="btn-primary">
                {editId ? "حفظ التغييرات" : "إضافة"}
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Delete Confirmation */}
      {deleteId && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg relative">
            <button
              type="button"
              className="absolute top-4 left-4 text-neutral-400 hover:text-neutral-600"
              onClick={() => setDeleteId(null)}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h4 className="text-lg font-bold mb-4">تأكيد الحذف</h4>
            <hr className="mb-4" />
            <p className="mb-6">
              هل أنت متأكد أنك تريد حذف نقطة الترحيل هذه؟ لا يمكن التراجع عن هذا
              الإجراء.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="btn-secondary"
                onClick={() => setDeleteId(null)}
              >
                إلغاء
              </button>
              <button
                className="btn-error"
                onClick={() => handleDelete(deleteId)}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default RelayPointsCRUD;
