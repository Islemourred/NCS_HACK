import React, { useState } from "react";
import {
  MagnifyingGlassIcon,
  PencilIcon,
  EyeIcon,
  XMarkIcon,
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

const STATUS_OPTIONS = Object.entries(STATUS_LABELS);

const initialParcels = [
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

const ParcelsTab = () => {
  const [parcels, setParcels] = useState(initialParcels);
  const [editTracking, setEditTracking] = useState(null);
  const [newStatus, setNewStatus] = useState("");
  const [detailsTracking, setDetailsTracking] = useState(null);

  const handleEditClick = (tracking_number, currentStatus) => {
    setEditTracking(tracking_number);
    setNewStatus(currentStatus);
  };

  const handleSaveStatus = (tracking_number) => {
    setParcels((prev) =>
      prev.map((p) =>
        p.tracking_number === tracking_number ? { ...p, status: newStatus } : p
      )
    );
    setEditTracking(null);
    setNewStatus("");
  };

  const handleCancel = () => {
    setEditTracking(null);
    setNewStatus("");
  };

  const handleShowDetails = (tracking_number) => {
    setDetailsTracking(tracking_number);
  };

  const handleCloseDetails = () => {
    setDetailsTracking(null);
  };

  const selectedParcel = parcels.find(
    (p) => p.tracking_number === detailsTracking
  );

  return (
    <div className="space-y-6">
      {/* Filter/Search Bar */}
      <div className="bg-neutral-50 rounded-lg p-4 flex flex-col md:flex-row justify-between items-center gap-4 mb-4">
        <h3 className="text-2xl font-bold text-neutral-800">إدارة الطرود</h3>
        <div className="flex gap-4 w-full md:w-auto">
          <div className="relative w-40 h-full">
            <select className="input-field appearance-none w-full pr-8 bg-white ">
              <option>جميع الحالات</option>
              {STATUS_OPTIONS.map(([key, label]) => (
                <option key={key} value={key}>
                  {label}
                </option>
              ))}
            </select>
            <ChevronDownIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
          </div>
          <div className="relative w-full md:w-64">
            <MagnifyingGlassIcon className="w-5 h-5 absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400" />
            <input
              type="text"
              placeholder="البحث في الطرود..."
              className="input-field pr-10 w-full"
            />
          </div>
        </div>
      </div>

      {/* Table Container */}
      <div className="bg-white rounded-xl shadow p-4 overflow-x-auto">
        <table className="w-full">
          <thead className="bg-neutral-50 sticky top-0 z-10">
            <tr className="border-b border-neutral-200">
              <th className="py-3 text-right">رقم التتبع</th>
              <th className="py-3 text-right">المرسل</th>
              <th className="py-3 text-right">المستلم</th>
              <th className="py-3 text-right">الحالة</th>
              <th className="py-3 text-right">الوزن (كغ)</th>
              <th className="py-3 text-right">النوع</th>
              <th className="py-3 text-right">هش؟</th>
              <th className="py-3 text-right">تقدير التسليم</th>
              <th className="py-3 text-right">ملاحظات</th>
              <th className="py-3 text-right">إجراءات</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, idx) => (
              <tr
                key={parcel.tracking_number}
                className={`border-b border-neutral-100 hover:bg-primary-50 transition ${
                  idx % 2 === 0 ? "bg-neutral-50" : "bg-white"
                }`}
              >
                <td className="py-3 font-mono text-primary-600">
                  {parcel.tracking_number}
                </td>
                <td className="py-3">{parcel.order.vendor}</td>
                <td className="py-3">{parcel.order.client_name}</td>
                <td className="py-3">
                  {editTracking === parcel.tracking_number ? (
                    <div className="relative w-full">
                      <select
                        className="input-field appearance-none w-full pl-3 pr-8 py-2 rounded-lg border border-neutral-300 bg-white text-neutral-700 focus:outline-none focus:ring-2 focus:ring-primary-300 focus:border-primary-400 transition"
                        value={newStatus}
                        onChange={(e) => setNewStatus(e.target.value)}
                      >
                        {STATUS_OPTIONS.map(([key, label]) => (
                          <option key={key} value={key}>
                            {label}
                          </option>
                        ))}
                      </select>
                      <ChevronDownIcon className="w-5 h-5 absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-neutral-400" />
                    </div>
                  ) : (
                    <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 text-primary-700">
                      {STATUS_LABELS[parcel.status] || parcel.status}
                    </span>
                  )}
                </td>
                <td className="py-3">{parcel.package_weight ?? "-"}</td>
                <td className="py-3">{parcel.package_type}</td>
                <td className="py-3">{parcel.fragile ? "نعم" : "لا"}</td>
                <td className="py-3">
                  {parcel.estimated_delivery
                    ? new Date(parcel.estimated_delivery).toLocaleString(
                        "ar-EG"
                      )
                    : "-"}
                </td>
                <td className="py-3">{parcel.notes}</td>
                <td className="py-3">
                  <div className="flex gap-2">
                    {editTracking === parcel.tracking_number ? (
                      <>
                        <button
                          className="btn-primary flex items-center gap-1"
                          onClick={() =>
                            handleSaveStatus(parcel.tracking_number)
                          }
                        >
                          <PencilIcon className="w-4 h-4" /> حفظ
                        </button>
                        <button
                          className="btn-secondary flex items-center gap-1"
                          onClick={handleCancel}
                        >
                          <XMarkIcon className="w-4 h-4" /> إلغاء
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className="btn-secondary flex items-center gap-1"
                          onClick={() =>
                            handleEditClick(
                              parcel.tracking_number,
                              parcel.status
                            )
                          }
                        >
                          <PencilIcon className="w-4 h-4" /> تحديث
                        </button>
                        <button
                          className="btn-primary flex items-center gap-1"
                          onClick={() =>
                            handleShowDetails(parcel.tracking_number)
                          }
                        >
                          <EyeIcon className="w-4 h-4" /> تفاصيل
                        </button>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
            {parcels.length === 0 && (
              <tr>
                <td
                  colSpan={10}
                  className="py-6 text-center text-neutral-400 bg-white"
                >
                  لا توجد طرود حالياً.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Order Details Modal */}
      {selectedParcel && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-lg shadow-lg relative">
            <button
              className="absolute top-4 left-4 text-neutral-400 hover:text-neutral-600"
              onClick={handleCloseDetails}
            >
              <XMarkIcon className="w-6 h-6" />
            </button>
            <h4 className="text-xl font-bold mb-4">تفاصيل الطلب</h4>
            <hr className="mb-4" />
            <div className="space-y-2 text-base">
              <div>
                <span className="font-semibold">المنتج:</span>{" "}
                {selectedParcel.order.product}
              </div>
              <div>
                <span className="font-semibold">اسم العميل:</span>{" "}
                {selectedParcel.order.client_name}
              </div>
              <div>
                <span className="font-semibold">هاتف العميل:</span>{" "}
                <span dir="ltr">{selectedParcel.order.client_phone}</span>
              </div>
              <div>
                <span className="font-semibold">عنوان العميل:</span>{" "}
                {selectedParcel.order.client_address}
              </div>
              <div>
                <span className="font-semibold">البائع:</span>{" "}
                {selectedParcel.order.vendor}
              </div>
              <div>
                <span className="font-semibold">نقطة الترحيل:</span>{" "}
                {selectedParcel.order.relay_point}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-8">
              <button className="btn-secondary" onClick={handleCloseDetails}>
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ParcelsTab;
