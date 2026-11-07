import { useSelector } from "react-redux";
import { RootState } from "../store/store";

function Dashboard() {
  const { user, token } = useSelector(
    (state: RootState) => state.auth,
  );

  return (
    <div>
      <h1>Dashboard</h1>

      <h3>Welcome, {user?.name}</h3>

      <p>Email: {user?.email}</p>

      <p>Token: {token}</p>
    </div>
  );
}

export default Dashboard;