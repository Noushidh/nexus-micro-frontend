import React, { Suspense } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

const Login = React.lazy(() => import("auth/Login"));
const Register = React.lazy(() => import("auth/Register"));
const ForgotPassword = React.lazy(() => import("auth/ForgotPassword"));
import ProtectedRoute from "./components/ProtectedRoute";

import DashboardLayout from "./layouts/DashboardLayout";
const Dashboard = React.lazy(() => import("dashboard/Dashboard"));

const Profile = React.lazy(() => import("profile/Profile"));

function App() {
  return (
    <Suspense fallback={<p>Loading Auth...</p>}>
      <Routes>
        <Route path="/auth" element={<Login />} />
        <Route path="/auth/register" element={<Register />} />
        <Route path="/auth/forgot-password" element={<ForgotPassword />} />
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/profile" element={<Profile />} />
          </Route>{" "}
        </Route>{" "}
        <Route path="/" element={<Navigate to="/auth" replace />} />
      </Routes>
    </Suspense>
  );
}

export default App;
