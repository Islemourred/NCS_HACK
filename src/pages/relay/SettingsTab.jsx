import React from "react";

const SettingsTab = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-neutral-800">الإعدادات</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          إعدادات الإشعارات
        </h4>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <span className="text-neutral-700">إشعارات الطرود الجديدة</span>
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-700">تذكير بالطرود المتأخرة</span>
            <input
              type="checkbox"
              className="w-4 h-4 text-primary-600"
              defaultChecked
            />
          </div>
          <div className="flex items-center justify-between">
            <span className="text-neutral-700">إشعارات SMS</span>
            <input type="checkbox" className="w-4 h-4 text-primary-600" />
          </div>
        </div>
      </div>
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          إعدادات التشغيل
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              الحد الأقصى للطرود اليومية
            </label>
            <input type="number" value="50" className="input-field" />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              مدة التخزين القصوى (أيام)
            </label>
            <input type="number" value="7" className="input-field" />
          </div>
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              id="autoAccept"
              className="w-4 h-4 text-primary-600"
            />
            <label htmlFor="autoAccept" className="text-sm text-neutral-700">
              قبول الطرود تلقائياً
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
