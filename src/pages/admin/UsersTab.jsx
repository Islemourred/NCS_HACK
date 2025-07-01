import React, { useEffect, useState, useRef } from "react";
import { fetchAllUsers } from "../../utils/api_users";

const UsersTab = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    id_number: "",
    id_expiry: "",
    verification_status: "PENDING",
    id_card_image: null,
  });
  const [submitting, setSubmitting] = useState(false);
  const fileInputRef = useRef();

  useEffect(() => {
    fetchAllUsers()
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const openModal = (user) => {
    setSelectedUser(user);
    setForm({
      id_number: user.id_number || "",
      id_expiry: user.id_expiry || "",
      verification_status: user.verification_status || "PENDING",
      id_card_image: null,
    });
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
    setSelectedUser(null);
    setForm({
      id_number: "",
      id_expiry: "",
      verification_status: "PENDING",
      id_card_image: null,
    });
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "id_card_image") {
      setForm((f) => ({ ...f, id_card_image: files[0] }));
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    const formData = new FormData();
    formData.append("id_number", form.id_number);
    formData.append("id_expiry", form.id_expiry);
    formData.append("verification_status", form.verification_status);
    if (form.id_card_image)
      formData.append("id_card_image", form.id_card_image);
    try {
      await fetch(
        `http://localhost:8000/users/admin/users/${selectedUser.id}/`,
        {
          method: "PATCH",
          body: formData,
        }
      );
      // Refresh users
      const updated = await fetchAllUsers();
      setUsers(updated);
      closeModal();
    } catch (err) {
      alert("خطأ أثناء التحديث: " + err.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (loading) return <div className="p-6">جاري التحميل...</div>;
  if (error) return <div className="p-6 text-red-500">خطأ: {error}</div>;

  return (
    <div className="p-6">
      <h2 className="text-xl font-bold mb-4">إدارة المستخدمين</h2>
      <table className="min-w-full bg-white border border-gray-200">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">#</th>
            <th className="py-2 px-4 border-b">الاسم</th>
            <th className="py-2 px-4 border-b">رقم الهاتف</th>
            <th className="py-2 px-4 border-b">الدور</th>
            <th className="py-2 px-4 border-b">البريد الإلكتروني</th>
            <th className="py-2 px-4 border-b">التحقق</th>
            <th className="py-2 px-4 border-b">إجراءات</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, idx) => (
            <tr key={user.id || idx}>
              <td className="py-2 px-4 border-b">{idx + 1}</td>
              <td className="py-2 px-4 border-b">
                {user.nom || user.name || "-"}
              </td>
              <td className="py-2 px-4 border-b">
                {user.numero_de_telephone || user.phone || "-"}
              </td>
              <td className="py-2 px-4 border-b">{user.role || "-"}</td>
              <td className="py-2 px-4 border-b">{user.nom + "@gmail.com"}</td>
              <td className="py-2 px-4 border-b">
                {user.verification_status || "PENDING"}
              </td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-2 py-1 rounded"
                  onClick={() => openModal(user)}
                >
                  التحقق من الهوية
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-full max-w-md relative">
            <button
              className="absolute top-2 left-2 text-gray-500"
              onClick={closeModal}
            >
              &times;
            </button>
            <h3 className="text-lg font-bold mb-4">التحقق من هوية المشغل</h3>
            {selectedUser.id_card_image && (
              <div className="mb-4">
                <img
                  src={selectedUser.id_card_image}
                  alt="ID Card"
                  className="w-40 h-28 object-cover border"
                />
                <div className="text-xs text-gray-500 mt-1">الصورة الحالية</div>
              </div>
            )}
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="block mb-1">رقم البطاقة</label>
                <input
                  type="text"
                  name="id_number"
                  value={form.id_number}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1">تاريخ انتهاء البطاقة</label>
                <input
                  type="date"
                  name="id_expiry"
                  value={form.id_expiry}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1">صورة البطاقة</label>
                <input
                  type="file"
                  name="id_card_image"
                  accept="image/*"
                  ref={fileInputRef}
                  onChange={handleChange}
                  className="w-full"
                />
              </div>
              <div className="mb-3">
                <label className="block mb-1">حالة التحقق</label>
                <select
                  name="verification_status"
                  value={form.verification_status}
                  onChange={handleChange}
                  className="border rounded px-2 py-1 w-full"
                >
                  <option value="PENDING">قيد الانتظار</option>
                  <option value="VERIFIED">تم التحقق</option>
                  <option value="REJECTED">مرفوض</option>
                </select>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white px-4 py-2 rounded"
                disabled={submitting}
              >
                {submitting ? "جاري الحفظ..." : "حفظ"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersTab;
