import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState, AppDispatch } from "../store/store";
import { logout } from "../store/authSlice";

function Navbar() {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const user = useSelector((state: RootState) => state.auth.user);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/auth", { replace: true });
  };

  return (
    <header className="dashboard-header">
      <h2>Nexus</h2>

      <div className="header-user">
        <span>Welcome, {user?.name || "Guest"}</span>

        <button onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );
}

export default Navbar;