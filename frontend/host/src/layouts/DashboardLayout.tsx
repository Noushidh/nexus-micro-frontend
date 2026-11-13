import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
import { RootState } from "../store/store";
import "../styles/theme.css";

function DashboardLayout() {
  const theme = useSelector((state: RootState) => state.settings.theme);

  return (
    <div className={`dashboard-layout ${theme}`}>
      <Sidebar />

      <div className="dashboard-content">
        <Navbar />

        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

export default DashboardLayout;
