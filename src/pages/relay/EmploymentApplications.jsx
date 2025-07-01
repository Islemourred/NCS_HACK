import React, { useState } from "react";

const WILAYA_LIST = [
  { code: "16", name: "الجزائر العاصمة" },
  { code: "31", name: "وهران" },
  { code: "25", name: "قسنطينة" },
  { code: "23", name: "عنابة" },
];

const mockEmploymentPosts = [
  {
    id: 1,
    title: "فتح نقطة ترحيل جديدة في الجزائر العاصمة",
    description: "نبحث عن مشغل نقطة ترحيل في الجزائر العاصمة...",
    place: "الجزائر العاصمة",
    requirements: "خبرة في التوصيل، سجل تجاري، بطاقة هوية...",
    space: "100 متر مربع",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "نقطة ترحيل جديدة في وهران",
    description: "فرصة لفتح نقطة ترحيل في وهران...",
    place: "وهران",
    requirements: "سجل تجاري، خبرة في الإدارة...",
    space: "80 متر مربع",
    status: "ACTIVE",
  },
];

const STATUS_LABELS = {
  PENDING: "قيد المراجعة",
  APPROVED: "مقبول",
  REJECTED: "مرفوض",
  BLOCKED: "محظور",
};

const EmploymentApplications = () => {
  const [applications, setApplications] = useState([]);
  const [showFormFor, setShowFormFor] = useState(null); // employmentPostId
  const [form, setForm] = useState({
    address: "",
    wilaya: WILAYA_LIST[0].code,
    opening_hours: "",
    contact_phone: "",
    motivation: "",
    store_image: null,
    commerce_register: null,
    id_card: null,
  });

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setForm((f) => ({ ...f, [name]: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleApply = (employmentPostId) => {
    setApplications((prev) => [
      ...prev,
      {
        id: Date.now(),
        employment_post: employmentPostId,
        address: form.address,
        wilaya: WILAYA_LIST.find((w) => w.code === form.wilaya),
        opening_hours: form.opening_hours,
        contact_phone: form.contact_phone,
        motivation: form.motivation,
        status: "PENDING",
        applied_at: new Date().toISOString(),
        store_image: form.store_image,
        commerce_register: form.commerce_register,
        id_card: form.id_card,
      },
    ]);
    setShowFormFor(null);
    setForm({
      address: "",
      wilaya: WILAYA_LIST[0].code,
      opening_hours: "",
      contact_phone: "",
      motivation: "",
      store_image: null,
      commerce_register: null,
      id_card: null,
    });
  };

  return (
    <div className="space-y-8">
      <div className="card p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-4">
          طلبات نقاط الترحيل المفتوحة
        </h3>
        <div className="space-y-4">
          {mockEmploymentPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-neutral-200 pb-4 mb-4"
            >
              <h4 className="text-lg font-bold text-primary-700 mb-1">
                {post.title}
              </h4>
              <div className="text-neutral-700 mb-1">الموقع: {post.place}</div>
              <div className="text-neutral-600 mb-1">{post.description}</div>
              {post.requirements && (
                <div className="text-sm text-neutral-500 mb-1">
                  المتطلبات: {post.requirements}
                </div>
              )}
              {post.space && (
                <div className="text-sm text-success-600 mb-1">
                  المساحة: {post.space}
                </div>
              )}
              <button
                className="btn-primary mt-2"
                onClick={() => setShowFormFor(post.id)}
                disabled={
                  !!applications.find((a) => a.employment_post === post.id)
                }
              >
                {applications.find((a) => a.employment_post === post.id)
                  ? "تم التقديم"
                  : "تقديم طلب"}
              </button>
              {/* Application Form */}
              {showFormFor === post.id && (
                <form
                  className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 bg-neutral-50 p-4 rounded-xl"
                  onSubmit={(e) => {
                    e.preventDefault();
                    handleApply(post.id);
                  }}
                >
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      العنوان
                    </label>
                    <input
                      name="address"
                      className="input-field"
                      value={form.address}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      الولاية
                    </label>
                    <select
                      name="wilaya"
                      className="input-field"
                      value={form.wilaya}
                      onChange={handleFormChange}
                      required
                    >
                      {WILAYA_LIST.map((w) => (
                        <option key={w.code} value={w.code}>
                          {w.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      ساعات العمل
                    </label>
                    <input
                      name="opening_hours"
                      className="input-field"
                      value={form.opening_hours}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      رقم الهاتف
                    </label>
                    <input
                      name="contact_phone"
                      className="input-field"
                      value={form.contact_phone}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold mb-1">
                      الدافع
                    </label>
                    <textarea
                      name="motivation"
                      className="input-field"
                      value={form.motivation}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      صورة المحل
                    </label>
                    <input
                      name="store_image"
                      type="file"
                      accept="image/*"
                      className="input-field"
                      onChange={handleFormChange}
                    />
                    {form.store_image && (
                      <div className="text-xs mt-1">
                        {form.store_image.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      سجل تجاري
                    </label>
                    <input
                      name="commerce_register"
                      type="file"
                      accept="image/*"
                      className="input-field"
                      onChange={handleFormChange}
                    />
                    {form.commerce_register && (
                      <div className="text-xs mt-1">
                        {form.commerce_register.name}
                      </div>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      بطاقة الهوية
                    </label>
                    <input
                      name="id_card"
                      type="file"
                      accept="image/*"
                      className="input-field"
                      onChange={handleFormChange}
                    />
                    {form.id_card && (
                      <div className="text-xs mt-1">{form.id_card.name}</div>
                    )}
                  </div>
                  <div className="md:col-span-2 flex justify-end gap-2">
                    <button
                      type="button"
                      className="btn-secondary"
                      onClick={() => setShowFormFor(null)}
                    >
                      إلغاء
                    </button>
                    <button type="submit" className="btn-primary">
                      إرسال الطلب
                    </button>
                  </div>
                </form>
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-4">
          طلباتك المقدمة
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-neutral-200">
                <th className="py-3 text-right">الطلب</th>
                <th className="py-3 text-right">العنوان</th>
                <th className="py-3 text-right">الولاية</th>
                <th className="py-3 text-right">ساعات العمل</th>
                <th className="py-3 text-right">الهاتف</th>
                <th className="py-3 text-right">الدافع</th>
                <th className="py-3 text-right">الحالة</th>
                <th className="py-3 text-right">تاريخ التقديم</th>
                <th className="py-3 text-right">صورة المحل</th>
                <th className="py-3 text-right">سجل تجاري</th>
                <th className="py-3 text-right">بطاقة الهوية</th>
              </tr>
            </thead>
            <tbody>
              {applications.length === 0 && (
                <tr>
                  <td colSpan={8} className="py-6 text-center text-neutral-400">
                    لم تقم بتقديم أي طلب بعد.
                  </td>
                </tr>
              )}
              {applications.map((app) => {
                const post = mockEmploymentPosts.find(
                  (p) => p.id === app.employment_post
                );
                return (
                  <tr
                    key={app.id}
                    className="border-b border-neutral-100 hover:bg-neutral-50"
                  >
                    <td className="py-3">{post ? post.title : "-"}</td>
                    <td className="py-3">{app.address}</td>
                    <td className="py-3">{app.wilaya.name}</td>
                    <td className="py-3">{app.opening_hours}</td>
                    <td className="py-3">
                      <span dir="ltr">{app.contact_phone}</span>
                    </td>
                    <td className="py-3">{app.motivation}</td>
                    <td className="py-3">{STATUS_LABELS[app.status]}</td>
                    <td className="py-3">
                      {new Date(app.applied_at).toLocaleString()}
                    </td>
                    <td className="py-3">
                      {app.store_image ? app.store_image.name : "-"}
                    </td>
                    <td className="py-3">
                      {app.commerce_register ? app.commerce_register.name : "-"}
                    </td>
                    <td className="py-3">
                      {app.id_card ? app.id_card.name : "-"}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EmploymentApplications;
