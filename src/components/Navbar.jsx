import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav
      className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-100"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group h-20">
            <img src={logo} alt="Logo" className="w-32 h-32 object-contain mx-auto" />
          </Link>
          
          {/* New Links in the center */}
          <div className="flex gap-12 items-center text-lg">
            <a href="#features" className="text-gray-700 hover:text-red-700 focus:text-red-700 active:text-red-700">الميزات</a>
            <a href="#how" className="text-gray-700 hover:text-red-700 focus:text-red-700 active:text-red-700">كيف يعمل</a>
            <a href="#track" className="text-gray-700 hover:text-red-700 focus:text-red-700 active:text-red-700">تتبع الطرد</a>
            <a href="#testimonials" className="text-gray-700 hover:text-red-700 focus:text-red-700 active:text-red-700">آراء العملاء</a>
          </div>

          {/* Navigation Items */}
          <div className="flex gap-4 items-center">
            {!user && (
              <>
                <Link to="/vendor/login" className="bg-gradient-to-r from-red-600 to-pink-600 text-white btn-primary gap-2">
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  تسجيل الدخول
                </Link>
                <Link to="/vendor/register" className="bg-gradient-to-r from-red-100 to-pink-100 text-red-700 btn-secondary gap-2">
                  <UserPlusIcon className="w-5 h-5" />
                  انضم إلينا
                </Link>
              </>
            )}

            {user && (
              <div className="flex items-center gap-4">
                {/* Dashboard Link with Role Icon */}
                <div className="flex items-center gap-2">
                  {user.role === "admin" && (
                    <Link
                      to="/admin/dashboard"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-semibold rounded-xl hover:from-pink-100 hover:to-pink-200 transition-all duration-200"
                    >
                      <UserCircleIcon className="w-5 h-5" />
                      لوحة الإدارة
                    </Link>
                  )}
                  {user.role === "vendor" && (
                    <Link
                      to="/vendor/dashboard"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-700 font-semibold rounded-xl hover:from-secondary-200 hover:to-secondary-300 transition-all duration-200"
                    >
                      <BuildingStorefrontIcon className="w-5 h-5" />
                      لوحة البائع
                    </Link>
                  )}
                  {user.role === "relay" && (
                    <Link
                      to="/relay/dashboard"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-semibold rounded-xl hover:from-primary-200 hover:to-primary-300 transition-all duration-200"
                    >
                      <TruckIcon className="w-5 h-5" />
                      لوحة نقطة الترحيل
                    </Link>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pr-4 border-r border-neutral-200">
                  <div className="flex flex-col text-left">
                    <span className="text-sm font-semibold text-red-700">
                      {user.name}
                    </span>
                    <span className="text-xs text-pink-600 capitalize">
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 bg-gradient-to-r from-red-600 to-pink-600 text-white hover:from-pink-600 hover:to-red-600 rounded-xl transition-all duration-200 group flex items-center gap-2"
                    title="تسجيل الخروج"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 group-hover:-rotate-12 transition-transform duration-200" />
                    <span className="hidden sm:inline font-medium">تسجيل الخروج</span>
                  </button>
                </div>
              </div>
            )}
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;
