import React, { useState } from "react";

const STATUS_LABELS = {
  PENDING: "قيد المراجعة",
  APPROVED: "مقبول",
  REJECTED: "مرفوض",
  BLOCKED: "محظور",
};

const EmploymentTab = ({
  employmentPosts,
  newPost,
  setNewPost,
  handleAddPost,
  getStatusColor,
  getStatusText,
}) => {
  // Mock applications data
  const [applications, setApplications] = useState([
    {
      id: 1,
      employment_post: 1,
      relay_point_name: "نقطة ترحيل العاصمة",
      address: "شارع ديدوش مراد، الجزائر العاصمة",
      wilaya: { code: "16", name: "الجزائر العاصمة" },
      opening_hours: "09:00 - 19:00",
      contact_phone: "+213 555 123 456",
      motivation: "أرغب في تشغيل نقطة الترحيل لخبرتي في المجال.",
      status: "PENDING",
      applied_at: new Date().toISOString(),
      store_image: {
        name: "store1.jpg",
        url: "https://via.placeholder.com/150",
      },
      commerce_register: {
        name: "register1.jpg",
        url: "https://via.placeholder.com/150",
      },
      id_card: { name: "id1.jpg", url: "https://via.placeholder.com/150" },
    },
    {
      id: 2,
      employment_post: 1,
      relay_point_name: "نقطة ترحيل بديلة",
      address: "حي آخر، الجزائر العاصمة",
      wilaya: { code: "16", name: "الجزائر العاصمة" },
      opening_hours: "10:00 - 18:00",
      contact_phone: "+213 555 654 321",
      motivation: "لدي محل مناسب وأرغب في الانضمام.",
      status: "PENDING",
      applied_at: new Date().toISOString(),
      store_image: {
        name: "store2.jpg",
        url: "https://via.placeholder.com/150",
      },
      commerce_register: {
        name: "register2.jpg",
        url: "https://via.placeholder.com/150",
      },
      id_card: { name: "id2.jpg", url: "https://via.placeholder.com/150" },
    },
  ]);

  const [detailsApp, setDetailsApp] = useState(null);

  const handleDecision = (appId, employmentPostId, decision) => {
    setApplications((prev) =>
      prev.map((app) => {
        if (app.employment_post === employmentPostId) {
          if (app.id === appId) {
            return { ...app, status: decision };
          } else if (decision === "APPROVED") {
            // If one is approved, others are rejected
            return { ...app, status: "REJECTED" };
          }
        }
        return app;
      })
    );
  };

  return (
    <div className="space-y-8">
      <div className="card p-6 mb-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-4">
          إنشاء طلب نقطة ترحيل جديدة
        </h3>
        <form
          className="grid grid-cols-1 md:grid-cols-2 gap-4"
          onSubmit={handleAddPost}
        >
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              العنوان
            </label>
            <input
              type="text"
              className="input-field"
              value={newPost.title}
              onChange={(e) =>
                setNewPost({ ...newPost, title: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              الموقع
            </label>
            <input
              type="text"
              className="input-field"
              value={newPost.place}
              onChange={(e) =>
                setNewPost({ ...newPost, place: e.target.value })
              }
              required
            />
          </div>
          <div className="md:col-span-2">
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              الوصف
            </label>
            <textarea
              className="input-field"
              value={newPost.description}
              onChange={(e) =>
                setNewPost({ ...newPost, description: e.target.value })
              }
              required
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              المتطلبات
            </label>
            <input
              type="text"
              className="input-field"
              value={newPost.requirements}
              onChange={(e) =>
                setNewPost({ ...newPost, requirements: e.target.value })
              }
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              المساحة
            </label>
            <input
              type="text"
              className="input-field"
              value={newPost.space}
              onChange={(e) =>
                setNewPost({ ...newPost, space: e.target.value })
              }
            />
          </div>
          <div className="md:col-span-2 flex justify-end">
            <button type="submit" className="btn-primary">
              إضافة الطلب
            </button>
          </div>
        </form>
      </div>
      <div className="card p-6">
        <h3 className="text-xl font-bold text-neutral-800 mb-4">
          طلبات نقاط الترحيل الحالية
        </h3>
        <div className="space-y-8">
          {employmentPosts.length === 0 && (
            <div className="text-neutral-500">لا توجد طلبات حالياً.</div>
          )}
          {employmentPosts.map((post) => (
            <div
              key={post.id}
              className="border-b border-neutral-200 pb-4 mb-8"
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
              <span
                className={`px-2 py-1 rounded-full text-xs font-semibold bg-${getStatusColor(
                  post.status
                )}-100 text-${getStatusColor(post.status)}-700`}
              >
                {getStatusText(post.status)}
              </span>
              {/* Applications for this post */}
              <div className="mt-4">
                <h5 className="font-bold mb-2">الطلبات المقدمة:</h5>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-neutral-200">
                        <th className="py-3 text-right">اسم نقطة الترحيل</th>
                        <th className="py-3 text-right">الحالة</th>
                        <th className="py-3 text-right">إجراءات</th>
                      </tr>
                    </thead>
                    <tbody>
                      {applications.filter(
                        (app) => app.employment_post === post.id
                      ).length === 0 && (
                        <tr>
                          <td
                            colSpan={3}
                            className="py-6 text-center text-neutral-400"
                          >
                            لا توجد طلبات بعد.
                          </td>
                        </tr>
                      )}
                      {applications
                        .filter((app) => app.employment_post === post.id)
                        .map((app) => (
                          <tr
                            key={app.id}
                            className="border-b border-neutral-100 hover:bg-neutral-50"
                          >
                            <td className="py-3">{app.relay_point_name}</td>
                            <td className="py-3">
                              {STATUS_LABELS[app.status]}
                            </td>
                            <td className="py-3">
                              <button
                                className="btn-secondary btn-xs mr-2"
                                onClick={() => setDetailsApp(app)}
                              >
                                عرض التفاصيل
                              </button>
                              {app.status === "PENDING" && (
                                <>
                                  <button
                                    className="btn-primary btn-xs mr-2"
                                    onClick={() =>
                                      handleDecision(
                                        app.id,
                                        post.id,
                                        "APPROVED"
                                      )
                                    }
                                  >
                                    قبول
                                  </button>
                                  <button
                                    className="btn-error btn-xs"
                                    onClick={() =>
                                      handleDecision(
                                        app.id,
                                        post.id,
                                        "REJECTED"
                                      )
                                    }
                                  >
                                    رفض
                                  </button>
                                </>
                              )}
                              {app.status === "APPROVED" && (
                                <span className="text-success-600 font-bold">
                                  مقبول
                                </span>
                              )}
                              {app.status === "REJECTED" && (
                                <span className="text-error-600 font-bold">
                                  مرفوض
                                </span>
                              )}
                            </td>
                          </tr>
                        ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Details Modal */}
      {detailsApp && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-8 w-full max-w-2xl shadow-lg">
            <h4 className="text-lg font-bold mb-4">تفاصيل الطلب</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <strong>اسم نقطة الترحيل:</strong> {detailsApp.relay_point_name}
              </div>
              <div>
                <strong>العنوان:</strong> {detailsApp.address}
              </div>
              <div>
                <strong>الولاية:</strong> {detailsApp.wilaya.name}
              </div>
              <div>
                <strong>ساعات العمل:</strong> {detailsApp.opening_hours}
              </div>
              <div>
                <strong>الهاتف:</strong>{" "}
                <span dir="ltr">{detailsApp.contact_phone}</span>
              </div>
              <div className="md:col-span-2">
                <strong>الدافع:</strong> {detailsApp.motivation}
              </div>
              <div>
                <strong>الحالة:</strong> {STATUS_LABELS[detailsApp.status]}
              </div>
              <div>
                <strong>تاريخ التقديم:</strong>{" "}
                {new Date(detailsApp.applied_at).toLocaleString()}
              </div>
              <div>
                <strong>صورة المحل:</strong>
                <br />
                {detailsApp.store_image && (
                  <img
                    src={detailsApp.store_image.url}
                    alt="store"
                    className="mt-1 rounded shadow w-32 h-32 object-cover"
                  />
                )}
              </div>
              <div>
                <strong>سجل تجاري:</strong>
                <br />
                {detailsApp.commerce_register && (
                  <img
                    src={detailsApp.commerce_register.url}
                    alt="register"
                    className="mt-1 rounded shadow w-32 h-32 object-cover"
                  />
                )}
              </div>
              <div>
                <strong>بطاقة الهوية:</strong>
                <br />
                {detailsApp.id_card && (
                  <img
                    src={detailsApp.id_card.url}
                    alt="id card"
                    className="mt-1 rounded shadow w-32 h-32 object-cover"
                  />
                )}
              </div>
            </div>
            <div className="flex justify-end gap-2 mt-6">
              <button
                className="btn-secondary"
                onClick={() => setDetailsApp(null)}
              >
                إغلاق
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EmploymentTab;
