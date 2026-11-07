import React, { Suspense } from "react";
import {  Routes, Route, Navigate } from "react-router-dom";

const Login = React.lazy(() => import("auth/Login"));
const Register = React.lazy(() => import("auth/Register"));
const ForgotPassword = React.lazy(() => import("auth/ForgotPassword"));
import Dashboard from "./pages/Dashboard";

function App() {
  return (
      <Suspense fallback={<p>Loading Auth...</p>}>
        <Routes>
          <Route path="/auth" element={<Login />} />
          <Route path="/auth/register" element={<Register />} />
          <Route path="/" element={<Navigate to="/auth" replace />} />
          <Route path="/auth/forgot-password" element={<ForgotPassword />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Suspense>
  );
}

export default App;
