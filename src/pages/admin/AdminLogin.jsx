import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

const roles = [
  { value: "admin", label: "Admin" },
  { value: "vendor", label: "Vendor" },
  { value: "relay", label: "Relay Point Operator" },
];

const dashboardRoute = {
  admin: "/admin/dashboard",
  vendor: "/vendor/dashboard",
  relay: "/relay/dashboard",
};

const AdminLogin = () => {
  const { login, loading, error } = useAuth();
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");
  const [role, setRole] = useState("admin");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password, role);
    if (user) {
      navigate(dashboardRoute[role]);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] bg-gradient-to-br from-blue-50 to-white">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h2 className="text-2xl font-bold text-blue-700 mb-6 text-center">Login</h2>
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
          <select value={role} onChange={e => setRole(e.target.value)} className="px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">
            {roles.map(r => <option key={r.value} value={r.value}>{r.label}</option>)}
          </select>
          <button type="submit" className="bg-blue-600 text-white py-2 rounded font-semibold hover:bg-blue-700 transition" disabled={loading}>{loading ? "Logging in..." : "Login"}</button>
          {error && <div className="text-red-500 text-sm text-center">{error}</div>}
        </form>
        <div className="text-xs text-gray-400 mt-4 text-center">Use <b>test@test.com</b> / <b>123123</b> for all roles.</div>
      </div>
    </div>
  );
};

export default AdminLogin; 