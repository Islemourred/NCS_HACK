import React, { useState } from "react";
import {
  UserGroupIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  ChartBarIcon,
  CogIcon,
  BellIcon,
  MagnifyingGlassIcon,
  EyeIcon,
  PencilIcon,
  TrashIcon,
  PlusIcon,
  DocumentTextIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ClockIcon,
  CheckCircleIcon,
  XCircleIcon,
  ExclamationTriangleIcon,
} from "@heroicons/react/24/outline";
import OverviewTab from "./OverviewTab";
import OrdersTab from "./OrdersTab";
import RelaysTab from "./RelaysTab";
import EmploymentTab from "./EmploymentTab";
import UsersTab from "./UsersTab";
import SettingsTab from "./SettingsTab";

const mockData = {
  stats: [
    {
      title: "إجمالي المستخدمين",
      value: "1,247",
      icon: UserGroupIcon,
      color: "primary",
      change: "+12%",
    },
    {
      title: "نقاط الترحيل النشطة",
      value: "89",
      icon: BuildingStorefrontIcon,
      color: "secondary",
      change: "+5%",
    },
    {
      title: "الطلبات اليومية",
      value: "342",
      icon: TruckIcon,
      color: "success",
      change: "+18%",
    },
    {
      title: "الإيرادات الشهرية",
      value: "45,320 د.ج",
      icon: CurrencyDollarIcon,
      color: "warning",
      change: "+8%",
    },
  ],
  recentOrders: [
    {
      id: "DZ001234",
      client: "أحمد بن محمد",
      relay: "متجر الأمين",
      status: "delivered",
      amount: "2,500 د.ج",
    },
    {
      id: "DZ001235",
      client: "فاطمة الزهراء",
      relay: "سوبر ماركت النور",
      status: "pending",
      amount: "1,800 د.ج",
    },
    {
      id: "DZ001236",
      client: "يوسف العلي",
      relay: "مكتبة المعرفة",
      status: "shipped",
      amount: "3,200 د.ج",
    },
    {
      id: "DZ001237",
      client: "زينب حسني",
      relay: "صيدلية الشفاء",
      status: "cancelled",
      amount: "950 د.ج",
    },
  ],
  relayPoints: [
    {
      id: 1,
      name: "متجر الأمين",
      location: "الجزائر العاصمة",
      orders: 45,
      status: "active",
    },
    {
      id: 2,
      name: "سوبر ماركت النور",
      location: "وهران",
      orders: 32,
      status: "active",
    },
    {
      id: 3,
      name: "مكتبة المعرفة",
      location: "قسنطينة",
      orders: 28,
      status: "inactive",
    },
    {
      id: 4,
      name: "صيدلية الشفاء",
      location: "عنابة",
      orders: 19,
      status: "active",
    },
  ],
};

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("overview");
  // Employment posts state (mock logic)
  const [employmentPosts, setEmploymentPosts] = useState([
    {
      id: 1,
      title: "فتح نقطة ترحيل جديدة",
      description: "نبحث عن مشغل نقطة ترحيل في الجزائر العاصمة...",
      place: "الجزائر العاصمة",
      requirements: "خبرة في التوصيل، سجل تجاري، بطاقة هوية...",
      space: "المساحة المطلوبة: 100 متر مربع",
      status: "ACTIVE",
    },
  ]);
  const [newPost, setNewPost] = useState({
    title: "",
    description: "",
    place: "",
    requirements: "",
    space_required: "",
  });
  const handleAddPost = (e) => {
    e.preventDefault();
    if (!newPost.title || !newPost.description || !newPost.place) return;
    setEmploymentPosts([
      ...employmentPosts,
      {
        ...newPost,
        id: Date.now(),
        status: "ACTIVE",
      },
    ]);
    setNewPost({
      title: "",
      description: "",
      place: "",
      requirements: "",
      space_required: "",
    });
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "delivered":
        return "success";
      case "shipped":
        return "primary";
      case "pending":
        return "warning";
      case "cancelled":
        return "error";
      case "active":
        return "success";
      case "inactive":
        return "error";
      default:
        return "neutral";
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case "delivered":
        return "تم التسليم";
      case "shipped":
        return "تم الشحن";
      case "pending":
        return "في الانتظار";
      case "cancelled":
        return "ملغي";
      case "active":
        return "نشط";
      case "inactive":
        return "غير نشط";
      default:
        return status;
    }
  };

  return (
    <div
      className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 p-6"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-neutral-800 mb-2">
              لوحة تحكم الإدارة
            </h1>
            <p className="text-neutral-600">
              أهلاً بك، إدارة! هنا يمكنك إدارة المستخدمين ونقاط الترحيل والطلبات
              ومراقبة التحليلات.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-3 bg-white rounded-xl shadow-soft hover:shadow-medium transition-all duration-200 relative">
              <BellIcon className="w-6 h-6 text-neutral-600" />
              <span className="absolute -top-1 -right-1 w-3 h-3 bg-error-500 rounded-full"></span>
            </button>
            <button className="btn-primary gap-2">
              <PlusIcon className="w-5 h-5" />
              إضافة جديد
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex gap-2 mb-8 overflow-x-auto">
          {[
            { id: "overview", label: "نظرة عامة", icon: ChartBarIcon },
            { id: "orders", label: "الطلبات", icon: DocumentTextIcon },
            {
              id: "relays",
              label: "نقاط الترحيل",
              icon: BuildingStorefrontIcon,
            },
            { id: "employment", label: "طلبات نقاط الترحيل", icon: PlusIcon },
            { id: "users", label: "المستخدمين", icon: UserGroupIcon },
            { id: "settings", label: "الإعدادات", icon: CogIcon },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-200 whitespace-nowrap ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-primary-500 to-secondary-500 text-white shadow-medium"
                  : "bg-white text-neutral-700 hover:bg-primary-50 shadow-soft"
              }`}
            >
              <tab.icon className="w-5 h-5" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && <OverviewTab />}
        {/* Relay Points Tab */}
        {activeTab === "relays" && <RelaysTab />}
        {/* Orders Tab */}
        {activeTab === "orders" && <OrdersTab />}
        {/* Employment Posts Tab */}
        {activeTab === "employment" && (
          <EmploymentTab
            employmentPosts={employmentPosts}
            newPost={newPost}
            setNewPost={setNewPost}
            handleAddPost={handleAddPost}
            getStatusColor={getStatusColor}
            getStatusText={getStatusText}
          />
        )}
        {/* Users Tab */}
        {activeTab === "users" && <UsersTab />}
        {/* Settings Tab */}
        {activeTab === "settings" && <SettingsTab />}
      </div>
    </div>
  );
};

export default AdminDashboard;
