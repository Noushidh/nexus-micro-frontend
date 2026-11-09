import { Routes, Route, Navigate } from "react-router-dom";
import Profile from "./pages/Profile";

function App() {
  return (
    <Routes>
      <Route
        path="/"
        element={<Navigate to="/profile" replace />}
      />

      <Route
        path="/profile"
        element={<Profile />}
      />
    </Routes>
  );
}

export default App;