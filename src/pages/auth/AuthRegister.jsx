import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { UserIcon, EnvelopeIcon, KeyIcon, DevicePhoneMobileIcon, MapPinIcon, ClockIcon, CheckCircleIcon } from "@heroicons/react/24/outline";

const roles = [
  { value: "vendor", label: "Seller" },
  { value: "relay", label: "Relay Point" },
];

function getInitialRole(pathname) {
  if (pathname.includes("relay")) return "relay";
  return "vendor";
}

const AuthRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState(getInitialRole(location.pathname));
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    phone: "",
    region: "",
    address: "",
    hours: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = e => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setTimeout(() => navigate(role === "vendor" ? "/vendor/login" : "/relay/login"), 1200);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light font-sans">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex overflow-hidden border border-gray-100">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-primary">ColisPoint <span className="text-accent">DZ</span></span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Create Your Account</h2>
          <p className="text-gray-500 mb-8">Sign up as a Seller or Relay Point to join the decentralized delivery network.</p>
          <div className="flex mb-8 rounded overflow-hidden bg-gray-50">
            {roles.map(r => (
              <button
                key={r.value}
                onClick={() => setRole(r.value)}
                className={`flex-1 py-2 font-semibold transition text-lg flex items-center justify-center gap-2 ${role === r.value ? "bg-primary text-white shadow" : "text-gray-500 bg-gray-50 hover:bg-primary-light hover:text-primary"}`}
                style={{ borderBottom: role === r.value ? '3px solid #2563eb' : '3px solid transparent' }}
              >
                {r.value === "vendor" ? <UserIcon className="w-5 h-5" /> : <MapPinIcon className="w-5 h-5" />} {r.label} Sign Up
              </button>
            ))}
          </div>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            <div className="relative">
              <KeyIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            <div className="relative">
              <DevicePhoneMobileIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="phone" type="text" placeholder="Phone" value={form.phone} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
            </div>
            {role === "vendor" && (
              <div className="relative">
                <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                <input name="region" type="text" placeholder="Region (Wilaya)" value={form.region} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
              </div>
            )}
            {role === "relay" && (
              <>
                <div className="relative">
                  <MapPinIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                  <input name="address" type="text" placeholder="Address" value={form.address} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
                </div>
                <div className="relative">
                  <ClockIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
                  <input name="hours" type="text" placeholder="Opening Hours (e.g. 09:00-19:00)" value={form.hours} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" />
                </div>
              </>
            )}
            <button type="submit" className="w-full border-2 border-accent text-accent font-semibold py-2 rounded hover:bg-accent hover:text-white transition text-lg flex items-center justify-center gap-2" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          {success && <div className="flex flex-col items-center gap-2 text-green-600 text-center mt-6"><CheckCircleIcon className="w-7 h-7" />Registration successful! Redirecting...</div>}
        </div>
        {/* Right: Image + Overlay */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Plant" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/70 rounded-xl p-6 max-w-xs text-center shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Join the ColisPoint DZ Network</h3>
              <p className="text-gray-600 text-sm">Empower your business or shop as a relay point, or start shipping as a seller. Decentralized, efficient, and community-driven.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister; 