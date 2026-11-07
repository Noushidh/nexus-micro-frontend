import { useState } from "react";
import { getUsers, User } from "../api/authApi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { generateMockToken } from "../utils/token";
import { useNavigate } from "react-router-dom";

function Login() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const loginUser = async (email: string, password: string): Promise<User> => {
    const users = await getUsers();

    const user = users.find(
      (user) => user.email === email && user.password === password,
    );

    if (!user) {
      throw new Error("Invalid email or password");
    }

    return user;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      const user = await loginUser(email, password);

      const { password: _, ...safeUser } = user;

      const token = generateMockToken(user.id);

      dispatch({
        type: "auth/setCredentials",
        payload: {
          user: safeUser,
          token,
        },
      });

      navigate("/dashboard");

      console.log("Login successful:", user);
      setMessage("Login successful!");
    } catch (error) {
      setMessage(error instanceof Error ? error.message : "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Login Page</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>

      {message && <p>{message}</p>}
      <Link to="/auth/forgot-password">Forgot Password?</Link>
    </div>
  );
}

export default Login;
