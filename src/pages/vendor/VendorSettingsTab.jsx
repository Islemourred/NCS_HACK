import React from "react";
import VendorSettingsNotifications from "../../components/vendor/VendorSettingsNotifications";
import VendorSettingsDelivery from "../../components/vendor/VendorSettingsDelivery";

const VendorSettingsTab = () => (
  <div className="space-y-6">
    <h3 className="text-2xl font-bold text-neutral-800">الإعدادات</h3>
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      <VendorSettingsNotifications />
      <VendorSettingsDelivery />
    </div>
    <div className="flex justify-end gap-4">
      <button className="btn-secondary">إلغاء</button>
      <button className="btn-primary">حفظ التغييرات</button>
    </div>
  </div>
);

export default VendorSettingsTab; 