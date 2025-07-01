import React from "react";
const SettingsTab = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-neutral-800">إعدادات النظام</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          إعدادات عامة
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              اسم المنصة
            </label>
            <input type="text" value="ColisPoint DZ" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              البريد الإلكتروني للدعم
            </label>
            <input
              type="email"
              value="support@colispointdz.com"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              رقم هاتف الدعم
            </label>
            <input
              type="tel"
              value="+213 555 123 456"
              className="input-field"
            />
          </div>
        </div>
      </div>
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          إعدادات التسليم
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              الحد الأقصى لأيام التخزين
            </label>
            <input type="number" value="7" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              رسوم التسليم الأساسية (د.ج)
            </label>
            <input type="number" value="200" className="input-field" />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="autoNotifications"
              className="w-4 h-4 text-primary-600"
            />
            <label
              htmlFor="autoNotifications"
              className="text-sm text-neutral-700"
            >
              تفعيل الإشعارات التلقائية
            </label>
          </div>
        </div>
      </div>
    </div>
    <div className="flex justify-end gap-4">
      <button className="btn-secondary">إلغاء</button>
      <button className="btn-primary">حفظ التغييرات</button>
    </div>
  </div>
);
export default SettingsTab;
