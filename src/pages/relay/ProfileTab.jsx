import React from "react";

const ProfileTab = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-neutral-800">الملف الشخصي</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          معلومات نقطة الترحيل
        </h4>
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              اسم نقطة الترحيل
            </label>
            <input
              type="text"
              value="متجر الأمين للإلكترونيات"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              العنوان
            </label>
            <input
              type="text"
              value="شارع ديدوش مراد، الجزائر العاصمة"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              رقم الهاتف
            </label>
            <input
              type="tel"
              value="+213 555 123 456"
              className="input-field"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-neutral-700 mb-2">
              ساعات العمل
            </label>
            <input type="text" value="09:00 - 19:00" className="input-field" />
          </div>
        </div>
      </div>
      <div className="card p-6">
        <h4 className="text-lg font-bold text-neutral-800 mb-4">
          إحصائيات الأداء
        </h4>
        <div className="space-y-4">
          <div className="flex justify-between items-center p-3 bg-success-50 rounded-lg">
            <span className="text-neutral-700">معدل التسليم الناجح</span>
            <span className="font-bold text-success-600">96.5%</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-primary-50 rounded-lg">
            <span className="text-neutral-700">متوسط وقت التخزين</span>
            <span className="font-bold text-primary-600">2.3 أيام</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-secondary-50 rounded-lg">
            <span className="text-neutral-700">تقييم العملاء</span>
            <span className="font-bold text-secondary-600">4.8/5</span>
          </div>
          <div className="flex justify-between items-center p-3 bg-warning-50 rounded-lg">
            <span className="text-neutral-700">إجمالي الطرود المعالجة</span>
            <span className="font-bold text-warning-600">1,247</span>
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

export default ProfileTab;
