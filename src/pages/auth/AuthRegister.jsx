import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowRightOnRectangleIcon,
  EnvelopeIcon,
  KeyIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  EyeIcon,
  EyeSlashIcon,
  UserIcon,
  DevicePhoneMobileIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../../assets/logo.png";
import { register as apiRegister } from "../../utils/api_users";

const roles = [
  { value: "VENDOR", label: "بائع", icon: BuildingStorefrontIcon },
  { value: "RELAY_OPERATOR", label: "نقطة ترحيل", icon: TruckIcon },
];

function getInitialRole(pathname) {
  if (pathname.includes("relay")) return "RELAY_OPERATOR";
  else if (pathname.includes("vendor")) return "VENDOR";
  else return "ADMIN";
}

const AuthRegister = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [role, setRole] = useState(getInitialRole(location.pathname));
  const [form, setForm] = useState({
    nom: "",
    prenom: "",
    password: "",
    phone: "",
    role: role,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    try {
      // Map form fields to backend expected fields
      const payload = {
        nom: form.nom,
        prenom: form.prenom,
        password: form.password,
        numero_de_telephone: form.phone,
        role: role,
      };
      await apiRegister(payload);
      setLoading(false);
      setSuccess(true);
      setTimeout(
        () => navigate(role === "VENDOR" ? "/vendor/login" : "/relay/login"),
        1200
      );
    } catch (err) {
      setLoading(false);
      alert(err.message);
    }
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-secondary-50 p-4"
      dir="rtl"
    >
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-strong flex overflow-hidden border border-neutral-100">
        {/* Left: Form */}
        <div className="w-full lg:w-1/2 p-12 flex flex-col justify-center">
          {/* Logo */}
          <div className="flex items-center justify-center mb-8">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain" />
          </div>

          <h2 className="text-4xl font-bold text-neutral-800 mb-2">
            إنشاء حسابك
          </h2>
          <p className="text-neutral-600 mb-8 text-lg">
            سجل كبائع أو نقطة ترحيل للانضمام إلى شبكة التوصيل اللامركزية.
          </p>

          {/* Role Selection */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            {roles.map((r) => {
              const IconComponent = r.icon;
              return (
                <button
                  key={r.value}
                  onClick={() => setRole(r.value)}
                  className={`p-4 rounded-xl font-semibold transition-all duration-200 flex flex-col items-center gap-2 border-2 ${
                    role === r.value
                      ? "bg-gradient-to-br from-primary-500 to-secondary-500 text-white border-primary-300 shadow-medium"
                      : "bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-primary-300 hover:bg-primary-50"
                  }`}
                >
                  <IconComponent className="w-6 h-6" />
                  <span className="text-sm">{r.label}</span>
                </button>
              );
            })}
          </div>

          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Name Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                الاسم
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-primary-500" />
                <input
                  name="nom"
                  type="text"
                  placeholder="أدخل اسمك"
                  value={form.nom}
                  onChange={handleChange}
                  className="input-field pr-12"
                  required
                />
              </div>
            </div>
            <div className="relative">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                اللقب
              </label>
              <div className="relative">
                <UserIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-primary-500" />
                <input
                  name="prenom"
                  type="text"
                  placeholder="أدخل اللقب"
                  value={form.prenom}
                  onChange={handleChange}
                  className="input-field pr-12"
                  required
                />
              </div>
            </div>
            {/* Password Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                كلمة المرور
              </label>
              <div className="relative">
                <KeyIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-primary-500" />
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="أدخل كلمة المرور"
                  value={form.password}
                  onChange={handleChange}
                  className="input-field pr-12 pl-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-primary-500 transition-colors"
                >
                  {showPassword ? (
                    <EyeSlashIcon className="w-5 h-5" />
                  ) : (
                    <EyeIcon className="w-5 h-5" />
                  )}
                </button>
              </div>
            </div>
            {/* Phone Input */}
            <div className="relative">
              <label className="block text-sm font-semibold text-neutral-700 mb-2">
                رقم الهاتف
              </label>
              <div className="relative">
                <DevicePhoneMobileIcon className="w-5 h-5 absolute right-4 top-1/2 -translate-y-1/2 text-primary-500" />
                <input
                  name="phone"
                  type="text"
                  placeholder="أدخل رقم هاتفك"
                  value={form.phone}
                  onChange={handleChange}
                  className="input-field pr-12"
                  required
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="btn-primary w-full text-lg py-4"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  جاري التسجيل...
                </div>
              ) : (
                <>
                  <ArrowRightOnRectangleIcon className="w-6 h-6" />
                  تسجيل
                </>
              )}
            </button>
          </form>
          {success && (
            <div className="flex flex-col items-center gap-2 text-success-600 text-center mt-6">
              <CheckCircleIcon className="w-7 h-7" />
              تم التسجيل بنجاح! جاري التوجيه...
            </div>
          )}
        </div>
        {/* Right: Image + Overlay */}
        <div className="hidden lg:block w-1/2 relative bg-gradient-to-br from-primary-100 to-secondary-100">
          <img
            src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
            alt="Delivery logistics"
            className="absolute inset-0 w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-secondary-600/20 flex items-center justify-center">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 max-w-sm mx-8 shadow-strong">
              <h3 className="text-2xl font-bold text-neutral-800 mb-4">
                منصة لوجستية ذكية
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                انضم إلى شبكة التوصيل الثورية في ColisPoint DZ. تواصل مع
                العملاء، قلل من التسليمات الفاشلة، وطور عملك بحلولنا اللوجستية
                اللامركزية.
              </p>
              <div className="flex items-center gap-4 mt-6">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-success-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">
                    آمن
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-primary-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">
                    فعال
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-secondary-500 rounded-full"></div>
                  <span className="text-sm font-medium text-neutral-700">
                    موثوق
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthRegister;
