import React, { useState } from "react";

const VendorSettingsDelivery = () => {
  const [sameDay, setSameDay] = useState(false);
  const [weekend, setWeekend] = useState(true);
  const [courier, setCourier] = useState("DHL");

  return (
    <div className="bg-white rounded-xl shadow-soft p-4">
      <h4 className="text-lg font-bold mb-4">إعدادات التوصيل</h4>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={sameDay}
            onChange={() => setSameDay((v) => !v)}
            className="form-checkbox h-5 w-5 text-primary-600"
          />
          <span>تفعيل التوصيل في نفس اليوم</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={weekend}
            onChange={() => setWeekend((v) => !v)}
            className="form-checkbox h-5 w-5 text-primary-600"
          />
          <span>السماح بالتوصيل في عطلة نهاية الأسبوع</span>
        </label>
        <div>
          <label className="block mb-1">شركة التوصيل المفضلة</label>
          <select
            value={courier}
            onChange={(e) => setCourier(e.target.value)}
            className="input-field w-full"
          >
            <option value="DHL">DHL</option>
            <option value="FedEx">FedEx</option>
            <option value="ARAMEX">ARAMEX</option>
            <option value="البريد الجزائري">البريد الجزائري</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default VendorSettingsDelivery; 