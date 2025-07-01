import React, { useEffect, useState } from "react";
import { fetchAllUsers } from "../../utils/api_users";

const UsersTab = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UsersTab;
