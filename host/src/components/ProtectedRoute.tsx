import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { RootState } from "../store/store";

function ProtectedRoute() {
  const token = useSelector((state: RootState) => state.auth.token);

  if (!token) {
    return <Navigate to="/auth" replace />;
  }

  return <Outlet />;
}

export default ProtectedRoute;