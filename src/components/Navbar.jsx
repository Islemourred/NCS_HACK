import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  TruckIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import logo from "../assets/logo.png";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate("/");
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className="bg-white/10 backdrop-blur-xl shadow-soft sticky top-0 z-50 border-b border-white/20"
      dir="rtl"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center group h-20" onClick={closeMobileMenu}>
            <img src={logo} alt="Logo" className="w-24 h-24 sm:w-32 sm:h-32 object-contain mx-auto" />
          </Link>
          
          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex gap-12 items-center text-lg">
            <a href="#features" className="text-gray-800 hover:text-red-600 focus:text-red-600 active:text-red-600 transition-colors duration-200">الميزات</a>
            <a href="#how" className="text-gray-800 hover:text-red-600 focus:text-red-600 active:text-red-600 transition-colors duration-200">كيف يعمل</a>
            <a href="#track" className="text-gray-800 hover:text-red-600 focus:text-red-600 active:text-red-600 transition-colors duration-200">تتبع الطرد</a>
            <a href="#testimonials" className="text-gray-800 hover:text-red-600 focus:text-red-600 active:text-red-600 transition-colors duration-200">آراء العملاء</a>
          </div>

          {/* Desktop Navigation Items */}
          <div className="hidden lg:flex gap-4 items-center">
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
                <div className="flex items-center gap-3 pr-4 border-r border-white/20">
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

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-lg text-gray-800 hover:text-red-600 hover:bg-white/20 transition-colors duration-200"
            >
              {isMobileMenuOpen ? (
                <XMarkIcon className="w-6 h-6" />
              ) : (
                <Bars3Icon className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-white/20 bg-white/10 backdrop-blur-xl">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Mobile Navigation Links */}
              <div className="space-y-2 mb-6">
                <a 
                  href="#features" 
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  الميزات
                </a>
                <a 
                  href="#how" 
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  كيف يعمل
                </a>
                <a 
                  href="#track" 
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  تتبع الطرد
                </a>
                <a 
                  href="#testimonials" 
                  className="block px-3 py-2 text-base font-medium text-gray-800 hover:text-red-600 hover:bg-white/20 rounded-lg transition-colors duration-200"
                  onClick={closeMobileMenu}
                >
                  آراء العملاء
                </a>
              </div>

              {/* Mobile Auth Buttons */}
              {!user && (
                <div className="space-y-3 border-t border-white/20 pt-4">
                  <Link 
                    to="/vendor/login" 
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-600 to-pink-600 text-white px-4 py-3 rounded-xl font-semibold hover:from-red-700 hover:to-pink-700 transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    تسجيل الدخول
                  </Link>
                  <Link 
                    to="/vendor/register" 
                    className="flex items-center justify-center gap-2 w-full bg-gradient-to-r from-red-100 to-pink-100 text-red-700 px-4 py-3 rounded-xl font-semibold border-2 border-red-200 hover:from-red-200 hover:to-pink-200 transition-all duration-200"
                    onClick={closeMobileMenu}
                  >
                    <UserPlusIcon className="w-5 h-5" />
                    انضم إلينا
                  </Link>
                </div>
              )}

              {/* Mobile User Menu */}
              {user && (
                <div className="space-y-3 border-t border-white/20 pt-4">
                  {/* User Info */}
                  <div className="px-3 py-2 bg-white/10 rounded-lg">
                    <div className="flex flex-col">
                      <span className="text-sm font-semibold text-red-700">
                        {user.name}
                      </span>
                      <span className="text-xs text-pink-600 capitalize">
                        {user.role}
                      </span>
                    </div>
                  </div>

                  {/* Dashboard Link */}
                  <div className="space-y-2">
                    {user.role === "admin" && (
                      <Link
                        to="/admin/dashboard"
                        className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-100 to-pink-100 text-red-700 font-semibold rounded-xl hover:from-pink-100 hover:to-pink-200 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        <UserCircleIcon className="w-5 h-5" />
                        لوحة الإدارة
                      </Link>
                    )}
                    {user.role === "vendor" && (
                      <Link
                        to="/vendor/dashboard"
                        className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-700 font-semibold rounded-xl hover:from-secondary-200 hover:to-secondary-300 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        <BuildingStorefrontIcon className="w-5 h-5" />
                        لوحة البائع
                      </Link>
                    )}
                    {user.role === "relay" && (
                      <Link
                        to="/relay/dashboard"
                        className="flex items-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-semibold rounded-xl hover:from-primary-200 hover:to-primary-300 transition-all duration-200"
                        onClick={closeMobileMenu}
                      >
                        <TruckIcon className="w-5 h-5" />
                        لوحة نقطة الترحيل
                      </Link>
                    )}
                  </div>

                  {/* Logout Button */}
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:from-pink-600 hover:to-red-600 transition-all duration-200"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5" />
                    تسجيل الخروج
                  </button>
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
