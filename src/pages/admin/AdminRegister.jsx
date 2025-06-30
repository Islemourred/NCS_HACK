import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserIcon, EnvelopeIcon, KeyIcon, CheckCircleIcon, TruckIcon } from "@heroicons/react/24/outline";

const AdminRegister = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
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
      setTimeout(() => navigate("/admin/login"), 1200);
    }, 1000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-primary-light font-sans">
      <div className="w-full max-w-4xl bg-white rounded-3xl shadow-2xl flex overflow-hidden border border-gray-100">
        {/* Left: Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col justify-center">
          <div className="mb-8 flex items-center gap-2">
            <span className="text-2xl font-extrabold text-primary flex items-center gap-2">
              <TruckIcon className="w-7 h-7 text-primary" />
              <span className="text-2xl font-bold gradient-text">ColisPoint</span>
              <span className="text-xs font-medium text-primary-700 -mt-1">DZ</span>
            </span>
          </div>
          <h2 className="text-3xl font-bold mb-2">Create Admin Account</h2>
          <p className="text-gray-500 mb-8">Sign up as an admin to manage the ColisPoint DZ platform.</p>
          <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
            <div className="relative">
              <UserIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="name" type="text" placeholder="Name" value={form.name} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" required />
            </div>
            <div className="relative">
              <EnvelopeIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" required />
            </div>
            <div className="relative">
              <KeyIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-primary" />
              <input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} className="pl-10 pr-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary w-full font-medium" required />
            </div>
            <button type="submit" className="w-full border-2 border-accent text-accent font-semibold py-2 rounded hover:bg-accent hover:text-white transition text-lg flex items-center justify-center gap-2" disabled={loading}>
              {loading ? "Registering..." : "Register"}
            </button>
          </form>
          {success && <div className="flex flex-col items-center gap-2 text-green-600 text-center mt-6"><CheckCircleIcon className="w-7 h-7" />Registration successful! Redirecting...</div>}
        </div>
        {/* Right: Image + Overlay */}
        <div className="hidden md:block w-1/2 relative bg-gray-100">
          <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80" alt="Admin" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="bg-white/70 rounded-xl p-6 max-w-xs text-center shadow-lg">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Admin Registration</h3>
              <p className="text-gray-600 text-sm">Create an admin account to manage users, vendors, and relay points on the ColisPoint DZ platform.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister; 