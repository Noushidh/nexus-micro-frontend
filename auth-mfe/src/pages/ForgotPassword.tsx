import { useState } from "react";
import { Link } from "react-router-dom";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setMessage("Password reset instructions will be sent to your email.");
  };

  return (
    <div>
      <h1>Forgot Password?</h1>

      <p>Enter your registered email address to reset your password.</p>

      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <button type="submit">Submit</button>
      </form>

      {message && <p>{message}</p>}

      <Link to="/auth">Back to Login</Link>
    </div>
  );
}

export default ForgotPassword;