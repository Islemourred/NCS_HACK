import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import {
  ArrowRightOnRectangleIcon,
  UserPlusIcon,
  TruckIcon,
  ChevronDownIcon,
  BuildingStorefrontIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white/95 backdrop-blur-md shadow-soft sticky top-0 z-50 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-gradient-to-br from-primary-600 to-primary-400 rounded-xl shadow-soft group-hover:shadow-medium transition-all duration-200">
              <TruckIcon className="w-7 h-7 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-bold text-primary-500">
                ColisPoint
              </span>
              <span className="text-xs font-medium text-primary-700 -mt-1">
                DZ
              </span>
            </div>
          </Link>

          {/* Navigation Items */}
          <div className="flex gap-4 items-center">
            {!user && (
              <>
                <Link to="/vendor/login" className="btn-primary gap-2">
                  <ArrowRightOnRectangleIcon className="w-5 h-5" />
                  Sign In
                </Link>
                <Link to="/vendor/register" className="btn-secondary gap-2">
                  <UserPlusIcon className="w-5 h-5" />
                  Join Us
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
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-neutral-100 to-neutral-200 text-neutral-700 font-semibold rounded-xl hover:from-neutral-200 hover:to-neutral-300 transition-all duration-200"
                    >
                      <UserCircleIcon className="w-5 h-5" />
                      Admin Panel
                    </Link>
                  )}
                  {user.role === "vendor" && (
                    <Link
                      to="/vendor/dashboard"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-secondary-100 to-secondary-200 text-secondary-700 font-semibold rounded-xl hover:from-secondary-200 hover:to-secondary-300 transition-all duration-200"
                    >
                      <BuildingStorefrontIcon className="w-5 h-5" />
                      Vendor Dashboard
                    </Link>
                  )}
                  {user.role === "relay" && (
                    <Link
                      to="/relay/dashboard"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary-100 to-primary-200 text-primary-700 font-semibold rounded-xl hover:from-primary-200 hover:to-primary-300 transition-all duration-200"
                    >
                      <TruckIcon className="w-5 h-5" />
                      Relay Dashboard
                    </Link>
                  )}
                </div>

                {/* User Info */}
                <div className="flex items-center gap-3 pl-4 border-l border-neutral-200">
                  <div className="flex flex-col text-right">
                    <span className="text-sm font-semibold text-neutral-700">
                      {user.name}
                    </span>
                    <span className="text-xs text-neutral-500 capitalize">
                      {user.role}
                    </span>
                  </div>
                  <button
                    onClick={handleLogout}
                    className="p-2 bg-neutral-100 hover:bg-error-100 text-neutral-600 hover:text-error-600 rounded-xl transition-all duration-200 group"
                    title="Logout"
                  >
                    <ArrowRightOnRectangleIcon className="w-5 h-5 group-hover:rotate-12 transition-transform duration-200" />
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
