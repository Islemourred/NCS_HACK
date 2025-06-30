import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { ArrowRightOnRectangleIcon, EnvelopeIcon, KeyIcon } from "@heroicons/react/24/outline";

const roles = [
  { value: "vendor", label: "Seller" },
  { value: "relay", label: "Relay Point" },
];

const dashboardRoute = {
  vendor: "/vendor/dashboard",
  relay: "/relay/dashboard",
};

function getInitialRole(pathname) {
  if (pathname.includes("relay")) return "relay";
  return "vendor";
}

const AuthLogin = () => {
  const { login, loading, error } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState(getInitialRole(location.pathname));
  const [email, setEmail] = useState("test@test.com");
  const [password, setPassword] = useState("123123");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = await login(email, password, role);
    if (user) {
      navigate(dashboardRoute[role]);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light font-sans">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex overflow-hidden border border-gray-100">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-primary">ColisPoint <span className="text-accent">DZ</span></span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Welcome Back!</h2>
          <p className="text-gray-500 mb-8">Sign in to your account to access your dashboard.</p>
          <div className="flex mb-8 rounded overflow-hidden bg-gray-50">
            {roles.map(r => (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className={`flex-1 py-2 font-semibold transition text-lg flex items-center justify-center gap-2 ${role === r.value ? "bg-primary text-white shadow" : "text-gray-500 bg-gray-50 hover:bg-primary-light hover:text-primary"}`}
                style={{ borderBottom: role === r.value ? '3px solid #2563eb' : '3px solid transparent' }}
              >
                {r.value === "vendor" ? <ArrowRightOnRectangleIcon className="w-5 h-5" /> : <ArrowRightOnRectangleIcon className="w-5 h-5 rotate-180" />} {r.label} Login
              </button>
            ))}
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            <div className="relative">
              <KeyIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            <button type="submit" className="w-full bg-primary text-white py-2 rounded font-semibold hover:bg-primary-dark transition text-lg shadow-md flex items-center justify-center gap-2" disabled={loading}>
              <ArrowRightOnRectangleIcon className="w-5 h-5" /> {loading ? "Logging in..." : "Login"}
            </button>
            {error && <div className="text-red-500 text-sm text-center">{error}</div>}
          </form>
          <div className="text-xs text-gray-400 mt-6 text-center">Use <b>test@test.com</b> / <b>123123</b> for all roles.</div>
        </div>
        {/* Right: Image + Overlay */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Plant" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/70 rounded-xl p-6 max-w-xs text-center shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Efficient, Decentralized Delivery</h3>
              <p className="text-gray-600 text-sm">ColisPoint DZ connects sellers, relay points, and customers for a seamless logistics experience across Algeria.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthLogin; 