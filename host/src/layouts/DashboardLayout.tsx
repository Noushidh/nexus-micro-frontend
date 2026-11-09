import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";
import Sidebar from "../components/Sidebar";
import "../styles/theme.css";

function DashboardLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const theme = useSelector((state: RootState) => state.settings.theme);
  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth", { replace: true });
  };

  return (
    <div className={`dashboard-layout ${theme}`}>
      <Sidebar />

      <div className="dashboard-content">
        <header className="dashboard-header">
          <h2>Nexus</h2>

          <div className="header-user">
            <span>Welcome, {user?.name || "Guest"}</span>
            <button onClick={handleLogout}>Logout</button>
          </div>
        </header>

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;