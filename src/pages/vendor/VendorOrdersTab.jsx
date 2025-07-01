import React, { useState } from "react";
import VendorOrdersList from "./VendorOrdersList";
import {
  MagnifyingGlassIcon,
  PlusIcon,
  ChevronDownIcon,
} from "@heroicons/react/24/outline";

const STATUS_LABELS = {
  CREATED: "تم الإنشاء",
  PICKED_UP_FROM_SELLER: "تم الاستلام من البائع",
  IN_TRANSIT: "قيد النقل",
  ARRIVED_AT_RELAY: "وصل إلى نقطة الترحيل",
  READY_FOR_PICKUP: "جاهز للاستلام",
  PICKED_UP_BY_CONSUMER: "تم الاستلام من المستهلك",
  DELIVERED: "تم التسليم",
  RETURNED: "تم الإرجاع",
  LOST: "ضائع",
  DAMAGED: "تالف",
};

const STATUS_COLORS = {
  CREATED: "gray",
  PICKED_UP_FROM_SELLER: "blue",
  IN_TRANSIT: "yellow",
  ARRIVED_AT_RELAY: "indigo",
  READY_FOR_PICKUP: "orange",
  PICKED_UP_BY_CONSUMER: "green",
  DELIVERED: "green",
  RETURNED: "red",
  LOST: "red",
  DAMAGED: "red",
};

const RELAY_POINTS = [
  {
    id: 1,
    name: "متجر الأمين",
    address: "شارع ديدوش مراد، الجزائر العاصمة",
    wilaya: { code: "16", name: "الجزائر العاصمة" },
  },
  {
    id: 2,
    name: "سوبر ماركت النور",
    address: "حي الأمير عبد القادر، وهران",
    wilaya: { code: "31", name: "وهران" },
  },
  {
    id: 3,
    name: "مكتبة المعرفة",
    address: "حي أول نوفمبر، قسنطينة",
    wilaya: { code: "25", name: "قسنطينة" },
  },
  {
    id: 4,
    name: "صيدلية الشفاء",
    address: "حي الثورة، عنابة",
    wilaya: { code: "23", name: "عنابة" },
  },
];

const initialOrders = [
  {
    tracking_number: "DZ001234",
    order: {
      vendor: "أحمد متجر الإلكترونيات",
      product: "هاتف ذكي سامسونج S21",
      client_name: "فاطمة الزهراء",
      client_phone: "+213 555 111 222",
      client_address: "شارع الحرية، الجزائر العاصمة",
      relay_point: "نقطة ترحيل باب الزوار",
    },
    status: "ARRIVED_AT_RELAY",
    package_weight: 2.5,
    package_type: "Standard",
    fragile: true,
    estimated_delivery: "2024-06-10T15:00:00Z",
    notes: "يرجى التعامل بحذر",
    created_at: "2024-06-01T10:00:00Z",
  },
  {
    tracking_number: "DZ001235",
    order: {
      product: "قميص رجالي كلاسيكي",
      client_name: "يوسف العلي",
      client_phone: "+213 555 333 444",
      client_address: "حي النصر، وهران",
      vendor: "سوق النور للأزياء",
      relay_point: "نقطة ترحيل وهران المركزية",
    },
    status: "DELIVERED",
    package_weight: 1.2,
    package_type: "Express",
    fragile: false,
    estimated_delivery: "2024-06-09T12:00:00Z",
    notes: "",
    created_at: "2024-06-02T09:00:00Z",
  },
  {
    tracking_number: "DZ001236",
    order: {
      product: "مكمل غذائي للأطفال",
      client_name: "زينب حسني",
      client_phone: "+213 555 555 666",
      client_address: "حي الورود، البليدة",
      vendor: "صيدلية الشفاء",
      relay_point: "نقطة ترحيل البليدة",
    },
    status: "READY_FOR_PICKUP",
    package_weight: 0.8,
    package_type: "Standard",
    fragile: false,
    estimated_delivery: "2024-06-11T17:00:00Z",
    notes: "",
    created_at: "2024-06-03T11:00:00Z",
  },
];

const getStatusColor = (status) => STATUS_COLORS[status] || "gray";
const getStatusText = (status) => STATUS_LABELS[status] || status;

const emptyOrder = {
  tracking_number: "",
  order: {
    vendor: "",
    product: "",
    client_name: "",
    client_phone: "",
    client_address: "",
    relay_point: "",
  },
  status: "CREATED",
  package_weight: "",
  package_type: "Standard",
  fragile: false,
  estimated_delivery: "",
  notes: "",
  created_at: "",
};

const VendorOrdersTab = () => {
  const [orders, setOrders] = useState(initialOrders);
  const [modalOpen, setModalOpen] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [form, setForm] = useState(emptyOrder);
  const [deleteIndex, setDeleteIndex] = useState(null);

  const openAdd = () => {
    setEditIndex(null);
    setForm({ ...emptyOrder, created_at: new Date().toISOString() });
    setModalOpen(true);
  };

  const openEdit = (idx) => {
    setEditIndex(idx);
    setForm({ ...orders[idx] });
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleFormChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (name.startsWith("order.")) {
      const key = name.split(".")[1];
      setForm((f) => ({ ...f, order: { ...f.order, [key]: value } }));
    } else if (type === "checkbox") {
      setForm((f) => ({ ...f, [name]: checked }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editIndex !== null) {
      setOrders((prev) => prev.map((o, i) => (i === editIndex ? form : o)));
    } else {
      setOrders((prev) => [
        { ...form, created_at: new Date().toISOString() },
        ...prev,
      ]);
    }
    setModalOpen(false);
  };

  const handleDelete = (idx) => {
    setOrders((prev) => prev.filter((_, i) => i !== idx));
    setDeleteIndex(null);
  };

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-2xl font-bold text-neutral-800">إدارة الطلبات</h3>
        <div className="flex gap-4">
          <select className="input-field w-40">
            <option>جميع الحالات</option>
            {Object.entries(STATUS_LABELS).map(([key, label]) => (
              <option key={key} value={key}>
                {label}
              </option>
            ))}
          </select>
          <div className="relative">
            <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="البحث في الطلبات..."
              className="input-field pr-10 w-64"
            />
          </div>
          <button className="btn-primary gap-2" onClick={openAdd}>
            <PlusIcon className="w-5 h-5" />
            طلب جديد
          </button>
        </div>
      </div>
      <VendorOrdersList
        orders={orders}
        getStatusColor={getStatusColor}
        getStatusText={getStatusText}
        onEdit={openEdit}
        onDelete={setDeleteIndex}
      />
      {/* Add/Edit Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <form
            className="bg-white rounded-xl p-8 w-full max-w-2xl shadow-lg space-y-4 overflow-y-auto"
            style={{ maxHeight: "80vh" }}
            onSubmit={handleSave}
          >
            <h4 className="text-xl font-bold mb-4">
              {editIndex !== null ? "تعديل الطلب" : "إضافة طلب جديد"}
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block mb-1 font-semibold">رقم التتبع</label>
                <input
                  name="tracking_number"
                  className="input-field w-full"
                  value={form.tracking_number}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">اسم المنتج</label>
                <input
                  name="order.product"
                  className="input-field w-full"
                  value={form.order.product}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">اسم العميل</label>
                <input
                  name="order.client_name"
                  className="input-field w-full"
                  value={form.order.client_name}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">هاتف العميل</label>
                <input
                  name="order.client_phone"
                  className="input-field w-full"
                  value={form.order.client_phone}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">عنوان العميل</label>
                <input
                  name="order.client_address"
                  className="input-field w-full"
                  value={form.order.client_address}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">البائع</label>
                <input
                  name="order.vendor"
                  className="input-field w-full"
                  value={form.order.vendor}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">نقطة الترحيل</label>
                <div className="relative w-full">
                  <select
                    name="order.relay_point"
                    className="input-field appearance-none w-full pl-3 pr-8 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                    value={form.order.relay_point}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">اختر نقطة الترحيل</option>
                    {RELAY_POINTS.map((pt) => (
                      <option key={pt.id} value={pt.name}>
                        {pt.name} - {pt.address}
                      </option>
                    ))}
                  </select>
                  <ChevronDownIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
                </div>
              </div>
              <div>
                <label className="block mb-1 font-semibold">الحالة</label>
                <select
                  name="status"
                  className="input-field w-full"
                  value={form.status}
                  onChange={handleFormChange}
                  required
                >
                  {Object.entries(STATUS_LABELS).map(([key, label]) => (
                    <option key={key} value={key}>
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-semibold">الوزن (كغ)</label>
                <input
                  name="package_weight"
                  type="number"
                  className="input-field w-full"
                  value={form.package_weight}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">النوع</label>
                <input
                  name="package_type"
                  className="input-field w-full"
                  value={form.package_type}
                  onChange={handleFormChange}
                  required
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">هش؟</label>
                <input
                  name="fragile"
                  type="checkbox"
                  checked={form.fragile}
                  onChange={handleFormChange}
                />
              </div>
              <div>
                <label className="block mb-1 font-semibold">
                  تقدير التسليم
                </label>
                <input
                  name="estimated_delivery"
                  type="datetime-local"
                  className="input-field w-full"
                  value={form.estimated_delivery}
                  onChange={handleFormChange}
                />
              </div>
              <div className="md:col-span-2">
                <label className="block mb-1 font-semibold">ملاحظات</label>
                <input
                  name="notes"
                  className="input-field w-full"
                  value={form.notes}
                  onChange={handleFormChange}
                />
              </div>
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
                حفظ
              </button>
            </div>
          </form>
        </div>
      )}
      {/* Delete Confirmation */}
      {deleteIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-md shadow-lg">
            <h4 className="text-lg font-bold mb-4">تأكيد الحذف</h4>
            <p className="mb-6">
              هل أنت متأكد أنك تريد حذف هذا الطلب؟ لا يمكن التراجع عن هذا
              الإجراء.
            </p>
            <div className="flex justify-end gap-2">
              <button
                className="btn-secondary"
                onClick={() => setDeleteIndex(null)}
              >
                إلغاء
              </button>
              <button
                className="btn-error"
                onClick={() => handleDelete(deleteIndex)}
              >
                حذف
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default VendorOrdersTab;
