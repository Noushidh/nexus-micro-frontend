import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const navItems = [
    { name: "Dashboard", path: "/dashboard", icon: "📊" },
    { name: "Profile", path: "/profile", icon: "👤" },
    { name: "Settings", path: "/settings", icon: "⚙️" },
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <h2>Nexus</h2>
      </div>

      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <span className="sidebar-icon">{item.icon}</span>
            <span>{item.name}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;