import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import RelayDashboard from "./pages/relay/RelayDashboard";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import { AuthProvider, useAuth } from "./context/AuthContext";

function PrivateRoute({ children, role }) {
  const { user } = useAuth();
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Admin */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute role="admin">
            <AdminDashboard />
          </PrivateRoute>
        }
      />
      {/* Vendor & Relay Auth */}
      <Route path="/vendor/login" element={<AuthLogin />} />
      <Route path="/relay/login" element={<AuthLogin />} />
      <Route path="/vendor/register" element={<AuthRegister />} />
      <Route path="/relay/register" element={<AuthRegister />} />
      {/* Vendor Dashboard */}
      <Route
        path="/vendor/dashboard"
        element={
          <PrivateRoute role="vendor">
            <VendorDashboard />
          </PrivateRoute>
        }
      />
      {/* Relay Dashboard */}
      <Route
        path="/relay/dashboard"
        element={
          <PrivateRoute role="relay">
            <RelayDashboard />
          </PrivateRoute>
        }
      />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 text-neutral-900">
          <Navbar />
          <AppRoutes />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;
