import React, { useState } from "react";

const VendorProfileForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <form className="bg-white rounded-xl shadow-soft p-4 space-y-4">
      <h4 className="text-lg font-bold mb-2">معلومات البائع</h4>
      <div>
        <label className="block mb-1">اسم المتجر</label>
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="أدخل اسم المتجر"
        />
      </div>
      <div>
        <label className="block mb-1">البريد الإلكتروني</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="example@email.com"
        />
      </div>
      <div>
        <label className="block mb-1">رقم الهاتف</label>
        <input
          type="text"
          name="phone"
          value={form.phone}
          onChange={handleChange}
          className="input-field w-full"
          placeholder="أدخل رقم الهاتف"
        />
      </div>
    </form>
  );
};

export default VendorProfileForm; 