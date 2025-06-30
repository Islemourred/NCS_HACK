import React, { useState } from "react";

const VendorSettingsNotifications = () => {
  const [emailNotifications, setEmailNotifications] = useState(true);
  const [smsNotifications, setSmsNotifications] = useState(false);

  return (
    <div className="bg-white rounded-xl shadow-soft p-4">
      <h4 className="text-lg font-bold mb-4">إعدادات الإشعارات</h4>
      <div className="flex flex-col gap-4">
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={emailNotifications}
            onChange={() => setEmailNotifications((v) => !v)}
            className="form-checkbox h-5 w-5 text-primary-600"
          />
          <span>تلقي الإشعارات عبر البريد الإلكتروني</span>
        </label>
        <label className="flex items-center gap-3">
          <input
            type="checkbox"
            checked={smsNotifications}
            onChange={() => setSmsNotifications((v) => !v)}
            className="form-checkbox h-5 w-5 text-primary-600"
          />
          <span>تلقي الإشعارات عبر الرسائل النصية (SMS)</span>
        </label>
      </div>
    </div>
  );
};

export default VendorSettingsNotifications; 