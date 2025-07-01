// App.jsx
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import LandingPage from "./pages/LandingPage";
import AdminLogin from "./pages/admin/AdminLogin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import VendorDashboard from "./pages/vendor/VendorDashboard";
import RelayDashboard from "./pages/relay/RelayDashboard";
import AuthLogin from "./pages/auth/AuthLogin";
import AuthRegister from "./pages/auth/AuthRegister";
import AdminRegister from "./pages/admin/AdminRegister";
import { AuthProvider, useAuth } from "./context/AuthContext";
import { NotificationProvider } from "./components/NotificationProvider";

function PrivateRoute({ children, role }) {
  const { user } = useAuth();

  if (user && user.role === role) {
    return children;
  } else {
    return <Navigate to="/" replace />;
  }
}

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      {/* Admin */}
      <Route path="/admin" element={<AdminLogin />} />
      <Route path="/admin/register" element={<AdminRegister />} />
      <Route
        path="/admin/dashboard"
        element={
          <PrivateRoute role="ADMIN">
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
          <PrivateRoute role="VENDOR">
            <VendorDashboard />
          </PrivateRoute>
        }
      />
      {/* Relay Dashboard */}
      <Route
        path="/relay/dashboard"
        element={
          <PrivateRoute role="RELAY_OPERATOR">
            <RelayDashboard />
          </PrivateRoute>
        }
      />
      {/* Fallback */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}

function AppLayout() {
  const location = useLocation();
  const hideNavbarRoutes = [
    "/admin",
    "/admin/register",
    "/vendor/login",
    "/relay/login",
    "/vendor/register",
    "/relay/register",
  ];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 via-primary-50 to-secondary-50 text-neutral-900">
      {!hideNavbar && <Navbar />}
      <AppRoutes />
    </div>
  );
}

function App() {
  return (
    <AuthProvider>
      <NotificationProvider>
        <Router>
          <AppLayout />
        </Router>
      </NotificationProvider>
    </AuthProvider>
  );
}

export default App;
