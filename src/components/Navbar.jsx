import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import { ArrowRightOnRectangleIcon, UserPlusIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="text-xl font-extrabold text-primary tracking-tight">
            ColisPoint DZ
          </Link>
          <div className="flex gap-3 items-center">
            {!user && (
              <>
                <Link to="/vendor/login" className="inline-flex items-center gap-2 px-4 py-2 rounded font-semibold bg-primary text-white hover:bg-primary-dark transition border border-primary shadow-sm">
                  <ArrowRightOnRectangleIcon className="w-5 h-5" /> Sign In
                </Link>
                <Link to="/vendor/register" className="inline-flex items-center gap-2 px-4 py-2 rounded font-semibold border-2 border-primary text-primary bg-white hover:bg-primary-light hover:text-white transition">
                  <UserPlusIcon className="w-5 h-5" /> Sign Up
                </Link>
              </>
            )}
            {user && (
              <>
                {user.role === "admin" && <Link to="/admin/dashboard" className="text-primary font-semibold">Admin Dashboard</Link>}
                {user.role === "vendor" && <Link to="/vendor/dashboard" className="text-primary font-semibold">Vendor Dashboard</Link>}
                {user.role === "relay" && <Link to="/relay/dashboard" className="text-primary font-semibold">Relay Dashboard</Link>}
                <span className="text-gray-500 text-sm ml-2">{user.name} ({user.role})</span>
                <button onClick={handleLogout} className="ml-4 bg-gray-100 hover:bg-gray-200 text-gray-700 px-3 py-1 rounded transition font-semibold">Logout</button>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 