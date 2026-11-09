import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../types/redux";

const Settings = () => {
  const dispatch = useDispatch();

  const { theme, notificationsEnabled } = useSelector(
    (state: RootState) => state.settings,
  );

  const handleThemeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch({
      type: "settings/setTheme",
      payload: event.target.value,
    });
  };

  const handleNotificationChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    dispatch({
      type: "settings/setNotificationsEnabled",
      payload: event.target.checked,
    });
  };

  return (
    <div
      style={{
        padding: "30px",
        background: theme === "dark" ? "#111827" : "#f3f4f6",
        color: theme === "dark" ? "#ffffff" : "#111827",
        minHeight: "100vh",
      }}
    >
      <h1>Settings</h1>
      <p>Manage your application preferences.</p>

      <section>
        <h3>Appearance</h3>

        <select value={theme} onChange={handleThemeChange}>
          <option value="light">Light Mode</option>
          <option value="dark">Dark Mode</option>
        </select>
      </section>

      <section style={{ marginTop: "30px" }}>
        <h3>Notifications</h3>

        <label>
          <input
            type="checkbox"
            checked={notificationsEnabled}
            onChange={handleNotificationChange}
          />
          Enable Notifications
        </label>

        <p>Status: {notificationsEnabled ? "Enabled" : "Disabled"}</p>
      </section>
    </div>
  );
};

export default Settings;
