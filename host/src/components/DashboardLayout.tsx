import { useDispatch, useSelector } from "react-redux";
import { Outlet, useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";

function DashboardLayout() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth", { replace: true });
  };

  return (
    <div>
      <header
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          padding: "15px 25px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <h2>Nexus</h2>

        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <span>Welcome, {user?.name || "Guest"}</span>

          <button onClick={handleLogout}>Logout</button>
        </div>
      </header>

      <main style={{ padding: "20px" }}>
        <Outlet />
      </main>
    </div>
  );
}

export default DashboardLayout;
